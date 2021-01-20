define(['jquery', 'bootstrap', 'backend', 'table', 'form'], function ($, undefined, Backend, Table, Form) {

    var Controller = {
        index: function () {
            // 初始化表格参数配置
            Table.api.init({
                extend: {
                    index_url: 'custom/purpose/index' + location.search,
                    add_url: 'custom/purpose/add',
                    edit_url: 'custom/purpose/edit',
                    del_url: 'custom/purpose/del',
                    multi_url: 'custom/purpose/multi',
                    table: 'custom_purpose',
                }
            });

            var table = $("#table");

            // 初始化表格
            table.bootstrapTable({
                url: $.fn.bootstrapTable.defaults.extend.index_url,
                pk: 'custom_purpose_id',
                sortName: 'custom_purpose_id',
                columns: [
                    [
                        {checkbox: true},
                        {field: 'custominfo.custom_full_name', title: __('Custominfo.custom_full_name')},
                        {field: 'admin.nickname', title: __('Admin_id')},
                        //{field: 'custom_purpose_id', title: __('Custom_purpose_id')},
                        {field: 'custom_purpose_product', title: __('Custom_purpose_product')},
                        {field: 'custom_purpose_price', title: __('Custom_purpose_price'), operate:'BETWEEN'},
                        {field: 'custom_purpose_number', title: __('Custom_purpose_number'), operate:'BETWEEN'},
                        {field: 'custom_purpose_time', title: __('Custom_purpose_time'), operate:'RANGE', addclass:'datetimerange', formatter: Table.api.formatter.datetime},
                        {field: 'custom_purpose_remark', title: __('Custom_purpose_remark')},
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