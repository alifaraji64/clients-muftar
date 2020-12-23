<template>
  <main class="flex">
      <sideBar/>
      <div id="container" class="w-7/8 px-6 pt-4">
        <header class="text-primary mb-2 flex justify-between items-center">
            <div class="flex items-center">
              <i class="fas fa-truck-moving fa-3x"></i><span class="text-2xl font-semibold pl-3">Fleet Data</span>
            </div>
            <input type="text" placeholder="search.." class="rounded-xl border-2 border-gray-700 h-8 outline-none">
            <div class="mx-2"><i class="far fa-user-circle fa-3x text-primary"></i></div>
        </header>
        <section>
            <div id="links" class=" mt-10">
                <router-link to="/fleet-data/brokers" class="uppercase text-sm font-semibold bg-white border-gray-500 border-2 border-r-0 px-2 py-0.5 text-gray-700">Brokers</router-link>
                <router-link to="/fleet-data/shippers" class="uppercase text-sm font-semibold bg-white border-gray-500 border-2 px-2 py-0.5 text-gray-700">Shippers</router-link>
                <router-link to="/fleet-data/drivers" class="uppercase text-sm font-semibold bg-white border-gray-500 border-2 border-l-0 px-2 py-0.5 text-gray-700">Drivers</router-link>
            </div>
            <div class="text-sm border-2 border-gray-400 px-4 h-96 overflow-y-scroll">
                <h3 class="text-green-400 font-semibold">MORGAN LOGISTICS <span class="text-gray-500">> HISTORY</span></h3>
                <br>
                <br>
                <div id="titles" class="flex justify-between w-full items-center text-xs text-gray-500">
                    <h3>LOAD NO.</h3>
                    <h3>PICKUP</h3>
                    <h3>DELIVERY</h3>
                    <h3>QUOTE</h3>
                    <h3>INFO</h3>
                </div>
                <div id="item" class="p-1 flex border-primary border-2 shadow-md mb-2 justify-between items-center rounded-lg" v-for="k in 6" :key="k">
                    <h3 class="text-blue-800 font-semibold">0238F00</h3>
                    <h3>DEC 14,2020</h3>
                    <h3>DEC 14,2020</h3>
                    <h3><i class="fas fa-dollar-sign bg-primary p-0.5 text-white rounded-full"></i>2,172</h3>
                    <router-link to="/fleet-data/drivers/logs">
                        <i class="fas fa-search cursor-pointer text-blue-700 bg-blue-200 p-1 rounded-md"></i>
                    </router-link>
                </div>
                <div class="text-center">
                    <button class="mt-4 mb-1 py-1 px-3 bg-primary text-white rounded-sm mx-auto inline-flex justify-center items-center">
                        <i class="fas fa-caret-left mr-6 text-lg"></i>BACK
                    </button>
                </div>
            </div>
        </section>
      </div>
  </main>
</template>

<script>
import sideBar from "@/components/sideBar.vue"
export default {
    components:{sideBar},
        mounted(){
        let activeLink = document.querySelector('#links a.router-link-active');
        activeLink.classList.add('bg-primary');
        activeLink.style.color = 'white'
    }
}
</script>

<style>

</style>