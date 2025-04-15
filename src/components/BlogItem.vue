<template>
    <li class="group">
          <a href="#">
            <figure class="blog-banner-box">
              <img
                :src="props.blogSrc"
                alt="Design conferences in 2024"
                loading="lazy"
                class="rounded-2xl w-full"
              />
            </figure>

            <div class="p-5">
              <div class="flex opacity-60 items-center">
                <p class="blog-category"><slot name="title">Title</slot></p>
                <span class="scale-120 mr-2 ml-2 text-white text-sm">•</span>
                <time datetime="2024-02-23"> <slot name="date">date</slot></time>
              </div>

              <h3
                class="text-2xl font-bold group-hover:text-[#ffdb70] transition ease-in-out"
              >
                <slot name="description">Main</slot>
              </h3>
              <p class="opacity-65 mt-3">
                <slot name="text">
                     text
                </slot>
              </p>
            </div>
          </a>
        </li>
</template>

<script setup>
  import { defineProps } from 'vue';
  const props = defineProps({
    blogSrc:{
        type: String,
        default: 'https://i.postimg.cc/DysCZrWs/blog-1.jpg'
    }
  })
</script>