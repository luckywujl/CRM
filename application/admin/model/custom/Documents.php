<?php

namespace app\admin\model\custom;

use think\Model;


class Documents extends Model
{

    

    

    // 表名
    protected $name = 'custom_documents';
    
    // 自动写入时间戳字段
    protected $autoWriteTimestamp = false;

    // 定义时间戳字段名
    protected $createTime = false;
    protected $updateTime = false;
    protected $deleteTime = false;

    // 追加属性
    protected $append = [
        'custom_documents_uploadtime_text'
    ];
    

    



    public function getCustomDocumentsUploadtimeTextAttr($value, $data)
    {
        $value = $value ? $value : (isset($data['custom_documents_uploadtime']) ? $data['custom_documents_uploadtime'] : '');
        return is_numeric($value) ? date("Y-m-d H:i:s", $value) : $value;
    }

    protected function setCustomDocumentsUploadtimeAttr($value)
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
