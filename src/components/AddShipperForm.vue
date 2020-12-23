<template>
<div class="h-96 overflow-y-scroll">
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