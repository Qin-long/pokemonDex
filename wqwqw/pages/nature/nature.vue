<template>
	<view>
		<!-- <image class="bag" src="../../static/222.jpg" mode=""></image> -->
		<van-image width="100%" height="55vh" fit="fill" v-if="image" :src="image" />
		<view class="nature-table">
			进阶版属性表
		</view>
		<van-dropdown-menu direction="up">
			<van-dropdown-item v-model:value="value1" :options="option" />
			<van-dropdown-item v-model:value="value2" :options="option" />
		</van-dropdown-menu>
		<view class="hurt-class">
			<view class="hurt-kind">
				<view>克制:</view>
				<view class="hurt-nature">
					
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				show: false,
				image: "/static/nature.jpg",
				value1: 0,
				value2: 0,
				value: ['选择属性', '选择属性'],
				option: [{
						text: '选择属性',
						value: 0,
						color: 'beige'
					},
					{
						text: '火',
						value: 1,
						color: '#FF4422'
					},
					{
						text: '水',
						value: 2,
						color: '#3399FF'
					},
					{
						text: '草',
						value: 3,
						color: '#77CC55'
					},
					{
						text: '电',
						value: 4,
						color: '#FFCC33'
					},
					{
						text: '一般',
						value: 5,
						color: '#BBBBAA'
					},
					{
						text: '岩石',
						value: 6,
						color: '#BBAA66'
					},
					{
						text: '超能',
						value: 7,
						color: '#FF5599'
					},
					{
						text: '龙',
						value: 8,
						color: '#7766EE'
					},
					{
						text: '格斗',
						value: 9,
						color: '#BB5544'
					},
					{
						text: '毒',
						value: 10,
						color: '#AA5599'
					},
					{
						text: '地面',
						value: 11,
						color: '#DDBB55'
					},
					{
						text: '虫',
						value: 12,
						color: '#AABB22'
					},
					{
						text: '飞行',
						value: 13,
						color: '#80aacd'
					},
					{
						text: '幽灵',
						value: 14,
						color: '#6666BB'
					},
					{
						text: '冰',
						value: 15,
						color: '#77DDFF'
					},
					{
						text: '钢',
						value: 16,
						color: '#AAAABB'
					},
					{
						text: '恶',
						value: 17,
						color: '#775544'
					},
					{
						text: '妖精',
						value: 18,
						color: '#FFAAFF'
					},
				],
				pokemonTypes: {
					普通: [],
					格斗: ['普通', '岩石', '钢铁', '冰', '恶'],
					飞行: ['格斗', '虫', '草'],
					毒: ['草', '妖精'],
					地面: ['毒', '岩石', '钢铁', '火', '电'],
					岩石: ['飞行', '虫', '火', '冰'],
					虫: ['草', '超能力', '恶'],
					幽灵: ['幽灵', '超能力'],
					钢铁: ['岩石', '冰', '妖精'],
					火: ['虫', '钢铁', '草', '冰'],
					水: ['地面', '岩石', '火'],
					草: ['地面', '岩石', '水'],
					电: ['水', '飞行'],
					超能力: ['格斗', '毒'],
					冰: ['飞行', '地面', '草', '龙'],
					龙: ['龙'],
					恶: ['幽灵', '超能力'],
					妖精: ['格斗', '龙', '恶'],
				},
				restrain: [],
				resistance: [],
			};
		},
		methods: {
			calculateDamage(attackerType, defenderTypes) {
				let damageMultiplier = 1;

				for (const defenderType of defenderTypes) {
					// 判断克制关系
					if (pokemonTypes[attackerType].includes(defenderType)) {
						damageMultiplier *= 2; // 克制，造成双倍伤害
					}
					// 判断抵抗关系
					else if (pokemonTypes[defenderType].includes(attackerType)) {
						damageMultiplier *= 0.5; // 抵抗，造成半倍伤害
					}
				}
				return damageMultiplier;
			},
			showPopup() {
				this.show = true
			}
		}
	}
</script>

<style lang="scss">
	.bag {
		height: 100vh;
		width: 100vw;
	}

	view {
		// background-color: gainsboro;
	}

	.nature-table {
		width: 100vw;
		height: 10vh;
		font-size: 4vh;
		text-align: center;
		line-height: 10vh;
	}

	.van-dropdown-menu {
		height: 7vh !important
	}

	.van-grid-item__text {
		font-size: 2vh !important;
	}

	.van-grid-item__icon {
		height: 0 !important;
	}

	.van-grid-item {
		.van-grid-item__content {
			border-radius: 5vh 2vw 5vh 2vw;
			// padding:-4vw 0 -4vw 0;
		}
	}

	.van-dropdown-menu__item {
		border-radius: 10vh 10vh 10vh 10vh;
	}

	.hurt-class{
		display: flex;
		width: 100vw;
		justify-content: flex-start;
		align-items: center;
		height: 10vh;
		padding: 1vw;
		.hurt-kind{
			
		}
		.hurt-nature{
			
		}
	}
</style>
