<script setup>
import {useRoute} from 'vue-router'
import cars from '../data/cars.json'

const route = useRoute()
const car = cars.find(car => car.id === parseInt(route.params.id))
</script>

<template>
    <div>
        <h1>Contact info:</h1>
        <p>{{ car.contact.name }}</p>
        <p>{{ car.contact.phone }}</p>
        <p>{{ car.contact.email }}</p>
    </div>
</template>