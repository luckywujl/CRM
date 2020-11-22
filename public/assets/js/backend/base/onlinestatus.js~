define(['jquery', 'bootstrap', 'backend', 'table', 'form'], function ($, undefined, Backend, Table, Form) {

    var Controller = {
        index: function () {
            // 初始化表格参数配置
            Table.api.init({
                extend: {
                    index_url: 'base/onlinestatus/index' + location.search,
                    add_url: 'base/onlinestatus/add',
                    edit_url: 'base/onlinestatus/edit',
                    del_url: 'base/onlinestatus/del',
                    multi_url: 'base/onlinestatus/multi',
                    table: 'base_online_status',
                }
            });

            var table = $("#table");

            // 初始化表格
            table.bootstrapTable({
                url: $.fn.bootstrapTable.defaults.extend.index_url,
                pk: 'online_status_id',
                sortName: 'online_status_id',
                columns: [
                    [
                        {checkbox: true},
                      
                        {field: 'custom_online_status_name', title: __('Custom_online_status_name')},
                   
                        {field: 'operate', title: __('Operate'), table: table, events: Table.api.events.operate, formatter: Table.api.formatter.operate}
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