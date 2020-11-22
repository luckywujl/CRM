define(['jquery', 'bootstrap', 'backend', 'table', 'form'], function ($, undefined, Backend, Table, Form) {

    var Controller = {
        index: function () {
            // 初始化表格参数配置
            Table.api.init({
                extend: {
                    index_url: 'base/unit/index' + location.search,
                    add_url: 'base/unit/add',
                    edit_url: 'base/unit/edit',
                    del_url: 'base/unit/del',
                    //multi_url: 'base/unit/multi',
                    //table: 'base_unit',
                }
            });

            var table = $("#table");

            // 初始化表格
            table.bootstrapTable({
                url: $.fn.bootstrapTable.defaults.extend.index_url,
                pk: 'unit_id',
                sortName: 'unit_id',
                columns: [
                    [
                        {checkbox: true},
                       // {field: 'unit_id', title: __('Unit_id')},
                        {field: 'unit', title: __('Unit')},
                        //{field: 'company_id', title: __('Company_id')},
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