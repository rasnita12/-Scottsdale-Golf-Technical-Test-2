<template>
    <!-- Modal -->
  <div v-if="showModel" class="fixed inset-0 bg-gray-800 opacity-75 z-[200] overflow-y-auto"></div>
  <div v-if="showModel" class="fixed z-[300] inset-0 overflow-y-auto">
    <div class="flex items-center justify-center min-h-screen">
      <div class="bg-white rounded-lg p-8">
        <span class="float-right cursor-pointer" @click="closeModel">
          <vue-feather type="x" size="23" stroke-width="2"></vue-feather>
        </span>
        <h2 class="text-lg block font-bold mb-4">View Product</h2>
        <div class="grid grid-cols-8 gap-6">
          <div class="flex xl:flex-row xs:flex-col xl:col-span-4 xs:col-span-8">
            <ul class="xl:flex-col xs:flex flex-row mr-4">
              <li>
                <img
                  src="@/assets/images/sweater1.jpg"
                  alt=""
                  class="w-20 h-20 mb-3 border-2 border-blue-400"
                />
              </li>
              <li>
                <img src="@/assets/images/sweater2.jpg" alt="" class="w-20 h-20 mb-3" />
              </li>
              <li>
                <img src="@/assets/images/sweater3.jpg" alt="" class="w-20 h-20 mb-3" />
              </li>
            </ul>
            <img src="@/assets/images/sweater1.jpg" alt="" class="h-96" />
          </div>
          <div class="xl:col-span-4 xs:col-span-8">
            <p class="text-lg font-semibold mb-2">Under Armour Sweater</p>
            <span
              class="bg-red-100 text-red-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-red-900 dark:text-red-300"
              >On Sale</span
            >
            <div class="mt-3">
              <span class="text-sm">
                Lorem Ipsum is simply dummy text of the printing and typesetting
              </span>
            </div>
            <div class="mt-3 mb-4">
              <span class="text-base font-semibold mt-3">£23.99</span>
              <span class="text-base line-through text-gray-400 mt-3 ml-2">£75.00</span>
            </div>
            <div class="mb-3">
              <span class="text-base mt-3 font-normal mt-3">Size</span>
              <ul class="text-sm cursor-pointer flex flex-row">
                <li class="mr-4">XS</li>
                <li class="mr-4 text-blue-600">S</li>
                <li class="mr-4">M</li>
                <li class="mr-4">L</li>
                <li class="mr-4">XL</li>
                <li class="mr-4">XXL</li>
              </ul>
            </div>
            <div class="mt-3 mb-5">
              <span class="text-base font-normal mt-3 mb-2">Color</span>
              <ul class="text-sm cursor-pointer flex flex-row">
                <li class="mr-2">
                  <div class="w-5 h-5 rounded-full bg-red-700"></div>
                </li>
                <li class="mr-2">
                  <div class="w-5 h-5 rounded-full border-2 border-blue-400 bg-orange-400"></div>
                </li>
                <li class="mr-2">
                  <div class="w-5 h-5 rounded-full bg-yellow-400"></div>
                </li>
                <li class="mr-2">
                  <div class="w-5 h-5 rounded-full bg-blue-700"></div>
                </li>
              </ul>
            </div>
            <div class="flex items-center mt-3 mb-4">
              <button
                class="bg-gray-200 hover:bg-gray-300 text-gray-700 font-bold py-2 px-4 rounded-l"
              >
                -
              </button>
              <input type="text" class="p-2 w-16 text-center" value="1" />
              <button
                class="bg-gray-200 hover:bg-gray-300 text-gray-700 font-bold py-2 px-4 rounded-r"
              >
                +
              </button>
            </div>
            <div>
              <button
                class="px-5 py-2 mt-5 bg-amber-700 text-white text-sm"
              >
                Add to Cart
              </button>
              <button
                class="px-5 py-2 mt-5 ml-3 bg-amber-700 text-white text-sm"
              >
                Add to WishList
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'product-modal',
  data(){
    return{
        showModel: false
    }
  },
  methods:{
    openModal(){
        this.showModel = true
    },
     closeModel() {
      this.showModel = false
      document.body.classList.remove('open-modal')
    }
  }
}
</script>