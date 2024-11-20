<template>
    <div class="container">

        <div class="my-5">
            <div class="p-5 text-center bg-body-tertiary rounded-3">
                <h1 class="text-body-emphasis">Job Tracker</h1>
                <p class="lead">
                    Find the job with the right fit for you.
                </p>
            </div>
        </div>

        <div class="my-5">
            <div class="p-5 text-center bg-body-tertiary rounded-3">
                <!-- add a search box-->

                <div class="input-group mb-3">
                    <input type="text" class="form-control" placeholder="Search for a job" aria-label="Recipient's username" aria-describedby="basic-addon2">
                </div>

            </div>
        </div>

        <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3 mx-5">

            <div class="col" v-for="n in 10">
                <div class="card shadow-sm">
                    <svg class="bd-placeholder-img card-img-top" width="100%" height="225"
                        xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail"
                        preserveAspectRatio="xMidYMid slice" focusable="false">
                        <title>Placeholder</title>
                        <rect width="100%" height="100%" fill="#55595c"></rect><text x="50%" y="50%" fill="#eceeef"
                            dy=".3em">Thumbnail</text>
                    </svg>
                    <div class="card-body">
                        <h5 class="card-title">Company Name</h5>
                        <h3 class="card-title">Position</h3>
                        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to
                            additional content. This content is a little bit longer.</p>
                     
                    </div>
                </div>
            </div>

        </div>

    </div>
</template>

<style>
h1.text-body-emphasis {
    font-family: 'GFS Didot';
}
p.lead {
    font-family: 'Montserrat';
    font-size: 1.4rem;
}



</style>
