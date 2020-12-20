<template>
        <div class="w-1/4 px-4 pt-4 px-">
        <section id="top-button" class="flex justify-end items-center">
            <button class="border-2 border-solid border-gray-400 text-gray-400 px-1">DISPATCHERS</button>
        </section>
        <section id="load-information" class="flex flex-col justify-center items-center mt-2">
            <h1 class="text-gray-500 text-xl font-semibold">LOAD INFORMATION</h1>
            <!-- FIRST CARD -->
            <div id="first-card" class="w-full p-1 border-2 border-solid border-primary rounded-md mb-2">
                <div class="flex justify-between items-center">
                    <i class="fas fa-truck-moving fa-3x"></i>
                    <h1 class="text-lg text-blue-700 font-semibold">1248YEB</h1>
                    <p class="text-yellow-700 bg-yellow-200 px-2 text-sm">Waiting Fullfilment</p>
                </div>
                <hr>
                <div id="select-days" class="flex justify-end items-center">
                    <p class="text-blue-700 mr-4 text-sm">SELECT DAYS</p>
                    <div id="days" class="text-xs flex">
                        <div class="days">S</div>
                        <div class="days">M</div>
                        <div class="days">T</div>
                        <div class="days">W</div>
                        <div class="days">T</div>
                        <div class="days">F</div>
                        <div class="days">S</div>
                    </div>
                </div>
                <br>
                <div id="details">
                    <section class="flex items-center text-sm">
                        <i class="fas fa-map-marker-alt text-gray-600"></i>
                        <div class="ml-2">
                            <h3 class=" text-blue-700">PICKUP</h3>
                            <p>ADD LOCATION NAME</p>
                            <p>1600 Pennysylvania ave, Washington DC 20500</p>
                        </div>
                    </section>
                    |
                    <section class="flex items-center text-sm">
                        <i class="fas fa-map-pin text-gray-600"></i>
                        <div class="ml-2">
                            <h3 class=" text-blue-700">DELIVER</h3>
                            <p>ADD LOCATION NAME</p>
                            <p>1600 Pennysylvania ave, Washington DC 20500</p>
                        </div>
                    </section>
                </div>
            </div>
            <!-- !FIRST CARD -->
            <!-- SECOND CARD -->
            <div id="second-card" class="w-full p-1 border-2 border-solid border-gray-400 rounded-md mb-2 text-sm bg-gray-100">
                <h1>STOCK OF INFORMATION</h1>
                <div class="text-center text-blue-700">
                    <p>32 Packs of Panties</p>
                    <p>102 Gallons of Oil</p>
                    <p>14 Stainless</p>
                    <p>44 Love Seats</p>
                </div>
            </div>
            <!-- !SECOND CARD -->
            <!-- THIRD CARD -->
            <div id="third-card" class="w-full p-1 border-2 border-solid border-primary rounded-md mb-2 text-sm">
                <h1 class="font-semibold">FINANCIALS</h1>
                <div class="flex justify-around pl-12">
                    <p>DRIVER PAYOUT</p>
                    <p class="text-red-600">-$3,952</p>
                </div>
                <div class="flex justify-around pl-12">
                    <p>DRIVER PAYOUT</p>
                    <p class="text-red-600">-$3,952</p>
                </div>
                <div class="flex justify-around pl-12">
                    <p>DRIVER PAYOUT</p>
                    <p class="text-red-600">-$3,952</p>
                </div>
                <div class="flex items-center justify-between px-4">
                    <p class="text-blue-700">TOTAL</p>
                    <h2 class="text-lg">+$14,423</h2>
                </div>
            </div>
            <!-- !THIRD CARD -->
        </section>
      </div>
</template>

<script>
export default {

}
</script>

<style>

</style>