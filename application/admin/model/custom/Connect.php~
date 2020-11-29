<?php

namespace app\admin\model\custom;

use think\Model;
use traits\model\SoftDelete;

class Connect extends Model
{

    use SoftDelete;

    

    // 表名
    protected $name = 'custom_connect';
    
    // 自动写入时间戳字段
    protected $autoWriteTimestamp = 'int';

    // 定义时间戳字段名
    protected $createTime = 'createtime';
    protected $updateTime = 'updatetime';
    protected $deleteTime = 'deletetime';

    // 追加属性
    protected $append = [
        'custom_connect_time_text',
        'custom_adjust_time_text'
    ];
    

    



    public function getCustomConnectTimeTextAttr($value, $data)
    {
        $value = $value ? $value : (isset($data['custom_connect_time']) ? $data['custom_connect_time'] : '');
        return is_numeric($value) ? date("Y-m-d H:i:s", $value) : $value;
    }


    public function getCustomAdjustTimeTextAttr($value, $data)
    {
        $value = $value ? $value : (isset($data['custom_adjust_time']) ? $data['custom_adjust_time'] : '');
        return is_numeric($value) ? date("Y-m-d H:i:s", $value) : $value;
    }

    protected function setCustomConnectTimeAttr($value)
    {
        return $value === '' ? null : ($value && !is_numeric($value) ? strtotime($value) : $value);
    }

    protected function setCustomAdjustTimeAttr($value)
    {
        return $value === '' ? null : ($value && !is_numeric($value) ? strtotime($value) : $value);
    }


    public function admin()
    {  
    //根据主表中的admin_id查找用户表,主要用于将归属人ID转换成nikename
        return $this->belongsTo('app\admin\model\Admin', 'admin_id', 'id', [], 'LEFT')->setEagerlyType(0);
    }


    public function custominfo()
    {
    	//根据主表中的custom_id查找用户信息表mycustom，将主表中的用户ID转换成为用户信息
        return $this->belongsTo('app\admin\model\custom\Mycustom', 'custom_id', 'custom_id', [], 'LEFT')->setEagerlyType(0);
    }
}
