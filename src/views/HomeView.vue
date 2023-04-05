<script setup>
import { ref } from 'vue'
import cars from '../data/cars.json'

const carsList = ref(cars)
</script>

<template>
	<div>
		<h1>Cars in stock:</h1>
		<div class="container">
			<router-link :to="`/cars/${car.id}`" v-for="car in carsList" :key="car.id" class="car-card">
				<div class="car-card-cover">
					<img :src="car.image" alt="car image" />
				</div>
				<div class="car-card-body">
					<h2>{{ car.year }} {{ car.name }} {{ car.model }}</h2>
				<p>Price: {{ car.price }} $</p>
				</div>
			
            </router-link>
		</div>
	</div>
</template>
<style>
.container {
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	justify-content: space-evenly;
}

h1 {
	margin: 2rem;
	text-align: center;
}

.car-card {
	display: grid;
	grid-template-columns: 1fr;
	grid-template-rows:2fr 1fr;
	width: 300px;
	height: 300px;
	margin: 1rem;
	background-color: #333;
	color: #fff;
	overflow: hidden;
    transition: all 0.3s ease-in-out;
}

.car-card:hover {
	box-shadow: 0 5px 5px #00000082;
}

.car-card-cover {
	width: 300px;
	grid-area: 1 / 1 / 2 / 1;
}
.car-card-cover img{
	width: 100%;
	height: 100%;
	aspect-ratio: 16/9;
	object-fit: cover;
	background-blend-mode: darken;
}
.car-card-body {
	grid-area: 2 / 1 / 3 / 1;
	padding: 1rem;
}
</style>
