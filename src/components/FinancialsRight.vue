<template>
      <div class="w-4/5 px-4 pt-4 text-center">
        <section id="top-icons" class="flex justify-end items-center">
            <div class="mx-2 cursor-pointer"><i class="far fa-user-circle fa-3x text-primary"></i></div>
        </section>
        <section id="recent-loads" class="bg-gray-200 p-2 mt-2 rounded-lg max-h-screen overflow-y-scroll">
            <input type="text" class="bg-transparent border-b-2 border-gray-700 border-solid outline-none" placeholder="Recent Loads">
            <div id="icons" class="flex justify-end text-gray-600 my-2">
                <i class="far fa-calendar mx-1 cursor-pointer"></i>
                <i class="fas fa-search mx-1 cursor-pointer"></i>
                <i class="fas fa-upload mx-1 cursor-pointer"></i>
            </div>
            <div id="single-card" class="bg-white my-2" v-for="k in 15" :key="k">
                <div class="text-2xs flex justify-between  p-1 text-blue-800">
                    <span>Transaction ID</span>
                    <span>Date</span>
                    <span>Payout</span>
                    <span>Pickup</span>
                    <span>Deliver</span>
                    <span>Driver</span>
                </div>
                <div class="text-3xs flex justify-between  p-1 text-gray-600">
                    <span class="text-3xs">fsdf870245354</span>
                    <span class="text-3xs">1/1/2021</span>
                    <span class="text-3xs">$23.43</span>
                    <span class="text-3xs">Walmart A</span>
                    <span class="text-3xs">Walmart B</span>
                    <span class="text-3xs">James R</span>
                </div>
            </div>
        </section>
      </div>
</template>

<script>
export default {
    data(){
        return{

        }
    }
}
</script>

<style>

</style>