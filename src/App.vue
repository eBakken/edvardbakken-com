<template>
  <div id="app" class="h-full">
    <div class="fixed w-full bg-white">
      <div class="flex pb-2 pt-3 px-8 h-full justify-around items-center max-w-4xl mx-auto font-monospace dotted-spaced">
        <router-link to='/' class="text-4xl font-bold hidden sm:block font-serif">edvardbakken.</router-link>
        <router-link to='/' class="text-2xl font-bold sm:hidden font-serif">ed.</router-link>
      </div>
      <div class="flex pb-2 pt-3 px-8 h-full justify-around items-center max-w-4xl mx-auto font-monospace border-b border-black">
        <router-link to='/' class="font-medium">Home</router-link>
        <div class="">/</div>
        <router-link to='/projects' class="font-medium">Projects</router-link>
        <div class="">/</div>
        <router-link to='/resume' class="font-medium">Resume</router-link>
        <div class="">/</div>
        <router-link to='/blog' class="font-medium">Blog</router-link>
        <div class="">/</div>
        <router-link to='/contact' class="font-medium">Contact</router-link>
      </div>
    </div>
    <div class="min-h-full flex flex-col">
      <div class="w-full max-w-4xl p-8 pt-32 min-h-full flex-auto flex mx-auto">
        <router-view></router-view>
      </div>
      <div class="bg-white w-full">
        <div class="max-w-4xl text-center mx-auto p-12">
          <div class="font-serif text-2xl font-bold p-2">edvardbakken.</div>
          <div class="font-monospace p-2">Copyright © 2020</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
 
};
</script>

<style scoped>
.dotted-spaced {
  background-image: linear-gradient(to right, #000000 20%, rgba(255, 255, 255, 0) 0%);
  background-position: bottom;
  background-size: 5px 1px;
  background-repeat: repeat-x;
}
</style>