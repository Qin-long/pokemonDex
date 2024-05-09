<template>
	<!-- <view v-if="pokemon"> -->
	<!-- 宝可梦信息卡片 -->
	<view v-if="data">
		<pokemon-card :data="data.pokemonDetail" />
		<view style="height: 1vh;"/>
		<!-- 宝可梦种族值信息卡片 -->
		<view><span class="pokemon-icon">&#xe853; </span>种族值</view>
		<pokemon-basevalue :data="data.baseStat[0]" />
		<view style="height: 1vh;"/>
		<!-- 宝可梦属性相克 -->
		<view><span class="pokemon-icon">&#xe853; </span>属性克制</view>
		<TypeRelation-Card :data="data.pokemonDetail" />
		<view style="height: 1vh;"/>
			<!-- 宝可梦属性相克 -->
			<view><span class="pokemon-icon">&#xe853; </span>可学会招式表</view>
			<pokemon-skill :data="data.learnSetLevelingUp" />
			<view style="height: 5vh;" />
		</view>
	</view>


</template>

<script>
	export default {
		onLoad({index='',name_zh=''}) {
			console.log(name_zh);
			this.getPokemondetail(index,name_zh)
		},
		data() {
			return {
				isLabel: true,
				data: '',
				index: ''
			}
		},
		methods: {
			async getPokemondetail(idx,name_zh) {
				try {
					const {
						data
					} = await uni.$http.get("pokemon/detail", {
						idx,name_zh
					})
					this.data = data
				} catch (err) {
					uni.$showMsg('数据加载失败')
					console.log(err);
				}
			}
		}
	}
</script>

<style lang="scss" scoped>
	.card-container {
		width: 500px;
		min-width: 320px;
	}


	.pokemon-img {
		width: 100%;
	}
</style>
