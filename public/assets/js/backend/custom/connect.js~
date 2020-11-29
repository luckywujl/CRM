define(['jquery', 'bootstrap', 'backend', 'table', 'form'], function ($, undefined, Backend, Table, Form) {

    var Controller = {
        index: function () {
            // 初始化表格参数配置
            Table.api.init({
                extend: {
                    index_url: 'custom/connect/index' + location.search,
                    add_url: 'custom/connect/add',
                    edit_url: 'custom/connect/edit',
                    del_url: 'custom/connect/del',
                    multi_url: 'custom/connect/multi',
                    table: 'custom_connect',
                }
            });

            var table = $("#table");

            // 初始化表格
            table.bootstrapTable({
                url: $.fn.bootstrapTable.defaults.extend.index_url,
                pk: 'custom_connect_id',
                sortName: 'custom_connect_id',
                columns: [
                    [
                        {checkbox: true},
                        //{field: 'custom_connect_id', title: __('Custom_connect_id')},
                        {field: 'custominfo.custom_full_name', title: __('Custominfo.custom_full_name')},
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
                url: 'custom/connect/recyclebin' + location.search,
                pk: 'id',
                sortName: 'id',
                columns: [
                    [
                        {checkbox: true},
                        {field: 'id', title: __('Id')},
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
                                    url: 'custom/connect/restore',
                                    refresh: true
                                },
                                {
                                    name: 'Destroy',
                                    text: __('Destroy'),
                                    classname: 'btn btn-xs btn-danger btn-ajax btn-destroyit',
                                    icon: 'fa fa-times',
                                    url: 'custom/connect/destroy',
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