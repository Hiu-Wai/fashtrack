<template>
    <div class="container">

        <div class="my-5">
            <div class="p-5 text-center bg-body-tertiary rounded-3">
                <h1 class="text-body-emphasis">Coming Soon</h1>
                
            </div>
        </div>
        <div class="container marketing">

            <!-- Three columns of text below the carousel -->
            <h3> People who you might be interested in ...</h3>
            <hr>
            <div class="row">
                <div class="col-lg-4" v-for = "mentor in data">
                    <NuxtLink :to="'/mentors/' + mentor._id" style="text-decoration: none;">
                    <img class="bd-placeholder-img rounded-circle" width="140" height="140" v-bind:src="mentor.image" alt="job image" role="img" aria-label="Placeholder" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="var(--bs-secondary-color)"></rect></img>
                    <h2 class="fw-normal">{{ mentor.name }}</h2>
                    <h3 class = "fw-normal">{{ mentor.company }}</h3>
                    <h5 class = "fw-normal">{{ mentor.role }}</h5>
                    <p color = "black">{{mentor.experience }}</p>
                    <p><a class="btn btn-secondary" href="#">Message »</a></p>
                    </NuxtLink>
                </div><!-- /.col-lg-4 -->
            </div><!-- /.row -->
            </div>

    </div>
</template>
<style>
/* GLOBAL STYLES
-------------------------------------------------- */
/* Padding below the footer and lighter body text */

body {
  padding-top: 3rem;
  padding-bottom: 3rem;
  color: rgb(var(--bs-tertiary-color-rgb));
}


/* CUSTOMIZE THE CAROUSEL
-------------------------------------------------- */

/* Carousel base class */
.carousel {
  margin-bottom: 4rem;
}
/* Since positioning the image, we need to help out the caption */
.carousel-caption {
  bottom: 3rem;
  z-index: 10;
}

/* Declare heights because of positioning of img element */
.carousel-item {
  height: 32rem;
}


/* MARKETING CONTENT
-------------------------------------------------- */

/* Center align the text within the three columns below the carousel */
.marketing .col-lg-4 {
  margin-bottom: 1.5rem;
  text-align: center;
}
/* rtl:begin:ignore */
.marketing .col-lg-4 p {
  margin-right: .75rem;
  margin-left: .75rem;
}
/* rtl:end:ignore */

</style>

<script setup>
const { data, pending, error } = useAsyncData(async () => {
    const response = await $fetch('/api/getMentors');
    return response.data; // Extract and return the `data` key
});
</script>