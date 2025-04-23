<script setup>
import { RouterView } from "vue-router";
import Aside from "./layouts/Aside.vue";
import Nav from "./layouts/Nav.vue";
import AOS from "aos";
import { Transition } from "vue";

AOS.init();
</script>
<!-- <style scoped>
.page-opacity-enter-active,
.page-opacity-leave-active {
  transition: 600ms ease all;
}
.page-opacity-enter-from,
.page-opacity-leave-to {
  opacity: 0;
}
</style> -->
<template>
  <main class="flex flex-col lg:flex-row p-5 sm:p-10 gap-5">
    <div
      class="bg-[#202022] rounded-2xl border-2 border-neutral-700 p-4 md:p-8 lg:sticky top-10 text-white lg:h-full"
    >
      <Aside class="flex text-center" />
    </div>
    <div
      class="bg-[#202022] border-2 overflow-hidden border-neutral-700 rounded-2xl w-full max-w-[1100px]"
    >
      <div class="flex justify-end">
        <Nav
          class="p-5 max-w-[500px] w-auto bg-[#2c2c2c] sm:rounded-bl-2xl border sm:mb-0 mb-4 border-neutral-700"
        />
      </div>

      <Transition
        mode="out-in"
        appear
        enter-active-class="transition-opacity duration-500 ease-out"
        enter-from-class="opacity-0"
        enter-to-class="opacity-100"
        leave-active-class="transition-opacity duration-300 ease-in"
        leave-from-class="opacity-100"
        leave-to-class="opacity-0"
      >
        <RouterView :key="$route.fullPath"></RouterView>
      </Transition>

      <!-- <router-view v-slot="{ Component, route }">
        <transition :name="route.meta.transition || 'fade'">
          <component :is="Component" />
        </transition>
      </router-view> -->
    </div>
  </main>
</template>
