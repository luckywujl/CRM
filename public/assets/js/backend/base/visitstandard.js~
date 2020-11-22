define(['jquery', 'bootstrap', 'backend', 'table', 'form'], function ($, undefined, Backend, Table, Form) {

    var Controller = {
        index: function () {
            // 初始化表格参数配置
            Table.api.init({
                extend: {
                    index_url: 'base/visitstandard/index' + location.search,
                    add_url: 'base/visitstandard/add',
                    edit_url: 'base/visitstandard/edit',
                    del_url: 'base/visitstandard/del',
                    multi_url: 'base/visitstandard/multi',
                    table: 'base_visit_standard',
                }
            });

            var table = $("#table");

            // 初始化表格
            table.bootstrapTable({
                url: $.fn.bootstrapTable.defaults.extend.index_url,
                pk: 'visit_standard_id',
                sortName: 'visit_standard_id',
                columns: [
                    [
                        {checkbox: true},
                      
                        {field: 'custom_visit_standard_name', title: __('Custom_visit_standard_name')},
                       
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