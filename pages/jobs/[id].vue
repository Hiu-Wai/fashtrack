<template>
<div class="container">
    <div class="my-5">
            <div class="p-5 text-start bg-body-tertiary rounded-3">
                <h1 class="display-3 bigtitle1" v-if="data">{{  data.jobTitle }}</h1>
                <h3 class="display-6 smalltitle2" v-if="data">{{  data.companyName }}</h3>
                
                <img v-if="data" :src="data.coverImage" class="w-100" style="height:300px; object-fit:cover;">
                <p class="lead" v-if="data">
                    {{  data.description }}
                </p>
                
                <p class="lead" v-if="data">
                    {{  data.longDescription }}
                </p>
                
                <h5 v-if="data"> Duration: {{ data.durations }}</h5>
                <h5 v-if="data"> Positions Available: {{ data.positions_available }}</h5>
                
                <NuxtLink v-if="data" :to="'/apply/' + data._id">
                    <button class="btn btn-primary rounded btn-lg">Apply</button>
                </NuxtLink> 

            </div>
        </div>


</div>
</template>

<script setup lang="ts">
const route = useRoute()

const { data, pending, error } = useAsyncData(async () => {
    const response = await $fetch('/api/getJobs' );

    // return the job where the id matches the route.params.id
    return response.data.find((job: { _id: string }) => job._id === route.params.id);

});

</script>

<style>
.smalltitle2 {
    font-family: 'Montserrat'; 
    color: #194F92;
}
</style>