<template>
	<!-- <view v-if="pokemon"> -->
	<!-- 宝可梦信息卡片 -->
	<view v-if="data">
		<pokemon-card :data="data" />
		<view style="height: 1vh;">
			
		</view>
		 <!-- 宝可梦种族值信息卡片 -->
		<h4><span class="pokemon-icon">&#xe853; </span>种族值</h4>
		<pokemon-basevalue :data="data"/>
		<view style="height: 1vh;">
			
		</view>
		 <!-- 宝可梦属性相克 -->
		<h4><span class="pokemon-icon">&#xe853; </span>属性克制</h4>
		<TypeRelation-Card :data="data"/>
		<view style="height: 5vh;">
			
		</view>
	</view>
	
	
</template>

<script>
	export default {
		onLoad(options) {
			const {query,form} = options
			this.getPokemondetail(query,form)
		},
		data() {
			return {
				isLabel: true,
				data: '',
				index: ''
			}
		},
		methods: {
			async getPokemondetail(index,form) {
				try {
					const {
						data
					} = await uni.$http.get("pokemon/detail", {
						index,form
					})
					this.data = data[0]
				} catch (err) {
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

	table {
		width: 100%;
	}

	.table-fixed {
		table-layout: fixed;
	}

	.pokemon-img {
		width: 100%;
	}

	@media screen and (max-width: 600px) {
		.card-container {
			width: 90vw;
			margin-left: auto;
			margin-right: auto;
		}
	}
</style>
