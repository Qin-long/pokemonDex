<script>
	export default {
		onLaunch: function() {
			console.log('App Launch')
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style lang="scss">
	@import"././wxcomponents/vant/dist/common/index.wxss";

	@font-face {
		font-family: 'PokemonIcon';
		src: url('./static/iconfont.woff2?t=1683696449710') format('woff2'),
			url('./static/iconfont.woff?t=1683696449710') format('woff'),
			url('./static/iconfont.ttf?t=1683696449710') format('truetype');
	}

	.flex-row {
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.flex_direction {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}

	// /*每个页面公共css */
	.text-white {
		color: black;
	}

	.table-fixed {
		table-layout: fixed;
	}

	.text-right {
		text-align: right;
	}

	.text-center {
		text-align: center;
	}

	.opacity-50 {
		opacity: 0.5;
	}

	.opacity-80 {
		opacity: 0.8;
	}

	.opacity-90 {
		opacity: 0.9;
	}

	/* icon */
	// .icon-search::before {
	//   content: url(https://wiki.52poke.com/load.php?modules=skins.vector.icons&image=search&format=original&skin=vector-2022&version=1jhpn);
	// }
	.pokemon-icon {
		font-family: "PokemonIcon" !important;
		font-size: 1em;
		color: rgb(177, 17, 17);
		font-style: normal;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
	}

	.tips {
		margin: 10rpx;
		line-height: 2em;

		&::before {
			content: "·";
			font-weight: bold;
		}
	}

	/* roundy */
	.roundy-5 {
		border-radius: 5rpx;
	}

	.roundy-10 {
		border-radius: 10rpx;
	}

	.roundy-20 {
		border-radius: 20rpx;
	}

	/* margin */
	.margin-left-10 {
		margin-left: 10rpx;
	}

	.margin-0 {
		margin: 5rpx;
	}

	.margin-2 {
		margin: 2rpx;
	}

	.margin-5 {
		margin: 5rpx;
	}

	.margin-10 {
		margin: 10rpx;
	}

	.margin-20 {
		margin: 20rpx;
	}

	// border-1
	/* padding */
	.padding-0 {
		padding: 10rpx;
	}

	.padding-5 {
		padding: 2vw;
	}

	.padding-10 {
		padding: 4vw;
	}

	.padding-20 {
		padding: 5rpx;
	}

	.padding-30 {
		padding: 30rpx;
	}

	.padding-left-2 {
		padding-left: 2rpx;
	}

	.padding-right-2 {
		padding-right: 2rpx;
	}

	.padding-bottom-2 {
		padding-bottom: 20rpx;
	}


	/* font */
	.font-bold {
		font-weight: bold;
	}

	.font-size-10 {
		font-size: 10rpx;
	}

	.font-size-13 {
		font-size: 25rpx;
	}

	.font-size-12 {
		font-size: 12rpx;
	}

	.font-size-15 {
		font-size: 15rpx;
	}

	.font-size-20 {
		font-size: 20rpx;
	}

	.font-size-25 {
		font-size: 25rpx;
	}

	/* border */
	.border-1 {
		border-width: 1rpx;
		border-style: solid;
	}

	.border-skyblue {
		border-color: rgb(0, 67, 252);
	}

	.border-black {
		border-color: rgba(0, 0, 0, 0.5);
	}

	.border-darkred {
		border-color: rgba(179, 0, 0, 0.8);
	}

	/* shadow */
	.shadow {
		box-shadow: 0rpx 0rpx 3rpx 2rpx rgba(0, 0, 0, 0.3);
	}


	.bg-hp {
		background-color: #97C87A;
	}

	.bg-hp-bar {
		background-color: #8AC654;
	}

	.bg-attack {
		background-color: #FAE192;
	}

	.bg-attack-bar {
		background-color: #F8CB3C;
	}

	.bg-defense {
		background-color: #FBB977;
	}

	.bg-defense-bar {
		background-color: #D98837;
	}

	.bg-sp-attack {
		background-color: #A2D4DA;
	}

	.bg-sp-attack-bar {
		background-color: #59C3D0;
	}

	.bg-sp-defense {
		background-color: #89A9CD;
	}

	.bg-sp-defense-bar {
		background-color: #5890CD;
	}

	.bg-speed {
		background-color: #C39CD8;
	}

	.bg-speed-bar {
		background-color: #A456D0;
	}

	// roundy-5
	/* 各种属性宝可梦的背景颜色样式 */
	.bg-white {
		background-color: rgba(255, 255, 255,1);
	}

	.bg-red {
		background-color: rgba(179, 0, 0, 0.9);
	}

	.bg-green {
		background-color: rgba(0, 255, 55, 0.5);
	}

	/* 草 */
	.bg-grass {
		background-color: #77CC55;
	}

	.bgl-grass {
		background-color: #BDFFA3;
	}

	/* 火 */
	.bg-fire {
		background-color: #FF4422;
	}

	.bgl-fire {
		background-color: #FF927D;
	}

	/* 毒 */
	.bg-poison {
		background-color: #AA5599;
	}

	.bgl-poison {
		background-color: #C689BA;
	}

	/* 一般 */
	.bg-common {
		background-color: #BBBBAA;
	}

	.bgl-common {
		background-color: #E7E7D8;
	}

	/* 水 */
	.bg-water {
		background-color: #3399FF;
	}

	.bgl-water {
		background-color: #77BBFF;
	}

	/* 飞行 */
	.bg-fly {
		background-color: #6699FF;
	}

	.bgl-fly {
		background-color: #99BBFF;
	}

	/* 地面 */
	.bg-ground {
		background-color: #DDBB55;
	}

	.bgl-ground {
		background-color: #F1DDA0;
	}

	/* 幽灵 */
	.bg-ghost {
		background-color: #6666BB;
	}

	.bgl-ghost {
		background-color: #9F9FEC;
	}

	/* 格斗 */
	.bg-fighting {
		background-color: #BB5544;
	}

	.bgl-fighting {
		background-color: #DD9988;
	}

	/* 钢 */
	.bg-steel {
		background-color: #AAAABB;
	}

	.bgl-steel {
		background-color: #DFDFE1;
	}

	/* 超能力 */
	.bg-psychic {
		background-color: #FF5599;
	}

	.bgl-psychic {
		background-color: #FF9CC4;
	}

	/* 岩石 */
	.bg-stone {
		background-color: #BBAA66;
	}

	.bgl-stone {
		background-color: #E1D08C;
	}

	/* 冰 */
	.bg-ice {
		background-color: #77DDFF;
	}

	.bgl-ice {
		background-color: #DBF6FF;
	}

	/* 妖精 */
	.bg-fairy {
		background-color: #FFAAFF;
	}

	.bgl-fairy {
		background-color: #FBCBFB;
	}

	/* 电 */
	.bg-electric {
		background-color: #FFCC33;
	}

	.bgl-electric {
		background-color: #FAE078;
	}

	/* 龙 */
	.bg-dragon {
		background-color: #7766EE;
	}

	.bgl-dragon {
		background-color: #A194FF;
	}

	/* 恶 */
	.bg-dark {
		background-color: #775544;
	}

	.bgl-dark {
		background-color: #BDA396;
	}

	/* 虫 */
	.bg-bug {
		background-color: #AABB22;
	}

	.bgl-bug {
		background-color: #DAEC44;
	}

	/* 各种类型招式的背景颜色样式 */
	.bg-physics {
		background-color: #FF4400;
	}

	.bg-change {
		background-color: #999999;
	}

	.bg-special {
		background-color: #2266CC;
	}
</style>
