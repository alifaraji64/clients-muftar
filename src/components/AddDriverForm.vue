<template>
<div class="overflow-y-scroll h-96">
    <form class="flex items-center justify-between flex-wrap px-2">

    <div class="w-1/2 text-center pr-1">
      <label for="broker" class="label">Broker Name:</label>
      <br>
        <select id="broker" class="input">
            <option value="volvo"></option>
            <option value="saab">Saab</option>
            <option value="opel">Opel</option>
            <option value="audi">Audi</option>
        </select>
    </div>

    <div class="w-1/2 text-center pl-1">
      <label for="broker" class="label">Phone Number:</label>
      <br>
      <input type="text" class="input">
    </div>

    <div class="w-1/2 text-center pr-1">
      <label for="broker" class="label">Contact Email:</label>
      <br>
        <select id="broker" class="input">
            <option value="volvo"></option>
            <option value="saab">Saab</option>
            <option value="opel">Opel</option>
            <option value="audi">Audi</option>
        </select>
    </div>

    <div class="w-1/2 text-center pl-1">
      <label for="broker" class="label">Bol Submission Email:</label>
      <br>
      <input type="text" class="input">
    </div>

    <div class="w-full text-center pl-1">
      <label for="broker" class="label">Bol Submission Email:</label>
      <br>
      <input type="text" class="input my-0.5">
      <input type="text" class="input my-0.5">
      <input type="text" class="input my-0.5">
    </div>

    <div class="w-1/2 text-center pl-1 mt-2">
      <label for="broker" class="label">Bol Submission Email:</label>
      <br>
      <input type="checkbox" class="input">
    </div>

    <div class="w-full text-center pl-1 mt-2">
      <label for="broker" class="label">payrate(by mile):</label>
      <br>
      <input type="input" class="input" placeholder="$">
    </div>

    <div class="w-full text-center pl-1 mt-2">
      <label for="broker" class="label">payrate(by mile):</label>
      <br>
      <input type="input" class="input" placeholder="%">
    </div>

    <div class="w-full text-center mt-2">
      <button class="bg-primary text-white py-1 px-3 rounded-md outline-none hover:bg-green-600">+ add app</button>
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
</style>