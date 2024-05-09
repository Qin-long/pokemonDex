<template>
	<view v-if="data.ability" class="card-container border-darkred border-1 roundy-20 bgl-fire">
		<view class="pk-name" style="width: 95%;margin: 0 auto;">
			<div class="bg-white roundy-20 padding-5 text-center">
				<p>{{data.ability.name_zh}}</p>
				<p>{{data.ability.name_en}}{{data.ability.name_ja}}</p>
			</div>
			<div class="bg-white roundy-20 padding-10 text-center">{{getPokemonIndex()}}</div>
		</view>
		<view class="max-Widht bg-white roundy-20 padding-10 ">
			<view style="box-sizing: border-box;">
				{{data.details.effect}}
			</view>
		</view>
		<view style="height:2vw" />
		<view v-if="data" class=" flex-column border-darkred border-1 roundy-20" style="width: 95%;margin: 0 auto;">
			<p class="text-center">可拥有该特性的精灵</p>
			<van-cell class="text-white bg-white" v-for="(item,index) in pokemons" :key="index" :title="item"
				style="width: 100%;" is-link arrow-direction="" @click="goPokemondetail(item)">
				<template #default>
					<view>
						<img class="img" :src="pkball" alt=""><span class="font-bold">{{obj.index}}</span>
					</view>
				</template>
			</van-cell>
		</view>
		<li class="text-center">所属第{{data.ability.generation}}世代</li>
		<view style="height:4vw" />
	</view>
</template>

<script>
	export default {
		onLoad({
			id
		}) {
			this.getAbilitytail(id)
		},
		data() {
			return {
				data: {
					ability: {

					},
					details: {

					}
				},
				pkball: '../../static/精灵球 (1).png',
			};
		},
		computed: {
			pokemons() {
				if (this.data.details.pokemons) {
					let valArr = this.data.details.pokemons.split(',');
					return valArr
				}
			}
		},
		methods: {
			async getAbilitytail(id) {
				try {
					const {
						data
					} = await uni.$http.get("abilitys/detail", {
						id
					})
					this.data.ability = data.ability[0]
					this.data.details = data.details[0]
				} catch (err) {
					uni.$showMsg('数据加载失败')
					console.log(err);
				}
			},
			getPokemonIndex() {
				if (!this.data.ability.id) return;
				if (this.data.ability.id <= 9) {
					return `#000${this.data.ability.id}`;
				} else if (this.data.ability.id <= 99) {
					return `#00${this.data.ability.id}`;
				} else if (this.data.ability.id <= 999) {
					return `#0${this.data.ability.id}`;
				} else if (this.data.ability.id <= 9999) {
					return `#${this.data.ability.id}`;
				}
			},
			goPokemondetail(name_zh) {
				uni.navigateTo({
					url: `/subpkg/pokemon-detail/pokemon-detail?name_zh=${name_zh}`
				})
			},
		}
	}
</script>

<style lang="scss">
	.margin-block {
		margin-top: 1vh;
	}

	.img {
		position: absolute;
		right: 100rpx;
		width: 50rpx;
		height: 50rpx;
	}

	.card-container {
		width: 95vw;
		margin: 0 auto;

		.pk-name {
			height: 10vh;
			display: flex;
			justify-content: space-between;
			// flex: 6 4;
			font-weight: bolder;
			align-items: center;
		}

		.max-Widht {
			width: 85%;
			margin: 0 auto;
		}
	}
</style>
