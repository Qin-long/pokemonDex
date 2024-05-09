<template>
	<view>
		<!-- <image class="bag" src="../../static/baby/11.jpg" mode=""></image> -->
		<van-search shape="round" placeholder="请输入搜索关键词" use-action-slot show-action @change="onChange"
			@search="onSearch" class="search-box">
			<view slot="action" @click="onClick">搜索</view>
		</van-search>
		<view class="cell-bottom">
			<van-cell v-for="(item,index) in list"  :key="index" :title="item.name_zh" is-link
				arrow-direction="" @click="toAbilitytail(item.id)">
			</van-cell>
		</view>
	</view>

</template>

<script>
	export default {
		onLoad() {
			this.getAbilitylist()
		},
		data() {
			return {
				list: [],
				query: {
					page: 0,
					size: 20
				},
				isloading: false,
			}
		},
		computed: {
			total() {
				return this.list.length
			}
		},
		methods: {
			onChange(e) {
			 this.value = e.detail
			},
			onSearch() {
				Toast(`搜索${this.value}`)
			},
			onClick() {
				uni.navigateTo({
					url:'/subpkg/search/search?index=1'
				})
			},
			async getAbilitylist() {
				this.isloading = true
				try {
					const {
						data
					} = await uni.$http.get('abilitys/list', this.query)
					this.isloading = false
					this.list = [...this.list,...data]
				} catch (e) {
					uni.$showMsg('数据加载失败')
					console.log(e);
					//TODO handle the exception
				}
			},
			toAbilitytail(index){
				uni.navigateTo({
					url:'/subpkg/ability/ability?id='+index
				})
			},
			// 触底加载
			onReachBottom() {
				// 判断是否还有下一页数据
				if (this.query.page * this.query.size > this.total) return uni.$showMsg('数据加载完毕！')
				// 判断是否正在请求其它数据，如果是，则不发起额外的请求
				if (this.isloading) return
				// 让页码值自增 +1
				this.query.page += 1
				// 重新获取列表数据
				this.getAbilitylist()
			}
		}
	}
</script>

<style lang="scss" scoped>
	.search-box {
		position: fixed;
		width: 100vw;
		top: 0;
		z-index: 999;
	}

	.van-cell__label {
		width: 95vw;
		// 文字不允许换行（单行文本）
		white-space: nowrap;
		// 溢出部分隐藏
		overflow: hidden;
		// 文本溢出后，使用 ... 代替
		text-overflow: ellipsis;
	}

	.bag {
		height: 100vh;
		width: 100vw;
	}

	.cell-bottom {
		margin-top: 100rpx;
	}
</style>
