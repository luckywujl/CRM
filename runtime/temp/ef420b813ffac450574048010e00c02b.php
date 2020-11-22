<?php if (!defined('THINK_PATH')) exit(); /*a:4:{s:97:"/home/www/admin/localhost_9001/wwwroot/public/../application/admin/view/custom/mycustom/edit.html";i:1605962408;s:81:"/home/www/admin/localhost_9001/wwwroot/application/admin/view/layout/default.html";i:1588765310;s:78:"/home/www/admin/localhost_9001/wwwroot/application/admin/view/common/meta.html";i:1588765310;s:80:"/home/www/admin/localhost_9001/wwwroot/application/admin/view/common/script.html";i:1588765310;}*/ ?>
<!DOCTYPE html>
<html lang="<?php echo $config['language']; ?>">
    <head>
        <meta charset="utf-8">
<title><?php echo (isset($title) && ($title !== '')?$title:''); ?></title>
<meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no">
<meta name="renderer" content="webkit">

<link rel="shortcut icon" href="/assets/img/favicon.ico" />
<!-- Loading Bootstrap -->
<link href="/assets/css/backend<?php echo \think\Config::get('app_debug')?'':'.min'; ?>.css?v=<?php echo \think\Config::get('site.version'); ?>" rel="stylesheet">

<!-- HTML5 shim, for IE6-8 support of HTML5 elements. All other JS at the end of file. -->
<!--[if lt IE 9]>
  <script src="/assets/js/html5shiv.js"></script>
  <script src="/assets/js/respond.min.js"></script>
<![endif]-->
<script type="text/javascript">
    var require = {
        config:  <?php echo json_encode($config); ?>
    };
</script>
    </head>

    <body class="inside-header inside-aside <?php echo defined('IS_DIALOG') && IS_DIALOG ? 'is-dialog' : ''; ?>">
        <div id="main" role="main">
            <div class="tab-content tab-addtabs">
                <div id="content">
                    <div class="row">
                        <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                            <section class="content-header hide">
                                <h1>
                                    <?php echo __('Dashboard'); ?>
                                    <small><?php echo __('Control panel'); ?></small>
                                </h1>
                            </section>
                            <?php if(!IS_DIALOG && !\think\Config::get('fastadmin.multiplenav')): ?>
                            <!-- RIBBON -->
                            <div id="ribbon">
                                <ol class="breadcrumb pull-left">
                                    <li><a href="dashboard" class="addtabsit"><i class="fa fa-dashboard"></i> <?php echo __('Dashboard'); ?></a></li>
                                </ol>
                                <ol class="breadcrumb pull-right">
                                    <?php foreach($breadcrumb as $vo): ?>
                                    <li><a href="javascript:;" data-url="<?php echo $vo['url']; ?>"><?php echo $vo['title']; ?></a></li>
                                    <?php endforeach; ?>
                                </ol>
                            </div>
                            <!-- END RIBBON -->
                            <?php endif; ?>
                            <div class="content">
                                <form id="edit-form" class="form-horizontal" role="form" data-toggle="validator" method="POST" action="">

    <div class="form-group">
        <label class="control-label col-xs-1 col-sm-1"><?php echo __('Admin_id'); ?>:</label>
        <div class="col-xs-1 col-sm-1">
            <input id="c-company_id" data-rule="required" readonly="readonly" data-source="company/index" class="form-control" name="row[company_id]" type="text" value="<?php echo $auth_id; ?>">
        </div>
    
        <label class="control-label col-xs-1 col-sm-1"><?php echo __('Custom_promotion_type'); ?>:</label>
        <div class="col-xs-1 col-sm-1">
            <input id="c-custom_promotion_type" data-source="base/promotion/index" data-field="promotion" data-primary-key="promotion" class="form-control selectpage" name="row[custom_promotion_type]" type="text" value="<?php echo htmlentities($row['custom_promotion_type']); ?>">
        </div>
   
        <label class="control-label col-xs-1 col-sm-2"><?php echo __('Custom_type'); ?>:</label>
        <div class="col-xs-1 col-sm-1">
            <input id="c-custom_type"  data-source="base/customtype/index" data-field="customtype" data-primary-key="customtype" class="form-control selectpage" name="row[custom_type]"  value="<?php echo htmlentities($row['custom_type']); ?>">
        </div>
 
        <label class="control-label col-xs-1 col-sm-1"><?php echo __('Custom_industry'); ?>:</label>
        <div class="col-xs-1 col-sm-1">
            <input id="c-custom_industry" data-source="base/industry/index" data-field="custom_industry_name" data-primary-key="custom_industry_name" class="form-control selectpage" name="row[custom_industry]" type="text" value="<?php echo htmlentities($row['custom_industry']); ?>">
        </div>
   
        <label class="control-label col-xs-1 col-sm-1"><?php echo __('Custom_server'); ?>:</label>
        <div class="col-xs-1 col-sm-1">
            <input id="c-custom_server" data-source="base/server/index" data-field="server" data-primary-key="server" class="form-control selectpage" name="row[custom_server]" type="text" value="<?php echo htmlentities($row['custom_server']); ?>">
        </div>
    </div>
    <div class="form-group">
        <label class="control-label col-xs-1 col-sm-1"><?php echo __('Custom_channel'); ?>:</label>
        <div class="col-xs-1 col-sm-1">
            <input id="c-custom_channel" data-source="base/channel/index" data-field="channel" data-primary-key="channel" class="form-control selectpage" name="row[custom_channel]" type="text" value="<?php echo htmlentities($row['custom_channel']); ?>">
        </div>
    
        <label class="control-label col-xs-1 col-sm-1"><?php echo __('Custom_online_status'); ?>:</label>
        <div class="col-xs-1 col-sm-1">
            <input id="c-custom_online_status" data-source="base/onlinestatus/index" data-field="custom_online_status_name" data-primary-key="custom_online_status_name" class="form-control selectpage" name="row[custom_online_status]" type="text" value="<?php echo htmlentities($row['custom_online_status']); ?>">
        </div>
        
        <label class="control-label col-xs-1 col-sm-2"><?php echo __('Custom_operation_person'); ?>:</label>
        <div class="col-xs-1 col-sm-1">
            <input id="c-custom_operation_person" class="form-control" name="row[custom_operation_person]" type="text" value="<?php echo htmlentities($row['custom_operation_person']); ?>">
        </div>
    
        <label class="control-label col-xs-1 col-sm-1"><?php echo __('Custom_online_time'); ?>:</label>
        <div class="col-xs-1 col-sm-1">
            <input id="c-custom_online_time" class="form-control datetimepicker" data-date-format="YYYY-MM-DD HH:mm:ss" data-use-current="true" name="row[custom_online_time]" type="text" value="<?php echo $row['custom_online_time']?datetime($row['custom_online_time']):''; ?>">
        </div>
    
        <label class="control-label col-xs-1 col-sm-1"><?php echo __('Custom_visit_standard'); ?>:</label>
        <div class="col-xs-1 col-sm-1">
            <input id="c-custom_visit_standard" data-source="base/visitstandard/index" data-field="custom_visit_standard_name" data-primary-key="custom_visit_standard_name" class="form-control selectpage" name="row[custom_visit_standard]" type="text" value="<?php echo htmlentities($row['custom_visit_standard']); ?>">
        </div>
    </div>
    <div class="form-group">
        <label class="control-label col-xs-1 col-sm-1"><?php echo __('Custom_login_password'); ?>:</label>
        <div class="col-xs-1 col-sm-1">
            <input id="c-custom_login_password" class="form-control" name="row[custom_login_password]" type="text" value="<?php echo htmlentities($row['custom_login_password']); ?>">
        </div>
    
        <label class="control-label col-xs-1 col-sm-1"><?php echo __('Custom_security_master_phone'); ?>:</label>
        <div class="col-xs-1 col-sm-1">
            <input id="c-custom_security_master_phone" class="form-control" name="row[custom_security_master_phone]" type="text" value="<?php echo htmlentities($row['custom_security_master_phone']); ?>">
        </div>
    
        <label class="control-label col-xs-1 col-sm-2"><?php echo __('Custom_security_sub_phone'); ?>:</label>
        <div class="col-xs-1 col-sm-1">
            <input id="c-custom_security_sub_phone" class="form-control" name="row[custom_security_sub_phone]" type="text" value="<?php echo htmlentities($row['custom_security_sub_phone']); ?>">
        </div>
    
        <label class="control-label col-xs-1 col-sm-1"><?php echo __('Custom_website_name'); ?>:</label>
        <div class="col-xs-1 col-sm-1">
            <input id="c-custom_website_name" class="form-control" name="row[custom_website_name]" type="text" value="<?php echo htmlentities($row['custom_website_name']); ?>">
        </div>
    
        <label class="control-label col-xs-1 col-sm-1"><?php echo __('Custom_wap'); ?>:</label>
        <div class="col-xs-1 col-sm-1">
            <input id="c-custom_wap" class="form-control" name="row[custom_wap]" type="text" value="<?php echo htmlentities($row['custom_wap']); ?>">
        </div>
    </div>
    <div class="form-group">
        <label class="control-label col-xs-1 col-sm-1"><?php echo __('Custom_website_password'); ?>:</label>
        <div class="col-xs-1 col-sm-1">
            <input id="c-custom_website_password" class="form-control" name="row[custom_website_password]" type="text" value="<?php echo htmlentities($row['custom_website_password']); ?>">
        </div>
    
        <label class="control-label col-xs-1 col-sm-1"><?php echo __('Custom_pc_website'); ?>:</label>
        <div class="col-xs-1 col-sm-1">
            <input id="c-custom_pc_website" class="form-control" name="row[custom_pc_website]" type="text" value="<?php echo htmlentities($row['custom_pc_website']); ?>">
        </div>
   
        <label class="control-label col-xs-1 col-sm-2"><?php echo __('Custom_website_code'); ?>:</label>
        <div class="col-xs-1 col-sm-1">
            <input id="c-custom_website_code" class="form-control" name="row[custom_website_code]" type="text" value="<?php echo htmlentities($row['custom_website_code']); ?>">
        </div>
    
        <label class="control-label col-xs-1 col-sm-1"><?php echo __('Custom_copyright'); ?>:</label>
        <div class="col-xs-1 col-sm-1">
            <input id="c-custom_copyright" class="form-control" name="row[custom_copyright]" type="text" value="<?php echo htmlentities($row['custom_copyright']); ?>">
        </div>
    
        <label class="control-label col-xs-1 col-sm-1"><?php echo __('Custom_payment_detail'); ?>:</label>
        <div class="col-xs-1 col-sm-1">
            <input id="c-custom_payment_detail" class="form-control" name="row[custom_payment_detail]" type="text" value="<?php echo htmlentities($row['custom_payment_detail']); ?>">
        </div>
    </div>
    <div class="form-group">
        <label class="control-label col-xs-1 col-sm-1"><?php echo __('Custom_opening_dete'); ?>:</label>
        <div class="col-xs-1 col-sm-1">
            <input id="c-custom_opening_dete" class="form-control datetimepicker" data-date-format="YYYY-MM-DD" data-use-current="true" name="row[custom_opening_dete]" type="text" value="<?php echo $row['custom_opening_dete']; ?>">
        </div>
    
        <label class="control-label col-xs-1 col-sm-1"><?php echo __('Custom_full_name'); ?>:</label>
        <div class="col-xs-1 col-sm-1">
            <input id="c-custom_full_name" class="form-control" name="row[custom_full_name]" type="text" value="<?php echo htmlentities($row['custom_full_name']); ?>">
        </div>
    
        <label class="control-label col-xs-1 col-sm-2"><?php echo __('Custom_baidu_id'); ?>:</label>
        <div class="col-xs-1 col-sm-1">
            <input id="c-custom_baidu_id"  class="form-control " name="row[custom_baidu_id]" type="text" value="<?php echo htmlentities($row['custom_baidu_id']); ?>">
        </div>
    
        <label class="control-label col-xs-1 col-sm-2"><?php echo __('Custom_offline_id'); ?>:</label>
        <div class="col-xs-1 col-sm-2">
            <input id="c-custom_offline_id"  class="form-control " name="row[custom_offline_id]" type="text" value="<?php echo htmlentities($row['custom_offline_id']); ?>">
        </div>
    </div>
    <div class="form-group">
        <label class="control-label col-xs-1 col-sm-1"><?php echo __('Custom_bidding_remark'); ?>:</label>
        <div class="col-xs-12 col-sm-8">
            <textarea id="c-custom_bidding_remark" class="form-control " rows="5" name="row[custom_bidding_remark]" cols="50"><?php echo htmlentities($row['custom_bidding_remark']); ?></textarea>
        </div>
    </div>
    <div class="form-group">
        <label class="control-label col-xs-1 col-sm-1"><?php echo __('Custom_remark'); ?>:</label>
        <div class="col-xs-12 col-sm-8">
            <textarea id="c-custom_remark" class="form-control " rows="5" name="row[custom_remark]" cols="50"><?php echo htmlentities($row['custom_remark']); ?></textarea>
        </div>
    </div>
    
    <HR style="FILTER: alpha(opacity=100,finishopacity=0,style=3)" width="100%" color=#987cb9 SIZE=30>
    <h3><u>授信用户列表 &nbsp; &nbsp; &nbsp; &nbsp;</u></h3>
    <div class="form-group">
    		<div class="col-xs-12 col-sm-11">
    			<div id="toolbar1" class="toolbar">
          		<a href="javascript:;" class="btn btn-primary btn-refresh" title="<?php echo __('Refresh'); ?>" ><i class="fa fa-refresh"></i> </a>
           		<a href="javascript:;" class="btn btn-success btn-add <?php echo $auth->check('custom/contact/add')?'':'hide'; ?>" title="<?php echo __('Add'); ?>" ><i class="fa fa-plus"></i> <?php echo __('Add'); ?></a>
               <a href="javascript:;" class="btn btn-danger btn-del btn-disabled disabled <?php echo $auth->check('custom/contact/del')?'':'hide'; ?>" title="<?php echo __('Delete'); ?>" ><i class="fa fa-trash"></i> <?php echo __('Delete'); ?></a>       
         	</div>
   			<table id="creditlist" class="table table-striped table-bordered table-hover table-nowrap"
            	data-operate-edit="<?php echo $auth->check('custom/contact/edit'); ?>" 
           		data-operate-del="<?php echo $auth->check('custom/contact/del'); ?>" 
           	   width="100%">    	
         	</table>  
         </div>
     </div> 
    <div class="form-group layer-footer">
        <label class="control-label col-xs-12 col-sm-2"></label>
        <div class="col-xs-12 col-sm-8">
            <button type="submit" class="btn btn-success btn-embossed disabled"><?php echo __('OK'); ?></button>
            <button type="reset" class="btn btn-default btn-embossed"><?php echo __('Reset'); ?></button>
        </div>
    </div>
</form>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <script src="/assets/js/require<?php echo \think\Config::get('app_debug')?'':'.min'; ?>.js" data-main="/assets/js/require-backend<?php echo \think\Config::get('app_debug')?'':'.min'; ?>.js?v=<?php echo htmlentities($site['version']); ?>"></script>
    </body>
</html>