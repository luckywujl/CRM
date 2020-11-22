define(['jquery', 'bootstrap', 'backend', 'table', 'form'], function ($, undefined, Backend, Table, Form) {

    var Controller = {
        index: function () {
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
          						  $.post("custom/adminselect/addcredit", {ids:ids, credittype:credittype,custom_ids:Config.custom_ids,action:'success', reply:''},function(response){
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
            //删除授信
            $(document).on("click", ".btn-delselect", function () {
            	
                //在table外不可以使用添加.btn-change的方法
                //只能自己调用Table.api.multi实现
                var ids = Table.api.selectedids(table);
    								layer.confirm('确定要取消所选客户对下列用户的授信吗?', {btn: ['是','否'] },
       							 function(index){
        					    layer.close(index);
          						  $.post("custom/adminselect/delcredit1", {ids:ids, custom_ids:Config.custom_ids,action:'success', reply:''},function(response){
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