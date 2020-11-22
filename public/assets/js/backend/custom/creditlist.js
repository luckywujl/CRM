define(['jquery', 'bootstrap', 'backend', 'table', 'form'], function ($, undefined, Backend, Table, Form) {

    var Controller = {
        index: function () {
            // 初始化表格参数配置
            Table.api.init({
                extend: {
                    index_url: 'custom/creditlist/index' + location.search,
                    add_url: 'custom/creditlist/add?custom_id='+Config.row['custom_id'],
                    edit_url: 'custom/creditlist/edit',
                    del_url: 'custom/creditlist/del',
                  
                    table: 'custom_credit',
                }
            });

            var table = $("#table");

            // 初始化表格
            table.bootstrapTable({
                url: $.fn.bootstrapTable.defaults.extend.index_url,
                pk: 'custom_credit_id',
                sortName: 'custom_credit_id',
                columns: [
                    [
                        {checkbox: true},
                        {field: 'custom_credit_id', title: __('Custom_credit_id')},
                        {field: 'custom_id', title: __('Custom_id')},
                        {field: 'custom_admin', title: __('Custom_admin')},
                        {field: 'custom_credit_type', title: __('Custom_credit_type'), searchList: {"0":__('Custom_credit_type 0'),"1":__('Custom_credit_type 1'),"2":__('Custom_credit_type 2')}, formatter: Table.api.formatter.normal},
                        {field: 'company_id', title: __('Company_id')},
                        {field: 'admin_id', title: __('Admin_id')},
                        {field: 'admin.id', title: __('Admin.id')},
                        {field: 'admin.username', title: __('Admin.username')},
                        {field: 'admin.nickname', title: __('Admin.nickname')},
                        {field: 'admin.password', title: __('Admin.password')},
                        {field: 'admin.salt', title: __('Admin.salt')},
                        {field: 'admin.avatar', title: __('Admin.avatar'), events: Table.api.events.image, formatter: Table.api.formatter.image},
                        {field: 'admin.email', title: __('Admin.email')},
                        {field: 'admin.loginfailure', title: __('Admin.loginfailure')},
                        {field: 'admin.logintime', title: __('Admin.logintime'), operate:'RANGE', addclass:'datetimerange', formatter: Table.api.formatter.datetime},
                        {field: 'admin.loginip', title: __('Admin.loginip')},
                        {field: 'admin.createtime', title: __('Admin.createtime'), operate:'RANGE', addclass:'datetimerange', formatter: Table.api.formatter.datetime},
                        {field: 'admin.updatetime', title: __('Admin.updatetime'), operate:'RANGE', addclass:'datetimerange', formatter: Table.api.formatter.datetime},
                        {field: 'admin.token', title: __('Admin.token')},
                        {field: 'admin.status', title: __('Admin.status'), formatter: Table.api.formatter.status},
                        {field: 'admin.company_id', title: __('Admin.company_id')},
                        {field: 'operate', title: __('Operate'), table: table, events: Table.api.events.operate, formatter: Table.api.formatter.operate}
                    ]
                ]
            });

            // 为表格绑定事件
            Table.api.bindevent(table);
        },
        add: function () {
            Controller.api.bindevent();
            // 初始化表格参数配置
            Table.api.init({
                extend: {
                    index_url: 'custom/adminselect/index' + location.search,
                    table: 'admin',
                }
            });

            var table = $("#table");

            // 初始化表格
            table.bootstrapTable({
                url: $.fn.bootstrapTable.defaults.extend.index_url,
                pk: 'id',
                sortName: 'id',
                columns: [
                    [
                        {checkbox: true},
                        //{field: 'id', title: __('Id')},
                        {field: 'username', title: __('Username')},
                        {field: 'nickname', title: __('Nickname')},
                        //{field: 'password', title: __('Password')},
                        //{field: 'salt', title: __('Salt')},
                        {field: 'avatar', title: __('Avatar'), events: Table.api.events.image, formatter: Table.api.formatter.image},
                        //{field: 'email', title: __('Email')},
                        //{field: 'loginfailure', title: __('Loginfailure')},
                        //{field: 'logintime', title: __('Logintime'), operate:'RANGE', addclass:'datetimerange', formatter: Table.api.formatter.datetime},
                        //{field: 'loginip', title: __('Loginip')},
                        //{field: 'createtime', title: __('Createtime'), operate:'RANGE', addclass:'datetimerange', formatter: Table.api.formatter.datetime},
                        //{field: 'updatetime', title: __('Updatetime'), operate:'RANGE', addclass:'datetimerange', formatter: Table.api.formatter.datetime},
                        //{field: 'token', title: __('Token')},
                        {field: 'status', title: __('Status'), formatter: Table.api.formatter.status},
                        //{field: 'company_id', title: __('Company_id')},
                        //{field: 'operate', title: __('Operate'), table: table, events: Table.api.events.operate, formatter: Table.api.formatter.operate}
                    ]
                ]
            });

            // 为表格绑定事件
            Table.api.bindevent(table);
            

            //添加授信
            $(document).on("click", ".btn-addselect", function () {
            	
 
				//获取组件的值
				var credittype = $("input[name='credittype']:checked").val();
                //在table外不可以使用添加.btn-change的方法
                //只能自己调用Table.api.multi实现
                var ids = Table.api.selectedids(table);
    								layer.confirm('确定要将所选客户对下列用户授信吗?', {btn: ['是','否'] },
       							 function(index){
        					    layer.close(index);
          						  $.post("custom/adminselect/addcreditd", {ids:ids, credittype:credittype,custom_id:Config.custom_id,action:'success', reply:''},function(response){
             				   if(response.code == 1){
                 	   Toastr.success(response.msg);
                   $(".btn-refresh").trigger('click');
                   parent.$("a.btn-refresh").trigger("click"); 
                    
                }else{
                    Toastr.error(response.msg)
                }
            }, 'json')
        },
        function(index){
            layer.close(index);
        }
    );
                           
            });
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