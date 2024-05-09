<template>
	<view>
		<van-cell :title="gen" is-link :arrow-direction="icon" @click="changStatu" />
		<van-cell v-for="(obj,id) in list" :key="id" is-link :title="obj.name_zh"  v-if="isShow"
			arrow-direction="" @click="goPokemondetail(obj.id)" >
			<template #default>
				<view>
					<img class="img" :src="pkball" alt=""><span class="font-bold">{{obj.index}}</span>
				</view>
			</template>
			</van-cell>
	</view>
</template>

<script>
	export default {
		name: "pokemon-list",
		props: {
			count: {
				default: '0'
			}
		},
		data() {
			return {
				pkball:'../../static/精灵球 (1).png',
				isShow: false,
				icon: 'up',
				list: [],
			};
		},
		computed: {
			gen() {
				return `第${this.count+1}世代`
			}
		},
		methods: {
			async getList(num) {
				try {
					const {
						data
					} = await uni.$http.get('pokemon/list', 
						{
							generation:num
						}
					)
					this.list = data
				} catch (error) {
					console.log(error);
					uni.$showMsg("数据加载错误")
				}
			},
			async changStatu() {
				try {
					this.getList(this.count + 1)
					if (this.icon == 'up') {
						this.icon = 'down'
					} else {
						this.icon = 'up'
					}
					this.isShow = !this.isShow
				} catch (err) {
					console.log(err);
					return 
				}
			},
			goPokemondetail(index) {
				console.log(index);
				uni.navigateTo({
					url: `/subpkg/pokemon-detail/pokemon-detail?index= ${index}`
				})
			},
		}
	}
</script>

<style lang="scss" scoped>
.img{
		position: absolute;
		right: 100rpx;
		width: 50rpx;
		height: 50rpx;
	}
</style>
