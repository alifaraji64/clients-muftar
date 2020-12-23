<template>
  <aside class="relative bg-primary left-0 top-0 w-1/8 max-h-screen h-screen flex justify-center items-center rounded-tr-3xl z-10">
      <section class="w-full h-3/4  flex flex-col justify-between items-center text-white">
        <div>
            <router-link to="/overview"><i class="fas fa-home fa-3x"></i></router-link>
        </div>
        <div>
            <router-link to="/map"><i class="far fa-compass fa-3x"></i></router-link>
        </div>
        <div>
            <router-link to="/loads"><i class="fas fa-road fa-3x"></i></router-link>
        </div>
        <div>
            <router-link to="/financials"><i class="fas fa-dollar-sign fa-3x"></i></router-link>
        </div>
        <div>
            <router-link to="/scheduling"><i class="far fa-calendar fa-3x"></i></router-link>
        </div>
        <div>
            <router-link to="/fleet-data"><i class="fas fa-truck-moving fa-3x"></i></router-link>
        </div>
      </section>
  </aside>
</template>

<script>
export default {
    mounted(){
        let activeLink = document.querySelector('a.router-link-active');
        console.log(activeLink);
        activeLink.parentElement.classList.add('bg-white');
        activeLink.parentElement.classList.add('text-primary');
        activeLink.parentElement.classList.add('w-full');
        activeLink.parentElement.classList.add('text-center');
        activeLink.parentElement.classList.add('rounded-tl-2xl');
        activeLink.parentElement.classList.add('rounded-bl-2xl');
        activeLink.parentElement.classList.add('py-2');
        activeLink.parentElement.classList.add('ml-2');
    }
}
</script>

<style>

/*
.router-link-exact-active i{
    color:#34a6c9;
} */
</style>