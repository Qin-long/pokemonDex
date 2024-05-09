<template>
	<view class="container roundy-5 bgl-fly border-1 border-skyblue" v-if="data">
		<view class="flex-row text-center bg-white" style="width: 100%;">
			<view class="roundy-20 border-darkred border-1" style="width: 16%;">
				等级
			</view>
			<view class="roundy-20 border-darkred border-1" style="width: 16%;">
				招式
			</view>
			<view class="roundy-20 border-darkred border-1" style="width: 16%;">
				属性
			</view>
			<view class="roundy-20 border-darkred border-1" style="width: 16%;">
				分类
			</view>
			<view class="roundy-20 border-darkred border-1" style="width: 16%;">
				威力
			</view>
			<view class="roundy-20 border-darkred border-1" style="width: 16%;">
				命中
			</view>
		</view>
		<view v-for="(item,index) in data" :key="index" class="flex-row text-center bg-white font-size-25" style="width: 100%;">
			<view class=" border-darkred border-1" style="width: 16%;">
				{{item.level}}
			</view>
			<view class=" border-darkred border-1" style="width: 16%;">
				{{item.type}}
			</view>
			<view class=" border-darkred border-1" style="width: 16%;">
				{{item.category}}
			</view>
			<view class=" border-darkred border-1" style="width: 16%;">
				{{item.power}}
			</view>
			<view class=" border-darkred border-1" style="width: 16%;">
				{{item.accuracy}}
			</view>
			<view class=" border-darkred border-1" style="width: 16%;">
				{{item.pp}}
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name: "pokemon-skill",
		mounted() {
			console.log(this.data);
		},
		props: {
			data: {
				type: Array,
				default: {}
			}
		},
		data() {
			return {

			}
		}
	}
</script>

<style lang="scss" scoped>
	.container {
		width: 100vw;
		margin: 0 auto;
		overflow: auto;
		box-sizing: border-box;
	}
</style>
