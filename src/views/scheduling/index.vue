<template>
  <main class="flex">
      <sideBar/>
      <div id="container" class="w-5/8 px-6 pt-4">
        <header class="text-primary mb-2 flex justify-between items-center">
            <div class="flex items-center">
              <i class="far fa-compass fa-3x"></i><span class="text-2xl font-semibold pl-3">Scheduling</span>
            </div>
            <input type="text" placeholder="search.." class="rounded-xl border-2 border-gray-700 h-8">
            <p></p>
        </header>
        <section>
           <div id="darkblue-bg-with-image" class="bg-blue-900 px-2 text-gray-200 flex justify-between rounded-xl">
               <div id="text">
                   <p class="text-sm pt-8 pb-4">Good Morning Dispatchers</p>
                   <h3 class="text-md pb-0">Check your daily tak and shipments</h3>
               </div>
               <div id="image">
                   <img src="@/assets/images/scheduling-truck.png" alt="truck" width="210" class="transform -translate-y-8">
               </div>
           </div>
           <div id="chart" class="border-2 border-gray-400 rounded-md mt-4">
            <la-cartesian narrow :bound="[0]" :data="values">
                <la-bar prop="pv" color="skyblue"></la-bar>
                <la-x-axis prop="name"></la-x-axis>
                <la-y-axis></la-y-axis>
                <la-tooltip></la-tooltip>
            </la-cartesian>
           </div>
           <div id="dates" class="flex items-center justify-evenly w-1/2 text-gray-400 mt-3">
               <h3 class="text-blue-800 cursor-pointer">Today</h3>
               <h3 class="cursor-pointer">This week</h3>
               <h3 class="cursor-pointer">This Month</h3>
               <h3 class="cursor-pointer">This Year</h3>
           </div>
           <div id="table-like-rows">
               <div class="flex justify-around items-center text-gray-700 text-md mt-4">
                   <h3>LOAD NO</h3>
                   <h3>PICKUP</h3>
                   <h3>DELIVERY</h3>
                   <h3>QUOTE</h3>
                   <h3>INFO</h3>
               </div>
               <div id="dynamic-rows" class="flex justify-around items-center py-1 border-primary border-2 rounded-md mb-1">
                   <h3 class="text-blue-800 font-semibold">01347FF</h3>
                   <h3>DEC 14,2020</h3>
                   <h3>DEC 16,2020</h3>
                   <h3>2,172</h3>
                   <h3 class="bg-blue-200 text-blue-800 px-1 cursor-pointer"><i class="fas fa-search"></i></h3>
               </div>
               <div id="dynamic-rows" class="flex justify-around items-center py-1 border-primary border-2 rounded-md mb-1">
                   <h3 class="text-blue-800 font-semibold">01347FF</h3>
                   <h3>DEC 14,2020</h3>
                   <h3>DEC 16,2020</h3>
                   <h3>2,172</h3>
                   <h3 class="bg-blue-200 text-blue-800 px-1 cursor-pointer"><i class="fas fa-search"></i></h3>
               </div>
               <div id="dynamic-rows" class="flex justify-around items-center py-1 border-primary border-2 rounded-md mb-1">
                   <h3 class="text-blue-800 font-semibold">01347FF</h3>
                   <h3>DEC 14,2020</h3>
                   <h3>DEC 16,2020</h3>
                   <h3>2,172</h3>
                   <h3 class="bg-blue-200 text-blue-800 px-1 cursor-pointer"><i class="fas fa-search"></i></h3>
               </div>
           </div>
        </section>
      </div>
      <ScheduleRight/>
  </main>
</template>

<script>
import sideBar from "@/components/sideBar.vue"
import ScheduleRight from "@/components/ScheduleRight.vue"
import { Cartesian, Line } from 'laue'
export default {
    components:{
        sideBar,
        ScheduleRight,
        LaCartesian: Cartesian,
        LaLine: Line

    },
    data(){
        return{
            values: [
                { name: 'Jan', pv: 25},
                { name: 'Feb', pv: 26},
                { name: 'Mar', pv: 1},
                { name: 'Apr', pv: 10},
                { name: 'May', pv: 100},
                { name: 'Jun', pv: 70},
                { name: 'Jul', pv: 95},
                { name: 'Aug', pv: 80},
                { name: 'Sep', pv: 10},
                { name: 'Oct', pv: 20},
                { name: 'Nov', pv: 11},
                { name: 'Dec', pv: 11},
            ]
        }
    }
}
</script>

<style>
</style>