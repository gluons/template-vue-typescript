<template>
	<div class="hello">
		<h1>{{ message }}</h1>
	</div>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';

@Component({
	name: 'Hello',
	data() {
		return {
			message: 'Welcome to Your Vue.js + TypeScript App'
		};
	}
})
export default class Hello extends Vue {
	message: string
}
</script>

<style scoped>
.hello {
	margin-top: 2rem;
}
</style>
