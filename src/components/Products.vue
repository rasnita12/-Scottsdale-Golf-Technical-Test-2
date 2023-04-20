<template>
  <div class="sm:container mx-auto px-4 py-3">
    <div class="grid grid-cols-12 gap-x-8">
      <div class="lg:block sm:hidden lg:col-span-2 xs:hidden">
        <ProductSidebar />
      </div>
      
      <div class="lg:col-span-10 xs:col-span-12 defaultFont">
        <div class="py-2">
          <div class="flex justify-between items-center">
            <span class="xs:text-xs text-gray-600 sm:text-sm font-normal"
              >Showing 25 of 79 results</span
            >
            <div class="flex flex-row items-center">
              <label for="sort" class="mr-2 text-gray-600 sm:text-sm font-normal xs:text-xs"
                >Sort By</label
              >
              <select
                id="sort"
                class="w-24 text-gray-600 sm:text-sm font-normal border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 xs:text-xs"
              >
                <option class="text-gray-600">Latest</option>
                <option class="text-gray-600">High to Low</option>
                <option class="text-gray-600">Low to High</option>
                <option class="text-gray-600">On Sale</option>
                <option class="text-gray-600">New Collection</option>
              </select>
              <button
                class="lg:hidden sm:block xs:px-2 xs:py-2 px-5 py-3 ml-3 hover:bg-amber-700 bg-amber-800 text-white text-sm"
                @click="toggleFilter"
              >
                Filters
              </button>
            </div>
          </div>

          <div class="grid grid-cols-12 grid-flow-row w-100 gap-4">
            <ProductItem />
            <ProductItem />
            <ProductItem />
            <ProductItem />
            <ProductItem />
          </div>
          <button
            class="px-5 py-2 mx-auto my-5 flex justify-center bg-amber-700 hover:bg-amber-800 transition delay-600 duration-300 ease-in-out hover:text-white text-white text-sm"
          >
            Load More
          </button>
        </div>
      </div>
    </div>
    <div v-if="showFilters" class="lg:hidden md:flex md:items-center w-60 p-5 sidefilter">
      <span class="float-right my-4" @click="toggleFilter">
        <vue-feather type="x" size="18" stroke-width="1"></vue-feather>
      </span>
      <div class="text-sm md:flex-grow defaultFont my-5 py-5">
        <span class="font-semibold defaultFont">FILTERS</span>
        <ProductSidebar />
        <button class="px-5 py-2 bg-amber-800 text-white text-sm">Apply Filter</button>
      </div>
    </div>
  </div>
</template>

<script>
import ProductSidebar from '../components/ProductSidebar.vue'
import ProductItem from '../components/ProductItem.vue'
export default {
  name: 'product-item',
  components: { ProductSidebar, ProductItem },
  data() {
    return {
      showFilters: false
    }
  },
  methods: {
    toggleFilter() {
      this.showFilters = !this.showFilters
    }
  }
}
</script>

<style scoped>
.sidefilter {
  height: 100%;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  background-color: rgb(255 255 253);
  overflow-x: hidden;
  padding-top: 60px;
  transition: 0.5s;
}

.sidefilter a {
  padding: 8px 8px 8px 1px;
  color: #333;
  transition: 0.3s;
}
</style>
