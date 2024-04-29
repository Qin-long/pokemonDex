<template>
	<view class="card-container border-darkred border-1 roundy-20 bg-fire" v-if="data">
		<view class="pk-name max-Widht">
			<div class="bg-white roundy-20 padding-5 text-center">
				<p>{{data.nameZh}}</p>
				<p>{{data.nameEn}}{{data.nameJa}}</p>
			</div>
			<div class="bg-white roundy-20 padding-10 text-center">{{getPokemonIndex()}}</div>
		</view>
		<view class="max-Widht bg-white roundy-20">
			<view>
				<img referrerPolicy="no-referrer|origin|unsafe-url" class="pokemon-img" v-if="data.detail.imgUrl"
					:src="'https://images.weserv.nl/?url='+data.detail.imgUrl"
					>
			</view>
			<view class="text-center padding-bottom-2">
				官方绘图
			</view>
		</view>
		<view style="height:1vw" />
		<view class=" block bgl-fire roundy-20 border-darkred border-1 ">
			<view class="block-left roundy-20">
				<p class=" font-bold margin-block">属性</p>
				<view class="bg-white roundy-20 block_container absulote_center">
					<span>{{data.type1}}</span><span v-show="data.type2">和</span><span>{{data.type2}}</span>
				</view>
			</view>
			<view class="block-right roundy-20">
				<p class=" font-bold margin-block">分类</p>
				<view class="block_container bg-white roundy-20 absulote_center">
					{{data.detail.category}}
				</view>
			</view>
		</view>
		<view style="height:1vw" />
		<view class=" block-center bgl-fire roundy-20 border-darkred border-1 ">
			<p class="text-white font-bold margin-block">特性</p>
			<view class="absulote_center block_container margin-center">
				<view class="block-left  roundy-20">
					<view class="bg-white roundy-20 max-height absulote_center">
						<span>{{data.ability1}}</span><span v-show="data.ability2">和</span><span>{{data.ability2}}</span>
					</view>
				</view>
				<view class="block-right  roundy-20">
					<view class=" flex-column bg-white roundy-20 max-height absulote_center">
						<view v-show="data.abilityHide">
							{{data.abilityHide}}
						</view>
						<br>
						<view class="font-size-20">
							隐藏特性
						</view>
					</view>
				</view>
			</view>
		</view>
		<view style="height:1vw" />
		<view class=" block-center bgl-fire roundy-20 border-darkred border-1 ">
			<p class="text-white font-bold margin-block ">培育</p>
			<view class="absulote_center block_container margin-center">
				<view class="block-left  roundy-20">
					<view class="bg-white roundy-20 max-height absulote_center">
						<span>{{data.detail.eggGroup1}}</span><span v-show="data.detail.eggGroup2">和</span><span v-show="data.detail.eggGroup2">{{data.detail.eggGroup1}}</span>
					</view>
				</view>
				<view class="block-right  roundy-20">
					<view class="flex-column bg-white roundy-20 max-height absulote_center">
						<view>
							孵化步数
						</view>
						<view>
							{{data.detail.hatchTime}}
						</view>
					</view>
				</view>
			</view>
		</view>
		<view style="height:1vw" />
		<view class="block bgl-fire roundy-20 border-darkred border-1 ">
			<view class="block-left roundy-20">
				<p class=" font-bold margin-block">身高</p>
				<view class="bg-white roundy-20 block_container absulote_center">
					{{data.detail.height}}
				</view>
			</view>
			<view class="block-right roundy-20">
				<p class=" font-bold margin-block">体重</p>
				<view class="block_container bg-white roundy-20 absulote_center">
					{{data.detail.weight}}
				</view>
			</view>
		</view>
		<view style="height:1vw" />
		<view class=" block bgl-fire roundy-20 border-darkred border-1 ">
			<view class="block-left roundy-20">
				<p class=" font-bold margin-block">体型</p>
				<view class="bg-white roundy-20 block_container absulote_center">
					<img referrerPolicy="no-referrer|origin|unsafe-url" style="width: 4vh;height: 4vh;"  v-if="data.detail.bodyStyle"
						:src="'https://images.weserv.nl/?url='+data.detail.bodyStyle" alt="">
				</view>
			</view>
			<view class="block-right roundy-20">
				<p class=" font-bold margin-block">捕获率</p>
				<view class="block_container bg-white roundy-20 absulote_center">
					{{data.detail.catchRate}}
				</view>
			</view>
		</view>
		<li class="text-center">所属第一世代</li>
	</view>
</template>

<script>
	export default {
		name: "pokemon-card",
		props:{
			data:{
				type:Object,
				default:''
			}
		},
		data() {
			return {
				lable: "属性",
				color: "#fff",
			}
		},
		methods: {
			getPokemonIndex() {
			      if (!this.data?.index) return;
			      if (this.data.index <= 9) {
			        return `#000${this.data.index}`;
			      } else if (this.data.index <= 99) {
			        return `#00${this.data.index}`;
			      } else if (this.data.index <= 999) {
			        return `#0${this.data.index}`;
			      } else if (this.data.index <= 9999) {
			        return `#${this.data.index}`;
			      }
			    },
		},
		computed:{
			// pokemonImage(){
			// 	return this.data.detail.imgUrl
			// },
			// bodyImage(){
			// 	return this.data.detail.bodyStyle
			// }
		}
	}
</script>

<style lang="scss" scoped>
	.margin-block {
		margin-top: 1vh;
	}

	.max-height {
		height: 100%;
	}

	.block_container {
		width: 95%;
		height: 55%;
		margin-top: 0.5vh;
	}

	.absulote_center {
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.margin-center{
		margin: 0 auto;
	}
	.flex-column {
		display: flex;
		flex-direction: column;
	}

	.max-Widht {
		width: 95%;
		margin: 0 auto;
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

		.block {
			display: flex;
			flex-direction: row;
			height: 10vh;
			text-align: center;
			width: 93%;
			margin: 0 auto;

			.block-left {
				width: 47.5%;
				margin-left: 2.5%;

			}

			.block-right {
				width: 47.5%;
				margin-left: 2.5%;

			}
		}

		.block-center {
			display: flex;
			flex-direction: column;
			height: 10vh;
			text-align: center;
			width: 93%;
			margin: 0 auto;

			.block-left {
				width: 50%;
				height: 100%;
				margin-right: 2.5%;

			}

			.block-right {
				width: 50%;
				height: 100%;
				margin-left: 2.5%;

			}
		}
	}

	.pokemon-img {
		width: 100%;
		height: 630rpx;
	}
</style>
