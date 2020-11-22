<?php

namespace app\admin\model\custom;

use think\Model;
use traits\model\SoftDelete;

class Sdetail extends Model
{

    use SoftDelete;

    

    // 表名
    protected $name = 'custom_sdetail';
    
    // 自动写入时间戳字段
    protected $autoWriteTimestamp = 'int';

    // 定义时间戳字段名
    protected $createTime = 'createtime';
    protected $updateTime = 'updatetime';
    protected $deleteTime = 'deletetime';

    // 追加属性
    protected $append = [
        'custom_sdetail_time_text',
        'custom_sdetail_deadline_time_text'
    ];
    

    



    public function getCustomSdetailTimeTextAttr($value, $data)
    {
        $value = $value ? $value : (isset($data['custom_sdetail_time']) ? $data['custom_sdetail_time'] : '');
        return is_numeric($value) ? date("Y-m-d H:i:s", $value) : $value;
    }


    public function getCustomSdetailDeadlineTimeTextAttr($value, $data)
    {
        $value = $value ? $value : (isset($data['custom_sdetail_deadline_time']) ? $data['custom_sdetail_deadline_time'] : '');
        return is_numeric($value) ? date("Y-m-d H:i:s", $value) : $value;
    }

    protected function setCustomSdetailTimeAttr($value)
    {
        return $value === '' ? null : ($value && !is_numeric($value) ? strtotime($value) : $value);
    }

    protected function setCustomSdetailDeadlineTimeAttr($value)
    {
        return $value === '' ? null : ($value && !is_numeric($value) ? strtotime($value) : $value);
    }


}