import Vue from 'vue'
import Vuex from 'vuex'
import pokemon from './pokemon.js'
Vue.use(Vuex)
const store = new Vuex.Store({
	modules:{
		m_pokemon:pokemon,
	}
})
export default store