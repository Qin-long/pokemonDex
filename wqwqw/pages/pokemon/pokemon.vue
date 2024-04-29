<template>
	<view>
		<!-- <image class="bag" src="../../static/222.jpg" mode=""></image> -->
		<van-search shape="round" placeholder="请输入搜索关键词" use-action-slot show-action @change="onChange"
			 class="search-box">
			<view slot="action" @click="onClick">搜索</view>
		</van-search>
		<view class="cell-bottom">
			<pokemon-list v-for="(item,index) in dafaultList" :key="index"  :count="index" />
		</view>
	</view>
</template>

<script>
	export default {
		onLoad() {},
		data() {
			return {
				dafaultList: 9,
			};
		},
		methods: {
			onClick(){
				uni.navigateTo({
					url:'/subpkg/search/search?index=0'
				})
			}
		},
		computed: {},

	}
</script>

<style>
	.bag {
		height: 100vh;
		width: 100vw;
	}

	.search-box {
		position: fixed;
		width: 100vw;
		top: 0;
		z-index: 999;
	}

	.cell-bottom {
		margin-top: 100rpx;
	}
</style>
