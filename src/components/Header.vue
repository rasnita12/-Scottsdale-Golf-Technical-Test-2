<template>
  <div class="sticky top-0 bg-white z-[100]" :class="{ scrolled: !atTopOfPage }">
    <div class="sm:container mx-auto px-4 py-3">
      <div class="flex justify-between items-center">
        <img src="../assets/images/logo.png" alt="Logo" class="lg:w-48 xs:w-36" />

        <div class="hidden lg:block">
          <ul class="flex flex-row defaultFont">
            <li
              class="mr-5 font-medium hover:text-amber-800 text-gray-800 text-base px-4 py-2 cursor-pointer"
            >
              Home
            </li>
            <li
              class="mr-5 font-medium hover:text-amber-800 text-gray-800 text-base px-4 py-2 cursor-pointer"
            >
              Products
            </li>
            <li
              class="mr-5 font-medium hover:text-amber-800 text-gray-800 text-base px-4 py-2 cursor-pointer"
            >
              <button
                id="doubleDropdownButton"
                data-dropdown-toggle="doubleDropdown"
                data-dropdown-placement="bottom-start"
                data-dropdown-trigger="hover"
                class="flex items-center justify-between"
              >
                Brands
                <vue-feather type="chevron-down" size="22" stroke-width="1"></vue-feather>
              </button>
              <div
                id="doubleDropdown"
                class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
              >
                <ul
                  class="py-2 text-sm text-gray-700 dark:text-gray-200 transition delay-700 duration-300 ease-in-out"
                  aria-labelledby="doubleDropdownButton"
                >
                  <li>
                    <a
                      href="#"
                      class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-400 dark:hover:text-white"
                      >Boss</a
                    >
                  </li>
                  <li>
                    <a
                      href="#"
                      class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-400 dark:hover:text-white"
                      >Adidas</a
                    >
                  </li>
                  <li>
                    <a
                      href="#"
                      class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-400 dark:hover:text-white"
                      >Nike</a
                    >
                  </li>
                  <li>
                    <a
                      href="#"
                      class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-400 dark:hover:text-white"
                      >Puma</a
                    >
                  </li>
                </ul>
              </div>
            </li>
            <li
              class="mr-5 font-medium hover:text-amber-800 text-gray-800 text-base px-4 py-2 cursor-pointer"
            >
              About
            </li>
            <li
              class="mr-5 font-medium hover:text-amber-800 text-gray-800 text-base px-4 py-2 cursor-pointer"
            >
              Contact
            </li>
          </ul>
        </div>

        <!-- signin and icons -->
        <div>
          <ul class="flex flex-row defaultFont xs:ml-3">
            <li
              class="hidden font-medium lg:block hover:text-amber-800 text-gray-800 text-base px-3 py-2 cursor-pointer"
            >
              Sign in
            </li>
            <li class="hover:text-amber-800 text-gray-800 text-sm px-3 py-2 xs:pr-0 cursor-pointer">
              <vue-feather type="search" size="22" stroke-width="1.5"></vue-feather>
            </li>
            <li class="hover:text-amber-800 text-gray-800 text-sm px-3 py-2 xs:pr-0 cursor-pointer">
              <vue-feather type="heart" size="22" stroke-width="1.5"></vue-feather>
            </li>
            <li class="hover:text-amber-800 text-gray-800 text-sm px-3 py-2 xs:pr-0 cursor-pointer">
              <vue-feather type="shopping-cart" size="22" stroke-width="1.5"></vue-feather>
            </li>
            <li>
              <button
                class="lg:hidden flex items-center px-3 py-2 text-gray-500 border-gray-600 hover:text-black hover:border-orange-400"
                id="menu-toggle"
                @click="toggleMenu"
              >
                <vue-feather type="menu" size="22" stroke-width="1.5"></vue-feather>
              </button>
            </li>
          </ul>
        </div>

        <!-- sidebar nav -->
        <div v-if="showMenu" class="lg:hidden w-48 p-5 drop-shadow-2xl sidenav">
          <div class="flex justify-between">
            <img src="../assets/images/logo.png" alt="Logo" class="w-28 my-4" />
            <span class="my-4" @click="toggleMenu">
              <vue-feather type="x" size="18" stroke-width="1"></vue-feather>
            </span>
          </div>
          <div class="text-sm md:flex md:flex-col defaultFont">
            <a href="#" class="hover:text-amber-800 text-gray-800 text-sm"> Home </a>
            <a href="#" class="block mt-4 md:inline-block md:mt-0 mr-6 hover:text-amber-800">
              Products
            </a>
            <a href="#" class="block mt-4 md:inline-block md:mt-0 mr-6 hover:text-amber-800">
              About
            </a>
            <a
              href="#"
              class="block mt-4 md:inline-block md:mt-0 mr-6 hover:text-amber-800"
              @click="showDropdownMenus = !showDropdownMenus"
            >
              Brands
            </a>
            <!-- Dropdown menu -->
            <div
              v-if="showDropdownMenus"
              id="dropdownDelay"
              class="z-10 bg-white divide-y divide-gray-100 ml-3 mt-0"
            >
              <ul
                class="py-2 text-xs text-gray-700 dark:text-gray-200"
                aria-labelledby="dropdownDelayButton"
              >
                <li>
                  <a
                    href="#"
                    class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >Dashboard</a
                  >
                </li>
                <li>
                  <a
                    href="#"
                    class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >Settings</a
                  >
                </li>
                <li>
                  <a
                    href="#"
                    class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >Earnings</a
                  >
                </li>
                <li>
                  <a
                    href="#"
                    class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >Sign out</a
                  >
                </li>
              </ul>
            </div>

            <a href="#" class="block mt-4 md:inline-block md:mt-0 hover:text-amber-800">
              Contact
            </a>
            <a href="#" class="block mt-4 md:inline-block md:mt-0 hover:text-amber-800">
              Sign in
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'header-item',
  data() {
    return {
      showMenu: false,
      atTopOfPage: true,
      showDropdownMenus: false
    }
  },
  beforeMount() {
    window.addEventListener('scroll', this.handleScroll)
  },
  methods: {
    toggleMenu() {
      this.showMenu = !this.showMenu
    },
    handleScroll() {
      // when the user scrolls, check the pageYOffset
      if (window.pageYOffset > 0) {
        // user is scrolled
        if (this.atTopOfPage) this.atTopOfPage = false
      } else {
        // user is at top of page
        if (!this.atTopOfPage) this.atTopOfPage = true
      }
    }
  }
}
</script>
<style>
.sidenav {
  height: 100%; /* 100% Full-height */
  position: fixed; /* Stay in place */
  z-index: 1; /* Stay on top */
  top: 0; /* Stay at the top */
  left: 0;
  background-color: rgb(255 255 253); /* Black*/
  overflow-x: hidden; /* Disable horizontal scroll */
  padding-top: 60px; /* Place content 60px from the top */
  transition: 0.5s; /* 0.5 second transition effect to slide in the sidenav */
}

/* The navigation menu links */
.sidenav a,
.sidenav p {
  padding: 8px 8px 8px 1px;
  color: #333;
  transition: 0.3s;
}
.scrolled {
  @apply shadow-lg;
  border-bottom: 0px;
}
</style>
