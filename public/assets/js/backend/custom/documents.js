define(['jquery', 'bootstrap', 'backend', 'table', 'form'], function ($, undefined, Backend, Table, Form) {

    var Controller = {
        index: function () {
            // 初始化表格参数配置
            Table.api.init({
                extend: {
                    index_url: 'custom/documents/index' + location.search,
                    add_url: 'custom/documents/add',
                    edit_url: 'custom/documents/edit',
                    del_url: 'custom/documents/del',
                    multi_url: 'custom/documents/multi',
                    table: 'custom_documents',
                }
            });

            var table = $("#table");

            // 初始化表格
            table.bootstrapTable({
                url: $.fn.bootstrapTable.defaults.extend.index_url,
                pk: 'custom_documents_id',
                sortName: 'custom_documents_id',
                columns: [
                    [
                        {checkbox: true},
                        {field: 'custom_documents_id', title: __('Custom_documents_id')},
                        {field: 'custom_documents_name', title: __('Custom_documents_name')},
                        {field: 'custom_documents_files', title: __('Custom_documents_files')},
                        {field: 'custom_documents_uploadtime', title: __('Custom_documents_uploadtime'), operate:'RANGE', addclass:'datetimerange', formatter: Table.api.formatter.datetime},
                        {field: 'custom_documents_officer', title: __('Custom_documents_officer')},
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