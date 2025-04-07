<script setup>
import Aside from "./layouts/Aside.vue";
import Nav from "./layouts/Nav.vue";
</script>

<template>
  <main>
    <div class="w-[1440px] mx-auto py-16 px-32 flex gap-5">
      <div
        class="bg-[#202022] rounded-2xl border-2 border-neutral-700 p-10 sticky top-14 h-full"
      >
        <Aside />
      </div>
      <div
        class="bg-[#202022] w-full border-2 border-neutral-700 rounded-2xl items-start flex flex-col"
      >
        <div
          class="justify-end w-full flex "
        >
          <Nav class="w-[500px] p-4 bg-[#2c2c2c] rounded-tr-2xl rounded-bl-2xl border border-neutral-700"/>
        </div>
        <router-view></router-view>
      </div>
    </div>
  </main>
</template>
