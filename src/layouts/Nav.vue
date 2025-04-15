<template>
  <div class="flex justify-center">
    <nav>
      <ul class="flex space-x-10 text-white">
        <li class="navbar-item">
          <router-link
            class="hover:text-gray-300 transition"
            to="/about"
            active-class="text-[#ffdb70]"
            >About</router-link
          >
        </li>
        <li class="navbar-item">
          <router-link
            class="hover:text-gray-300 transition"
            to="/resume"
            active-class="text-[#ffdb70]"
            >Resume</router-link
          >
        </li>
        <li class="navbar-item">
          <router-link
            class="hover:text-gray-300 transition"
            to="/portfolio"
            active-class="text-[#ffdb70]"
            >Portfolio</router-link
          >
        </li>
        <li class="navbar-item">
          <router-link
            class="hover:text-gray-300 transition"
            to="/blog"
            active-class="text-[#ffdb70]"
            >Blog</router-link
          >
        </li>
        <li class="navbar-item">
          <router-link
            class="hover:text-gray-300 transition"
            to="/contact"
            active-class="text-[#ffdb70]"
            >Contact</router-link
          >
        </li>
      </ul>
    </nav>
  </div>
</template>
