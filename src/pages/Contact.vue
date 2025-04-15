<template>
  <article class="text-white tracking-wide px-8" data-page="contact">
    <header>
      <h2 class="text-4xl font-bold mb-4">Contact</h2>
      <div class="w-12 h-1.5 rounded-full bg-[#ffdb70] mb-4"></div>
    </header>

    <section class="">
      <figure>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d199666.5651251294!2d-121.58334177520186!3d38.56165006739519!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x809ac672b28397f9%3A0x921f6aaa74197fdb!2sSacramento%2C%20CA%2C%20USA!5e0!3m2!1sen!2sbd!4v1647608789441!5m2!1sen!2sbd"
          loading="lazy"
          height="400"
          class="rounded-2xl mb-5 w-full"
          style="filter: grayscale(1) invert(1)"
        ></iframe>
      </figure>
    </section>

    <section class="flex flex-col gap-2 mb-5">
      <h3 class="text-xl font-bold mb-4">Contact Form</h3>

      <form action="#" class="form" data-form>
        <div class="flex mb-4">
          <input
            type="text"
            name="fullname"
            class="p-3 border-2 border-[#3c3c3c] rounded-xl w-full mr-4"
            placeholder="Full name"
            required
            data-form-input
          />
          <input
            type="email"
            name="email"
            class="p-3 border-2 border-[#3c3c3c] rounded-xl w-full"
            placeholder="Email Address"
            required
            data-form-input
          />
        </div>

        <textarea
          name="message"
          class="p-3 border-2 border-[#3c3c3c] rounded-xl w-full mb-5"
          placeholder="Your Message"
          required
          data-form-input
        ></textarea>

        <button
          class="flex items-center cursor-pointer p-4 gap-2 bg-gradient-to-br from-yellow-300/20 to-transparent bg-neutral-900 rounded-xl text-[#ffdb70] hover:scale-90 transition ease"
          type="submit"
        >
          <ion-icon name="paper-plane"></ion-icon>
          <span>Send Message</span>
        </button>
      </form>
    </section>
  </article>
</template>
