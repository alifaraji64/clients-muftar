<template>
  <main class="flex">
      <sideBar/>
      <div id="container" class="w-5/8 px-6 pt-4">
        <header class="text-primary mb-2 flex items-center">
            <i class="fas fa-home fa-3x"></i><span class="text-2xl font-semibold pl-3">Overview</span>
        </header>
        <section>
            <header class="bg-primary text-white p-4 rounded-xl">
                <h2 class="uppercase text-lg font-medium">report Board</h2>
            </header>
            <div id="main" class="border-4 border-primary border-solid rounded-xl bt-none border-t-0 transform -translate-y-5 pt-5 overflow-y-scroll h-80">
                <div class=" w-full px-2">
                    <ul class="w-full flex justify-between text-gray-400 text-sm">
                        <li>DRIVER</li>
                        <li>TRUCK</li>
                        <li>TIME</li>
                        <li>TYPE</li>
                        <li>ACCESS</li>
                    </ul>
                    <hr>
                    <ul class="w-full flex justify-between border-b-2 border-solid border-gray-300 my-2" v-for="(report,index) in reports" :key="index" :class="report.color">
                        <li>{{report.driver}}</li>
                        <li>{{report.truck}}</li>
                        <li>{{report.time}}</li>
                        <li>{{report.type}}</li>
                        <li>{{report.access}}</li>
                    </ul>
                </div>
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
      <OverviewRight/>
  </main>
</template>

<script>
import sideBar from "@/components/sideBar.vue"
import OverviewRight from "@/components/OverviewRight.vue"
export default {
    components:{
        sideBar,OverviewRight
    },
    data(){
        return{
            reports:[
                {driver:'John Allen',truck:'1715',time:'17:15',type:'Accident',access:'!',color:'text-red-400'},
                {driver:'John Allen',truck:'1715',time:'17:15',type:'Accident',access:'!',color:'text-red-400'},
                {driver:'John Allen',truck:'1715',time:'17:15',type:'Accident',access:'!',color:'text-red-400'},
                {driver:'John Allen',truck:'1715',time:'17:15',type:'Accident',access:'!',color:'text-red-400'},
                {driver:'John Allen',truck:'1715',time:'17:15',type:'Accident',access:'!',color:'text-red-400'},
                {driver:'John Allen',truck:'1715',time:'17:15',type:'Accident',access:'!',color:'text-red-400'},
                {driver:'John Allen',truck:'1715',time:'17:15',type:'Accident',access:'!',color:'text-yellow-400'},
                {driver:'John Allen',truck:'1715',time:'17:15',type:'Accident',access:'!',color:'text-yellow-400'}
            ],
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