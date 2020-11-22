define(['jquery', 'bootstrap', 'backend', 'table', 'form'], function ($, undefined, Backend, Table, Form) {

    var Controller = {
        index: function () {
        	   $(".btn-add").data("area",["100%","100%"]);
            $(".btn-edit").data("area",["100%","100%"]);
            // 初始化表格参数配置
            Table.api.init({
                extend: {
                    index_url: 'custom/mycustom/index' + location.search,
                    add_url: 'custom/mycustom/add',
                    edit_url: 'custom/mycustom/edit',
                    del_url: 'custom/mycustom/del',
                    multi_url: 'custom/mycustom/multi',
                    table: 'custom_info',
                }
            });

            var table = $("#table");

            // 初始化表格
            table.bootstrapTable({
                url: $.fn.bootstrapTable.defaults.extend.index_url,
                pk: 'custom_id',
                sortName: 'custom_id',
                columns: [
                    [
                        {checkbox: true},
                        //{field: 'custom_id', title: __('Custom_id')},
                        //{field: 'company_id', title: __('Company_id')},
                        //{field: 'admin_id', title: __('Admin_id')},
                        {field: 'custom_promotion_type', title: __('Custom_promotion_type')},
                        {field: 'custom_full_name', title: __('Custom_full_name')},
                        {field: 'custom_type', title: __('Custom_type')},
                        {field: 'custom_industry', title: __('Custom_industry')},
                        {field: 'custom_server', title: __('Custom_server')},
                        {field: 'custom_channel', title: __('Custom_channel')},
                        {field: 'custom_online_status', title: __('Custom_online_status'), formatter: Table.api.formatter.status},
                        {field: 'custom_online_time', title: __('Custom_online_time')},
                        {field: 'custom_operation_person', title: __('Custom_operation_person')},
                        {field: 'custom_visit_standard', title: __('Custom_visit_standard')},
                        {field: 'custom_login_password', title: __('Custom_login_password')},
                        {field: 'custom_security_master_phone', title: __('Custom_security_master_phone')},
                        {field: 'custom_security_sub_phone', title: __('Custom_security_sub_phone')},
                        {field: 'custom_website_name', title: __('Custom_website_name')},
                        {field: 'custom_wap', title: __('Custom_wap')},
                        {field: 'custom_website_password', title: __('Custom_website_password')},
                        {field: 'custom_pc_website', title: __('Custom_pc_website')},
                        {field: 'custom_website_code', title: __('Custom_website_code')},
                        {field: 'custom_copyright', title: __('Custom_copyright')},
                        {field: 'custom_payment_detail', title: __('Custom_payment_detail')},
                        {field: 'custom_opening_dete', title: __('Custom_opening_dete'), operate:'RANGE', addclass:'datetimerange'},
                        
                        {field: 'custom_baidu_id', title: __('Custom_baidu_id')},
                        {field: 'custom_offline_id', title: __('Custom_offline_id')},
                        {field: 'custom_bidding_remark', title: __('Custom_bidding_remark')},
                        {field: 'custom_remark', title: __('Custom_remark')},
                        {field: 'createtime', title: __('Createtime'), operate:'RANGE', addclass:'datetimerange', formatter: Table.api.formatter.datetime},
                        {field: 'updatetime', title: __('Updatetime'), operate:'RANGE', addclass:'datetimerange', formatter: Table.api.formatter.datetime},
                        
                        {field: 'operate', title: __('Operate'), table: table, events: Table.api.events.operate, formatter: Table.api.formatter.operate}
                    ]
                ]
            });
            table.on('post-body.bs.table',function(){
                $(".btn-editone").data("area",["100%","100%"]);
            })

            // 为表格绑定事件
            Table.api.bindevent(table);
            //选择按钮事件
        
            $(document).on("click", ".btn-select", function () {
            	var ids = Table.api.selectedids(table);
                Fast.api.open('custom/adminselect/index?custom_ids='+ids,'选择授信用户',{
                	callback:function (value) {
                		layer.open({
                			type:1,
                			title: '选择授信用户',
                			closeBtn:2,
                			shadeClose:true,

                		})
                	},
                });
            });          
        },
        recyclebin: function () {
            // 初始化表格参数配置
            Table.api.init({
                extend: {
                    'dragsort_url': ''
                }
            });

            var table = $("#table");

            // 初始化表格
            table.bootstrapTable({
                url: 'custom/mycustom/recyclebin' + location.search,
                pk: 'custom_id',
                sortName: 'custom_id',
                columns: [
                    [
                        {checkbox: true},
                        {field: 'custom_id', title: __('Custom_id')},
                        {field: 'custom_full_name', title: __('Custom_full_name')},
                        {
                            field: 'deletetime',
                            title: __('Deletetime'),
                            operate: 'RANGE',
                            addclass: 'datetimerange',
                            formatter: Table.api.formatter.datetime
                        },
                        {
                            field: 'operate',
                            width: '130px',
                            title: __('Operate'),
                            table: table,
                            events: Table.api.events.operate,
                            buttons: [
                                {
                                    name: 'Restore',
                                    text: __('Restore'),
                                    classname: 'btn btn-xs btn-info btn-ajax btn-restoreit',
                                    icon: 'fa fa-rotate-left',
                                    url: 'custom/mycustom/restore',
                                    refresh: true
                                },
                                {
                                    name: 'Destroy',
                                    text: __('Destroy'),
                                    classname: 'btn btn-xs btn-danger btn-ajax btn-destroyit',
                                    icon: 'fa fa-times',
                                    url: 'custom/mycustom/destroy',
                                    refresh: true
                                }
                            ],
                            formatter: Table.api.formatter.operate
                        }
                    ]
                ]
            });

            // 为表格绑定事件
            Table.api.bindevent(table);
        },
        add: function () {
            Controller.api.bindevent();
        },
        edit: function () {
            Controller.api.bindevent();
             // 1、授信-初始化表格参数配置
            Table.api.init();

            var table = $("#creditlist");

            // 初始化表格
            table.bootstrapTable({
                url: 'custom/creditlist/index' + location.search+'&custom_id='+Config.row['custom_id'],
                extend: {
                    index_url: 'custom/creditlist/index' + location.search+'&custom_id='+Config.row['custom_id'],
                    add_url: 'custom/creditlist/add?custom_id='+Config.row['custom_id'],
                    //edit_url: 'custom/creditlist/edit',
                    del_url: 'custom/creditlist/del',
                    table: 'custom_credit',
                },
                toolbar: '#toolbar1',
                pk: 'custom_credit_id',
                sortName: 'custom_credit_id',
                columns: [
                   [
                        {checkbox: true},
                        //{field: 'custom_credit_id', title: __('Custom_credit_id')},
                        //{field: 'custom_id', title: __('Custom_id')},
                        {field: 'admin.username', title: __('Custom_admin')},
								{field: 'admin.nickname', title: __('Admin.nickname')},                        
                        {field: 'custom_credit_type', title: __('Custom_credit_type'), searchList: {"0":__('Custom_credit_type 0'),"1":__('Custom_credit_type 1'),"2":__('Custom_credit_type 2')}, formatter: Table.api.formatter.normal},
                        //{field: 'company_id', title: __('Company_id')},
                        //{field: 'admin_id', title: __('Admin_id')},
                        //{field: 'admin.id', title: __('Admin.id')},
                        //{field: 'admin.username', title: __('Admin.username')},
                        
                        
                        //{field: 'admin.salt', title: __('Admin.salt')},
                        {field: 'admin.avatar', title: __('Admin.avatar'), events: Table.api.events.image, formatter: Table.api.formatter.image},
                        //{field: 'admin.email', title: __('Admin.email')},
                        //{field: 'admin.loginfailure', title: __('Admin.loginfailure')},
                        //{field: 'admin.logintime', title: __('Admin.logintime'), operate:'RANGE', addclass:'datetimerange', formatter: Table.api.formatter.datetime},
                        //{field: 'admin.loginip', title: __('Admin.loginip')},
                       // {field: 'admin.createtime', title: __('Admin.createtime'), operate:'RANGE', addclass:'datetimerange', formatter: Table.api.formatter.datetime},
                        //{field: 'admin.updatetime', title: __('Admin.updatetime'), operate:'RANGE', addclass:'datetimerange', formatter: Table.api.formatter.datetime},
                       // {field: 'admin.token', title: __('Admin.token')},
                        {field: 'admin.status', title: __('Admin.status'), formatter: Table.api.formatter.status},
                        //{field: 'admin.company_id', title: __('Admin.company_id')},
                        {field: 'operate', title: __('Operate'), table: table, events: Table.api.events.operate, formatter: Table.api.formatter.operate}
                    ]
                ]
            });

            // 为表格绑定事件
            Table.api.bindevent(table);
        },
        api: {
            bindevent: function () {
                Form.api.bindevent($("form[role=form]"));
            }
        }
    };
    return Controller;
});