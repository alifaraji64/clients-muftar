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
                <h3 class="text-green-400 font-semibold">MORGAN LOGISTICS <span class="text-gray-500">> HISTORY>LOGS</span></h3>
                <br>
                <br>
                <div id="titles" class="flex justify-between w-full items-center text-xs text-gray-500">
                    <h3>LOAD NO.</h3>
                    <h3>PICKUP</h3>
                    <h3>DELIVERY</h3>
                    <h3>QUOTE</h3>
                    <h3>INFO</h3>
                </div>
                <div id="item" class="p-1 flex border-primary border-2 shadow-md mb-2 justify-between items-center rounded-lg" >
                    <h3 class="text-blue-800 font-semibold">0238F00</h3>
                    <h3>DEC 14,2020</h3>
                    <h3>DEC 14,2020</h3>
                    <h3><i class="fas fa-dollar-sign bg-primary p-0.5 text-white rounded-full"></i>2,172</h3>
                    <router-link to="/fleet-data/drivers/history">
                        <i class="cursor-pointer text-red-700 bg-red-200 px-1 rounded-md font-semibold">X</i>
                    </router-link>
                </div>
                <!-- making a two column grid -->
                <div id="log-detail" class='p-1 flex justify-between items-center border-primary border-2 rounded-lg'>
                    <!-- first column -->
                    <section class="w-3/5 p-1">
                    <div class="flex w-full justify-between text-gray-600 text-sm">
                        <h3>STOP</h3>
                        <h3>TIME IN</h3>
                        <h3>TIME OUT</h3>
                    </div>
                    <div id="item" class="flex w-full justify-between text-blue-800 text-base font-semibold">
                        <h3>Pickup</h3>
                        <h3>17:29</h3>
                        <h3>17:33</h3>
                    </div>
                    <div id="item" class="flex w-full justify-between text-blue-800 text-base font-semibold">
                        <h3>Pickup</h3>
                        <h3>17:29</h3>
                        <h3>17:33</h3>
                    </div>
                    <div id="item" class="flex w-full justify-between text-blue-800 text-base font-semibold">
                        <h3>Pickup</h3>
                        <h3>17:29</h3>
                        <h3>17:33</h3>
                    </div>
                    </section>
                    <!-- !first column -->

                    <!-- second column -->
                    <section class="w-2/5 p-1 ml-1">
                    <img src="@/assets/images/map.png" alt="map" class="border-primary border-4 border-solid rounded-xl">
                    <div>
                        <button class="px-2 border-gray-500 text-gray-500 border-2 border-r-0">Stop 1</button>
                        <button class="px-2 border-gray-500 text-gray-500 border-2">Stop 1</button>
                        <button class="px-2 border-gray-500 text-gray-500 border-2 border-l-0">Stop 1</button>
                    </div>
                    <div class="mt-1">
                        <button class="bg-primary px-3 py-0.5 text-white rounded-sm mr-3">BOL</button>
                        <button class="bg-primary px-3 py-0.5 text-white rounded-sm">LOAD INFORMATION</button>
                    </div>
                    </section>
                    <!-- !second column -->

                </div>
                <!-- !making a two column grid -->
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