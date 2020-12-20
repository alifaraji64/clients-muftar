<template>
  <main class="flex">
      <sideBar/>
      <div id="container" class="w-5/8 px-6 pt-4">
        <header class="text-primary mb-2">
            <i class="fas fa-home fa-3x"></i><span class="text-2xl font-semibold">Overview</span>
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
      <div class="w-1/4 px-4 pt-4 px-">
        <section id="top-icons" class="flex justify-end items-center">
            <div class="mx-2"><i class="far fa-bell fa-3x text-primary"></i></div>
            <div class="mx-2"><i class="far fa-user-circle fa-3x text-primary"></i></div>
        </section>
        <section id="unassigned-loads" class="flex flex-col justify-center items-center mt-2">
            <h1 class="text-gray-500 text-xl font-semibold">UNASSINGED LOADS</h1>
            <!-- CARD -->
            <div id="card" class="w-full p-1 border-2 border-solid border-primary rounded-md mb-4">
                <div class="flex justify-between items-center">
                    <h2 class="text-lg text-primary font-semibold">0238789</h2>
                    <h2 class="px-0.5 py-0 bg-blue-200 text-primary cursor-pointer">+</h2>
                </div>
                <p class="text-gray-800 text-md">ANYTIME</p>
                <div class="flex">
                    <i class="fas fa-map-marker-alt"></i>
                    <p class="text-sm text-gray-700 pl-2">Lorem ipsum, dolor sit  nemo dolore exercitationem sint </p>
                </div>
                <div class="flex justify-between items-center">
                    <i class="fas fa-truck-moving"></i>
                    <div>
                        <i class="fas fa-dollar-sign bg-primary text-white p-1 rounded-full"></i>
                        <span>$4,654</span>
                    </div>
                </div>
            </div>
            <div id="card" class="w-full p-1 border-2 border-solid border-primary rounded-md mb-4">
                <div class="flex justify-between items-center">
                    <h2 class="text-lg text-primary font-semibold">0238789</h2>
                    <h2 class="px-0.5 py-0 bg-blue-200 text-primary cursor-pointer">+</h2>
                </div>
                <p class="text-gray-800 text-md">ANYTIME</p>
                <div class="flex">
                    <i class="fas fa-map-marker-alt"></i>
                    <p class="text-sm text-gray-700 pl-2">Lorem ipsum, dolor sit  nemo dolore exercitationem sint </p>
                </div>
                <div class="flex justify-between items-center">
                    <i class="fas fa-truck-moving"></i>
                    <div>
                        <i class="fas fa-dollar-sign bg-primary text-white p-1 rounded-full"></i>
                        <span>$4,654</span>
                    </div>
                </div>
            </div>
            <div id="card" class="w-full p-1 border-2 border-solid border-primary rounded-md mb-4">
                <div class="flex justify-between items-center">
                    <h2 class="text-lg text-primary font-semibold">0238789</h2>
                    <h2 class="px-0.5 py-0 bg-blue-200 text-primary cursor-pointer">+</h2>
                </div>
                <p class="text-gray-800 text-md">ANYTIME</p>
                <div class="flex">
                    <i class="fas fa-map-marker-alt"></i>
                    <p class="text-sm text-gray-700 pl-2">Lorem ipsum, dolor sit  nemo dolore exercitationem sint </p>
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
        </section>
      </div>
  </main>
</template>

<script>
import sideBar from "@/components/sideBar.vue"
export default {
    components:{
        sideBar
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