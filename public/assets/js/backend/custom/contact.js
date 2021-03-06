define(['jquery', 'bootstrap', 'backend', 'table', 'form'], function ($, undefined, Backend, Table, Form) {

    var Controller = {
        index: function () {
            // 初始化表格参数配置
            Table.api.init({
                extend: {
                    index_url: 'custom/contact/index' + location.search,
                    add_url: 'custom/contact/add',
                    edit_url: 'custom/contact/edit',
                    del_url: 'custom/contact/del',
                    multi_url: 'custom/contact/multi',
                    table: 'custom_contact',
                }
            });

            var table = $("#table");

            // 初始化表格
            table.bootstrapTable({
                url: $.fn.bootstrapTable.defaults.extend.index_url,
                pk: 'custom_contact_id',
                sortName: 'custom_contact_id',
                columns: [
                    [
                        {checkbox: true},
                        {field: 'custominfo.custom_full_name', title: __('Custominfo.custom_full_name')},
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