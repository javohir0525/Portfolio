<template>
  <article class="text-white tracking-wide px-8" data-page="portfolio">
    <header>
      <h2 class="text-4xl font-bold mb-4">Portfolio</h2>
      <div class="w-12 h-1.5 rounded-full bg-[#ffdb70] mb-6"></div>
    </header>

    <section class="">
      <ul class="flex gap-4 mb-8">
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

      <ul class="grid grid-cols-3 gap-7 mb-5">
        <li class="rounded-lg" data-filter-item data-category="web development">
          <a href="#!" class="flex flex-col gap-2">
            <figure class="group">
              <div class="relative overflow-hidden rounded-2xl group transition-all">
                <ion-icon class="text-[rgb(255,219,112)] absolute content-center top-1/2 left-1/2 bg-[linear-gradient(to_bottom_right,_#3f3f40_3%,_#303030_97%)] rounded-xl flex items-center justify-center transition-opacity duration-300 opacity-0  group-hover:opacity-100 z-10" name="eye-outline"></ion-icon>
              </div>

              <img
                src="https://i.postimg.cc/qRHpHMyd/project-1.jpg"
                alt="finance"
                class="rounded-xl group-hover:scale-105 group-hover:opacity-45 transition-transform duration-300"
                loading="lazy"
                width="300"
              />
            </figure>
            <div class="p-1">
              <h3 class="font-semibold text-white  text-justify">Finance</h3>
              <p class="opacity-60 font-light">Web Development</p>
            </div>
          </a>
        </li>

        <li
          class="project-item active"
          data-filter-item
          data-category="web development"
        >
          <a href="#" class="flex flex-col gap-2">
            <figure class="group">
              <div class="relative overflow-hidden rounded-2xl group transition-all">
                <ion-icon class="text-[rgb(255,219,112)] absolute content-center top-1/2 left-1/2 bg-[linear-gradient(to_bottom_right,_#3f3f40_3%,_#303030_97%)] rounded-xl flex items-center justify-center transition-opacity duration-300 opacity-0  group-hover:opacity-100 z-10" name="eye-outline"></ion-icon>
              </div>

              <img
                src="https://i.postimg.cc/bNrcM2Wt/project-2.png"
                alt="orizon"
                loading="lazy"
                class="rounded-xl group-hover:scale-105 group-hover:opacity-45 transition-transform duration-300"
                width="300"
              />
            </figure>
            <div class="p-1">
              <h3 class="font-semibold text-white  text-justify">Orizon</h3>
              <p class="opacity-60 font-light">Web Development</p>
            </div>
          </a>
        </li>

        <li
          class="project-item active"
          data-filter-item
          data-category="web design"
        >
          <a href="#" class="flex flex-col gap-2">
            <figure class="group">
              <div class="relative overflow-hidden rounded-2xl group transition-all">
                <ion-icon class="text-[rgb(255,219,112)] absolute content-center top-1/2 left-1/2 bg-[linear-gradient(to_bottom_right,_#3f3f40_3%,_#303030_97%)] rounded-xl flex items-center justify-center transition-opacity duration-300 opacity-0  group-hover:opacity-100 z-10" name="eye-outline"></ion-icon>
              </div>

              <img
                src="https://i.postimg.cc/jSJVqYsq/project-3.jpg"
                alt="fundo"
                loading="lazy"
                class="rounded-xl group-hover:scale-105 group-hover:opacity-45 transition-transform duration-300"
                width="300"
              />
            </figure>
            <div class="p-1">
              <h3 class="font-semibold text-white  text-justify">Fundo</h3>
              <p class="opacity-60">Web Design</p>
            </div>
          </a>
        </li>

        <li
          class="project-item active"
          data-filter-item
          data-category="applications"
        >
          <a href="#" class="flex flex-col gap-2">
            <figure class="group">
              <div class="relative overflow-hidden rounded-2xl group transition-all">
                <ion-icon class="text-[rgb(255,219,112)] absolute content-center top-1/2 left-1/2 bg-[linear-gradient(to_bottom_right,_#3f3f40_3%,_#303030_97%)] rounded-xl flex items-center justify-center transition-opacity duration-300 opacity-0  group-hover:opacity-100 z-10" name="eye-outline"></ion-icon>
              </div>

              <img
                src="https://i.postimg.cc/dtpXxNGb/project-4.png"
                alt="brawlhalla"
                loading="lazy"
                class="rounded-xl group-hover:scale-105 group-hover:opacity-45 transition-transform duration-300"
                width="300"
              />
            </figure>
            <div class="p-1">
              <h3 class="font-semibold text-white  text-justify">Brawlhalla</h3>
              <p class="opacity-60 font-light">Applications</p>
            </div>
          </a>
        </li>

        <li
          class="project-item active"
          data-filter-item
          data-category="web design"
        >
          <a href="#" class="flex flex-col gap-2">
            <figure class="group">
              <div class="relative overflow-hidden rounded-2xl group transition-all">
                <ion-icon class="text-[rgb(255,219,112)] absolute content-center top-1/2 left-1/2 bg-[linear-gradient(to_bottom_right,_#3f3f40_3%,_#303030_97%)] rounded-xl flex items-center justify-center transition-opacity duration-300 opacity-0  group-hover:opacity-100 z-10" name="eye-outline"></ion-icon>
              </div>

              <img
                src="https://i.postimg.cc/43T0JKLw/project-5.png"
                alt="dsm."
                loading="lazy"
                class="rounded-xl group-hover:scale-105 group-hover:opacity-45 transition-transform duration-300"
                width="300"
              />
            </figure>
            <div class="p-1">
              <h3 class="font-semibold text-white  text-justify">DSM.</h3>
              <p class="opacity-60 font-light">Web Design</p>
            </div>
          </a>
        </li>

        <li
          class="project-item active"
          data-filter-item
          data-category="web design"
        >
          <a href="#" class="flex flex-col gap-2">
            <figure class="group">
              <div class="relative overflow-hidden rounded-2xl group transition-all">
                <ion-icon class="text-[rgb(255,219,112)] absolute content-center top-1/2 left-1/2 bg-[linear-gradient(to_bottom_right,_#3f3f40_3%,_#303030_97%)] rounded-xl flex items-center justify-center transition-opacity duration-300 opacity-0  group-hover:opacity-100 z-10" name="eye-outline"></ion-icon>
              </div>

              <img
                src="https://i.postimg.cc/qR1DX1kZ/project-6.png"
                alt="metaspark"
                loading="lazy"
                class="rounded-xl group-hover:scale-105 group-hover:opacity-45 transition-transform duration-300"
                width="300"
              />
            </figure>
            <div class="p-1">
              <h3 class="font-semibold text-white  text-justify">Metaspark</h3>
              <p class="opacity-60 font-light">Web Design</p>
            </div>
          </a>
        </li>

        <li
          class="project-item active"
          data-filter-item
          data-category="web development"
        >
          <a href="#" class="flex flex-col gap-2">
            <figure class="group">
              <div class="relative overflow-hidden rounded-2xl group transition-all">
                <ion-icon class="text-[rgb(255,219,112)] absolute content-center top-1/2 left-1/2 bg-[linear-gradient(to_bottom_right,_#3f3f40_3%,_#303030_97%)] rounded-xl flex items-center justify-center transition-opacity duration-300 opacity-0  group-hover:opacity-100 z-10" name="eye-outline"></ion-icon>
              </div>

              <img
                src="https://i.postimg.cc/Kj4q9tjc/project-7.png"
                alt="summary"
                loading="lazy"
                class="rounded-xl group-hover:scale-105 group-hover:opacity-45 transition-transform duration-300"
                width="300"
              />
            </figure>
            <div class="p-1">
              <h3 class="font-semibold text-white  text-justify">Summary</h3>
              <p class="opacity-60 font-light">Web Development</p>
            </div>
          </a>
        </li>

        <li
          class="project-item active"
          data-filter-item
          data-category="applications"
        >
          <a href="#" class="flex flex-col gap-2">
            <figure class="group">
              <div class="relative overflow-hidden rounded-2xl group transition-all">
                <ion-icon class="text-[rgb(255,219,112)] absolute content-center top-1/2 left-1/2 bg-[linear-gradient(to_bottom_right,_#3f3f40_3%,_#303030_97%)] rounded-xl flex items-center justify-center transition-opacity duration-300 opacity-0  group-hover:opacity-100 z-10" name="eye-outline"></ion-icon>
              </div>

              <img
                src="https://i.postimg.cc/rw2j4B1w/project-8.jpg"
                alt="task manager"
                loading="lazy"
                class="rounded-xl group-hover:scale-105 group-hover:opacity-45 transition-transform duration-300"
                width="300"
              />
            </figure>
            <div class="p-1">
              <h3 class="font-semibold text-white  text-justify">Task Manager</h3>
              <p class="opacity-60 font-light">Applications</p>
            </div>
          </a>
        </li>

        <li
          class="project-item active"
          data-filter-item
          data-category="web development"
        >
          <a href="#" class="flex flex-col gap-2">
            <figure class="group">
              <div class="relative overflow-hidden rounded-2xl group transition-all">
                <ion-icon class="text-[rgb(255,219,112)] absolute content-center top-1/2 left-1/2 bg-[linear-gradient(to_bottom_right,_#3f3f40_3%,_#303030_97%)] rounded-xl flex items-center justify-center transition-opacity duration-300 opacity-0  group-hover:opacity-100 z-10" name="eye-outline"></ion-icon>
              </div>

              <img
                src="https://i.postimg.cc/7LxNsSQv/project-9.png"
                alt="arrival"
                loading="lazy"
                class="rounded-xl group-hover:scale-105 group-hover:opacity-45 transition-transform duration-300"
                width="300"
              />
            </figure>
            <div class="p-1">
              <h3 class="font-semibold text-white  text-justify">Arrival</h3>
              <p class="opacity-60 font-light">Web Development</p>
            </div>
          </a>
        </li>
      </ul>
    </section>
  </article>
</template>
