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
                <!-- a large bootstrap textarea-->
                <div class="form-floating">
                    <h1>Your Experience</h1>
                    <textarea class="form-control" placeholder="Leave a comment here" id="floatingTextarea2"
                        style="height: 100px"></textarea>

                </div>

                <br>

                <h1>Upload Documents</h1>

                <h5>Cover Letter</h5>
                <div class="input-group mb-3">
                    <input type="file" class="form-control" id="inputGroupFile02">
                    <label class="input-group-text" for="inputGroupFile02">Upload</label>
                </div>

                <h5>CV</h5>
                <div class="input-group mb-3">
                    <input type="file" class="form-control" id="inputGroupFile02">
                    <label class="input-group-text" for="inputGroupFile02">Upload</label>

                </div>

                <NuxtLink to="/">
                    <button class="btn btn-lg btn-primary">Submit</button>
                </NuxtLink>

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