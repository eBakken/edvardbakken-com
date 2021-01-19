<template>
  <div class="w-full flex items-start py-6">
    <img class="object-contain h20 w-20 sm:h-24 sm:w-24" :src="logo" :alt="title">
    <div class="pl-8 flex flex-col">
      <div class="font-monospace">{{ time }}</div>
      <div class="text-3xl font-semibold font-serif"> {{ title }} </div>
      <div v-if="role" class="italic pb-1 font-serif">{{ role }}</div>
      <div class="text-lg font-light py-1 font-serif">
        {{ description }}
      </div>
    </div>
  </div>
</template>

<script>

export default {
  props: [
    'title',
    'description',
    'time',
    'logo',
    'role'
  ],
}
</script>
