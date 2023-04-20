<template>
  <!-- product one -->
  <div class="xl:col-span-4 md:col-span-6 sm:col-span-12 xs:col-span-12 mt-3 relative">
    <span
      class="z-10 bg-red-100 text-red-800 text-xs font-medium mt-2 ml-2 px-2.5 py-0.5 rounded dark:bg-red-900 dark:text-red-300 absolute left-0 top-0 cursor-pointer"
      >On Sale</span
    >
    <div class="bg-card flex items-center justify-center mb-4 relative group">
      <img
        src="../assets/images/pro2-removebg-preview.png"
        alt="product1"
        class="w-80 transition duration-700 transform hover:scale-110"
      />
      <ul
        class="duration-300 origin-right transform scale-x-0 group-hover:scale-x-100 absolute right-0 bottom-0 mr-3 mb-3"
      >
        <li class="mb-2">
          <button
            v-tippy="{ content: 'Add to Wishlist', placement: 'left' }"
            type="button"
            class="bg-white hover:bg-black hover:text-white hover:duration-700 rounded-3xl px-3 py-3 drop-shadow-xl flex items-center"
          >
            <vue-feather type="heart" size="18" stroke-width="1.5"></vue-feather>
          </button>
        </li>
        <li class="mb-2">
          <button
            v-tippy="{ content: 'Quick View', placement: 'left' }"
            type="button"
            class="bg-white hover:bg-black hover:text-white hover:duration-700 rounded-3xl px-3 py-3 drop-shadow-xl flex items-center"
            @click="showViewModel"
          >
            <vue-feather type="eye" size="18" stroke-width="1.5"></vue-feather>
          </button>
        </li>
        <li>
          <button
            type="button"
            v-tippy="{ content: 'Add to Cart', placement: 'left' }"
            class="bg-white hover:bg-black hover:text-white hover:duration-700 rounded-3xl px-3 py-3 drop-shadow-xl flex items-center"
          >
            <vue-feather type="shopping-cart" size="18" stroke-width="1.5"></vue-feather>
          </button>
        </li>
      </ul>
    </div>
    <p class="text-base font-medium cursor-pointer hover:text-amber-800">
      Under Armour Tech Nech Sweater
    </p>
    <p class="d-block text-sm font-normal hover:text-amber-800 cursor-pointer">
      After Burn / Orange Blast
    </p>
    <span class="text-base font-medium hover:text-amber-800 cursor-pointer">£23.99</span>
  </div>

  <!-- product two -->
  <div class="xl:col-span-4 md:col-span-6 sm:col-span-12 xs:col-span-12 mt-3">
    <div class="bg-card flex items-center justify-center mb-4 relative group">
      <img
        src="../assets/images/prodcut-7-removebg-preview.png"
        alt="product1"
        class="w-80 transition duration-700 transform hover:scale-110"
      />
      <ul
        class="duration-300 origin-right transform scale-x-0 group-hover:scale-x-100 absolute right-0 bottom-0 mr-3 mb-3"
      >
        <li class="mb-2">
          <button
            v-tippy="{ content: 'Add to Wishlist', placement: 'left' }"
            type="button"
            class="bg-white hover:bg-black hover:text-white hover:duration-700 rounded-3xl px-3 py-3 drop-shadow-xl flex items-center"
          >
            <vue-feather type="heart" size="18" stroke-width="1.5"></vue-feather>
          </button>
        </li>
        <li class="mb-2">
          <button
            v-tippy="{ content: 'Quick View', placement: 'left' }"
            type="button"
            class="bg-white hover:bg-black hover:text-white hover:duration-700 rounded-3xl px-3 py-3 drop-shadow-xl flex items-center"
            @click="showViewModel"
          >
            <vue-feather type="eye" size="18" stroke-width="1.5"></vue-feather>
          </button>
        </li>
        <li>
          <button
            type="button"
            v-tippy="{ content: 'Add to Cart', placement: 'left' }"
            class="bg-white hover:bg-black hover:text-white hover:duration-700 rounded-3xl px-3 py-3 drop-shadow-xl flex items-center"
          >
            <vue-feather type="shopping-cart" size="18" stroke-width="1.5"></vue-feather>
          </button>
        </li>
      </ul>
    </div>
    <p class="text-base font-medium cursor-pointer hover:text-amber-800">
      Under Armour Tech Nech Sweater
    </p>
    <p class="d-block text-sm font-normal hover:text-amber-800 cursor-pointer">
      After Burn / Orange Blast
    </p>
    <span class="text-base font-medium hover:text-amber-800 cursor-pointer">£23.99</span>
  </div>

  <!-- product three -->
  <div class="xl:col-span-4 md:col-span-6 sm:col-span-12 xs:col-span-12 mt-3 relative">
    <span
      class="z-10 bg-red-100 text-red-800 text-xs font-medium mt-2 ml-2 px-2.5 py-0.5 rounded dark:bg-red-900 dark:text-red-300 absolute left-0 top-0 cursor-pointer"
      >On Sale</span
    >
    <div class="bg-card flex items-center justify-center mb-4 relative group">
      <img
        src="../assets/images/product4-removebg-preview.png"
        alt="product1"
        class="w-80 transition duration-700 transform hover:scale-110"
      />
      <ul
        class="duration-300 origin-right transform scale-x-0 group-hover:scale-x-100 absolute right-0 bottom-0 mr-3 mb-3"
      >
        <li class="mb-2">
          <button
            v-tippy="{ content: 'Add to Wishlist', placement: 'left' }"
            type="button"
            class="bg-white hover:bg-black hover:text-white hover:duration-700 rounded-3xl px-3 py-3 drop-shadow-xl flex items-center"
          >
            <vue-feather type="heart" size="18" stroke-width="1.5"></vue-feather>
          </button>
        </li>
        <li class="mb-2">
          <button
            v-tippy="{ content: 'Quick View', placement: 'left' }"
            type="button"
            class="bg-white hover:bg-black hover:text-white hover:duration-700 rounded-3xl px-3 py-3 drop-shadow-xl flex items-center"
            @click="showViewModel"
          >
            <vue-feather type="eye" size="18" stroke-width="1.5"></vue-feather>
          </button>
        </li>
        <li>
          <button
            type="button"
            v-tippy="{ content: 'Add to Cart', placement: 'left' }"
            class="bg-white hover:bg-black hover:text-white hover:duration-700 rounded-3xl px-3 py-3 drop-shadow-xl flex items-center"
          >
            <vue-feather type="shopping-cart" size="18" stroke-width="1.5"></vue-feather>
          </button>
        </li>
      </ul>
    </div>
    <p class="text-base font-medium cursor-pointer hover:text-amber-800">
      Under Armour Tech Nech Sweater
    </p>
    <p class="d-block text-sm font-normal hover:text-amber-800 cursor-pointer">
      After Burn / Orange Blast
    </p>
    <span class="text-base font-medium hover:text-amber-800 cursor-pointer">£23.99</span>
  </div>
  <ProductModal ref="viewModal"></ProductModal>
</template>
<script>
import ProductModal from '../components/ProductModal.vue'
export default {
  name: 'product-item',
  components: { ProductModal },
  methods: {
    showViewModel() {
      document.body.classList.add('open-modal')
      this.$refs.viewModal.openModal()
    }
  }
}
</script>
<style scoped>
.bg-card {
  background-color: #f2f3f5;
  height: 355px;
}
</style>
