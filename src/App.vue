<script setup>
import Aside from "./layouts/Aside.vue";
import Nav from "./layouts/Nav.vue";
</script>

<template>
  <main class="flex flex-col lg:flex-row p-5 sm:p-10 gap-5">
    <div
      class="bg-[#202022] rounded-2xl border-2 border-neutral-700 p-8 lg:sticky top-10 text-white h-full"
    >
      <Aside class="items-center " />
    </div>
    <div
      class="bg-[#202022] border-2 overflow-hidden border-neutral-700 rounded-2xl w-full max-w-[1100px]"
    >
      <div class="flex justify-end">
        <Nav
          class="p-5 max-w-[500px] w-auto bg-[#2c2c2c] sm:rounded-bl-2xl border mb-4 border-neutral-700"
        />
      </div>
      <router-view></router-view>
    </div>
  </main>
</template>
