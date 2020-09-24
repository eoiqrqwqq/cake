<template>
	<div class="masg">
		<div class="masg-left">
			<p style="font-size: 18px;">{{arr[0].name}}</p>
			<p style="font-size: 12px;color: red;">{{arr[0].red}}</p>
			<p style="margin-top: 30px; font-size: 12px;">/最早发货时间为9月21日/</p>
			<p style="font-size: 12px;">/截止下单时间为10月3日/</p>
			<p style="font-size: 12px;">/发货日期截止为10月5日，发货前两天不予退订修改/</p>
		</div>
		<div class="mas-right">
			<p style="font-size: 24px;color: #C69C6D; margin-bottom: 20px;">￥{{arr[0].smallprice}}/{{arr[0].smallweight}}g({{arr[0].smallnum}}{{arr[0].unit}})</p>
			<span style="margin-right: 10px;font-size: 14px;">适合{{arr[0].smallnum}}人分享</span><span style="font-size: 14px;">最早明天09:30配送</span><br>
			<div style="margin-top: 20px;">
				<span style="margin-right:10px ;font-size: 14px; ">商品规格</span><button style="margin-right: 20px;" @click="fn1">{{num}}{{arr[0].unit}}</button><button
				 @click="fn2">{{arr[0].bignum}}{{arr[0].unit}}</button>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				arr: this.$parent._data.arr1,
				price: this.$parent._data.arr1[0].smallprice,
				num: this.$parent._data.arr1[0].smallnum,
				weight: this.$parent._data.arr1[0].smallweight,
			}
		},
		props: ["detail"],
		methods: {
			fn1() {
				this.arr[0].smallweight = this.weight
				this.arr[0].smallnum = this.num
				this.arr[0].smallprice = this.price
			},
			fn2() {
				this.arr[0].smallweight = this.arr[0].bigweight
				this.arr[0].smallnum = this.arr[0].bignum
				this.arr[0].smallprice = this.arr[0].bigprice
			}
		}
	}
</script>

<style scoped="scoped">
	.masg {
		width: 1000px;
		margin: 0 auto;
		position: relative;
	}

	.masg-left {
		position: absolute;
		left: 0;
		text-align: left;
	}

	.mas-right {
		position: absolute;
		right: 200px;
	}

	span {
		color: #684029;
	}

	p {
		color: #684029;
	}

	button {
		background-color: white;
		height: 28px;
		width: 48px;
		border: 1px solid #684029;
		padding: 0 5px;
		cursor: pointer;
	}
</style>
