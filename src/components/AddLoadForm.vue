<template>
<div class="h-96 overflow-y-scroll">
    <form class="flex items-center justify-between flex-wrap px-2">

    <div class="w-1/2 text-center pr-1">
      <label for="broker" class="label">Select Broker/shipper:</label>
      <br>
        <select id="broker" class="input">
            <option value="volvo"></option>
            <option value="saab">Saab</option>
            <option value="opel">Opel</option>
            <option value="audi">Audi</option>
        </select>
    </div>

    <div class="w-1/2 text-center pl-1">
      <label for="broker" class="label">Confirmation/Load Number:</label>
      <br>
      <input type="text" class="input">
    </div>

    <div class="w-full text-center mt-2">
      <label for="broker" class="label">Load Quote:</label>
      <br>
      <input type="text" class="input">
    </div>

    <div class="w-full text-center mt-2">
      <label for="broker" class="label">Pickup Location</label>
      <br>
      <input type="text" class="input">
    </div>

    <div class="w-1/2 text-center mt-2 pr-1">
      <label for="broker" class="label">Pickup Time:</label>
      <br>
      <input type="text" class="input">
    </div>

    <div class="w-1/2 text-center mt-2 pl-1">
      <label for="broker" class="label">Pickup Date:</label>
      <br>
      <input type="text" class="input">
    </div>

    <h2 class="text-gray-600 text-lg font-semibold w-full">DROPS</h2>

    <div class="w-full text-center mt-2 pl-1">
      <label for="broker" class="label">Drop Location:</label>
      <br>
      <input type="text" class="input">
    </div>

    <div class="w-1/2 text-center mt-2 pl-1">
      <label for="broker" class="label">Drop Time:</label>
      <br>
      <input type="text" class="input">
    </div>

    <div class="w-1/2 text-center mt-2 pl-1">
      <label for="broker" class="label">Drop Date:</label>
      <br>
      <input type="text" class="input">
    </div>

    <div class="w-full text-center mt-2">
      <button class="bg-green-500 text-white py-1 px-3 rounded-md outline-none hover:bg-green-600">+ Add Drop</button>
    </div>

    <div class="w-full text-center mt-2 pl-1">
      <label for="broker" class="label">Load Weight:</label>
      <br>
      <input type="text" class="input">
    </div>

    <div class="w-full text-center mt-2 pl-1">
      <label for="broker" class="label">Commodity:</label>
      <br>
      <textarea class='input' cols="30" rows="5" placeholder="What is being transported"></textarea>
    </div>

    <div class="w-full text-center mt-2 pl-1">
      <label for="broker" class="label">Noted:</label>
      <br>
      <textarea class='input' cols="30" rows="5" placeholder="Special instructions"></textarea>
    </div>

  </form>
</div>
</template>

<script>
export default {

}
</script>

<style>
div input{
  width:100%;
  text-align: center;
}
div select{
  width:100%;
  text-align: center;
}
div textarea{
  width:100%;
  text-align: center;
}
</style>