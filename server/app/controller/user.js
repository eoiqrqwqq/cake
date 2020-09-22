'use strict';
const Controller = require('egg').Controller;
const fs = require("fs")
const path = require("path")
class UserController extends Controller {
	// async userinfo(){
	//   // console.log(this.ctx.session.email,6666666)
	//   var result=await this.ctx.service.user.userinfo()
	//   this.ctx.body=result
	// }
	async login() {
		const {ctx} = this;
		console.log(this.ctx.request.query)
		// console.log("longin11111111111")
		  // var result=await this.ctx.service.user.login(this.ctx.request.body)
		//    if(result[0]){
		//      //验证通过,用户输入正确,通知浏览器做cookie缓存HQYJ:乱码xxx
		//         this.ctx.session.email=this.ctx.request.body.email
		//         this.ctx.body={code:2002,info:result[0]}
		//    }else{
		//         this.ctx.body={code:4003,info:"密码或账号错误"}
	}

	// }
	async register() {
		const {ctx} = this;
		// console.log(this.ctx.session.verif)
		// console.log(this.ctx.request.query,this.ctx.request.files,this.ctx.request.body)
		//处理前端发送过来的数据
		// if(this.ctx.request.files){
		// var filename1=path.basename(this.ctx.request.files[0].filepath)
		// var oldpath=`${this.ctx.request.files[0].filepath}`
		// var newpath=`${__dirname}/../public/upload/${filename1}`
		// fs.renameSync(oldpath,newpath)
		// var imgurl=`http://192.168.3.113:7001/public/upload/${filename1}`
		// this.ctx.request.body.img=imgurl
		//把处理之后的数据传给service的工具函数  让它去处理  把处理的结果发给前端
		// this.ctx.body =   await this.ctx.service.user.register(this.ctx.request.body)
	}
// async verif(){
//   // console.log("生成的验证码对象",data)
//       //把生成的验证码里面的文字缓存起来(保存到后端的内存变量中的)

//   this.ctx.body=await this.ctx.service.user.verif()

// }
}
module.exports = UserController;
