<template>
  <main class="flex">
      <sideBar/>
      <div id="container" class="w-3/5 px-6 pt-4">
        <header class="text-primary mb-2 flex justify-between items-center">
            <div class="flex items-center">
              <i class="fas fa-dollar-sign fa-3x"></i><span class="text-2xl font-semibold pl-3">Financials</span>
            </div>
            <input type="text" placeholder="search.." class="rounded-xl border-2 border-gray-700 h-8">
            <p></p>
        </header>
        <!-- creating a two column grid which the first column will contain two rows but the second just one -->
        <section  class="flex justify-around items-center mt-8 w-full">
            <!-- first-column -->
            <div class="flex flex-col justify-around items-center w-2/5">
                <!-- first-row -->
                <div id="donut-chart-container" class="text-center border-2 border-gray-400 rounded-lg p-2 w-full mb-1 mr-2">
                    <div class="flex justify-between items-center">
                        <h2 class="text-blue-800 text-sm">EARNINGS</h2>
                        <span class="text-gray-400 cursor-pointer"><i class="fas fa-ellipsis-h"></i></span>
                    </div>
                    <div id="chart" >
                        <la-polar :data="values" class="transform scale-200 translate-x-10 ml-4">
                            <la-pie show-label label-prop="name" prop="pv" ></la-pie>
                        </la-polar>
                    </div>
                    <h3>Total Earnings</h3>
                    <h1 class="text-blue-800 font-semibold">$16,005,221</h1>
                </div>
                <!-- !first-row -->

                <!-- second-row -->
                <div id="export-data" class="border-2 border-gray-400 rounded-lg w-full p-2 relative z-10 mt-1 mr-2">
                    <div class="flex justify-between items-center">
                        <h2 class="text-blue-800 text-sm"></h2>
                        <span class="text-gray-400 cursor-pointer"><i class="fas fa-ellipsis-h"></i></span>
                    </div>
                    <div v-for="(data,index) in exportDatas" :key="index">
                        <h3 class="text-gray-600 cursor-pointer">{{data.text}}</h3>
                    </div>
                    <div class="flex justify-end">
                        <h3 class="text-sm cursor-pointer">Export Data</h3>
                    </div>
                </div>
                <!-- !second-row -->
            </div>
            <!-- !first-column -->

            <!-- second-column -->
            <div id="linear-chart-container" class="border-2 border-gray-400 rounded-lg w-3/5 p-2 relative z-10">
                <header class="flex justify-between items-center">
                    <h2 class="text-blue-800 uppercase">this year</h2>
                    <i class="far fa-calendar fa-2x"></i>
                </header>
                <div id="chart" class="bg-blue-100 text-center mt-2">
                    <la-cartesian :width="430" :height="160" :data="values2">
                        <la-line animated prop="value" :width='4'></la-line>
                    </la-cartesian>
                </div>
                <div id="months" class="flex text-sm justify-between">
                    <span v-for="(month,index) in months" :key="index">{{month}}</span>
                </div>
                <div id="green-cards" class="flex justify-between">
                    <div class="w-1/3 text-center bg-gradient-to-b from-white to-green-100 text-sm py-3 mx-1 rounded-lg mt-2 mb-2">
                        <h2 class="text-green-400">TITLE REVENUE</h2>
                        <h3 class="text-green-800">$12,015,003</h3>
                    </div>
                    <div class="w-1/3 text-center bg-gradient-to-b from-white to-green-100 text-sm py-3 mx-1 rounded-lg mt-2 mb-2">
                        <h2 class="text-green-400">TITLE REVENUE</h2>
                        <h3 class="text-green-800">$12,015,003</h3>
                    </div>
                    <div class="w-1/3 text-center bg-gradient-to-b from-white to-green-100 text-sm py-3 mx-1 rounded-lg mt-2 mb-2">
                        <h2 class="text-green-400">TITLE REVENUE</h2>
                        <h3 class="text-green-800">$12,015,003</h3>
                    </div>

                </div>
                <div id="profit-suggestion" class="mt-2">
                    <h1>Profit Suggestion</h1>
                    <div class="flex justify-between items-center">
                        <p class="text-gray-500 text-sm">
                            if we save X amount on facebook ads and reinforce our efforts on  peer-to-peer affiliate marketing we could earn an additional 30% by next quarter
                        </p>
                        <i class="far fa-lightbulb fa-7x"></i>
                    </div>
                </div>
                <br>
                <div id="button" class="flex justify-center">
                    <button class="text-white bg-primary px-6 py-2 mb-2">Learn More</button>
                </div>
                <br>
            </div>
            <!-- !second-column -->

        </section>
        <!-- creating a two column grid which the first column will contain two rows but the second just one -->
      </div>
      <FinancialsRight/>
  </main>
</template>

<script>
import sideBar from "@/components/sideBar.vue"
import FinancialsRight from "@/components/FinancialsRight.vue"
import { Cartesian, Line } from 'laue'
export default {
    components:{
        sideBar,
        FinancialsRight,
        LaCartesian: Cartesian,
        LaLine: Line

    },
    data(){
        return{
            values: [
            { name: 'Page A', pv: 2400 },
            { name: 'Page B', pv: 1398 },
            { name: 'Page C', pv: 9800 },
            ],
            exportDatas:[
                {text:'Get financial Report'},
                {text:'Managa Shippers'},
                {text:'View Driver Rates'},
                {text:'View Load sales'},
                {text:'View Dispatchers'},
                {text:'Tax Planning'},
            ],
            values2: [
                { value: 3200 },
                { value: 2600 },
                { value: 4500 },
                { value: 3040 },
                { value: 6900 },
                { value: 4910 },
                { value: 3200 },
                { value: 2600 },
                { value: 4500 },
                { value: 3040 },
                { value: 6900 },
                { value: 4910 },
            ],
            months:[
                'Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'
            ]
        }
    },
    mounted(){
        //positioning the pie chart a bit better
        let svg = document.querySelector('svg');
        svg.parentElement.style.maxWidth = "100%"
        svg.parentElement.style.maxHeight = "100%"
        svg.parentElement.style.transform = "scale(2.1) translateY(70px)"
        if(svg.width.baseVal.value == 600){
            svg.style.width = '90%';
            svg.width.baseVal.value = 250
            svg.height.baseVal.value = 250
        }
    }
}
</script>

<style>
</style>