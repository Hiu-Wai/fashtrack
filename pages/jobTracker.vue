<template>
    <div class="container">

        <div class="my-5">
            <div class="p-5 text-center bg-body-tertiary rounded-3">
                <h1 class="display-3 bigtitle1">Job Tracker</h1>
                <p class="lead">
                    Find the job with the right fit for you.
                </p>
            </div>
        </div>

        {{ jobs }}

        <div class="my-5">
            <div class="p-5 text-center bg-body-tertiary rounded-3">
                <!-- add a search box-->

                <div class="input-group mb-3">
                    <input type="text" class="form-control" placeholder="Search for a job"
                        aria-label="Recipient's username" aria-describedby="basic-addon2">
                </div>

            </div>
        </div>

        <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3 mx-5">

            
                <div class="col" v-for="job in data">
                    <NuxtLink :to="'/jobs/' + job._id" style="text-decoration: none;">
                    <div class="card shadow-sm">
                        <img v-bind:src="job.coverImage" alt="job image" class="bd-placeholder-img card-img-top"
                            width="100%" height="225" />

                        <div class="card-body">
                            <h5 class="card-title">{{ job.jobTitle }}</h5>
                            <h3 class="card-title">{{ job.companyName }}</h3>
                            <p class="card-text">{{ job.description }}</p>

                        </div>
                    </div>
                    </NuxtLink>
                </div>
          

        </div>

    </div>
</template>

<style>
h1.text-body-emphasis {
    font-family: 'GFS Didot';
    color: #194F92;
}

p.lead {
    font-family: 'Montserrat';
    font-size: 1.4rem;
    color: #194F92;
}

h1.bigtitle1 {
    font-family: 'GFS Didot';
}
</style>


<script setup>
const { data, pending, error } = useAsyncData(async () => {
    const response = await $fetch('/api/getJobs');
    return response.data; // Extract and return the `data` key
});
</script>