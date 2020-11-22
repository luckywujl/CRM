define(['jquery', 'bootstrap', 'backend', 'table', 'form'], function ($, undefined, Backend, Table, Form) {

    var Controller = {
        index: function () {
         	$(".btn-add").data("area",["100%","100%"]);
            $(".btn-edit").data("area",["100%","100%"]);
            // 初始化表格参数配置
            Table.api.init({
                extend: {
                    index_url: 'custom/info/index' + location.search,
                    add_url: 'custom/info/add',
                    edit_url: 'custom/info/edit',
                    del_url: 'custom/info/del',
                    multi_url: 'custom/info/multi',
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
                        {field: 'custom_id', title: __('Custom_id')},
                        {field: 'company_id', title: __('Company_id')},
                        {field: 'admin_id', title: __('Admin_id')},
                        {field: 'createtime', title: __('Createtime'), operate:'RANGE', addclass:'datetimerange', formatter: Table.api.formatter.datetime},
                        {field: 'updatetime', title: __('Updatetime'), operate:'RANGE', addclass:'datetimerange', formatter: Table.api.formatter.datetime},
                        {field: 'custom_promotion_type', title: __('Custom_promotion_type')},
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
                        {field: 'custom_full_name', title: __('Custom_full_name')},
                        {field: 'custom_baidu_id', title: __('Custom_baidu_id')},
                        {field: 'custom_offline_id', title: __('Custom_offline_id')},
                        {field: 'custom_bidding_remark', title: __('Custom_bidding_remark')},
                        {field: 'custom_remark', title: __('Custom_remark')},
                        {field: 'operate', title: __('Operate'), table: table, events: Table.api.events.operate, formatter: Table.api.formatter.operate}
                    ]
                ]
            });
            table.on('post-body.bs.table',function(){
                $(".btn-editone").data("area",["100%","100%"]);
            })

            // 为表格绑定事件
            Table.api.bindevent(table);
            
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
                url: 'custom/info/recyclebin' + location.search,
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
                                    url: 'custom/info/restore',
                                    refresh: true
                                },
                                {
                                    name: 'Destroy',
                                    text: __('Destroy'),
                                    classname: 'btn btn-xs btn-danger btn-ajax btn-destroyit',
                                    icon: 'fa fa-times',
                                    url: 'custom/info/destroy',
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
        	  // 1、联系人-初始化表格参数配置
            Table.api.init();

            var table = $("#contact");

            // 初始化表格
            table.bootstrapTable({
                url: 'custom/contact/index' + location.search+'&custom_id='+Config.row['custom_id'],
                extend: {
                    index_url: 'custom/contact/index' + location.search+'&custom_id='+Config.row['custom_id'],
                    add_url: 'custom/contact/add?custom_id='+Config.row['custom_id'],
                    edit_url: 'custom/contact/edit',
                    del_url: 'custom/contact/del',
                    table: 'custom_contact',
                },
                toolbar: '#toolbar1',
                pk: 'custom_contact_id',
                sortName: 'custom_contact_id',
                columns: [
                    [
                        {checkbox: true},
                        //{field: 'custom_contact_id', title: __('Custom_contact_id')},
                        {field: 'custom_contact_name', title: __('Custom_contact_name')},
                        {field: 'custom_contact_email', title: __('Custom_contact_email')},
                        {field: 'custom_contact_mobile', title: __('Custom_contact_mobile')},
                        {field: 'custom_contact_phone', title: __('Custom_contact_phone')},
                        {field: 'custom_contact_QQ', title: __('Custom_contact_qq')},
                        {field: 'custom_contact_wchat', title: __('Custom_contact_wchat')},
                        {field: 'custom_contact_websitname', title: __('Custom_contact_websitname')},
                        {field: 'custom_contact_webtype', title: __('Custom_contact_webtype')},
                        {field: 'operate', title: __('Operate'), table: table, events: Table.api.events.operate, formatter: Table.api.formatter.operate}
                    ]
                ]
            });

            // 为表格绑定事件
            Table.api.bindevent(table);
            
            // 2、客户提醒-初始化表格参数配置
           Table.api.init();

            var table2 = $("#remind");

            // 初始化表格
            table2.bootstrapTable({
                url: 'custom/remind/index' + location.search+'&custom_id='+Config.row['custom_id'],
					 extend: {
                    index_url: 'custom/remind/index' + location.search+'&custom_id='+Config.row['custom_id'],
                    add_url: 'custom/remind/add?custom_id='+Config.row['custom_id'],
                    edit_url: 'custom/remind/edit',
                    del_url: 'custom/remind/del',
                    table: 'custom_remind',
                },
                toolbar: '#toolbar2',
                pk: 'custom_remind_id',
                sortName: 'custom_remind_id',
                columns: [
                    [
                        {checkbox: true},
                      //  {field: 'custom_remind_id', title: __('Custom_remind_id')},
                        {field: 'createtime', title: __('Createtime'), operate:'RANGE', addclass:'datetimerange', formatter: Table.api.formatter.datetime},
                        {field: 'custom_remind', title: __('Custom_remind')},
                        {field: 'updatetime', title: __('Updatetime'), operate:'RANGE', addclass:'datetimerange', formatter: Table.api.formatter.datetime},
                        {field: 'operate', title: __('Operate'), table: table, events: Table.api.events.operate, formatter: Table.api.formatter.operate}
                    ]
                ]
            });

            // 为表格绑定事件
            Table.api.bindevent(table2);
            
             // 3、客户意向-初始化表格参数配置
           Table.api.init();

            var table3 = $("#purpose");

            // 初始化表格
            table3.bootstrapTable({
                url: 'custom/purpose/index' + location.search+'&custom_id='+Config.row['custom_id'],
					 extend: {
                    index_url: 'custom/purpose/index' + location.search+'&custom_id='+Config.row['custom_id'],
                    add_url: 'custom/purpose/add?custom_id='+Config.row['custom_id'],
                    edit_url: 'custom/purpose/edit',
                    del_url: 'custom/purpose/del',
                    table: 'custom_purpose',
                },
                toolbar: '#toolbar3',
                pk: 'custom_purpose_id',
                sortName: 'custom_purpose_id',
                columns: [
                    [
                        {checkbox: true},
                        //{field: 'custom_purpose_id', title: __('Custom_purpose_id')},
                        {field: 'custom_purpose_product', title: __('Custom_purpose_product')},
                        {field: 'custom_purpose_price', title: __('Custom_purpose_price'), operate:'BETWEEN'},
                        {field: 'custom_purpose_number', title: __('Custom_purpose_number'), operate:'BETWEEN'},
                        {field: 'custom_purpose_time', title: __('Custom_purpose_time'), operate:'RANGE', addclass:'datetimerange', formatter: Table.api.formatter.datetime},
                        {field: 'custom_purpose_remark', title: __('Custom_purpose_remark')},
                        //{field: 'company_id', title: __('Company_id')},
                        //{field: 'admin_id', title: __('Admin_id')},
                        //{field: 'custom_id', title: __('Custom_id')},
                        {field: 'operate', title: __('Operate'), table: table, events: Table.api.events.operate, formatter: Table.api.formatter.operate}
                    ]
                ]
            });

            // 为表格绑定事件
            Table.api.bindevent(table3);
            
        },
        api: {
            bindevent: function () {
                Form.api.bindevent($("form[role=form]"));
            }
        }
    };
    return Controller;
});