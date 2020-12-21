<template>
      <div class="w-1/4 px-4 pt-4 text-center">
        <div id="calendar" class="mb-3 mx-auto">
            <vc-date-picker v-model="date" />
        </div>
        <div id="card" class="border-2 border-gray-500 rounded-lg flex justify-around items-center mb-2 w-4/5 mx-auto" v-for="(card,index) in cards" :key="index">
            <i :class="card.icon"></i>
            <div>
                <h2 class="text-lg font-light">{{card.title}}</h2>
                <h2 class="text-md font-semibold">{{card.number}}</h2>
            </div>
            <span class="text-blue-800 bg-blue-300 px-1 cursor-pointer"> > </span>
        </div>
        <p class="cursor-pointer text-blue-500 text-lg">View All</p>
      </div>
</template>

<script>
export default {
    data(){
        return{
            date: new Date(),
            cards:[
                {icon:"fas fa-shopping-cart fa-2x",title:'Loads Delivered',number:'21,312'},
                {icon:"fas fa-hat-cowboy fa-2x",title:'Drives Route',number:'350'},
                {icon:"fas fa-chart-line fa-2x",title:'Revenue',number:'$16,005,003'},
            ]
        }
    }
}
</script>

<style>

</style>