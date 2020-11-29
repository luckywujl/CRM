<?php

namespace app\admin\model\custom;

use think\Model;
use traits\model\SoftDelete;

class Remind extends Model
{

    use SoftDelete;

    

    // 表名
    protected $name = 'custom_remind';
    
    // 自动写入时间戳字段
    protected $autoWriteTimestamp = 'int';

    // 定义时间戳字段名
    protected $createTime = 'createtime';
    protected $updateTime = 'updatetime';
    protected $deleteTime = 'deletetime';

    // 追加属性
    protected $append = [

    ];
    
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
