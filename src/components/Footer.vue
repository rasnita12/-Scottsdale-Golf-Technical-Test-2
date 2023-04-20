<template>
  <div class="bg-slate-700">
    <div class="sm:container mx-auto px-4 py-3 pt-5 pb-5">
      <div class="grid lg:grid-cols-5 xs:grid-flow-row gap-x-14 text-slate-50">
        <div>
          <span class="text-lg font-medium">SCOTTSDALE GOLF</span>
          <p class="text-slate-300 text-justify mt-2">
            Using golf clubs that are perfectly fitted to suit your physical build and your golf
            swing characteristics.
          </p>
          <ul class="flex margin-list">
            <li>
              <vue-feather type="facebook" size="22" stroke-width="2" class="mr-2"></vue-feather>
            </li>
            <li>
              <vue-feather type="instagram" size="22" stroke-width="2" class="mr-2"></vue-feather>
            </li>
            <li>
              <vue-feather type="linkedin" size="22" stroke-width="2" class="mr-3"></vue-feather>
            </li>
          </ul>
        </div>
        <div class="">
          <span class="text-lg font-medium">QUICK LINK</span>
          <ul class="mt-2 margin-list">
            <li class="hover:transform hover:translate-x-3 hover:duration-500 cursor-pointer">Support</li>
            <li class="hover:transform hover:translate-x-3 hover:duration-500 cursor-pointer">Helpline</li>
            <li class="hover:transform hover:translate-x-3 hover:duration-500 cursor-pointer">Courses</li>
            <li class="hover:transform hover:translate-x-3 hover:duration-500 cursor-pointer">About</li>
            <li class="hover:transform hover:translate-x-3 hover:duration-500 cursor-pointer">Event</li>
          </ul>
        </div>
        <div>
          <span class="text-lg font-medium">OTHER PAGE</span>
          <ul class="mt-2 margin-list">
            <li class="hover:transform hover:translate-x-3 hover:duration-500 cursor-pointer">Shop</li>
            <li class="hover:transform hover:translate-x-3 hover:duration-500 cursor-pointer">Sale</li>
            <li class="hover:transform hover:translate-x-3 hover:duration-500 cursor-pointer">Help</li>
            <li class="hover:transform hover:translate-x-3 hover:duration-500 cursor-pointer">Log In</li>
            <li class="hover:transform hover:translate-x-3 hover:duration-500 cursor-pointer">Fitting</li>
          </ul>
        </div>
        <div>
          <span class="text-lg font-medium">COMPANY</span>
          <ul class="mt-2 margin-list">
            <li class="hover:transform hover:translate-x-3 hover:duration-500 cursor-pointer">Shop</li>
            <li class="hover:transform hover:translate-x-3 hover:duration-500 cursor-pointer">Sale</li>
            <li class="hover:transform hover:translate-x-3 hover:duration-500 cursor-pointer">Help</li>
            <li class="hover:transform hover:translate-x-3 hover:duration-500 cursor-pointer">Log In</li>
            <li class="hover:transform hover:translate-x-3 hover:duration-500 cursor-pointer">Fitting</li>
          </ul>
        </div>
        <div>
          <p class="text-lg font-medium mb-4">CONTACT US</p>
          <p class="text-slate-300 mb-3">
            2005 Your Address Goes Here. 896, Address 10010, HGJ Phone/Fax:0123456789
            Email:demo@example.com
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'footer-item'
}
</script>

<style scoped>
ul li {
  color: rgb(203 213 225);
  margin: 10px 0px;
}
</style>
