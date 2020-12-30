define(['jquery', 'bootstrap', 'backend', 'table', 'form'], function ($, undefined, Backend, Table, Form) {

    var Controller = {
        index: function () {
            // 初始化表格参数配置
            Table.api.init({
                extend: {
                    index_url: 'base/paymentcontent/index' + location.search,
                    add_url: 'base/paymentcontent/add',
                    edit_url: 'base/paymentcontent/edit',
                    del_url: 'base/paymentcontent/del',
                   // multi_url: 'base/paymentcontent/multi',
                   // table: 'base_payment_content',
                }
            });

            var table = $("#table");

            // 初始化表格
            table.bootstrapTable({
                url: $.fn.bootstrapTable.defaults.extend.index_url,
                pk: 'payment_content_id',
                sortName: 'payment_content_id',
                columns: [
                    [
                        {checkbox: true},
                       // {field: 'payment_content_id', title: __('Payment_content_id')},
                        {field: 'payment_content', title: __('Payment_content')},
                      //  {field: 'company_id', title: __('Company_id')},
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