<template>
	<view>
		<view class="search-box">
			<van-search ref="input" placeholder="请输入搜索关键词" use-action-slot @change="onChange" @search="onSearch"
				background="#4fc08d" :option1="searchType" :value="pokemon">
				<view slot="label">
					<van-dropdown-menu>
						<van-dropdown-item @change="changeType" :value="value" :options="searchType" />
					</van-dropdown-menu>
				</view>
				<view slot="action" @click="onClick">搜索</view>
			</van-search>
		</view>
		<view class="cell-bottom" v-if="searchResults">
			<van-cell v-for="(item,id) in searchResults" :label="item.desc" :key="id"
				:title="item.name_zh" is-link arrow-direction=""
				@click="toPokemondetail(item.id)">
				<template #default v-if="!(value==1|value==2)">
					<view v-if="value">
						<img class="img"
							:src="'https://images.weserv.nl/?url='+item.img_url"
							:alt="item.type">
					</view>
					<view v-else>
						<img class="img" :src="pkball" alt=""><span class="font-bold">{{item.index}}</span>
					</view>
				</template>
			</van-cell>
		</view>
	</view>
</template>

<script>
	export default {
		onLoad({index}) {
			console.log(index);
			this.value = Number(index)
		},
		data() {
			return {
				pkball: '../../static/精灵球 (1).png',
				// 搜索关键词
				pokemon: '',
				// 延时器的 timerId
				timer: null,
				//搜索结果列表
				searchResults: [],
				searchType: [{
						text: '精灵',
						value: 0,
						type: 'pokemon',
						page: 'pokemon-detail'
					},
					{
						text: '特性',
						value: 1,
						type: 'abilitys',
						page: 'ability'
					},
					{
						text: '招式',
						value: 2,
						type: 'moves',
						page: 'move'
					}, {
						text: '道具',
						value: 3,
						type: 'items',
					},
				],
				value: 0
			};
		},
		methods: {
			onSearch() {
				this.getPokemondetail()
			},
			onClick() {
				this.getPokemondetail()
			},
			onChange(e) {
				// 清除 timer 对应的延时器
				clearTimeout(this.timer)
				// 重新启动一个延时器，并把 timerId 赋值给 this.timer
				this.timer = setTimeout(() => {
					// 如果 500 毫秒内，没有触发新的输入事件，则为搜索关键词赋值
					this.pokemon = e.detail
					//调用发送请求方法
					this.getPokemondetail(e.detail)
				}, 500)
			},
			changeType(e) {
				// 清空数据
				this.searchResults = []
				//替换搜索类型
				this.value = e.detail
				// 清空输入框
				this.pokemon = ''
			},
			// 获取搜索结果
			async getPokemondetail() {
				// 判断是否为空
				if (this.pokemon.trim() === '') {
					uni.$showMsg("请输入搜索内容")
					return
				}
				try {
					const {
						data
					} = await uni.$http.get(`${this.searchType[this.value].type}/list`, {
						name_zh: this.pokemon
					})
					console.log();
					if (data.length===0) return uni.$showMsg("未检索到匹配项")
					this.searchResults = data
				} catch (err) {
					console.log(err);
					return uni.$showMsg("数据加载失败")
				}
			},
			toPokemondetail(id = '') {
				if(this.page==='item') return
				uni.navigateTo({
					url: `/subpkg/${this.searchType[this.value].page}/${this.searchType[this.value].page}?id= ${id}`
				})
			}
		}
	}
</script>

<style lang="scss">
	.img {
		position: absolute;
		right: 100rpx;
		width: 50rpx;
		height: 50rpx;
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

	.van-dropdown-menu {
		width: 15vw;
		height: 100% !important;
		box-shadow: 0 !important;
		background-color: rgba(255, 255, 255, 0) !important;
	}
</style>
