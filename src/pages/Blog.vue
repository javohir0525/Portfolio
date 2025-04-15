<template>
  <article class="text-white tracking-wide px-8" data-page="blog">
    <header>
      <h2 class="text-4xl font-bold mb-3">Blog</h2>
      <div class="w-12 h-1.5 rounded-full bg-[#ffdb70] mb-4"></div>
    </header>

    <section class="blog-posts">
      <ul class="grid lg:grid-cols-2 grid-col-1 gap-8 mb-10">
        <!-- 1 -->
        <BlogItem blog-src="https://i.postimg.cc/DysCZrWs/blog-1.jpg">
          <template v-slot:title>Design</template>
          <template v-slot:date>Feb 23, 2024</template>
          <template v-slot:description> Design conferences in 2024</template>
          <template v-slot:text
            >In 2024, several exciting design conferences are set to take place,
            offering opportunities for professionals and enthusiasts to connect,
            learn, and share innovative ideas.</template
          >
        </BlogItem>
        <!-- 2 -->
        <BlogItem blog-src="https://i.postimg.cc/QC7qFDMs/blog-2.jpg">
          <template v-slot:title>Design</template>
          <template v-slot:date>Jan 29, 2024</template>
          <template v-slot:description>Best fonts every designer</template>
          <template v-slot:text
            >When it comes to typography, choosing the right font is essential
            for effective design. In this article, I'll bring a brief overview
            of some of the best fonts that every designer should consider
            incorporating into their toolkit.</template
          >
        </BlogItem>
        <!-- 3 -->
        <BlogItem blog-src="https://i.postimg.cc/W1T71QcL/blog-3.jpg">
          <template v-slot:title>Design</template>
          <template v-slot:date>Dec 20, 2023</template>
          <template v-slot:description>Design digest #80</template>
          <template v-slot:text
            >Hello, my friends. In this Design Digest, I'll show you a curated
            collection of the latest trends, insights, and innovations in the
            design world. This edition highlights key themes and discussions
            that are shaping the future of design.</template
          >
        </BlogItem>
        <!-- 4 -->
        <BlogItem blog-src="https://i.postimg.cc/2S0n8yxh/blog-4.jpg">
          <template v-slot:title>Design</template>
          <template v-slot:date>Nov 29, 2023</template>
          <template v-slot:description>2023 UI interactions</template>
          <template v-slot:text
            >As we move into 2024, 2023 was marked by the rapidly evolution of
            the landscape of UI interactions, driven by advancements in
            technology and user expectations. Dive with me in this text to see
            the main areas changed in this year.</template
          >
        </BlogItem>
        <!-- 5 -->
        <BlogItem blog-src="https://i.postimg.cc/YCCmVkw9/blog-5.jpg">
          <template v-slot:title>Design</template>
          <template v-slot:date>Nov 12, 2023</template>
          <template v-slot:description>The forgotten art of spacing</template>
          <template v-slot:text>
            In the realm of design, spacing is often an overlooked yet crucial
            element that can significantly impact the overall aesthetic and
            functionality of a composition. This post will emphasize the
            importance of white space, margins, and padding in creating visually
            appealing and effective designs.</template
          >
        </BlogItem>
        <!-- 6 -->
        <BlogItem blog-src="https://i.postimg.cc/zBCBvP16/blog-6.jpg">
          <template v-slot:title>Design</template>
          <template v-slot:date>Oct 20, 2023</template>
          <template v-slot:description>Design digest #79</template>
          <template v-slot:text
            >Hi, my friends. In this Design Digest I'll focus in the tools and
            resources that we use daily in our projects. Also, I'll include
            examples of software recommendations, online courses, and design
            communities that foster collaboration and learning.</template
          >
        </BlogItem>
      </ul>
    </section>
  </article>
</template>

<script setup lang="ts">
import BlogItem from "../components/BlogItem.vue";
</script>
