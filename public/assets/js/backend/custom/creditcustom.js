define(['jquery', 'bootstrap', 'backend', 'table', 'form'], function ($, undefined, Backend, Table, Form) {

    var Controller = {
        index: function () {
        	$(".btn-add").data("area",["100%","100%"]);
            $(".btn-edit").data("area",["100%","100%"]);
            // 初始化表格参数配置
            Table.api.init({
                extend: {
                    index_url: 'custom/creditcustom/index' + location.search,
                    add_url: 'custom/creditcustom/add',
                    edit_url: 'custom/creditcustom/edit',
                    del_url: 'custom/creditcustom/del',
                    multi_url: 'custom/creditcustom/multi',
                    table: 'custom_credit',
                }
            });

            var table = $("#table");

            // 初始化表格
            table.bootstrapTable({
                url: $.fn.bootstrapTable.defaults.extend.index_url,
                pk: 'custom_credit_id',
                sortName: 'custom_credit_id',
                columns: [
                    [
                        {checkbox: true},
                        {field: 'operate', title: __('Operate'), table: table, events: Table.api.events.operate, 
                        formatter: function (value, row, index) { //隐藏自定义的视频按钮
   								var that = $.extend({}, this);
   								var table = $(that.table).clone(true);
   								$(table).data("operate-del", null);  //隐藏按钮操作
   								//	if (row.meter_user_name ==""){	//根据条件判断是否隐藏按钮
   								//		$(table).data("operate-user_detail", null);  //隐藏按钮操作
									//	}
 							 			that.table = table;
  										return Table.api.formatter.operate.call(that, value, row, index);
 									}
                        
                        },
                        
                        
                        {field: 'admin.nickname', title: __('Admin_id')},
                       // {field: 'admin.id', title: __('Admin_id')},
                        //{field: 'custominfo.admin_id', title: __('Admin_id')},
                        {field: 'custominfo.custom_full_name', title: __('Custominfo.custom_full_name')},
                        {field: 'custominfo.custom_promotion_type', title: __('Custominfo.custom_promotion_type')},
                        {field: 'custominfo.custom_type', title: __('Custominfo.custom_type')},
                        {field: 'custominfo.custom_industry', title: __('Custominfo.custom_industry')},
                        {field: 'custominfo.custom_server', title: __('Custominfo.custom_server')},
                        {field: 'custominfo.custom_channel', title: __('Custominfo.custom_channel')},
                        {field: 'custominfo.custom_online_status', title: __('Custominfo.custom_online_status'), formatter: Table.api.formatter.status},
                        {field: 'custominfo.custom_online_time', title: __('Custominfo.custom_online_time')},
                        {field: 'custominfo.custom_operation_person', title: __('Custominfo.custom_operation_person')},
                        {field: 'custominfo.custom_visit_standard', title: __('Custominfo.custom_visit_standard')},
                        {field: 'custominfo.custom_login_password', title: __('Custominfo.custom_login_password')},
                        {field: 'custominfo.custom_security_master_phone', title: __('Custominfo.custom_security_master_phone')},
                        {field: 'custominfo.custom_security_sub_phone', title: __('Custominfo.custom_security_sub_phone')},
                        {field: 'custominfo.custom_website_name', title: __('Custominfo.custom_website_name')},
                        {field: 'custominfo.custom_wap', title: __('Custominfo.custom_wap')},
                        {field: 'custominfo.custom_website_password', title: __('Custominfo.custom_website_password')},
                        {field: 'custominfo.custom_pc_website', title: __('Custominfo.custom_pc_website')},
                        {field: 'custominfo.custom_website_code', title: __('Custominfo.custom_website_code')},
                        {field: 'custominfo.custom_copyright', title: __('Custominfo.custom_copyright')},
                        {field: 'custominfo.custom_payment_detail', title: __('Custominfo.custom_payment_detail')},
                        {field: 'custominfo.custom_opening_dete', title: __('Custominfo.custom_opening_dete'), operate:'RANGE', addclass:'datetimerange'},
                        
                        {field: 'custominfo.custom_baidu_id', title: __('Custominfo.custom_baidu_id')},
                        {field: 'custominfo.custom_offline_id', title: __('Custominfo.custom_offline_id')},
                        {field: 'custominfo.createtime', title: __('Custominfo.createtime'), operate:'RANGE', addclass:'datetimerange', formatter: Table.api.formatter.datetime},
                        {field: 'custominfo.updatetime', title: __('Custominfo.updatetime'), operate:'RANGE', addclass:'datetimerange', formatter: Table.api.formatter.datetime},
                        {field: 'custominfo.custom_bidding_remark', title: __('Custominfo.custom_bidding_remark')},
                        {field: 'custominfo.custom_remark', title: __('Custominfo.custom_remark')}
                        
                    ]
                ]
            });
            table.on('post-body.bs.table',function(){
                $(".btn-editone").data("area",["100%","100%"]);
            })

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
            
            // 4、沟通记录-初始化表格参数配置
           Table.api.init();

            var table4 = $("#connect");

            // 初始化表格
            table4.bootstrapTable({
                url: 'custom/connect/index' + location.search+'&custom_id='+Config.row['custom_id'],
					 extend: {
                    index_url: 'custom/connect/index' + location.search+'&custom_id='+Config.row['custom_id'],
                    add_url: 'custom/connect/add?custom_id='+Config.row['custom_id'],
                    edit_url: 'custom/connect/edit',
                    del_url: 'custom/connect/del',
                    table: 'custom_connect',
                },
                toolbar: '#toolbar4',
                pk: 'custom_connect_id',
                sortName: 'custom_connect_id',
                columns: [
                    [
                        {checkbox: true},
                        {field: 'admin.nickname', title: __('Admin_id')},
                        {field: 'custom_connect_time', title: __('Custom_connect_time'), operate:'RANGE', addclass:'datetimerange', formatter: Table.api.formatter.datetime},
                        {field: 'custom_connect_active_phone', title: __('Custom_connect_active_phone')},
                        {field: 'custom_connect_content', title: __('Custom_connect_content')},
                        {field: 'custom_connect_promotion', title: __('Custom_connect_promotion')},
                        {field: 'custom_connect_rating', title: __('Custom_connect_rating')},
                        {field: 'custom_connect_communic', title: __('Custom_connect_communic')},
                        {field: 'custom_connect_feedback', title: __('Custom_connect_feedback')},
                        {field: 'custom_connect_person', title: __('Custom_connect_person')},
                        {field: 'custom_operation_person', title: __('Custom_operation_person')},
                        {field: 'custom_adjust_time', title: __('Custom_adjust_time'), operate:'RANGE', addclass:'datetimerange', formatter: Table.api.formatter.datetime},
                        {field: 'custom_after_sale', title: __('Custom_after_sale')},
                        {field: 'custom_adjust_person', title: __('Custom_adjust_person')},
                        {field: 'createtime', title: __('Createtime'), operate:'RANGE', addclass:'datetimerange', formatter: Table.api.formatter.datetime},
                        {field: 'updatetime', title: __('Updatetime'), operate:'RANGE', addclass:'datetimerange', formatter: Table.api.formatter.datetime},
                       
                        {field: 'operate', title: __('Operate'), table: table, events: Table.api.events.operate, formatter: Table.api.formatter.operate}
                    ]
                ]
            });

            // 为表格绑定事件
            Table.api.bindevent(table4);
            
            // 5、销售信息-初始化表格参数配置
           Table.api.init();

            var table5 = $("#sdetail");

            // 初始化表格
            table5.bootstrapTable({
                url: 'custom/sdetail/index' + location.search+'&custom_id='+Config.row['custom_id'],
					 extend: {
                    index_url: 'custom/sdetail/index' + location.search+'&custom_id='+Config.row['custom_id'],
                    add_url: 'custom/sdetail/add?custom_id='+Config.row['custom_id'],
                    edit_url: 'custom/sdetail/edit',
                    del_url: 'custom/sdetail/del',
                    table: 'custom_sdetail',
                },
                toolbar: '#toolbar5',
                pk: 'custom_sdetail_id',
                sortName: 'custom_sdetail_id',
                columns: [
                     [
                        {checkbox: true},
                       
                        {field: 'custom_sdetail_time', title: __('Custom_sdetail_time'), operate:'RANGE', addclass:'datetimerange', formatter: Table.api.formatter.datetime},
                        {field: 'custom_sdetail_product', title: __('Custom_sdetail_product')},
                        {field: 'custom_sdetail_price', title: __('Custom_sdetail_price'), operate:'BETWEEN'},
                        {field: 'custom_sdetail_unit', title: __('Custom_sdetail_unit')},
                        {field: 'custom_sdetail_number', title: __('Custom_sdetail_number'), operate:'BETWEEN'},
                        {field: 'custom_sdetail_amount', title: __('Custom_sdetail_amount'), operate:'BETWEEN'},
                        {field: 'custom_sdetail_deadline_time', title: __('Custom_sdetail_deadline_time'), operate:'RANGE', addclass:'datetimerange', formatter: Table.api.formatter.datetime},
                        {field: 'custom_sdetail_remark', title: __('Custom_sdetail_remark')},
                        {field: 'createtime', title: __('Createtime'), operate:'RANGE', addclass:'datetimerange', formatter: Table.api.formatter.datetime},
                        {field: 'updatetime', title: __('Updatetime'), operate:'RANGE', addclass:'datetimerange', formatter: Table.api.formatter.datetime},
 
                        {field: 'operate', title: __('Operate'), table: table, events: Table.api.events.operate, formatter: Table.api.formatter.operate}
                    ]
                ]
            });

            // 为表格绑定事件
            Table.api.bindevent(table5);
            
            // 6、发货信息-初始化表格参数配置
           Table.api.init();

            var table6 = $("#ddetail");

            // 初始化表格
            table6.bootstrapTable({
                url: 'custom/ddetail/index' + location.search+'&custom_id='+Config.row['custom_id'],
					 extend: {
                    index_url: 'custom/ddetail/index' + location.search+'&custom_id='+Config.row['custom_id'],
                    add_url: 'custom/ddetail/add?custom_id='+Config.row['custom_id'],
                    edit_url: 'custom/ddetail/edit',
                    del_url: 'custom/ddetail/del',
                    table: 'custom_ddetail',
                },
                toolbar: '#toolbar6',
                pk: 'custom_ddetail_id',
                sortName: 'custom_ddetail_id',
                columns: [
                     [
                        {checkbox: true},
                        //{field: 'custom_ddetail_id', title: __('Custom_ddetail_id')},
                        {field: 'custom_ddetail_time', title: __('Custom_ddetail_time'), operate:'RANGE', addclass:'datetimerange', formatter: Table.api.formatter.datetime},
                        {field: 'custom_ddetail_product', title: __('Custom_ddetail_product')},
                        {field: 'custom_ddetail_number', title: __('Custom_ddetail_number'), operate:'BETWEEN'},
                        {field: 'custom_ddetail_person', title: __('Custom_ddetail_person')},
                        {field: 'custom_ddetail_logistics', title: __('Custom_ddetail_logistics')},
                        {field: 'custom_ddetail_logistics_order', title: __('Custom_ddetail_logistics_order')},
                        {field: 'custom_ddetail_remark', title: __('Custom_ddetail_remark')},
                        {field: 'createtime', title: __('Createtime'), operate:'RANGE', addclass:'datetimerange', formatter: Table.api.formatter.datetime},
                        {field: 'updatetime', title: __('Updatetime'), operate:'RANGE', addclass:'datetimerange', formatter: Table.api.formatter.datetime},
                        //{field: 'company_id', title: __('Company_id')},
                        //{field: 'admin_id', title: __('Admin_id')},
                        //{field: 'custom_id', title: __('Custom_id')},
                        {field: 'operate', title: __('Operate'), table: table, events: Table.api.events.operate, formatter: Table.api.formatter.operate}
                    ]
                ]
            });

            // 为表格绑定事件
            Table.api.bindevent(table6);
            
            // 7、售后服务-初始化表格参数配置
           Table.api.init();

            var table7 = $("#service");

            // 初始化表格
            table7.bootstrapTable({
                url: 'custom/service/index' + location.search+'&custom_id='+Config.row['custom_id'],
					 extend: {
                    index_url: 'custom/service/index' + location.search+'&custom_id='+Config.row['custom_id'],
                    add_url: 'custom/service/add?custom_id='+Config.row['custom_id'],
                    edit_url: 'custom/service/edit',
                    del_url: 'custom/service/del',
                    table: 'custom_service',
                },
                toolbar: '#toolbar7',
                pk: 'custom_service_id',
                sortName: 'custom_service_id',
                columns: [
                     [
                        {checkbox: true},
                        //{field: 'custom_service_id', title: __('Custom_service_id')},
                        {field: 'custom_service_time', title: __('Custom_service_time'), operate:'RANGE', addclass:'datetimerange', formatter: Table.api.formatter.datetime},
                        {field: 'custom_service_content', title: __('Custom_service_content')},
                        {field: 'custom_service_account', title: __('Custom_service_account'), operate:'BETWEEN'},
                        {field: 'custom_service_cost', title: __('Custom_service_cost'), operate:'BETWEEN'},
                        {field: 'custom_service_oldprice', title: __('Custom_service_oldprice'), operate:'BETWEEN'},
                        {field: 'custom_service_newprice', title: __('Custom_service_newprice'), operate:'BETWEEN'},
                        {field: 'custom_service_remark', title: __('Custom_service_remark')},
                        //{field: 'createtime', title: __('Createtime'), operate:'RANGE', addclass:'datetimerange', formatter: Table.api.formatter.datetime},
                        //{field: 'updatetime', title: __('Updatetime'), operate:'RANGE', addclass:'datetimerange', formatter: Table.api.formatter.datetime},
                        //{field: 'company_id', title: __('Company_id')},
                        //{field: 'admin_id', title: __('Admin_id')},
                        //{field: 'custom_id', title: __('Custom_id')},
                        {field: 'operate', title: __('Operate'), table: table, events: Table.api.events.operate, formatter: Table.api.formatter.operate}
                    ]
                ]
            });

            // 为表格绑定事件
            Table.api.bindevent(table7);
            
             // 8、款项信息-初始化表格参数配置
           Table.api.init();

            var table8 = $("#payment");

            // 初始化表格
            table8.bootstrapTable({
                url: 'custom/payment/index' + location.search+'&custom_id='+Config.row['custom_id'],
					 extend: {
                    index_url: 'custom/payment/index' + location.search+'&custom_id='+Config.row['custom_id'],
                    add_url: 'custom/payment/add?custom_id='+Config.row['custom_id'],
                    edit_url: 'custom/payment/edit',
                    del_url: 'custom/payment/del',
                    table: 'custom_payment',
                },
                toolbar: '#toolbar8',
                pk: 'custom_payment_id',
                sortName: 'custom_payment_id',
                columns: [
                     [
                        {checkbox: true},
                        //{field: 'custom_payment_id', title: __('Custom_payment_id')},
                        {field: 'custom_payment_content1', title: __('Custom_payment_content1')},
                        {field: 'custom_payment_paytime', title: __('Custom_payment_paytime'), operate:'RANGE', addclass:'datetimerange', formatter: Table.api.formatter.datetime},
                        {field: 'custom_payment_content', title: __('Custom_payment_content')},
                        {field: 'custom_payment_account', title: __('Custom_payment_account'), operate:'BETWEEN'},
                        {field: 'custom_payment_bidding', title: __('Custom_payment_bidding')},
                        {field: 'custom_payment_handler', title: __('Custom_payment_handler')},
                        {field: 'custom_payment_method', title: __('Custom_payment_method')},
                        {field: 'custom_payment_type', title: __('Custom_payment_type')},
                        {field: 'custom_payment_person', title: __('Custom_payment_person')},
                        {field: 'custom_payment_remark', title: __('Custom_payment_remark')},
                        //{field: 'createtime', title: __('Createtime'), operate:'RANGE', addclass:'datetimerange', formatter: Table.api.formatter.datetime},
                        {field: 'updatetime', title: __('Updatetime'), operate:'RANGE', addclass:'datetimerange', formatter: Table.api.formatter.datetime},
                        //{field: 'company_id', title: __('Company_id')},
                        //{field: 'admin_id', title: __('Admin_id')},
                        //{field: 'custom_id', title: __('Custom_id')},
                        {field: 'operate', title: __('Operate'), table: table, events: Table.api.events.operate, formatter: Table.api.formatter.operate}
                    ]
                ]
            });

            // 为表格绑定事件
            Table.api.bindevent(table8);
            
             // 9、票据信息-初始化表格参数配置
           Table.api.init();

            var table9 = $("#bill");

            // 初始化表格
            table9.bootstrapTable({
                url: 'custom/bill/index' + location.search+'&custom_id='+Config.row['custom_id'],
					 extend: {
                    index_url: 'custom/bill/index' + location.search+'&custom_id='+Config.row['custom_id'],
                    add_url: 'custom/bill/add?custom_id='+Config.row['custom_id'],
                    edit_url: 'custom/bill/edit',
                    del_url: 'custom/bill/del',
                    table: 'custom_bill',
                },
                toolbar: '#toolbar9',
                pk: 'custom_bill_id',
                sortName: 'custom_bill_id',
                columns: [
                     [
                        {checkbox: true},
                        //{field: 'custom_bill_id', title: __('Custom_bill_id')},
                        {field: 'custom_bill_time', title: __('Custom_bill_time'), operate:'RANGE', addclass:'datetimerange', formatter: Table.api.formatter.datetime},
                        {field: 'custom_bill_content', title: __('Custom_bill_content')},
                        {field: 'custom_bill_type', title: __('Custom_bill_type')},
                        {field: 'custom_bill_order', title: __('Custom_bill_order')},
                        {field: 'custom_bill_account', title: __('Custom_bill_account'), operate:'BETWEEN'},
                        {field: 'custom_bill_person', title: __('Custom_bill_person')},
                        {field: 'custom_bill_payment_method', title: __('Custom_bill_payment_method')},
                        {field: 'custom_bill_remark', title: __('Custom_bill_remark')},
                        //{field: 'createtime', title: __('Createtime'), operate:'RANGE', addclass:'datetimerange', formatter: Table.api.formatter.datetime},
                        {field: 'updatetime', title: __('Updatetime'), operate:'RANGE', addclass:'datetimerange', formatter: Table.api.formatter.datetime},
                        //{field: 'company_id', title: __('Company_id')},
                        //{field: 'admin_id', title: __('Admin_id')},
                        //{field: 'custom_id', title: __('Custom_id')},
                        {field: 'operate', title: __('Operate'), table: table, events: Table.api.events.operate, formatter: Table.api.formatter.operate}
                    ]
                ]
            });

            // 为表格绑定事件
            Table.api.bindevent(table9);
            
            
          // 10、票据信息-初始化表格参数配置
           Table.api.init();

            var table10 = $("#documents");

            // 初始化表格
            table10.bootstrapTable({
                url: 'custom/documents/index' + location.search+'&custom_id='+Config.row['custom_id'],
					 extend: {
                    index_url: 'custom/documents/index' + location.search+'&custom_id='+Config.row['custom_id'],
                    add_url: 'custom/documents/add?custom_id='+Config.row['custom_id'],
                    edit_url: 'custom/documents/edit',
                    del_url: 'custom/documents/del',
                    table: 'custom_documents',
                },
                toolbar: '#toolbar10',
                pk: 'custom_documents_id',
                sortName: 'custom_documents_id',
                columns: [
                      [
                        {checkbox: true},
                       // {field: 'custom_documents_id', title: __('Custom_documents_id')},
                        {field: 'custom_documents_name', title: __('Custom_documents_name')},
                        //{field: 'custom_documents_files', title: __('Custom_documents_files')},
                        {field: 'custom_documents_uploadtime', title: __('Custom_documents_uploadtime'), operate:'RANGE', addclass:'datetimerange', formatter: Table.api.formatter.datetime},
                        {field: 'custom_documents_officer', title: __('Custom_documents_officer')},
                        //{field: 'company_id', title: __('Company_id')},
                        //{field: 'admin_id', title: __('Admin_id')},
                        //{field: 'custom_id', title: __('Custom_id')},
                        {field: 'operate', title: __('Operate'), table: table, events: Table.api.events.operate, formatter: Table.api.formatter.operate}
                    ]
                ]
            });

            // 为表格绑定事件
            Table.api.bindevent(table10);
            

        },
        api: {
            bindevent: function () {
                Form.api.bindevent($("form[role=form]"));
            }
        }
    };
    return Controller;
});