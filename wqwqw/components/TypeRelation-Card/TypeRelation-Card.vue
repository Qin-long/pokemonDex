<template>
	<view class="container bgl-fire roundy-10 border-1 border-skyblue">
		<view>
			<view>
				<view class="flex-row text-center" h>
					<view class="border-1 border-black" style="width: 20%;">对手属性</view>
					<!--<view>作为攻击方时</view> -->
					<view class="border-1 border-black" style="width: 79%;">作为防守方时</view>
				</view>
			</view>
			<view class="text-center bg-white">
				<view v-for="(item, index) in typeOrder" class="flex-row" :key="index">
					<view class="text-white border-1 border-black" :class="item.color" style="width: 20%;">
						{{item.text}}
					</view>
					<view :class="{'font-bold': defenderRate[index]!=1, 'bg-green': defenderRate[index]<1,
                    'bg-red': defenderRate[index]>1 , 'border-1 border-black':true}" style="width: 79%;">
						{{defenderRate[index]}}x
					</view>
				</view>
			</view>
			<view>
				<view height="50">
					<view colspan="2" class="font-bold font-size-20 text-center tips">
						宝可梦特性效果不计算在内,请自行考虑。
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name: "TypeRelation-Card",
		props: {
			data: {
				type: Object,
				default: ''
			}
		},
		data() {
			return {
				typeOrder: [{
						text: '一般',
						color: 'bg-common'
					},
					{
						text: '格斗',
						color: 'bg-fighting'
					},
					{
						text: '飞行',
						color: 'bg-fly'
					},
					{
						text: '毒',
						color: 'bg-poison'
					},
					{
						text: '地面',
						color: 'bg-ground'
					},
					{
						text: '岩石',
						color: 'bg-stone'
					},
					{
						text: '虫',
						color: 'bg-bug'
					},
					{
						text: '幽灵',
						color: 'bg-ghost'
					},
					{
						text: '钢',
						color: 'bg-steel'
					},
					{
						text: '火',
						color: 'bg-fire'
					},
					{
						text: '水',
						color: 'bg-water'
					},
					{
						text: '草',
						color: 'bg-grass'
					},
					{
						text: '电',
						color: 'bg-electric'
					},
					{
						text: '超能',
						color: 'bg-psychic'
					},
					{
						text: '冰',
						color: '.bg-ice'
					},
					{
						text: '龙',
						color: 'bg-dragon'
					},
					{
						text: '恶',
						color: 'bg-dark'
					},
					{
						text: '妖精',
						color: 'bg-fairy'
					}
				], //属性顺序
				typeRelation: [ //二维数组 横纵坐标按typeOrder的顺序排列各个宝可梦属性 数值为伤害倍率
					[1, 1, 1, 1, 1, .5, 1, 0, .5, 1, 1, 1, 1, 1, 1, 1, 1, 1],
					[2, 1, .5, .5, 1, 2, .5, 0, 2, 1, 1, 1, 1, .5, 2, 1, 2, .5],
					[1, 2, 1, 1, 1, .5, 2, 1, .5, 1, 1, 2, .5, 1, 1, 1, 1, 1],
					[1, 1, 1, .5, .5, .5, 1, .5, 0, 1, 1, 2, 1, 1, 1, 1, 1, 2],
					[1, 1, 0, 2, 1, 2, .5, 1, 2, 2, 1, .5, 2, 1, 1, 1, 1, 1],
					[1, .5, 2, 1, .5, 1, 2, 1, .5, 2, 1, 1, 1, 1, 2, 1, 1, 1],
					[1, .5, .5, .5, 1, 1, 1, .5, .5, .5, 1, 2, 1, 2, 1, 1, 2, .5],
					[0, 1, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 2, 1, 1, .5, 1],
					[1, 1, 1, 1, 1, 2, 1, 1, .5, .5, .5, 1, .5, 1, 2, 1, 1, 2],
					[1, 1, 1, 1, 1, .5, 2, 1, 2, .5, .5, 2, 1, 1, 2, .5, 1, 1],
					[1, 1, 1, 1, 2, 2, 1, 1, 1, 2, .5, .5, 1, 1, 1, .5, 1, 1],
					[1, 1, .5, .5, 2, 2, .5, 1, .5, .5, 2, .5, 1, 1, 1, .5, 1, 1],
					[1, 1, 2, 1, 0, 1, 1, 1, 1, 1, 2, .5, .5, 1, 1, .5, 1, 1],
					[1, 2, 1, 2, 1, 1, 1, 1, .5, 1, 1, 1, 1, .5, 1, 1, 0, 1],
					[1, 1, 2, 1, 2, 1, 1, 1, .5, .5, .5, 2, 1, 1, .5, 2, 1, 1],
					[1, 1, 1, 1, 1, 1, 1, 1, .5, 1, 1, 1, 1, 1, 1, 2, 1, 0],
					[1, .5, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 2, 1, 1, .5, .5],
					[1, 2, 1, .5, 1, 1, 1, 1, .5, .5, 1, 1, 1, 1, 1, 2, 2, 1],
				],
				atkerRate: [], //作为攻击方的倍率
				defenderRate: [], //作为防守方的倍率
			}
		},
		methods: {
			/* 计算各属性之间的伤害倍率 */
			getRateOfType(isAtker) {
				let type1 = [];
				const typeList = this.typeOrder.map((t, index) => {
					return t.text
				})
				if (isAtker) {
					type1 = this.typeRelation[typeList.indexOf(this.data.type1)];
					//判断该宝可梦是否只有单一属性
					if (this.data.type2) {
						let type2 = this.typeRelation[typeList.indexOf(this.data.type2)];
						this.atkerRate = this.multiplyArrays(type1, type2);
					} else {
						this.atkerRate = type1;
					}
				} else {
					type1 = this.typeRelation.map((t) => {
						return t[typeList.indexOf(this.data.type1)]
					});
					//判断该宝可梦是否只有单一属性
					if (this.data.type2) {
						let type2 = this.typeRelation.map((t) => {
							return t[typeList.indexOf(this.data.type2)]
						});
						this.defenderRate = this.multiplyArrays(type1, type2);
					} else {
						this.defenderRate = type1;
					}
				}

			},

			/* 计算两个数组相乘的结果，各位置数值相乘得到结果 */
			multiplyArrays(a, b) {
				let c = [];
				for (var i = 0; i <= a.length; i++) {
					c.push(a[i] * b[i]);
				}
				return c;
			}
		},
		mounted() {
			this.getRateOfType(true)
			this.getRateOfType(false)
		}
	}
</script>

<style lang="scss" scoped>
	.container {
		width: 95vw;
		margin: 0 auto;
		overflow: auto;
		box-sizing: border-box;
	}

	table {
		border-collapse: collapse;
		width: 100%;
	}

	tr {
		border-bottom: 1px solid rgba(0, 0, 0, 0.2);
	}

	td {
		border-left: 1px solid rgba(0, 0, 0, 0.2);
	}
</style>
