
<h1>
	Vue for Typescript项目demo
	<input-component :name='name'></input-component>
</h1>

<script lang="ts">
	
import Vue from 'vue';
import { Component, Provide } from 'vue-property-decorator';
import InputComponent from 'demo/input/input.vue';

@Component({
	name: 'WrapperComponent',
	components: {
		InputComponent
	}
})
export default class WrapperComponent extends Vue{
	name: string = '测试的名字'

	age: number = 18;


	@Provide() getAge = this.age;

}
	

</script>