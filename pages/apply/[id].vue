<template>
    <div class="container">
        <div class="my-5">
            <div class="p-5 text-start bg-body-tertiary rounded-3">
                <h1 class="display-3 bigtitle1" v-if="data">Apply</h1>
                <h3 class="display-6 smalltitle2" v-if="data">{{ data.jobTitle }} @ {{ data.companyName }}</h3>

            </div>
        </div>

        <div class="my-5">
            <div class="p-5 text-start bg-body-tertiary rounded-3">
                <h1 class="display-3 bigtitle1" v-if="data">Apply</h1>
                <h3 class="display-6 smalltitle2" v-if="data">{{ data.jobTitle }} @ {{ data.companyName }}</h3>

            </div>
        </div>

    </div>
</template>

<script setup lang="ts">
const route = useRoute()

const { data, pending, error } = useAsyncData(async () => {
    const response = await $fetch('/api/getJobs');

    // return the job where the id matches the route.params.id
    return response.data.find((job: { _id: string }) => job._id === route.params.id);

});

</script>