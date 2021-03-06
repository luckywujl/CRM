<?php

namespace app\admin\controller\custom;

use app\common\controller\Backend;
use think\Db;
use app\admin\model\custom as custom;
/**
 * 款项信息
 *
 * @icon fa fa-circle-o
 */
class Payment extends Backend
{
    
    /**
     * Payment模型对象
     * @var \app\admin\model\custom\Payment
     */
    protected $model = null;
    protected $dataLimit = 'personal';
    protected $dataLimitField = 'company_id';
    protected $dataCreateField = 'admin_id';
    protected $searchFields = 'custom_payment_content';

    public function _initialize()
    {
        parent::_initialize();
        $this->model = new \app\admin\model\custom\Payment;

    }
    
    /**
     * 默认生成的控制器所继承的父类中有index/add/edit/del/multi五个基础方法、destroy/restore/recyclebin三个回收站方法
     * 因此在当前控制器中可不用编写增删改查的代码,除非需要自己控制这部分逻辑
     * 需要将application/admin/library/traits/Backend.php中对应的方法复制到当前控制器,然后进行修改
     */
    /**
     * 查看
     */
    public function index()
    {
    	 //当前是否为关联查询
        $this->relationSearch = true;
    	  $params = $this->request->param();
        //设置过滤方法
        $this->request->filter(['strip_tags']);
        if ($this->request->isAjax()) {
            //如果发送的来源是Selectpage，则转发到Selectpage
            if ($this->request->request('keyField')) {
                return $this->selectpage();
            }
            list($where, $sort, $order, $offset, $limit) = $this->buildparams();
            if(input('?custom_id')) {
            $total = $this->model
                ->with(['custominfo','admin'])
                ->where($where)
					 ->where('payment.custom_id',$params['custom_id'])
					 //->where('admin_id',$this->auth->id)
                ->order($sort, $order)
                ->count();

            $list = $this->model
                ->with(['custominfo','admin'])
                ->where($where)
                ->where(['payment.custom_id'=>$params['custom_id']])
                //->where('admin_id',$this->auth->id)
                ->order($sort, $order)
                ->limit($offset, $limit)
                ->select();
             }else {
             	$total = $this->model
					 ->with(['custominfo','admin'])
                ->where($where)
					 ->where('admin.id',$this->auth->id)
					 
                ->order($sort, $order)
                ->count();

            $list = $this->model
                ->with(['custominfo','admin'])
                ->where($where)
                ->where('admin.id',$this->auth->id)
                ->order($sort, $order)
                ->limit($offset, $limit)
                ->select();
             }

            $list = collection($list)->toArray();
            $result = array("total" => $total, "rows" => $list);

            return json($result);
        }
        return $this->view->fetch('index');
    }
    
    /**
     * 添加
     */
    public function add()
    {
    	list($where, $sort, $order, $offset, $limit) = $this->buildparams();
    	$sdetail = new custom\Sdetail();
    	$custom = new custom\Info();
        if ($this->request->isPost()) {
            $params = $this->request->post("row/a");
            if ($params) {
                $params = $this->preExcludeFields($params);

                //添加数据时，能够自动添加数据创建者ID
                if ($this->dataCreateField) {
                    $params[$this->dataCreateField] = $this->auth->id;
                }
                //添加数据时，能够自动添加数据所有者公司ID
                if ($this->dataLimit && $this->dataLimitFieldAutoFill) {
                    $params[$this->dataLimitField] = $this->auth->company_id;
                }
                $result = false;
                Db::startTrans();
                try {
                    //是否采用模型验证
                    if ($this->modelValidate) {
                        $name = str_replace("\\model\\", "\\validate\\", get_class($this->model));
                        $validate = is_bool($this->modelValidate) ? ($this->modelSceneValidate ? $name . '.add' : $name) : $this->modelValidate;
                        $this->model->validateFailException(true)->validate($validate);
                    }
                    $result = $this->model->allowField(true)->save($params);
                    $custom_id = $this->model->custom_id;//获取刚刚添加的数据之custom_id,便于后面汇总
                    //加入汇总部份
                    $sale_total = $sdetail
                    						->field('sum(custom_sdetail_amount) as amount')
                    						->where($where)
                    						->where('custom_id',$custom_id)
                    						->select();
                    	$payment_total = $this->model
                    						->field('sum(custom_payment_account) as account')
                    						->where($where)
                    						->where('custom_id',$custom_id)
                    						->select();
                    	$result = $custom
                    					->where($where)
                    					->where('custom_id',$custom_id)
                    					->update(['custom_sale_total'=>$sale_total[0]['amount'],'custom_payment_total'=>$payment_total[0]['account'],'custom_payable_total'=>$sale_total[0]['amount']-$payment_total[0]['account']]);
                    	
                    Db::commit();
                } catch (ValidateException $e) {
                    Db::rollback();
                    $this->error($e->getMessage());
                } catch (PDOException $e) {
                    Db::rollback();
                    $this->error($e->getMessage());
                } catch (Exception $e) {
                    Db::rollback();
                    $this->error($e->getMessage());
                }
                if ($result !== false) {
                    $this->success();
                } else {
                    $this->error(__('No rows were inserted'));
                }
            }
            $this->error(__('Parameter %s can not be empty', ''));
        }
       
      
        	$this->assign('custom_id',$this->request->param("custom_id")); 
        return $this->view->fetch();
    }
    
    /**
     * 编辑
     */
    public function edit($ids = null)
    {
    	list($where, $sort, $order, $offset, $limit) = $this->buildparams();
    	$sdetail = new custom\Sdetail();
    	$custom = new custom\Info();
        $row = $this->model->get($ids);
        if (!$row) {
            $this->error(__('No Results were found'));
        }
        $adminIds = $this->getDataLimitAdminIds();
        if (is_array($adminIds)) {
            if (!in_array($row[$this->dataLimitField], $adminIds)) {
                $this->error(__('You have no permission'));
            }
        }
        if ($this->request->isPost()) {
            $params = $this->request->post("row/a");
            $custom_id = $this->request->post("custom_id");
            
            if ($params) {
            	
                $params = $this->preExcludeFields($params);
                $result = false;
                Db::startTrans();
                try {
                    //是否采用模型验证
                    if ($this->modelValidate) {
                        $name = str_replace("\\model\\", "\\validate\\", get_class($this->model));
                        $validate = is_bool($this->modelValidate) ? ($this->modelSceneValidate ? $name . '.edit' : $name) : $this->modelValidate;
                        $row->validateFailException(true)->validate($validate);
                    }
                    $result = $row->allowField(true)->save($params);
                    //获取刚刚添加的数据之custom_id,便于后面汇总
                    //加入汇总部份
                    $sale_total = $sdetail
                    						->field('sum(custom_sdetail_amount) as amount')
                    						->where($where)
                    						->where('custom_id',$custom_id)
                    						->select();
                    	$payment_total = $this->model
                    						->field('sum(custom_payment_account) as account')
                    						->where($where)
                    						->where('custom_id',$custom_id)
                    						->select();
                    	$result = $custom
                    					->where($where)
                    					->where('custom_id',$custom_id)
                    					->update(['custom_sale_total'=>$sale_total[0]['amount'],'custom_payment_total'=>$payment_total[0]['account'],'custom_payable_total'=>$sale_total[0]['amount']-$payment_total[0]['account']]);
                    	
                    Db::commit();
                } catch (ValidateException $e) {
                    Db::rollback();
                    $this->error($e->getMessage());
                } catch (PDOException $e) {
                    Db::rollback();
                    $this->error($e->getMessage());
                } catch (Exception $e) {
                    Db::rollback();
                    $this->error($e->getMessage());
                }
                if ($result !== false) {
                    $this->success('OK!',null,$custom_id);
                } else {
                    $this->error(__('No rows were updated'));
                }
            }
            $this->error(__('Parameter %s can not be empty', ''));
        }
        $this->view->assign("row", $row);
        return $this->view->fetch();
    }

    /**
     * 删除
     */
    public function del($ids = "")
    {
        if ($ids) {
          	list($where, $sort, $order, $offset, $limit) = $this->buildparams();
         	$sdetail = new custom\Sdetail();
         	$custom = new custom\Info();
            $pk = $this->model->getPk();
            $adminIds = $this->getDataLimitAdminIds();
            if (is_array($adminIds)) {
                $this->model->where($this->dataLimitField, 'in', $adminIds);
            }
            $list = $this->model->where($pk, 'in', $ids)->select();

            $count = 0;
            Db::startTrans();
            try {
                foreach ($list as $k => $v) {
                	$custom_id = $v['custom_id'];
                	$count += $v->delete();
                	//加入汇总部份
                    $sale_total = $sdetail
                    						->field('sum(custom_sdetail_amount) as amount')
                    						->where($where)
                    						->where('custom_id',$custom_id)
                    						->where('deletetime',NULL)
                    						->select();
                    	$payment_total = $this->model
                    						->field('sum(custom_payment_account) as account')
                    						->where($where)
                    						->where('custom_id',$custom_id)
                    						->where('deletetime',NULL)
                    						->select();
                    	$result = $custom
                    					->where($where)
                    					->where('custom_id',$custom_id)
                    					->update(['custom_sale_total'=>$sale_total[0]['amount'],'custom_payment_total'=>$payment_total[0]['account'],'custom_payable_total'=>$sale_total[0]['amount']-$payment_total[0]['account']]);
                    	
                    
                    
                }
                Db::commit();
            } catch (PDOException $e) {
                Db::rollback();
                $this->error($e->getMessage());
            } catch (Exception $e) {
                Db::rollback();
                $this->error($e->getMessage());
            }
            if ($count) {
                $this->success($custom_id);
            } else {
                $this->error(__('No rows were deleted'));
            }
        }
        $this->error(__('Parameter %s can not be empty', 'ids'));
    }
    
    /**
     * 还原
     */
    public function restore($ids = "")
    {
        $pk = $this->model->getPk();
        $adminIds = $this->getDataLimitAdminIds();
        if (is_array($adminIds)) {
            $this->model->where($this->dataLimitField, 'in', $adminIds);
        }
        if ($ids) {
            $this->model->where($pk, 'in', $ids);
        }
        $count = 0;
        list($where, $sort, $order, $offset, $limit) = $this->buildparams();
         	$sdetail = new custom\Sdetail();
         	$custom = new custom\Info();
        Db::startTrans();
        try {
            $list = $this->model->onlyTrashed()->select();
            foreach ($list as $index => $item) {
             	$custom_id = $item['custom_id'];
                $count += $item->restore();
               //加入汇总部份
                    $sale_total = $sdetail
                    						->field('sum(custom_sdetail_amount) as amount')
                    						->where($where)
                    						->where('custom_id',$custom_id)
                    						->where('deletetime',NULL)
                    						->select();
                    	$payment_total = $this->model
                    						->field('sum(custom_payment_account) as account')
                    						->where($where)
                    						->where('custom_id',$custom_id)
                    						->where('deletetime',NULL)
                    						->select();
                    	$result = $custom
                    					->where($where)
                    					->where('custom_id',$custom_id)
                    					->update(['custom_sale_total'=>$sale_total[0]['amount'],'custom_payment_total'=>$payment_total[0]['account'],'custom_payable_total'=>$sale_total[0]['amount']-$payment_total[0]['account']]);
                    	 
            }
            Db::commit();
        } catch (PDOException $e) {
            Db::rollback();
            $this->error($e->getMessage());
        } catch (Exception $e) {
            Db::rollback();
            $this->error($e->getMessage());
        }
        if ($count) {
            $this->success();
        }
        $this->error(__('No rows were updated'));
    }

}
