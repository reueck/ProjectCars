<script setup>
import { useRoute, RouterView, useRouter } from 'vue-router'
import cars from '../data/cars.json'

const route = useRoute()

const carId = parseInt(route.params.id)
const car = cars.find(car => car.id === carId)
const router = useRouter()
const showContact = () => {
	if (car.status === 'available') {
		return router.push(`/cars/${carId}/contact`)
	}
}
</script>
<template>
	<div class="car">
		<img :src="car.image" class="car-image" />
		<div class="car-heading">
			<h1>{{ car.year }} {{ car.name }} {{ car.model }}</h1>
			<div class="car-price">
				<h3>Price:</h3>
				<p>
					<span class="car-price-pricexd">{{ car.price }}</span
					>$
				</p>
			</div>
		</div>

		<p class="car-description">{{ car.description }}</p>
		<div class="car-spec">
			<h2>Specification:</h2>
			<p class="car-spec-engine">Engine: {{ car.engineSize }}</p>
			<p class="car-spec-dtrain">Drivetrain: {{ car.drivetrain }}</p>
		</div>
		<button @click="showContact" class="car-contact-trigger">Try contact</button>
		<RouterView />
	</div>
</template>

<style>
.car {
	display: grid;
	grid-template-columns: repeat(4, 1fr);
	grid-gap: 0.5rem;
	margin: 2rem;
	background-color: #333;
	color: #fff;
	border-radius: 1rem;
	box-shadow: 0 5px 5px #00000082;
	overflow: hidden;
}

.car-image {
	grid-area: 1 / 1 / 1 / 5;
	width: 100%;
	height: 100%;
}
.car-heading {
	grid-area: 2 / 1 / 2 / 5;
	display: grid;
	grid-template-columns: 3fr 1fr;
	grid-template-rows: 1fr;
	height: 50px;
	place-content: center;
	margin: 1rem;
}
.car-price {
	grid-area: 1 / 2 / 1 / 3;
	text-align: center;
	display: flex;
	flex-direction: column;
	padding: 1rem;
}

.car-price-pricexd {
	font-size: 2rem;
}

.car-description {
	grid-area: 3 / 1 / 4 / 5;
	padding: 1rem;
	font-size: 1.2rem;
	line-height: 2rem;
}
.car-spec {
	grid-area: 4 / 1 / 5 / 2;
	display: flex;
	flex-direction: column;
	justify-content: space-evenly;
	padding: 1rem;
}

.car-contact-trigger {
	grid-area: 5 / 1 / 6 / 5;
	width: 100%;
	height: 3rem;
	background-color: #616161;
	border: none;
	color: #fff;
	font-size: 1.2rem;
	text-transform: uppercase;
	cursor: pointer;
}
</style>
