<template>
  <aside class="flex flex-col w-full">
    <div>
      <img
        src="/public/image.png"
        alt="avatar"
        class="mb-4 rounded-full object-cover relative mx-auto size-20"
        width="100"
      />

      <div class="flex flex-col items-center">
        <h1 class="text-2xl font-medium" title="Javohir Shuxratov">
          Javohir Shuxratov
        </h1>
        <p class="text-xs py-1 px-3 bg-[#383838] rounded-lg mt-4">
          Web Developer, UI/UX
        </p>
        <hr class="border border-[#2b2b2c] w-[170px] my-4 mt-7" />
      </div>

      <!-- <button class="lg:max-w-screen" data-sidebar-btn>
        <span>Show Contacts</span>
        <ion-icon name="chevron-down"></ion-icon>
      </button> -->
    </div>

    <div class="">
      <ul class="grid md:grid-cols-2 lg:grid-cols-1 gap-7">
        <!-- 1 -->
        <li class="flex items-center gap-3">
          <div
            class="bg-[#2b2b2c] px-3 py-2 bg-[linear-gradient(to_bottom_right,_#3f3f40_50%,_#303030_0%)] rounded-lg"
          >
            <ion-icon class="text-[#ffdb70]" name="mail-outline"></ion-icon>
          </div>

          <div class="flex flex-col text-start overflow-hidden">
            <p class="uppercase text-xs font-semibold text-gray-400">Email</p>

            <a href="mailto:richard@example.com" class="tracking-wide overflow-x-auto no-scrollbar"
              >shuxratovjavohir4@gmail.com</a
            >
          </div>
        </li>
        <!-- 2 -->
        <li class="flex items-center gap-3">
          <div
            class="bg-[#2b2b2c] px-3 py-2 bg-[linear-gradient(to_bottom_right,_#3f3f40_50%,_#303030_0%)] rounded-lg"
          >
            <ion-icon
              class="text-[#ffdb70]"
              name="phone-portrait-outline"
            ></ion-icon>
          </div>

          <div class="flex flex-col text-start">
            <p class="uppercase text-xs font-semibold text-gray-400">Phone</p>

            <a href="tel:+12133522795" class="whitespace-nowrap"
              >+998(93) 892-34-56</a
            >
          </div>
        </li>
        <!-- 3 -->
        <li class="flex flex-center gap-3">
          <div
            class="bg-[#2b2b2c] px-3 py-2 bg-[linear-gradient(to_bottom_right,_#3f3f40_50%,_#303030_0%)] rounded-lg h-fit"
          >
            <ion-icon class="text-[#ffdb70]" name="calendar-outline"></ion-icon>
          </div>

          <div class="flex flex-col text-start">
            <p class="uppercase text-xs font-semibold text-gray-400">
              Birthday
            </p>

            <time datetime="1982-06-23">November 25, 2005</time>
          </div>
        </li>
        <!-- 4 -->
        <li class="flex items-center gap-3">
          <div
            class="bg-[#2b2b2c] shadow-xl px-3 py-2 bg-[linear-gradient(to_bottom_right,_#3f3f40_50%,_#303030_0%)] rounded-lg"
          >
            <ion-icon class="text-[#ffdb70]" name="location-outline"></ion-icon>
          </div>

          <div class="flex flex-col text-start">
            <p class="uppercase text-xs font-semibold text-gray-400">
              Location
            </p>

            <p>Uzbekistan, Tashkent</p>
          </div>
        </li>
      </ul>
    </div>
    <div class="">
      <!-- social media -->
      <ul class="flex justify-center gap-3 mt-7">
        <li class="text-gray-400 hover:text-white transition">
          <a
            href="https://www.facebook.com/profile.php?id=61553756199321"
            class="social-link"
            ><ion-icon name="logo-facebook" class="text-xl"></ion-icon
          ></a>
        </li>
        <li class="text-gray-400 hover:text-white transition">
          <a href="#!" class="social-link"
            ><ion-icon name="logo-twitter" class="text-xl"></ion-icon
          ></a>
        </li>
        <li class="text-gray-400 hover:text-white transition">
          <a href="https://www.instagram.com/shux.ratow/" class=""
            ><ion-icon name="logo-instagram" class="text-xl"></ion-icon
          ></a>
        </li>
      </ul>
    </div>
  </aside>
</template>
