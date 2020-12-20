<template>
  <main class="max-w-full bg-hero-pattern h-screen bg-bottom flex justify-center items-center flex-col">
    <div id="overlay" class="bg-blue-800 h-full w-full opacity-20 absolute top-0 left-0"></div>
    <section id="text_logo" class="relative flex text-white strokeme">
      <i class="fas fa-moon fa-7x"></i>
      <div class="">
        <h1 class="text-7xl font-extrabold">MUFTAR</h1>
        <h2 class="float-right font-bold tracking-wider">DIGITAL</h2>
      </div>
    </section>
        <!-- middle-text and button -->
    <section class="text-white mt-4 relative font-semibold flex flex-col justify-center items-center">
      <h2 class="text-xl tracking-wide">Bringing Logistics Online</h2>
      <button class="bg-primary px-8 py-1 my-4 rounded-md" @click='modalIsOpen = !modalIsOpen'>LOGIN</button>
      <p>Don't have an account? <span class="text-yellow-500"> Contact us</span></p>
    </section>
      <!-- !middle-text and button -->

      <!-- modal for login -->
      <section class="w-2/5 bg-gray-100 absolute rounded-lg flex flex-col items-center justify-center z-10" v-if="modalIsOpen">
          <div class="border-primary border-solid border-b-4 mb-6">
            <h2 class="text-gray-700 p-3 text-2xl font-semibold">LOGIN</h2>
          </div>
          <div class="w-full">
            <form class="flex justify-center items-center flex-col w-2/3 mx-auto">
              <input type="text" placeholder="MC number" class="w-4/5 my-1 bg-transparent border-solid border-gray-400 border-2">
              <input type="text" placeholder="dispatch ID" class="w-4/5 my-1 bg-transparent border-solid border-gray-400 border-2">
              <input type="password" placeholder="password" class="w-4/5 my-1 bg-transparent border-solid border-gray-400 border-2">
              <button class="mt-8 bg-primary text-white px-6 py-1 mb-4 rounded-lg">LOGIN</button>
            </form>
          </div>
      </section>
      <!-- !modal for login -->
  </main>
</template>

<script>

export default {
  name: 'Home',
  data(){
    return{
      modalIsOpen:false
    }
  },
  components: {
  },
  methods:{
  },
  mounted(){
    window.addEventListener('click',(e)=>{
      if(e.srcElement.id === "overlay" && this.modalIsOpen == true){
        this.modalIsOpen = false;
      }
    })
  }
}
</script>
<style>
.strokeme {
  text-shadow: -2px -2px 0 #000, 2px -2px 0 #000, -2px 2px 0 #000, 2px 2px 0 #000;
}
</style>
