<script setup>
import {useRoute} from 'vue-router'
import cars from '../data/cars.json'

const route = useRoute()

const car = cars.find(car => car.id === parseInt(route.params.id))
</script>
<template>
    <div>
        <h1>{{ car.year }} {{ car.name }} {{ car.model }}</h1>
        <p>Price: {{ car.price }}</p>
        <!-- <img :src="car.image"> -->
        <p>Engine: {{ car.engineSize }}</p>
        <p>Drivetrain: {{ car.drivetrain }}</p>
        <p>{{ car.description }}</p>

    </div>
</template>