<?php

namespace app\admin\controller\custom;

use app\common\controller\Backend;
use app\admin\model\custom as custom;
use think\Db;


/**
 * 管理员管理
 *
 * @icon fa fa-circle-o
 */
class Adminselect extends Backend
{
    
    /**
     * Adminselect模型对象
     * @var \app\admin\model\custom\Adminselect
     */
    protected $model = null;
    protected $dataLimit = 'personal';
    protected $dataLimitField = 'company_id';
    protected $dataCreateField = 'admin_id';
    protected $searchFields = 'nickname';
    protected $noNeedRight = ['index','addcredit','addcreditd','delcredit'];

    public function _initialize()
    {
        parent::_initialize();
        $this->model = new \app\admin\model\custom\Adminselect;

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
    	 
        //设置过滤方法
       $whereadmin['id'] = array('neq',$this->auth->id);//将自身排除在外
        $this->request->filter(['strip_tags']);
        if ($this->request->isAjax()) {
            //如果发送的来源是Selectpage，则转发到Selectpage
            if ($this->request->request('keyField')) {
                return $this->selectpage();
            }
            list($where, $sort, $order, $offset, $limit) = $this->buildparams();
            $total = $this->model
                ->where($where)
                ->where($whereadmin)
                ->where('id')
                ->order($sort, $order)
                ->count();

            $list = $this->model
                ->where($where)
                ->where($whereadmin)
                ->order($sort, $order)
                ->limit($offset, $limit)
                ->select();

            $list = collection($list)->toArray();
            $result = array("total" => $total, "rows" => $list);

            return json($result);
        }
        $this->assignconfig('custom_ids', $this->request->param("custom_ids"));
        return $this->view->fetch('index');
    }
    /**
     * 批量增加授信
     */
    public function addcredit($ids = "",$credittype = "",$custom_ids = "")
    {    	
        $type["custom_credit_type"] = ["in","1,2"];
        $creditcustom = new custom\Creditcustom(); 
        $mycustom = new custom\Mycustom(); 
        if ($ids) { 
            $pk = $this->model->getPk();
            $adminIds = $this->getDataLimitAdminIds();
            if (is_array($adminIds)) {
                $this->model->where($this->dataLimitField, 'in', $adminIds);
            }
            $adminlist = $this->model->where($pk, 'in', $ids)->select();
            
            
            if ($custom_ids) {
            	
               $cpk = $mycustom->getPk();
               $adminIds = $this->getDataLimitAdminIds();
               if (is_array($adminIds)) {
                 $mycustom->where($this->dataLimitField, 'in', $adminIds);
             }
            
            $customlist = $mycustom->where($cpk, 'in', $custom_ids)->select();
            

            $count = 0;
            $creditinsert = [];//定义添加明细的数组
            Db::startTrans();
            try {
                foreach ($adminlist as $k => $v) {
                	foreach ($customlist as $q => $s){
                    $result = 0;
                	  $credit = [];
                	  $credit['custom_id'] = $s['custom_id'];
                	  $credit['custom_admin'] = $v['id'];
                	  $credit['custom_credit_type'] = $credittype;
                	  $credit[$this->dataCreateField] = $this->auth->id;
                	  $credit[$this->dataLimitField] = $this->auth->company_id;
                	  $creditcustom->where($type)->where('custom_id',$s['custom_id'])->where('custom_admin',$v['id'])->delete();
						  $creditinsert[] = $credit; 
                	}               	      
                }
                
               $creditcustom ->saveAll($creditinsert);
               
               Db::commit();
               $this->success('完成授信！');
            } catch (PDOException $e) {
                Db::rollback();
                $this->error($e->getMessage());
            } catch (Exception $e) {
                Db::rollback();
                $this->error($e->getMessage());
            }
            if ($count) {
                $this->success();
            } else {
                $this->error(__('No rows were deleted'));
            }
        }
        $this->error(__('Parameter %s can not be empty', 'ids'));
    
       }
     }
     
     /**
     * 删除授信
     */
    public function delcredit($ids = "",$custom_ids = "")
    {    	
        $type["custom_credit_type"] = ["in","1,2"];
        $creditcustom = new custom\Creditcustom(); 
        $mycustom = new custom\Mycustom(); 
        if ($ids) { 
            $pk = $this->model->getPk();
            $adminIds = $this->getDataLimitAdminIds();
            if (is_array($adminIds)) {
                $this->model->where($this->dataLimitField, 'in', $adminIds);
            }
            $adminlist = $this->model->where($pk, 'in', $ids)->select();
            
            
            if ($custom_ids) {
            	
               $cpk = $mycustom->getPk();
               $adminIds = $this->getDataLimitAdminIds();
               if (is_array($adminIds)) {
                 $mycustom->where($this->dataLimitField, 'in', $adminIds);
             }
            
            $customlist = $mycustom->where($cpk, 'in', $custom_ids)->select();
            

            $count = 0;
            $creditinsert = [];//定义添加明细的数组
            Db::startTrans();
            try {
                foreach ($adminlist as $k => $v) {
                	foreach ($customlist as $q => $s){
                		
                	  $creditcustom->where($type)->where('custom_id',$s['custom_id'])->where('custom_admin',$v['id'])->delete();
						 
                	}               	      
                }
                
              
               
               Db::commit();
               $this->success('删除授信！');
            } catch (PDOException $e) {
                Db::rollback();
                $this->error($e->getMessage());
            } catch (Exception $e) {
                Db::rollback();
                $this->error($e->getMessage());
            }
            if ($count) {
                $this->success();
            } else {
                $this->error(__('No rows were deleted'));
            }
        }
        $this->error(__('Parameter %s can not be empty', 'ids'));
    
  }
}

/**
     * 单个增加授信
     */
    public function addcreditd($ids = "",$credittype = "",$custom_id = "")
    {    	
        $type["custom_credit_type"] = ["in","1,2"];
        $creditcustom = new custom\Creditcustom(); 
        $mycustom = new custom\Mycustom(); 
        if ($ids) { 
            $pk = $this->model->getPk();
            $adminIds = $this->getDataLimitAdminIds();
            if (is_array($adminIds)) {
                $this->model->where($this->dataLimitField, 'in', $adminIds);
            }
            $adminlist = $this->model->where($pk, 'in', $ids)->select();
            
            if ($custom_id) {
            $customlist = $mycustom->where('custom_id',$custom_id)->select();
           // $this->success($custom_id.'完成授信！');
            $count = 0;
            $creditinsert = [];//定义添加明细的数组
            Db::startTrans();
            try {
                foreach ($adminlist as $k => $v) {
                    
                	  $credit = [];
                	  $credit['custom_id'] = $custom_id;
                	  $credit['custom_admin'] = $v['id'];
                	  $credit['custom_credit_type'] = $credittype;
                	  $credit[$this->dataCreateField] = $this->auth->id;
                	  $credit[$this->dataLimitField] = $this->auth->company_id;
                	  $creditcustom->where($type)->where('custom_id',$custom_id)->where('custom_admin',$v['id'])->delete();
						  $creditinsert[] = $credit;           	             	      
                }
                
               $creditcustom ->saveAll($creditinsert);
               
               Db::commit();
               $this->success('完成授信！');
            } catch (PDOException $e) {
                Db::rollback();
                $this->error($e->getMessage());
            } catch (Exception $e) {
                Db::rollback();
                $this->error($e->getMessage());
            }
            if ($count) {
                $this->success();
            } else {
                $this->error(__('No rows were deleted'));
            }
        }
        
       }
       $this->error(__('Parameter %s can not be empty', 'ids'));
     }



}
