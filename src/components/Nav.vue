<script setup></script>

<template>
	<nav>
		<router-link active-class="active" to="/">Hołm</router-link>
		<router-link  active-class="active" to="/about">Abołt</router-link>
	</nav>
</template>
<style>
nav {
	display: flex;
	justify-content: space-evenly;
	flex-direction: row;
	background-color: #333;
	color: #fff;
	padding: 1rem;
}
p {
	cursor: pointer;
}
a {
	text-decoration: none;
	color: #fff;
}
a:active {
	font-weight: bold;
}
.active {
    font-weight: bold;
    color: ghostwhite;
}
</style>
