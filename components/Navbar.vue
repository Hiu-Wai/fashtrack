<template>
    <header class="p-3 mb-3">
        <div class="container">

            <div class="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
                <a href="/"
                    class="d-flex align-items-center mb-3 mb-lg-0 me-lg-auto link-body-emphasis text-decoration-none">
                    <img src="/logo.png" alt="mdo" width="50" class="rounded-circle">

                    <span class="fs-1 navbarTitle ms-3">FashTrack</span>
                </a>

                <ul class="nav col-12 col-lg-auto me-5 mb-2 justify-content-center mb-md-0">
                    <li><NuxtLink to="/" class="nav-link px-3">Home</NuxtLink></li>
                    <li><NuxtLink to="jobTracker" class="nav-link px-3">Job Tracker</NuxtLink></li>
                    <li><NuxtLink to="mentorshipHub" class="nav-link px-3">Mentorship Hub</NuxtLink></li>
                </ul>

                <div class="dropdown text-end">
                    <a href="#" class="d-block link-body-emphasis text-decoration-none dropdown-toggle"
                        data-bs-toggle="dropdown" aria-expanded="false">
                        <img src="https://github.com/mdo.png" alt="mdo" width="32" height="32" class="rounded-circle">
                    </a>
                </div>

            </div>
        </div>
    </header>
</template>

<style>
.navbarTitle {
    font-family: 'GFS Didot';
}

.nav-link {
    font-family: 'GFS Didot';
    font-size: 1.4rem;
}

.router-link-exact-active {
    color: #264759;
}

.nav-link {
    color: #4281A4;
}
</style>