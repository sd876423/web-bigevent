$(function(){

    getUserInfo()
    var layer=layui.layer

$('#btnlogout').on('click',function(){
    layer.confirm('是否确定退出', {icon: 3, title:'提示'}, function(index){
        //do something
// 清空本地存储的token
localStorage.removeItem('token')
// 跳转到login.html
       location.href='/login.html' 
        layer.close(index);
      });






})





})
// 获取用户的基本信息
function getUserInfo(){
$.ajax({
method:'get',
url:'http://ajax.frontend.itheima.net/my/userinfo',
success:function(res){   
//调用渲染用户头像的函数 
console.log(res)
renderAvatar(res.data)
}
})
}

// 渲染用户头像
function renderAvatar(user){
// 获取用户名称
var name=user.nickname || user.username
// 设置欢迎的文本
$('#welcome').html('欢迎&nbsp;&nbsp;'+name)
// 按需渲染用户头像
if(user.user_pic!==null){
// 渲染图片头像
$('.layui-nav-img').attr('src',user.user_pic).show()
$('.text-av').hide()
}else {
// 渲染文字头像
$('.layui-nav-img').hide()
var first=name[0].toUpperCase()
$('.text-av').html(first).show()
}
}














