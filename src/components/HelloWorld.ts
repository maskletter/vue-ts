
import { Component } from 'vue-property-decorator';
import Vue from 'vue';

@Component({})
export default class HelloWorldComponent extends Vue {

	msg: string = 'Welcome to Your Vue.js App for Typescript';

	created(){
		console.log('初始化加载')
	}

}
