$(function(){    
// 点击去注册    
$('#link_reg').on('click',function(){
$('.login-box').hide()
$('.reg-box').show()
})
// 点击去登陆
$('#link_login').on('click',function(){
$('.reg-box').hide()
$('.login-box').show()
})
// 校验
var form=layui.form
var layer=layui.layer
form.verify({
pwd:[
    /^[\S]{6,12}$/
    ,'密码必须6到12位，且不能出现空格'
  ], 
  repwd:function(value){

var pwd=$('.reg-box [name=password]').val()
if(pwd!=value){
    return '两次输入的密码不一致'
}
  }
})
// 监听注册表单的提交事件

$('#form_reg').on('submit',function(e){
e.preventDefault()
// 获取表单内容方式1
var data={username:$('#form_reg [name=username]').val(),password:$('#form_reg [name=password]').val()}
// 发起post请求
$.post('http://ajax.frontend.itheima.net/api/reguser',data,function(res){
if(res.status!==0){
//使用layui 提示    
return layer.msg(res.message)
}
layer.msg(res.message)
// 模拟人的点击行为    有问题
$('#form_login').click()
})
})
// 监听登录表单的提交事件  
$('#form_login').on('submit',function(e){
e.preventDefault()
var data={username:$('#form_login [name=username]').val(),password:$('#form_login [name=password]').val()}
$.post(
'http://ajax.frontend.itheima.net/api/login',
data,function(res){
if(res.status!==0){
 return layer.msg('登陆失败')
}
layer.msg('登陆成功')  
// 将登录成功后的token存储
localStorage.setItem('token',res.token)

location.href='/index.html'
}
)
})













    
})