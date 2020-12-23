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
            <div id="links" class="flex justify-between items-center mt-10">
                <div>
                    <router-link to="/fleet-data/brokers" class="uppercase text-sm font-semibold bg-white border-gray-500 border-2 border-r-0 px-2 py-0.5 text-gray-700">Brokers</router-link>
                    <router-link to="/fleet-data/shippers" class="uppercase text-sm font-semibold bg-white border-gray-500 border-2 px-2 py-0.5 text-gray-700">Shippers</router-link>
                    <router-link to="/fleet-data/drivers" class="uppercase text-sm font-semibold bg-white border-gray-500 border-2 border-l-0 px-2 py-0.5 text-gray-700">Drivers</router-link>
                </div>
                <router-link to="/fleet-data/shippers/add" class=" mr-10 bg-green-300 text-green-700 px-1">+</router-link>
            </div>
            <div class="text-sm border-2 border-gray-400 px-4 h-96 overflow-y-scroll">
                <div id="item" class="p-2 flex border-gray-400 border-b-2 mb-2 justify-between items-center" v-for="k in 6" :key="k">
                    <div id="avatar-text" class="flex justify-between items-center">
                        <img src="@/assets/images/morgan-avatar.jpeg" alt="" class="rounded-full align-middle w-20 h-20">
                        <div id="text" class="ml-3 text-gray-600">
                            <h2 class="text-lg font-semibold text-gray-800">MORGAN LOGISTICS-2</h2>
                            <p>morgan@morganlogistics.com</p>
                            <p>bol@morganlogistics.com</p>
                        </div>
                    </div>
                    <router-link to="/fleet-data/shippers/detail" class="bg-primary text-white px-3 py-0.5 font-semibold rounded-sm">SEE MORE</router-link>
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