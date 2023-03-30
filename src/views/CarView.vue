<script setup>
import { useRoute, RouterView, useRouter } from 'vue-router'
import cars from '../data/cars.json'

const route = useRoute()

const carId = parseInt(route.params.id)
const car = cars.find(car => car.id === carId)
const router = useRouter()
const showContact = () => {
    if(car.status === 'available') {
        return router.push(`/cars/${carId}/contact`)
    }
}


</script>
<template>
	<div>
		<h1>{{ car.year }} {{ car.name }} {{ car.model }}</h1>
		<p>Price: {{ car.price }}</p>
		<!-- <img :src="car.image"> -->
		<p>Engine: {{ car.engineSize }}</p>
		<p>Drivetrain: {{ car.drivetrain }}</p>
		<p>{{ car.description }}</p>
        <button @click="showContact">Try contact</button>
		<RouterView/>
	</div>
</template>
