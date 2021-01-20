define(['jquery', 'bootstrap', 'backend', 'table', 'form'], function ($, undefined, Backend, Table, Form) {

    var Controller = {
        index: function () {
            // 初始化表格参数配置
            Table.api.init({
                extend: {
                    index_url: 'custom/payment/index' + location.search,
                    add_url: 'custom/payment/add',
                    edit_url: 'custom/payment/edit',
                    del_url: 'custom/payment/del',
                    multi_url: 'custom/payment/multi',
                    table: 'custom_payment',
                }
            });

            var table = $("#table");

            // 初始化表格
            table.bootstrapTable({
                url: $.fn.bootstrapTable.defaults.extend.index_url,
                pk: 'custom_payment_id',
                sortName: 'custom_payment_id',
                columns: [
                    [
                        {checkbox: true},
                        //{field: 'custom_payment_id', title: __('Custom_payment_id')},
                        {field: 'custominfo.custom_full_name', title: __('Custominfo.custom_full_name')},
                        {field: 'admin.nickname', title: __('Admin_id')},
                        
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
                url: 'custom/payment/recyclebin' + location.search,
                pk: 'custom_payment_id',
                sortName: 'custom_payment_id',
                columns: [
                    [
                        {checkbox: true},
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
                                    url: 'custom/payment/restore',
                                    refresh: true
                                },
                                {
                                    name: 'Destroy',
                                    text: __('Destroy'),
                                    classname: 'btn btn-xs btn-danger btn-ajax btn-destroyit',
                                    icon: 'fa fa-times',
                                    url: 'custom/payment/destroy',
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
        },
        api: {
            bindevent: function () {
                Form.api.bindevent($("form[role=form]"));
            }
        }
    };
    return Controller;
});