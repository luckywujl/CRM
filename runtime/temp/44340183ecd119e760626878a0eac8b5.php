<?php if (!defined('THINK_PATH')) exit(); /*a:4:{s:98:"/home/www/admin/localhost_9001/wwwroot/public/../application/admin/view/custom/documents/edit.html";i:1610030378;s:81:"/home/www/admin/localhost_9001/wwwroot/application/admin/view/layout/default.html";i:1588765310;s:78:"/home/www/admin/localhost_9001/wwwroot/application/admin/view/common/meta.html";i:1588765310;s:80:"/home/www/admin/localhost_9001/wwwroot/application/admin/view/common/script.html";i:1588765310;}*/ ?>
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

    <div class="form-group" >
        <label class="control-label col-xs-12 col-sm-2"><?php echo __('Custom_id'); ?>:</label>
        <div class="col-xs-12 col-sm-8">
            <input id="c-custom_name" readonly="readonly" data-rule="required" class="form-control" name="custom_name" type="text" value="<?php echo htmlentities($row['custominfo']['custom_full_name']); ?>">
        </div>
    </div>
    <div class="form-group">
        <label class="control-label col-xs-12 col-sm-2"><?php echo __('Custom_documents_name'); ?>:</label>
        <div class="col-xs-12 col-sm-8">
            <input id="c-custom_documents_name" data-rule="required" class="form-control" name="row[custom_documents_name]" type="text" value="<?php echo htmlentities($row['custom_documents_name']); ?>">
        </div>
    </div>
    <div class="form-group">
        <label class="control-label col-xs-12 col-sm-2"><?php echo __('Custom_documents_files'); ?>:</label>
        <div class="col-xs-12 col-sm-8">
            <div class="input-group">
                <input id="c-custom_documents_files" class="form-control" size="50" name="row[custom_documents_files]" type="text" value="<?php echo htmlentities($row['custom_documents_files']); ?>">
                <div class="input-group-addon no-border no-padding">
                    <span><button type="button" id="plupload-custom_documents_files" class="btn btn-danger plupload" data-input-id="c-custom_documents_files" data-multiple="true" data-preview-id="p-custom_documents_files"><i class="fa fa-upload"></i> <?php echo __('Upload'); ?></button></span>
                    
                </div>
                <span class="msg-box n-right" for="c-custom_documents_files"></span>
            </div>
            <ul class="row list-inline plupload-preview" id="p-custom_documents_files"></ul>
        </div>
    </div>
    <div class="form-group">
        <label class="control-label col-xs-12 col-sm-2"><?php echo __('Custom_documents_uploadtime'); ?>:</label>
        <div class="col-xs-12 col-sm-8">
            <input id="c-custom_documents_uploadtime" class="form-control datetimepicker" data-date-format="YYYY-MM-DD HH:mm:ss" data-use-current="true" name="row[custom_documents_uploadtime]" type="text" value="<?php echo $row['custom_documents_uploadtime']?datetime($row['custom_documents_uploadtime']):''; ?>">
        </div>
    </div>
    <div class="form-group">
        <label class="control-label col-xs-12 col-sm-2"><?php echo __('Custom_documents_officer'); ?>:</label>
        <div class="col-xs-12 col-sm-8">
            <input id="c-custom_documents_officer"  data-rule="required" class="form-control" name="row[custom_documents_officer]" type="text" value="<?php echo htmlentities($row['custom_documents_officer']); ?>">
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