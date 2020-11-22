<?php

namespace app\admin\model\custom;

use think\Model;


class Creditcustom extends Model
{

    

    

    // 表名
    protected $name = 'custom_credit';
    
    // 自动写入时间戳字段
    protected $autoWriteTimestamp = false;

    // 定义时间戳字段名
    protected $createTime = false;
    protected $updateTime = false;
    protected $deleteTime = false;

    // 追加属性
    protected $append = [
        'custom_credit_type_text'
    ];
    

    
    public function getCustomCreditTypeList()
    {
        return ['0' => __('Custom_credit_type 0'), '1' => __('Custom_credit_type 1'), '2' => __('Custom_credit_type 2')];
    }


    public function getCustomCreditTypeTextAttr($value, $data)
    {
        $value = $value ? $value : (isset($data['custom_credit_type']) ? $data['custom_credit_type'] : '');
        $list = $this->getCustomCreditTypeList();
        return isset($list[$value]) ? $list[$value] : '';
    }
    
    public function admin()
    {  
    //根据受信表中的admin_id查找用户表,主要用于将归属人ID转换成nikename
        return $this->belongsTo('app\admin\model\Admin', 'admin_id', 'id', [], 'LEFT')->setEagerlyType(0);
    }


    public function custominfo()
    {
    	//根据受信表中的custom_id查找用户信息表mycustom，将受信表中的用户ID转换成为用户信息
        return $this->belongsTo('app\admin\model\custom\Mycustom', 'custom_id', 'custom_id', [], 'LEFT')->setEagerlyType(0);
    }
}
