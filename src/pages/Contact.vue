<template>
  <article class="text-white tracking-wide px-8" data-page="contact">
    <header>
      <h2 class="text-4xl font-bold mb-4">Contact</h2>
      <div class="w-12 h-1.5 rounded-full bg-[#ffdb70] mb-4"></div>
    </header>

    <section class="">
      <figure>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d191884.8398712116!2d69.11455620810692!3d41.2827379463425!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8b0cc379e9c3%3A0xa5a9323b4aa5cb98!2z0KLQsNGI0LrQtdC90YIsINCj0LfQsdC10LrQuNGB0YLQsNC9!5e0!3m2!1sru!2s!4v1745154847728!5m2!1sru!2s"
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
