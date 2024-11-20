<template>


</template>

<script setup>
const { data, pending, error } = useAsyncData('fetch-key', () =>
  $fetch('https://api.example.com/data')
);
</script>