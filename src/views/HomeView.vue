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
           
				<h2>{{ car.year }} {{ car.name }} {{ car.model }}</h2>
				<p>Price: {{ car.price }}</p>
			
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
	width: 300px;
	height: 300px;
	background-color: #333;
	color: #fff;
	padding: 1rem;
	margin: 1rem;
	display: flex;
	flex-direction: column;
	justify-content: space-evenly;
	align-items: center;
    transition: all 0.3s ease-in-out;
}

.car-card:hover {
    box-shadow: 0 5px 5px #00000082;
}
</style>
