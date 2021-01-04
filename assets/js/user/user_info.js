$(function(){
var form=layui.form

var layer=layui.layer

form.verify({
nickname:function(value){
if(value.length>6) {
    return '昵称长度必须在1~6个字符之间！'
}
}
})
// 调用用户的基本信息
initUserInfo()
// 初始化用户的基本信息
function initUserInfo(){
    $.ajax({
    method:'get',
    url:'http://api-breakingnews-web.itheima.net/my/userinfo',
    success:function(res){
    if(res.status!==0){
    return  layer.msg('获取用户信息失败')
    }
    // 调用form.val为表单快速赋值
    form.val('formUserInfo', res.data);
    
    }
    })
    }
// 重置表单
$('#btnreset').on('click',function(e){
e.preventDefault()
initUserInfo()
})
// 监听表单的提交事件
$('.layui-form').on('submit',function(e){
e.preventDefault()
$.ajax({
method:'post',
url:'http://api-breakingnews-web.itheima.net/my/userinfo',
data:$(this).serialize(),
success:function(res){
if(res.status!==0){
return layer.msg('更新用户信息失败')
}
layer.msg('更新用户信息成功')
// 调用父页面的方法，重新渲染用户的头像和信息
window.parent. getUserInfo()
}
})
})









})



























