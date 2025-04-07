<template>
  <article class="text-white px-8 tracking-wide" data-page="resume">
    <header>
      <h2 class="text-3xl font-bold mb-5 tracking-wide">Resume</h2>
      <div class="w-12 h-1.5 rounded-full bg-[#ffdb70] mb-4"></div>
    </header>

    <section class="flex mt-10">
      <div class="">
        <div
          class="bg-[#1e1e1f] bg-gradient-to-br from-neutral-700/100 via-gray-700/0 via-50% px-3 py-2 rounded-lg text-xl text-[#d8b342] max-w-12 w-full"
        >
          <ion-icon name="book-outline"></ion-icon>
        </div>
        <div class="flex flex-col items-center relative h-96">
          <!-- Vertical line -->
          <div class="absolute -translate-x-1/2 h-full w-px bg-[#333]"></div>

          <!-- Dots -->
          <div
            class="w-3 h-3 relative top-8 rounded-full bg-[#ffdb70] border border-neutral-600 z-10"
          ></div>
          <div
            class="w-3 h-3 relative top-23 rounded-full bg-[#ffdb70] border border-neutral-600 z-10 my-24"
          ></div>
          <div
            class="w-3 h-3 rounded-full bg-[#ffdb70] border border-neutral-600 z-10 mt-24"
          ></div>
        </div>
      </div>

      <ol class="">
        <li class="ml-4 mb-4">
          <h3 class="text-2xl font-medium mb-10">Education</h3>
          <h4 class="text-base font-medium mb-2">
            University school of the arts
          </h4>
          <span class="text-[#d8b342] mb-2">2008 - 2010</span>
          <p class="opacity-70">
            There I learnt a wide range of topics that are essential to
            understanding both the theory and practical aspects of computing.
            This involves programming fundamentals, computer architecture,
            operating systems, databases, software engineering, problem solving,
            collaboration and communication soft skills.
          </p>
        </li>

        <li class="ml-4 mb-4">
          <h4 class="text-base font-medium">New York Academy of Art</h4>
          <span class="text-[#d8b342]">2006 - 2007</span>
          <p class="opacity-70">
            I chose my master degree in technology. There I deepened my
            knowledge, enhanced my skills in the area and learnt how to increase
            my career prospects in a competitive job market.
          </p>
        </li>

        <li class="ml-4">
          <h4 class="text-base font-medium">High School of Art and Design</h4>
          <span class="text-[#d8b342]">2003 - 2005</span>
          <p class="opacity-70">
            There I learnt foundational courses and computer sciences
            fundamentals. In the institution, I chose my specialization in
            web-development that involves front-end and back-end technologies,
            user interface designs and content management systems.
          </p>
        </li>
      </ol>
    </section>

    <section class="flex mt-8">
      <div class="title-wrapper">
        <div
          class="bg-[#1e1e1f] bg-gradient-to-br from-neutral-700/100 via-gray-700/0 via-50% px-3 py-2 rounded-lg text-xl text-[#d8b342] max-w-12 w-full"
        >
          <ion-icon name="book-outline"></ion-icon>
        </div>
        <div class="flex flex-col items-center relative h-96">
          <!-- Vertical line -->
          <div class="absolute -translate-x-1/2 h-full w-px bg-[#333]"></div>

          <!-- Dots -->
          <div
            class="w-3 h-3 relative top-9 rounded-full bg-[#ffdb70] border border-neutral-600 z-10"
          ></div>
          <div
            class="w-3 h-3 relative top-11 rounded-full bg-[#ffdb70] border border-neutral-600 z-10 my-24"
          ></div>
          <div
            class="w-3 h-3 relative bottom-11 rounded-full bg-[#ffdb70] border border-neutral-600 z-10 mt-24"
          ></div>
        </div>
      </div>

      <ol class="ml-4">
        <li class="mb-4">
          <h3 class="text-2xl font-medium mb-10">Experience</h3>
          <h4 class="text-base font-bold mb-1">Creative director</h4>
          <span class="text-[#d8b342]">2015 - Present</span>
          <p class="opacity-70">
            I can develop and oversee creative concepts for projects and
            campaigns managing a team of designers, writers, and other creative
            professionals.
          </p>
        </li>

        <li class="mb-4">
          <h4 class="text-base font-bold mb-1">Art director</h4>
          <span class="text-[#d8b342]">2013 - 2015</span>
          <p class="opacity-70">
            I create and develop visual concepts that align with the project's
            goals and objectives, supervising the design process and managing
            timelines and budgets for design projects.
          </p>
        </li>

        <li class="">
          <h4 class="text-base font-bold mb-1">Web designer</h4>
          <span class="text-[#d8b342]">2010 - 2013</span>
          <p class="opacity-70">
            I create logos, color schemes and typography for a brand's identity.
            Also I develop graphics for websites, social media and digital ads
            with applications that enhance user experience.
          </p>
        </li>
      </ol>
    </section>

    <section class="mt-10 mb-8 items-center">
      <h3 class="text-2xl font-bold mb-5 tracking-wide">My Skills</h3>

      <ul
        class="p-6 rounded-lg bg-[#252525] bg-gradient-to-br from-neutral-700/100 via-gray-700/0 via-50%"
      >
        <li>
          <div class="flex gap-2 mb-4">
            <h5 class="text-base font-bold">Web Design</h5>
            <data value="80">80%</data>
          </div>

          <div class="w-full h-1.5 bg-neutral-600 rounded-full mb-4">
            <div
              class="w-20 h-1.5 bg-[#ffdb70] rounded-full"
              style="width: 80%"
            ></div>
          </div>
        </li>

        <li class="skills-item">
          <div class="flex gap-2 mb-4">
            <h5 class="text-base font-bold">Graphic Design</h5>
            <data value="70">70%</data>
          </div>

          <div class="w-full h-1.5 bg-neutral-600 rounded-full mb-4">
            <div
              class="w-20 h-1.5 bg-[#ffdb70] rounded-full"
              style="width: 70%"
            ></div>
          </div>
        </li>

        <li class="skills-item">
          <div class="flex gap-2 mb-4">
            <h5 class="text-base font-bold">Branding</h5>
            <data value="90">90%</data>
          </div>

          <div class="w-full h-1.5 bg-neutral-600 rounded-full mb-4">
            <div
              class="w-20 h-1.5 bg-[#ffdb70] rounded-full"
              style="width: 90%"
            ></div>
          </div>
        </li>

        <li class="skills-item">
          <div class="flex gap-2 mb-4">
            <h5 class="text-base font-bold">WordPress</h5>
            <data value="50">50%</data>
          </div>

          <div class="w-full h-1.5 bg-neutral-600 rounded-full mb-4">
            <div
              class="w-20 h-1.5 bg-[#ffdb70] rounded-full"
              style="width: 50%"
            ></div>
          </div>
        </li>
      </ul>
    </section>
  </article>
</template>
