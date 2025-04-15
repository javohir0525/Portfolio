<template>
  <li class="rounded-lg" data-filter-item data-category="web development">
    <a href="#!" class="flex flex-col gap-2">
      <figure class="group">
        <img
          :src="props.blogSrc"
          alt="finance"
          class="rounded-xl group-hover:scale-105 group-hover:opacity-45 transition-transform duration-300"
          loading="lazy"
          width="300"
        />
      </figure>
      <div class="p-1">
        <h3 class="font-semibold text-white text-justify">
          <slot name="title">Title</slot>
        </h3>
        <p class="opacity-60 font-light"><slot name="description">Description</slot></p>
      </div>
    </a>
  </li>
</template>

<script setup>
import { defineProps } from "vue";
const props = defineProps({
  blogSrc: {
    type: String,
    default: "https://i.postimg.cc/qRHpHMyd/project-1.jpg",
  },
});
</script>
