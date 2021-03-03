<?php

namespace app\admin\controller;

use app\common\controller\Backend;
use think\Config;
use app\admin\model\custom as custom;

/**
 * 控制台
 *
 * @icon fa fa-dashboard
 * @remark 用于展示当前系统中的统计数据、统计报表及重要实时数据
 */
class Dashboard extends Backend
{
    protected $model = null;
    protected $dataLimit = 'personal';
    protected $dataLimitField = 'company_id';
    protected $dataCreateField = 'admin_id';

    /**
     * 查看
     */
    public function index()
    {
    	  list($where, $sort, $order, $offset, $limit) = $this->buildparams();
        $seventtime = \fast\Date::unixtime('day', -7);
        $paylist = $createlist = [];
        for ($i = 0; $i < 7; $i++)
        {
            $day = date("Y-m-d", $seventtime + ($i * 86400));
            $createlist[$day] = mt_rand(20, 200);
            $paylist[$day] = mt_rand(1, mt_rand(1, $createlist[$day]));
        }
        $hooks = config('addons.hooks');
        $uploadmode = isset($hooks['upload_config_init']) && $hooks['upload_config_init'] ? implode(',', $hooks['upload_config_init']) : 'local';
        $addonComposerCfg = ROOT_PATH . '/vendor/karsonzhang/fastadmin-addons/composer.json';
        Config::parse($addonComposerCfg, "json", "composer");
        $config = Config::get("composer");
        $addonVersion = isset($config['version']) ? $config['version'] : __('Unknown');
        $custom = new custom\Mycustom();
        $sdetail =new custom\Sdetail();
        $connect = new custom\Connect();
        $payment = new custom\Payment();
        $purpose = new custom\Purpose();
        $documents = new custom\Documents();
        $service = new custom\Service();
        $remind = new custom\Remind();
        $custom_total = $custom->field('count(*) as custom_total,sum(custom_sale_total) as sale_total,sum(custom_payment_total) as payment_total,sum(custom_payable_total) as payable_total')
        			->where($where)
        			->select();
        $custom_today = $custom->field('count(*) as custom_total')
        			->where($where)
        			->where('createtime','between time',[date('Y-m-d 00:00:01'),date('Y-m-d 23:59:59')])
        			->select();	
        $sdetail_today = $sdetail->field('count(*) as number,sum(custom_sdetail_amount) as amount')
        			->where($where)
        			->where('createtime','between time',[date('Y-m-d 00:00:01'),date('Y-m-d 23:59:59')])
        			->select();				
        $connect_today = $connect->field('count(*) as number')
        			->where($where)
        			->where('createtime','between time',[date('Y-m-d 00:00:01'),date('Y-m-d 23:59:59')])
        			->select();	
        $payment_today = $payment->field('sum(custom_payment_account) as account')
        			->where($where)
        			->where('createtime','between time',[date('Y-m-d 00:00:01'),date('Y-m-d 23:59:59')])
        			->select();	
        $purpose_today = $purpose->field('count(*) as number')
        			->where($where)
        			->where('custom_purpose_time','between time',[date('Y-m-d 00:00:01'),date('Y-m-d 23:59:59')])
        			->select();	
        $documents_total = $documents->field('count(*) as number')
        			->where($where)
        			->select();	
        $service_total = $service->field('count(*) as number')
        			->where($where)
        			->select();	
        $service_today = $service->field('count(*) as number')
        			->where($where)
        			->where('custom_service_time','between time',[date('Y-m-d 00:00:01'),date('Y-m-d 23:59:59')])
        			->select();	
        $remind_total = $remind->field('count(*) as number')		
       			->where($where)
        			->select();	
        $remind_today = $remind->field('count(*) as number')		
       			->where($where)
        			->where('createtime','between time',[date('Y-m-d 00:00:01'),date('Y-m-d 23:59:59')])
        			->select();		
        $this->view->assign([
            'totaluser'        => $custom_total[0]['custom_total'],
            'totalviews'       => $custom_total[0]['sale_total'],
            'totalorder'       => $custom_total[0]['payment_total'],
            'totalorderamount' => $custom_total[0]['payable_total'],
            'todayuserlogin'   => $custom_today[0]['custom_total'],
            'todayusersignup'  => $custom_today[0]['custom_total'],
            'todayorder'       => $sdetail_today[0]['number'],
            'unsettleorder'    => $sdetail_today[0]['amount'],
            'sevendnu'         => $connect_today[0]['number'],
            'sevendau'         => $payment_today[0]['account'],
            'purpose_today'    => $purpose_today[0]['number'],
            'documents_total'  => $documents_total[0]['number'],
            'service_total'    => $service_total[0]['number'],
            'service_today'    => $service_today[0]['number'],
            'remind_total'     => $remind_total[0]['number'],
            'remind_today'     => $remind_today[0]['number'],
            'paylist'          => $paylist,
            'createlist'       => $createlist,
            'addonversion'       => $addonVersion,
            'uploadmode'       => $uploadmode
        ]);

        return $this->view->fetch();
    }

}
