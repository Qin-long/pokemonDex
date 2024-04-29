<template>
	<view class="container border-darkred border-1 roundy-10 bgl-fire .font-size-13" v-if="data">
		<view class="flex-row text-center" style="height: 10vh;">
			<view class="" style="width: 60%;">
				种族值
			</view>
			<view class="" style="width: 40%; height: 100%;">
				<view class="border-1 border-black flex" style="height: 70%;">
					<p>能力值范围</p>
					<p>基础点数</p>
				</view>
				<view class="flex-row border-1 border-black" style="height: 25%;">
					<view class="" style="width: 47%;height: 100%;">
						lv50
					</view>
					<view style="width: 1rpx;background-color:rgba(0, 0, 0, 0.5); height: 100%;" />
					<view class="" style="width: 50%;">
						lv100
					</view>
				</view>
			</view>
		</view>
		<view class="flex-row text-center bg-hp ">
			<view class="" style="width: 25%;">
				<span>HP:</span><span>{{data.baseStat.hp}}</span>
			</view>
			<view class="border-1 border-black" style="width: 34%;">
				<view class="value-bar bg-hp-bar border-black border-1 margin-5"
					:style="{width: `${data.baseStat.hp/2.57}%`}" />
			</view>
			<view class="" style="width: 19%;">
				{{getValueMaxOrMin(data.baseStat.hp, 50, true, false)}}
				-
				{{getValueMaxOrMin(data.baseStat.hp, 50, true, true)}}
			</view>
			<view style="width: 1rpx;background-color:rgba(0, 0, 0, 0.5); height: 50rpx;" />
			<view class="" style="width: 20%;">
				{{getValueMaxOrMin(data.baseStat.hp, 100, true, false)}}
				-
				{{getValueMaxOrMin(data.baseStat.hp, 100, true, true)}}
			</view>
		</view>
		<view class="flex-row text-center bg-attack ">
			<view class="" style="width: 25%;">
				<span>物攻:</span><span>{{data.baseStat.attack}}</span>
			</view>
			<view class="border-1 border-black" style="width: 34%;">
				<view class="value-bar bg-attack-bar border-black border-1 margin-5"
					:style="{width: `${data.baseStat.attack/2.57}%`}" />
			</view>
			<view class="" style="width: 19%;">
				{{getValueMaxOrMin(data.baseStat.attack, 50, false, false)}}
				-
				{{getValueMaxOrMin(data.baseStat.attack, 50, false, true)}}
			</view>
			<view style="width: 1rpx;background-color:rgba(0, 0, 0, 0.5); height: 50rpx;" />
			<view class="" style="width: 20%;">
				{{getValueMaxOrMin(data.baseStat.attack, 100, false, false)}}
				-
				{{getValueMaxOrMin(data.baseStat.attack, 100, false, true)}}
			</view>
		</view>
		<view class="flex-row text-center bg-defense ">
			<view class="" style="width: 25%;">
				<span>物防:</span><span>{{data.baseStat.defense}}</span>
			</view>
			<view class="border-1 border-black" style="width: 34%;">
				<view class="value-bar bg-defense-bar border-black border-1 margin-5"
					:style="{width: `${data.baseStat.defense/2.57}%`}" />
			</view>
			<view class="" style="width: 19%;">
				{{getValueMaxOrMin(data.baseStat.defense, 50, false, false)}}
				-
				{{getValueMaxOrMin(data.baseStat.defense, 50, false, true)}}
			</view>
			<view style="width: 1rpx;background-color:rgba(0, 0, 0, 0.5); height: 50rpx;" />
			<view class="" style="width: 20%;">
				{{getValueMaxOrMin(data.baseStat.defense, 100, false, false)}}
				-
				{{getValueMaxOrMin(data.baseStat.defense, 100, false, true)}}
			</view>
		</view>
		<view class="flex-row text-center bg-sp-attack ">
			<view class="" style="width: 25%;">
				<span>特攻:</span><span>{{data.baseStat.spAttack}}</span>
			</view>
			<view class="border-1 border-black" style="width: 34%;">
				<view class="value-bar bg-sp-attack-bar border-black border-1 margin-5"
					:style="{width: `${data.baseStat.spAttack/2.57}%`}" />
			</view>
			<view class="" style="width: 19%;">
				{{getValueMaxOrMin(data.baseStat.spAttack, 50, false, false)}}
				-
				{{getValueMaxOrMin(data.baseStat.spAttack, 50, false, true)}}
			</view>
			<view style="width: 1rpx;background-color:rgba(0, 0, 0, 0.5); height: 50rpx;" />
			<view class="" style="width: 20%;">
				{{getValueMaxOrMin(data.baseStat.spAttack, 100, false, false)}}
				-
				{{getValueMaxOrMin(data.baseStat.spAttack, 100, false, true)}}
			</view>
		</view>
		<view class="flex-row text-center bg-sp-defense ">
			<view class="" style="width: 25%;">
				<span>特防:</span><span>{{data.baseStat.spDefense}}</span>
			</view>
			<view class="border-1 border-black" style="width: 34%;">
				<view class="value-bar bg-sp-defense-bar border-black border-1 margin-5"
					:style="{width: `${data.baseStat.spDefense/2.57}%`}" />
			</view>
			<view class="" style="width: 19%;">
				{{getValueMaxOrMin(data.baseStat.spDefense, 50, false, false)}}
				-
				{{getValueMaxOrMin(data.baseStat.spDefense, 50, false, true)}}
			</view>
			<view style="width: 1rpx;background-color:rgba(0, 0, 0, 0.5); height: 50rpx;" />
			<view class="" style="width: 20%;">
				{{getValueMaxOrMin(data.baseStat.spDefense, 100, false, false)}}
				-
				{{getValueMaxOrMin(data.baseStat.spDefense, 100, false, true)}}
			</view>
		</view>
		<view class="flex-row text-center bg-speed ">
			<view class="" style="width: 25%;">
				<span>速度:</span><span>{{data.baseStat.speed}}</span>
			</view>
			<view class="border-1 border-black" style="width: 34%;">
				<view class="value-bar bg-speed-bar border-black border-1 margin-5"
					:style="{width: `${data.baseStat.speed/2.57}%`}" />
			</view>
			<view class="" style="width: 19%;">
				{{getValueMaxOrMin(data.baseStat.speed, 50, false, false)}}
				-
				{{getValueMaxOrMin(data.baseStat.speed, 50, false, true)}}
			</view>
			<view style="width: 1rpx;background-color:rgba(0, 0, 0, 0.5); height: 50rpx;" />
			<view class="" style="width: 20%;">
				{{getValueMaxOrMin(data.baseStat.speed, 100, false, false)}}
				-
				{{getValueMaxOrMin(data.baseStat.speed, 100, false, true)}}
			</view>
		</view>
		<view class="flex-row">
			<span>总和：</span><span>{{data.baseStat.total}}</span>
		</view>
	</view>
</template>

<script>
	export default {
		name: 'data-basevalue',
		props: {
			data: {
				type: Object,
				default: {
					baseStat: {
						hp: 100,
						attack: 100,
						defense: 100,
						spAttack: 100,
						spDefense: 100,
						speed: 100,
						total: 600,
					}
				}
			}
		},
		data() {
			return {

			}
		},
		methods: {
			/* 计算最大最小能力值 */
			getValueMaxOrMin(baseValue, level, isHp, isMax) {
				let personalValue; //个体值
				let basicPoint; //努力值
				let nature; //性格补正

				if (isMax) {
					personalValue = 31;
					basicPoint = 252;
					nature = 1.1;
				} else {
					personalValue = 0;
					basicPoint = 0;
					nature = 0.9;
				}

				if (isHp) {
					return parseInt((baseValue * 2 + personalValue + basicPoint / 4) * level / 100 + 10 + level);
				} else {
					return parseInt(((baseValue * 2 + personalValue + (basicPoint / 4)) * level / 100 + 5) * nature);
				}
			}
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

	.flex {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		text-align: center;
	}

	.value-bar {
		height: 20px;
	}
</style>
