<template>
	<div id="app">
		<div class="images">
			<a href="https://vuejs.org/" target="_blank" rel="noopener noreferrer">
				<img src="./assets/vue.png" alt="Vue">
			</a>
			<a href="https://www.typescriptlang.org/" target="_blank" rel="noopener noreferrer">
				<img src="./assets/ts.png" alt="TypeScript">
			</a>
		</div>
		<hello/>
	</div>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';

import Hello from '@/components/Hello';

@Component({
	name: 'App',
	components: {
		Hello
	}
})
export default class App extends Vue {}
</script>

<style scoped>
#app {
	height: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
}
.images {
	width: 100%;
	display: flex;
	justify-content: center;
}
.images img {
	margin: 0 2rem;
}
</style>

