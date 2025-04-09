<template>
  <article class="text-white tracking-wide p-8" data-page="portfolio">
    <header>
      <h2 class="text-3xl font-bold mb-4">Portfolio</h2>
      <div class="w-12 h-1.5 rounded-full bg-[#ffdb70] mb-6"></div>
    </header>

    <section class="">
      <ul class="flex gap-4">
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

      <ul class="grid grid-cols-3 gap-7">
        <li class="rounded-lg" data-filter-item data-category="web development">
          <a href="#!" class="">
            <figure>
              <div class="project-item-icon-box">
                <ion-icon name="eye-outline"></ion-icon>
              </div>

              <img
                src="https://i.postimg.cc/qRHpHMyd/project-1.jpg"
                alt="finance"
                class="rounded-2xl hover:animate-pulse transition-all"
                loading="lazy"
                width="259"
              />
            </figure>
            <div class="p-1">
              <h3 class="project-title">Finance</h3>
              <p class="opacity-60">Web Development</p>
            </div>
          </a>
        </li>

        <li
          class="project-item active"
          data-filter-item
          data-category="web development"
        >
          <a href="#">
            <figure class="project-img">
              <div class="project-item-icon-box">
                <ion-icon name="eye-outline"></ion-icon>
              </div>

              <img
                src="https://i.postimg.cc/bNrcM2Wt/project-2.png"
                alt="orizon"
                loading="lazy"
                class="rounded-2xl hover:animate-pulse transition-all"
                width="259"
              />
            </figure>
            <div class="p-1">
              <h3 class="project-title">Orizon</h3>
              <p class="opacity-60">Web Development</p>
            </div>
          </a>
        </li>

        <li
          class="project-item active"
          data-filter-item
          data-category="web design"
        >
          <a href="#">
            <figure class="project-img">
              <div class="project-item-icon-box">
                <ion-icon name="eye-outline"></ion-icon>
              </div>

              <img
                src="https://i.postimg.cc/jSJVqYsq/project-3.jpg"
                alt="fundo"
                loading="lazy"
                class="rounded-2xl hover:animate-pulse transition-all"
                width="259"
              />
            </figure>
            <div class="p-1">
              <h3 class="project-title">Fundo</h3>
              <p class="opacity-60">Web Design</p>
            </div>
          </a>
        </li>

        <li
          class="project-item active"
          data-filter-item
          data-category="applications"
        >
          <a href="#">
            <figure class="project-img">
              <div class="project-item-icon-box">
                <ion-icon name="eye-outline"></ion-icon>
              </div>

              <img
                src="https://i.postimg.cc/dtpXxNGb/project-4.png"
                alt="brawlhalla"
                loading="lazy"
                class="rounded-2xl hover:animate-pulse transition-all"
                width="259"
              />
            </figure>
            <div class="p-1">
              <h3 class="project-title">Brawlhalla</h3>
              <p class="opacity-60">Applications</p>
            </div>
          </a>
        </li>

        <li
          class="project-item active"
          data-filter-item
          data-category="web design"
        >
          <a href="#">
            <figure class="project-img">
              <div class="project-item-icon-box">
                <ion-icon name="eye-outline"></ion-icon>
              </div>

              <img
                src="https://i.postimg.cc/43T0JKLw/project-5.png"
                alt="dsm."
                loading="lazy"
                class="rounded-2xl hover:animate-pulse transition-all"
                width="259"
              />
            </figure>
            <div class="p-1">
              <h3 class="project-title">DSM.</h3>
              <p class="opacity-60">Web Design</p>
            </div>
          </a>
        </li>

        <li
          class="project-item active"
          data-filter-item
          data-category="web design"
        >
          <a href="#">
            <figure class="project-img">
              <div class="project-item-icon-box">
                <ion-icon name="eye-outline"></ion-icon>
              </div>

              <img
                src="https://i.postimg.cc/qR1DX1kZ/project-6.png"
                alt="metaspark"
                loading="lazy"
                class="rounded-2xl hover:animate-pulse transition-all"
                width="259"
              />
            </figure>
            <div class="p-1">
              <h3 class="project-title">Metaspark</h3>
              <p class="opacity-60">Web Design</p>
            </div>
          </a>
        </li>

        <li
          class="project-item active"
          data-filter-item
          data-category="web development"
        >
          <a href="#">
            <figure class="project-img">
              <div class="project-item-icon-box">
                <ion-icon name="eye-outline"></ion-icon>
              </div>

              <img
                src="https://i.postimg.cc/Kj4q9tjc/project-7.png"
                alt="summary"
                loading="lazy"
                class="rounded-2xl hover:animate-pulse transition-all"
                width="259"
              />
            </figure>
            <div class="p-1">
              <h3 class="project-title">Summary</h3>
              <p class="opacity-60">Web Development</p>
            </div>
          </a>
        </li>

        <li
          class="project-item active"
          data-filter-item
          data-category="applications"
        >
          <a href="#">
            <figure class="project-img">
              <div class="project-item-icon-box">
                <ion-icon name="eye-outline"></ion-icon>
              </div>

              <img
                src="https://i.postimg.cc/rw2j4B1w/project-8.jpg"
                alt="task manager"
                loading="lazy"
                class="rounded-2xl hover:animate-pulse transition-all"
                width="259"
              />
            </figure>
            <div class="p-1">
              <h3 class="project-title">Task Manager</h3>
              <p class="opacity-60">Applications</p>
            </div>
          </a>
        </li>

        <li
          class="project-item active"
          data-filter-item
          data-category="web development"
        >
          <a href="#">
            <figure class="project-img">
              <div class="project-item-icon-box">
                <ion-icon name="eye-outline"></ion-icon>
              </div>

              <img
                src="https://i.postimg.cc/7LxNsSQv/project-9.png"
                alt="arrival"
                loading="lazy"
                class="rounded-2xl hover:animate-pulse transition-all"
                width="259"
              />
            </figure>
            <div class="p-1">
              <h3 class="project-title">Arrival</h3>
              <p class="opacity-60">Web Development</p>
            </div>
          </a>
        </li>
      </ul>
    </section>
  </article>
</template>
