<template>
  <div class="defaultFont">
    <!-- price filter -->
    <div class="py-4">
      <p class="text-base font-medium">Price Filter</p>
      <div class="slidecontainer">
        <input type="range" min="1" max="100" value="50" class="slider" id="myRange" />
        <div class="flex justify-between items-center mt-2">
          <span class="text-sm font-semibold">£0 - £100</span>
          <button
            class="px-5 py-2 bg-zinc-200 hover:bg-amber-800 transition delay-600 duration-300 ease-in-out hover:text-white text-zinc-700 text-sm"
          >
            Filter
          </button>
        </div>
      </div>
    </div>

    <!-- status filter -->
    <div class="py-4">
      <p class="text-base font-medium divide-solid mb-2">Product Status</p>
      <div class="flex flex-col mt-4">
        <div class="flex items-center mb-4">
          <input
            id="default-checkbox"
            type="checkbox"
            class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
          />
          <label
            for="default-checkbox"
            class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >In Stock</label
          >
        </div>
        <div class="flex items-center mb-4">
          <input
            id="default-checkbox"
            type="checkbox"
            checked
            class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
          />
          <label
            for="default-checkbox"
            class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >On Sale</label
          >
        </div>
      </div>
    </div>

    <!-- categories filter -->
    <div class="py-4">
      <p class="text-base font-medium mb-2">Brand Categories</p>
      <ul class="text-sm list-disc list-inside overflow-y-auto h-52">
        <li class="mt-3 hover:text-amber-800 cursor-pointer">Golf Shoes</li>
        <li class="mt-3 hover:text-amber-800 cursor-pointer">Golf Polo Shirts</li>
        <li class="mt-3 hover:text-amber-800 cursor-pointer text-amber-800">Sweaters</li>
        <li class="mt-3 hover:text-amber-800 cursor-pointer">Base Layers</li>
        <li class="mt-3 hover:text-amber-800 cursor-pointer">Outerwear</li>
        <li class="mt-3 hover:text-amber-800 cursor-pointer">Golf Trousers</li>
        <li class="mt-3 hover:text-amber-800 cursor-pointer">Beanie Hats</li>
        <li class="mt-3 hover:text-amber-800 cursor-pointer">Ladies Golf Clothing</li>
        <li class="mt-3 hover:text-amber-800 cursor-pointer">Junior Clothing</li>
        <li class="mt-3 hover:text-amber-800 cursor-pointer">Golf Accessories</li>
        <li class="mt-3 hover:text-amber-800 cursor-pointer">Under Armour x Steph Curry</li>
      </ul>
    </div>
    <!-- color filter -->
    <div class="py-4">
      <p class="text-base font-medium mb-2">Filter by Color</p>
      <ul>
        <li class="mt-3">
          <div class="flex items-center flex-row">
            <div class="w-6 h-6 rounded-full bg-red-700"></div>
            <span class="text-sm hover:text-amber-800 ml-3 cursor-pointer">Red</span>
          </div>
        </li>
        <li class="mt-3">
          <div class="flex items-center flex-row">
            <div class="w-6 h-6 rounded-full bg-orange-400"></div>
            <span class="text-sm hover:text-amber-800 text-amber-800 ml-3 cursor-pointer"
              >Orange</span
            >
          </div>
        </li>
        <li class="mt-3">
          <div class="flex items-center flex-row">
            <div class="w-6 h-6 rounded-full bg-yellow-400"></div>
            <span class="text-sm hover:text-amber-800 ml-3 cursor-pointer">Yellow</span>
          </div>
        </li>
        <li class="mt-3">
          <div class="flex items-center flex-row">
            <div class="w-6 h-6 rounded-full bg-blue-700"></div>
            <span class="text-sm hover:text-amber-800 ml-3 cursor-pointer">Blue</span>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  name: 'product-sidebar'
}
</script>
<style scoped>
.slider {
  width: 100%;
  height: 4px;
}
</style>
