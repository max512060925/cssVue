import Vue from 'vue'
import moment from 'moment'
Vue.filter('date', (date,format) => {
	return moment(date).format(format)
})
