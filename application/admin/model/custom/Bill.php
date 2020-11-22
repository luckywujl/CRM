<?php

namespace app\admin\model\custom;

use think\Model;
use traits\model\SoftDelete;

class Bill extends Model
{

    use SoftDelete;

    

    // 表名
    protected $name = 'custom_bill';
    
    // 自动写入时间戳字段
    protected $autoWriteTimestamp = 'int';

    // 定义时间戳字段名
    protected $createTime = 'createtime';
    protected $updateTime = 'updatetime';
    protected $deleteTime = 'deletetime';

    // 追加属性
    protected $append = [
        'custom_bill_time_text'
    ];
    

    



    public function getCustomBillTimeTextAttr($value, $data)
    {
        $value = $value ? $value : (isset($data['custom_bill_time']) ? $data['custom_bill_time'] : '');
        return is_numeric($value) ? date("Y-m-d H:i:s", $value) : $value;
    }

    protected function setCustomBillTimeAttr($value)
    {
        return $value === '' ? null : ($value && !is_numeric($value) ? strtotime($value) : $value);
    }


}
