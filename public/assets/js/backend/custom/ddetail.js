define(['jquery', 'bootstrap', 'backend', 'table', 'form'], function ($, undefined, Backend, Table, Form) {

    var Controller = {
        index: function () {
            // 初始化表格参数配置
            Table.api.init({
                extend: {
                    index_url: 'custom/ddetail/index' + location.search,
                    add_url: 'custom/ddetail/add',
                    edit_url: 'custom/ddetail/edit',
                    del_url: 'custom/ddetail/del',
                    multi_url: 'custom/ddetail/multi',
                    table: 'custom_ddetail',
                }
            });

            var table = $("#table");

            // 初始化表格
            table.bootstrapTable({
                url: $.fn.bootstrapTable.defaults.extend.index_url,
                pk: 'custom_ddetail_id',
                sortName: 'custom_ddetail_id',
                columns: [
                    [
                        {checkbox: true},
                        {field: 'custom_ddetail_id', title: __('Custom_ddetail_id')},
                        {field: 'custom_ddetail_time', title: __('Custom_ddetail_time'), operate:'RANGE', addclass:'datetimerange', formatter: Table.api.formatter.datetime},
                        {field: 'custom_ddetail_product', title: __('Custom_ddetail_product')},
                        {field: 'custom_ddetail_number', title: __('Custom_ddetail_number'), operate:'BETWEEN'},
                        {field: 'custom_ddetail_person', title: __('Custom_ddetail_person')},
                        {field: 'custom_ddetail_logistics', title: __('Custom_ddetail_logistics')},
                        {field: 'custom_ddetail_logistics_order', title: __('Custom_ddetail_logistics_order')},
                        {field: 'custom_ddetail_remark', title: __('Custom_ddetail_remark')},
                        {field: 'createtime', title: __('Createtime'), operate:'RANGE', addclass:'datetimerange', formatter: Table.api.formatter.datetime},
                        {field: 'updatetime', title: __('Updatetime'), operate:'RANGE', addclass:'datetimerange', formatter: Table.api.formatter.datetime},
                        {field: 'company_id', title: __('Company_id')},
                        {field: 'admin_id', title: __('Admin_id')},
                        {field: 'custom_id', title: __('Custom_id')},
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
                url: 'custom/ddetail/recyclebin' + location.search,
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
                                    url: 'custom/ddetail/restore',
                                    refresh: true
                                },
                                {
                                    name: 'Destroy',
                                    text: __('Destroy'),
                                    classname: 'btn btn-xs btn-danger btn-ajax btn-destroyit',
                                    icon: 'fa fa-times',
                                    url: 'custom/ddetail/destroy',
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