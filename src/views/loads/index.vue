<template>
  <main class="flex">
      <sideBar/>
      <div id="container" class="w-5/8 px-6 pt-4">
        <header class="text-primary mb-2 flex items-center">
            <i class="fas fa-road fa-3x"></i><span class="text-2xl font-semibold pl-3">Loads</span>
        </header>
        <section>
            <div id="add-button" class="flex justify-end">
                <router-link to='/add-load' class="text-gray-700 border-primary border-2 border-solid rounded-lg shadow-lg px-1 mr-2 mb-2 hover:bg-primary hover:text-white outline-none">
                    ADD NEW LOAD
                </router-link>
            </div>
            <!--  two column grid -->
            <div class="flex justify-between items-center">
                <!-- first column -->
                <section id="assigned-loads" class="flex flex-col justify-center items-center mt-2 w-1/2 mr-1">
                    <h1 class="text-gray-500 text-xl font-semibold mb-2">ASSINGED LOADS</h1>
                    <!-- CARD -->
                    <div id="card" class="w-full p-1 border-2 border-solid border-primary rounded-md mb-4 shadow-lg" v-for="k in 3" :key="k">
                        <div class="flex justify-between items-center">
                            <h2 class="text-lg text-primary font-semibold cursor-pointer" @click="viewLoad">0238789</h2>
                            <h2 class="px-0.5 py-0 bg-blue-200 text-primary cursor-pointer">+</h2>
                        </div>
                        <p class="text-gray-700 text-md">ANYTIME</p>
                        <div class="flex">
                            <i class="fas fa-map-marker-alt"></i>
                            <p class="text-sm text-gray-600 pl-2">Lorem ipsum, dolor sit  nemo dolore exercitationem sint </p>
                        </div>
                        <div class="flex justify-between items-center">
                            <i class="fas fa-truck-moving"></i>
                            <div>
                                <i class="fas fa-dollar-sign bg-primary text-white p-1 rounded-full"></i>
                                <span>$4,654</span>
                            </div>
                        </div>
                    </div>
                    <!-- !CARD -->
                    <h2 class="text-primary text-lg font-semibold">View All</h2>
                </section>
                <!-- !first column -->

                <!-- second column -->
                 <section id="unassigned-loads" class="flex flex-col justify-center items-center mt-2 w-1/2 ml-1">
                    <h1 class="text-gray-500 text-xl font-semibold mb-2">UNASSINGED LOADS</h1>
                    <!-- CARD -->
                    <div id="card" class="w-full p-1 border-2 border-solid border-primary rounded-md mb-4 shadow-lg" v-for="k in 3" :key="k">
                        <div class="flex justify-between items-center">
                            <h2 class="text-lg text-primary font-semibold cursor-pointer" @click="viewLoad">0238789</h2>
                            <h2 class="px-0.5 py-0 bg-blue-200 text-primary cursor-pointer">+</h2>
                        </div>
                        <p class="text-gray-700 text-md">ANYTIME</p>
                        <div class="flex">
                            <i class="fas fa-map-marker-alt"></i>
                            <p class="text-sm text-gray-600 pl-2">Lorem ipsum, dolor sit  nemo dolore exercitationem sint </p>
                        </div>
                        <div class="flex justify-between items-center">
                            <i class="fas fa-truck-moving"></i>
                            <div>
                                <i class="fas fa-dollar-sign bg-primary text-white p-1 rounded-full"></i>
                                <span>$4,654</span>
                            </div>
                        </div>
                    </div>
                    <!-- !CARD -->
                    <h2 class="text-primary text-lg font-semibold">View All</h2>
                </section>
                <!-- !second column -->
            </div>
            <!--  !two column grid -->
        </section>
      </div>
      <MapRight/>
  </main>
</template>

<script>
import sideBar from "@/components/sideBar.vue"
import MapRight from "@/components/MapRight.vue"
export default {
    components:{
        sideBar,MapRight
    },
    data(){
        return{

        }
    },
    methods:{
        viewLoad(){
            this.$router.push('view-load')
        }
    }
}
</script>

<style>
</style>