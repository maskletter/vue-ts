
<div><br>
	<span class="title">{{name | nameFilter}}</span><br>
	<input type="text" v-model='value'><br><br>
	<div class="title">
		新值:{{newValue}}<br>
		旧值:{{oldValue}}
	</div>
	<br>
	<small>获取到的父组件的age:{{getAge}}</small>
</div>