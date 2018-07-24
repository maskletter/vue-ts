
import Vue from 'vue';
import { Component, Prop, Inject, Watch } from 'vue-property-decorator';

@Component({
	filters: {
		nameFilter(value: any): string{
			return value+'[过滤器添加的内容]'
		}
	}
})
export default class InputComponent extends Vue{

	@Prop({ type: String, default: 'a' })
	public name: string;
	public newValue: string = '';
	public oldValue: string = '';
	public value: string = '';

	@Inject() public getAge: any;

	private created(): void{
		console.log(this.getAge)
	}

	@Watch('value')
	private onValueChange(newValue: string, oldValue){
		this.newValue = newValue;
		this.oldValue = oldValue;
	}

}

