<script setup>
import Aside from "./layouts/Aside.vue";
import Nav from "./layouts/Nav.vue";
</script>

<template>
  <main class="">
    <div class="flex flex-row p-20 gap-5">
      <div
        class="bg-[#202022] rounded-2xl border-2 border-neutral-700 p-8 sticky top-14 h-full"
      >
        <Aside />
      </div>
      <div
        class="bg-[#202022] border-2 border-neutral-700 rounded-2xl w-full"
      >
        <div
          class="flex justify-end"
        >
          <Nav class="p-5 max-w-[500px] w-full bg-[#2c2c2c] rounded-tr-2xl rounded-bl-2xl border mb-4 border-neutral-700"/>
        </div>
        <router-view></router-view>
      </div>
    </div>
  </main>
</template>
