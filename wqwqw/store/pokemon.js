export default {
	namespaced: true,
	state: () => ({
		value: 0,
		colorList: [{
				text: '一般',
				color: 'bg-common',
				bg_color: 'bgl-common'
			},
			{
				text: '格斗',
				color: 'bg-fighting',
				bg_color: 'bgl-fighting'
			},
			{
				text: '飞行',
				color: 'bg-fly',
				bg_color: 'bgl-fly'
			},
			{
				text: '毒',
				color: 'bg-poison',
				bg_color: 'bgl-poison'
			},
			{
				text: '地面',
				color: 'bg-ground',
				bg_color: 'bgl-ground'
			},
			{
				text: '岩石',
				color: 'bg-stone',
				bg_color: 'bgl-stone',
			},
			{
				text: '虫',
				color: 'bg-bug',
				bg_color: 'bgl-bug'
			},
			{
				text: '幽灵',
				color: 'bg-ghost',
				bg_color: 'bgl-ghost'
			},
			{
				text: '钢',
				color: 'bg-steel',
				bg_color: 'bgl-steel'
			},
			{
				text: '火',
				color: 'bg-fire',
				bg_color: 'bgl-fire'
			},
			{
				text: '水',
				color: 'bg-water',
				bg_color: 'bgl-water'
			},
			{
				text: '草',
				color: 'bg-grass',
				bg_color: 'bgl-grass'
			},
			{
				text: '电',
				color: 'bg-electric',
				bg_color: 'bgl-electric'
			},
			{
				text: '超能力',
				color: 'bg-psychic',
				bg_color: 'bgl-psychic'
			},
			{
				text: '冰',
				color: '.bg-ice',
				bg_color: 'bgl-ice'
			},
			{
				text: '龙',
				color: 'bg-dragon',
				bg_color: 'bgl-dragon'
			},
			{
				text: '恶',
				color: 'bg-dark',
				bg_color: 'bgl-dark'
			},
			{
				text: '妖精',
				color: 'bg-fairy',
				bg_color: 'bgl-fairy'
			}
		],
		color: '',
		bg_color: '',
	}),
	mutations: {
		UpdatedValue(state, index) {
			state.value = index
		},
		filterColor(state, type) {
			state.color = state.colorList.filter((item) => {
				return item.text === type; // Use === for strict equality comparison
			})[0].color;
		},
		filterBgcolor(state, type) {
			state.bg_color = state.colorList.filter((item) => {
				return item.text === type
			})[0].bg_color
		}
	}
}
