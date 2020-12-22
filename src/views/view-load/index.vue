<template>
  <main class="bg-gray-600 flex items-center justify-center min-h-screen">
      <div id="container" class="w-3/4 bg-white rounded-lg p-2">
      <header class="flex justify-between mb-2 items-center">
          <div id="text" class="flex">
             <h1 class="text-gray-800 text-lg font-bold">View Load</h1>
             <h2 class="text-lg text-primary font-semibold ml-4">0238789</h2>
          </div>

          <span class="bg-red-300 text-red-600 px-2 font-bold cursor-pointer" @click="goToLoadsPage">X</span>
      </header>

        <section id="image-and-input" class="flex justify-between">
            <!-- making a two column grid -->
                <!-- first column(input for pdf) -->
                <div id="uploaded-image" class="w-1/2 bg-gray-600 flex justify-center items-center flex-col p-4">
                    <img src="@/assets/images/view-load.png" width="320" alt="load" class="transform scale-105">
                </div>
                <!-- !first column(input for pdf) -->
                <!-- second column(inputs) -->
                <div id="inputs" class="w-1/2">
                    <AddLoadForm/>
                </div>
                <!-- !second column(inputs) -->
            <!-- making a two column grid -->
        </section>
        <hr>
        <div class="w-full flex justify-end mt-3">
            <button class="bg-red-500 mr-1 px-10 py-0 rounded-md text-white hover:bg-red-600">Cancel</button>
            <button class="bg-green-500 ml-1 px-10 py-0 rounded-md text-white hover:bg-green-600">Confirm</button>
        </div>
      </div>
  </main>
</template>

<script>
import AddLoadForm from '@/components/AddLoadForm.vue'
export default {
    components:{AddLoadForm},
    methods:{
        goToLoadsPage(){
            this.$router.push('/loads')
        }
    }
}
</script>

<style>

</style>