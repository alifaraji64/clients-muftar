<template>
  <main class="bg-gray-600 flex items-center justify-center min-h-screen">
      <div id="container" class="w-3/4 bg-white rounded-lg p-2">
      <header class="flex justify-between mb-2 items-center">
          <h1 class="text-gray-800 text-lg font-bold">Add New Driver</h1>
          <span class="bg-red-300 text-red-600 px-2 font-bold cursor-pointer" @click="goToFleetPage">X</span>
      </header>

        <section id="image-and-input" class="flex justify-between">
            <!-- making a two column grid -->
                <!-- first column(input for pdf) -->
                <div class="flex flex-col justify-between items-center">
                    <div id="upload-image" class=" bg-gray-600 flex justify-center items-center flex-col p-4 w-full mb-1">
                        <i class="far fa-file fa-7x  pointer-events-none text-white" ></i>
                        <h2 class="text-white text-lg mb-10">Upload PDF</h2>
                        <input type="file" class="opacity border-primary cursor-pointer ml-16">
                    </div>
                    <div id="upload-image" class=" bg-gray-600 flex justify-center items-center flex-col p-4 w-full mt-1 h-3/4">
                        <i class="far fa-file fa-7x  pointer-events-none text-white" ></i>
                        <h2 class="text-white text-lg mb-10">Upload PDF</h2>
                        <input type="file" class="opacity border-primary cursor-pointer ml-16">
                    </div>
                </div>

                <!-- !first column(input for pdf) -->
                <!-- second column(inputs) -->
                <div id="inputs" class="w-1/2">
                    <AddDriverForm/>
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
import AddDriverForm from '@/components/AddDriverForm.vue'
export default {
    components:{AddDriverForm},
    methods:{
        goToFleetPage(){
            this.$router.push('/fleet-data/drivers')
        }
    }
}
</script>

<style>

</style>