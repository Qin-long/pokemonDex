<template>
	<view>
		<view class="card-container border-darkred border-1 roundy-20" :class="color" >
			<view v-if="data.length>1" v-for="(item,index) in data" :key="index" class="text-center roundy-20 max-Widht" :class="bg_color" @click="UpdatedValue(index)" style="height: 50rpx;" >
				{{item.form}}
			</view>
			<view class="pk-name max-Widht">
				<div class="bg-white roundy-20 padding-5 text-center">
					<p>{{data[value].nameZh}}</p>
					<p>{{data[value].nameEn}}{{data[value].nameJa}}</p>
				</div>
				<div class="bg-white roundy-20 padding-10 text-center">{{getPokemonIndex(data[value].idx)}}</div>
			</view>
			<view class="max-Widht bg-white roundy-20">
				<view>
					<img referrerPolicy="no-referrer|origin|unsafe-url" class="pokemon-img" v-if="data[value].img_url"
						:src="'https://images.weserv.nl/?url='+data[value].img_url"
						>
				</view>
				<view class="text-center padding-bottom-2">
					官方绘图
				</view>
			</view>
			<view style="height:1vw" />
			<view class=" block roundy-20 border-darkred border-1 " :class="bg_color">
				<view class="block-left roundy-20">
					<p class=" font-bold margin-block">属性</p>
					<view class="bg-white roundy-20 block_container absulote_center">
						<span>{{data[value].type1}}</span><span v-show="data[value].type2">和</span><span v-show="data[value].type2">{{data[value].type2}}</span>
					</view>
				</view>
				<view class="block-right roundy-20">
					<p class=" font-bold margin-block">分类</p>
					<view class="block_container bg-white roundy-20 absulote_center">
						{{data[value].category}}
					</view>
				</view>
			</view>
			<view style="height:1vw" />
			<view class=" block-center roundy-20 border-darkred border-1 " :class="bg_color">
				<p class="text-white font-bold margin-block">特性</p>
				<view class="absulote_center block_container margin-center">
					<view class="block-left  roundy-20">
						<view class="bg-white roundy-20 max-height absulote_center">
							<span>{{data[value].ability1}}</span><span v-show="data[value].ability2">和</span><span v-show="data[value].ability2">{{data[value].ability2}}</span>
						</view>
					</view>
					<view class="block-right  roundy-20">
						<view class=" flex-column bg-white roundy-20 max-height absulote_center">
							<view v-if="data[value].abilityhide">
								{{data[value].abilityhide}}
							</view>
							<view v-else>
								无隐藏特性
							</view>
						</view>
					</view>
				</view>
			</view>
			<view style="height:1vw" />
			<view class=" block-center roundy-20 border-darkred border-1 " :class="bg_color">
				<p class="text-white font-bold margin-block ">培育</p>
				<view class="absulote_center block_container margin-center">
					<view class="block-left  roundy-20">
						<view class="bg-white roundy-20 max-height absulote_center">
							<span>{{data[value].egg_group1}}</span><span v-show="data[value].egg_group2">和</span><span v-show="data[value].egg_group2">{{data[value].egg_group2}}</span>
						</view>
					</view>
					<view class="block-right  roundy-20">
						<view class="flex-column bg-white roundy-20 max-height absulote_center">
							<view>
								孵化步数
							</view>
							<view>
								{{data[value].hatch_time}}
							</view>
						</view>
					</view>
				</view>
			</view>
			<view style="height:1vw" />
			<view class="block roundy-20 border-darkred border-1 " :class="bg_color">
				<view class="block-left roundy-20">
					<p class=" font-bold margin-block">身高</p>
					<view class="bg-white roundy-20 block_container absulote_center">
						{{data[value].height}}
					</view>
				</view>
				<view class="block-right roundy-20">
					<p class=" font-bold margin-block">体重</p>
					<view class="block_container bg-white roundy-20 absulote_center">
						{{data[value].weight}}
					</view>
				</view>
			</view>
			<view style="height:1vw" />
			<view class=" block roundy-20 border-darkred border-1 " :class="bg_color">
				<view class="block-left roundy-20">
					<p class=" font-bold margin-block">体型</p>
					<view class="bg-white roundy-20 block_container absulote_center">
						<img referrerPolicy="no-referrer|origin|unsafe-url" style="width: 4vh;height: 4vh;"  v-if="data[value].body_style"
							:src="'https://images.weserv.nl/?url='+data[value].body_style" alt="">
					</view>
				</view>
				<view class="block-right roundy-20">
					<p class=" font-bold margin-block">捕获率</p>
					<view class="block_container bg-white roundy-20 absulote_center">
						{{data[value].catch_rate}}
					</view>
				</view>
			</view>
			<li class="text-center">所属第1世代</li>
		</view>
	</view>
</template>

<script>
	import {
		mapState,
		mapMutations,
	} from 'vuex'
	export default {
		name: "pokemon-card",
		props:{
			data:{
				type:Array,
				default:''
			}
		},
		beforeDestroy() {
			this.UpdatedValue(0)
		},
		beforeMount() {
			this.filterColor(this.data[this.value].type1)
			this.filterBgcolor(this.data[this.value].type1)
		},
		computed:{
			...mapState('m_pokemon',['value','color','bg_color'])
		},
		data() {
			return {
				lable: "属性",
			}
		},
		methods: {
			...mapMutations('m_pokemon',['UpdatedValue','filterColor','filterBgcolor']),
			getPokemonIndex(id) {
			      if (!id) return;
			      if (id <= 9) {
			        return `#000${id}`;
			      } else if (id <= 99) {
			        return `#00${id}`;
			      } else if (id <= 999) {
			        return `#0${id}`;
			      } else if (id <= 9999) {
			        return `#${id}`;
			      }
			    },
		},
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
			height: 200rpx;
			display: flex;
			justify-content: space-between;
			// flex: 6 4;
			font-weight: bolder;
			align-items: center;
		}

		.block {
			display: flex;
			flex-direction: row;
			height: 200rpx;
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
			height: 200rpx;
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
