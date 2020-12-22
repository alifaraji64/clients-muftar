<template>
  <main class="flex">
      <sideBar/>
      <div id="container" class="w-5/8 px-6 pt-4">
        <header class="text-primary mb-2 flex justify-between items-center">
            <div>
              <i class="far fa-compass fa-3x"></i><span class="text-2xl font-semibold">Map</span>
            </div>
            <input type="text" placeholder="search.." class="rounded-xl border-2 border-gray-700 h-8">
            <p></p>
        </header>
        <section>
            <div id="main" >
                <img src="@/assets/images/map.png" alt="map" class="border-primary border-4 border-solid rounded-xl">
            </div>
            <div id="slide-parent">
                <header class="text-primary font-medium">
                    <h2 class="text-xl">Available Drivers</h2>
                </header>
                <div class="w-3/4 overflow-x-scroll h-48 overflow-y-hidden whitespace-nowrap mx-auto">
                    <!-- item(image) in scroll section -->
                    <div class="pb-2 inline-block border-gray-400 border-2 border-solid rounded-lg" v-for="(driver , index) in drivers" :key="index">
                        <img :src="driver.image" alt="slide-item" width="150" height="100" class="rounded-bl-md rounded-br-md">
                        <p class="font-medium">{{driver.name}}</p>
                    </div>
                    <!-- !item(image) in scroll section -->
                </div>
            </div>
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
            drivers:[
                {name:'Mak',image:'/images/slide-1.png'},
                {name:'James',image:'/images/slide-2.jpeg'},
                {name:'Osco',image:'/images/slide-3.jpeg'},
                {name:'Osco',image:'/images/slide-3.jpeg'},
                {name:'Osco',image:'/images/slide-3.jpeg'},
                {name:'Osco',image:'/images/slide-3.jpeg'},
                {name:'Osco',image:'/images/slide-3.jpeg'},
                {name:'Osco',image:'/images/slide-3.jpeg'},
                {name:'Osco',image:'/images/slide-3.jpeg'},
            ]
        }
    }
}
</script>

<style>
</style>