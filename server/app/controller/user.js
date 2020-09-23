'use strict';

const Controller = require('egg').Controller;

class UserController extends Controller {
	async register() {
		const { ctx } = this;
		// console.log("前端发来请求", this.ctx.request.body);
		// ctx.body = 'register66666666666666';
		ctx.body = await this.ctx.service.user.register(this.ctx.request.body);
	}
	async login() {
		const { ctx } = this;
		// ctx.body = 'register66666666666666';
		ctx.body = await this.ctx.service.user.login(this.ctx.request.body);
	}
	async verif() {
		const { ctx } = this;
		// ctx.body = 'register66666666666666';
		ctx.body = await this.ctx.service.user.verif();
	}
	async resetpwd() {
		const { ctx } = this;
		// ctx.body = 'resetpwd6666666666';
		console.log(this.ctx.request.body);
		ctx.body = await this.ctx.service.user.resetpwd(this.ctx.request.body);
	}
	async reset2() {
		const { ctx } = this;
		// ctx.body = 'resetpwd6666666666';
		console.log(this.ctx.request.body);
		ctx.body = await this.ctx.service.user.reset2(this.ctx.request.body);
	}
}


module.exports = UserController;