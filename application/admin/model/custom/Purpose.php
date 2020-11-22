<?php

namespace app\admin\model\custom;

use think\Model;


class Purpose extends Model
{

    

    

    // 表名
    protected $name = 'custom_purpose';
    
    // 自动写入时间戳字段
    protected $autoWriteTimestamp = false;

    // 定义时间戳字段名
    protected $createTime = false;
    protected $updateTime = false;
    protected $deleteTime = false;

    // 追加属性
    protected $append = [
        'custom_purpose_time_text'
    ];
    

    



    public function getCustomPurposeTimeTextAttr($value, $data)
    {
        $value = $value ? $value : (isset($data['custom_purpose_time']) ? $data['custom_purpose_time'] : '');
        return is_numeric($value) ? date("Y-m-d H:i:s", $value) : $value;
    }

    protected function setCustomPurposeTimeAttr($value)
    {
        return $value === '' ? null : ($value && !is_numeric($value) ? strtotime($value) : $value);
    }


}
