<template>
  <article class="text-white tracking-wide px-8" data-page="portfolio">
    <header>
      <h2 class="text-4xl font-bold mb-4">Portfolio</h2>
      <div class="w-12 h-1.5 rounded-full bg-[#ffdb70] mb-6"></div>
    </header>

    <section class="">
      <div>
        <ul class="flex gap-4 mb-8 overflow-x-auto overflow-hidden whitespace-nowrap no-scrollbar">
          <li class="hover:text-gray-300 transition active:text-[#ffdb70]">
            <button class="cursor-pointer" data-filter-btn>All</button>
          </li>
          <li class="hover:text-gray-300 transition active:text-[#ffdb70]">
            <button class="cursor-pointer">Web Design</button>
          </li>
          <li class="hover:text-gray-300 transition active:text-[#ffdb70]">
            <button class="cursor-pointer">Applications</button>
          </li>
          <li class="hover:text-gray-300 transition active:text-[#ffdb70]">
            <button class="cursor-pointer">Web Development</button>
          </li>
        </ul>
      </div>

      <!-- <div class="filter-select-box">
        <button class="filter-select" data-select>
          <div class="select-value" data-select-value>Select Category</div>

          <div class="select-icon">
            <ion-icon name="chevron-down"></ion-icon>
          </div>
        </button>

        <ul class="select-list">
          <li class="select-item"><button data-select-item>All</button></li>
          <li class="select-item">
            <button data-select-item>Web Design</button>
          </li>
          <li class="select-item">
            <button data-select-item>Applications</button>
          </li>
          <li class="select-item">
            <button data-select-item>Web Development</button>
          </li>
        </ul>
      </div> -->

      <ul class="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-7 mb-5">
        <!-- 1 -->
        <portfolioItems blog-src="https://i.postimg.cc/qRHpHMyd/project-1.jpg">
          <template v-slot:title>Finance</template>
          <template v-slot:description>Web Development</template>
        </portfolioItems>
        <!-- 2 -->
        <portfolioItems blog-src="https://i.postimg.cc/bNrcM2Wt/project-2.png">
          <template v-slot:title>Orizon</template>
          <template v-slot:description>Web Development</template>
        </portfolioItems>
        <!-- 3 -->
        <portfolioItems blog-src="https://i.postimg.cc/jSJVqYsq/project-3.jpg">
          <template v-slot:title>Fundo</template>
          <template v-slot:description>Web Development</template>
        </portfolioItems>
        <!-- 4 -->
        <portfolioItems blog-src="https://i.postimg.cc/dtpXxNGb/project-4.png">
          <template v-slot:title>Brawlhalla</template>
          <template v-slot:description>Web Development</template>
        </portfolioItems>
        <!-- 5 -->
        <portfolioItems blog-src="https://i.postimg.cc/43T0JKLw/project-5.png">
          <template v-slot:title>DSM.</template>
          <template v-slot:description>Web Development</template>
        </portfolioItems>
        <!-- 6 -->
        <portfolioItems blog-src="https://i.postimg.cc/qR1DX1kZ/project-6.png">
          <template v-slot:title>Metaspark</template>
          <template v-slot:description>Web Development</template>
        </portfolioItems>
        <!-- 7 -->
        <portfolioItems blog-src="https://i.postimg.cc/Kj4q9tjc/project-7.png">
          <template v-slot:title>Summary</template>
          <template v-slot:description>Web Development</template>
        </portfolioItems>
        <!-- 8 -->
        <portfolioItems blog-src="https://i.postimg.cc/rw2j4B1w/project-8.jpg">
          <template v-slot:title>Task Manager</template>
          <template v-slot:description>Applications</template>
        </portfolioItems>
        <!-- 9 -->
        <portfolioItems blog-src="https://i.postimg.cc/7LxNsSQv/project-9.png">
          <template v-slot:title>Arrival</template>
          <template v-slot:description>Web Development</template>
        </portfolioItems>
      </ul>
    </section>
  </article>
</template>

<script setup lang="ts">
import PortfolioItems from "../components/portfolioItems.vue";
import portfolioItems from "../components/portfolioItems.vue";
</script>
