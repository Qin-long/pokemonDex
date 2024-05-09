<template>
	<view class="card-container border-darkred border-1 roundy-20 bgl-fire">
		<view class="pk-name" style="width: 95%;margin: 0 auto;">
			<div class="bg-white roundy-20 padding-5 text-center">
				<p>{{data.moves.name_zh}}</p>
				<p>{{data.moves.name_en}}{{data.moves.name_ja}}</p>
			</div>
			<div class="bg-white roundy-20 padding-10 text-center">{{getPokemonIndex()}}</div>
		</view>
		<view style="height:2vw" />
		<view class="flex_direction text-center  border-darkred border-1 roundy-20" style="width: 95%;margin: 0 auto;">
			<view style="height:1vw" />
			<view class="flex-row" style="width: 100%;">
				<view class="roundy-20 border-darkred border-1" style="width: 20%;">
					属性
				</view>
				<view class="roundy-20 border-darkred border-1" style="width: 20%;">
					分类
				</view>
				<view class="roundy-20 border-darkred border-1" style="width: 20%;">
					威力
				</view>
				<view class="roundy-20 border-darkred border-1" style="width: 20%;">
					命中
				</view>
				<view class="roundy-20 border-darkred border-1" style="width: 20%;">
					pp
				</view>
			</view>
			<view class="flex-row bg-white roundy-20 border-darkred border-1" style="width: 100%;">
				<view class="roundy-20 border-darkred border-1" style="width: 20%;">
					{{data.moves.type}}
				</view>
				<view class="roundy-20 border-darkred border-1" style="width: 20%;">
					{{data.moves.category}}
				</view>
				<view class="roundy-20 border-darkred border-1" style="width: 20%;">
					{{data.moves.power}}
				</view>
				<view class="roundy-20 border-darkred border-1" style="width: 20%;">
					{{data.moves.accuracy}}
				</view>
				<view class="roundy-20 border-darkred border-1" style="width: 20%;">
					{{data.moves.pp}}
				</view>
			</view>
		</view>
		<view style="height:2vw" />
		<view class="max-Widht roundy-20" v-show="data.details.imgUrl">
			<view>
				<img referrerPolicy="no-referrer|origin|unsafe-url" class="pokemon-img" v-if="data.details.imgUrl"
					:src="'https://images.weserv.nl/?url='+data.details.imgUrl">
			</view>
			<view class="text-black padding-bottom-2 pokemon-icon">
				<span>&#xe853; </span><span class="text-black">招式演示</span>
			</view>
		</view>
		<view style="height:2vw" />
		<view class="flex-direction max-Widht text-center">
			<view class="flex-row-around ">
				<p class="widht-25 bg-white height-100 border-darkred border-1 roundy-20">技能描述</p>
				<p class="widht-70 bg-white border-darkred border-1 roundy-20">{{data.details.desc}}</p>
			</view>
			<view class="flex-row-around ">
				<p class="widht-25 bg-white height-100 border-darkred border-1 roundy-20">技能类型</p>
				<p class="widht-70 bg-white border-darkred border-1 roundy-20">{{data.details.notes}}</p>
			</view>
			<view class="flex-row-around ">
				<p class="widht-25 bg-white height-100 border-darkred border-1 roundy-20">追加效果</p>
				<p class="widht-70 bg-white border-darkred border-1 roundy-20">{{data.details.effect}}</p>
			</view>
			<view class="flex-row-around ">
				<p class="widht-25 bg-white height-100 border-darkred border-1 roundy-20">作用范围</p>
				<p class="widht-70 bg-white border-darkred border-1 roundy-20">{{data.details.scope}}</p>
			</view>
		</view>
		<view style="height:5vw" />
		<view class="text-center text-black padding-bottom-2 pokemon-icon">
			<span>&#xe853; </span><span class="text-black">所属第{{data.moves.generation}}世代</span>
		</view>
	</view>
</template>

<script>
	export default {
		onLoad({
			id = '',
			form = '',
			name_zh = ''
		}) {
			console.log(id, form, name_zh);
			this.getMovetail(id)
		},
		data() {
			return {
				data: {
					moves: {

					},
					details: {

					}
				}
			};
		},
		methods: {
			async getMovetail(id) {
				try {
					const {
						data
					} = await uni.$http.get("moves/detail", {
						id
					})
					this.data = {
						moves: data.moves[0],
						details: data.details[0]
					}
				} catch (err) {
					uni.$showMsg('数据加载失败')
					console.log(err);
				}
			},
			getPokemonIndex() {
				if (!this.data.moves.id) return;
				if (this.data.moves.id <= 9) {
					return `#000${this.data.moves.id}`;
				} else if (this.data.moves.id <= 99) {
					return `#00${this.data.moves.id}`;
				} else if (this.data.moves.id <= 999) {
					return `#0${this.data.moves.id}`;
				} else if (this.data.moves.id <= 9999) {
					return `#${this.data.moves.id}`;
				}
			}
		}
	}
</script>

<style lang="scss" scoped>
	.card-container {
		width: 95vw;
		margin: 0 auto;

		.flex-row-around {
			display: flex;
			flex-direction: row;
			justify-content: space-between;
			align-items: center;
		}

		.widht-70 {
			width: 70%;
		}

		.widht-25 {
			width: 25%;
		}

		.height-25 {
			height: 20%;
		}

		.height-100 {
			height: 80%;
			line-height: 90rpx;
		}

		.pk-name {
			height: 10vh;
			display: flex;
			justify-content: space-between;
			// flex: 6 4;
			font-weight: bolder;
			align-items: center;
		}

		.max-Widht {
			width: 95%;
			margin: 0 auto;
		}

		.pokemon-img {
			width: 100%;
			height: 400rpx;
		}
	}
</style>
