<template>
  <div class="flex flex-col gap-12 md:mt-12 lg:gap-24 lg:flex-row">
    <div>
      <img
        class="rounded-xl md:max-w-[400px]"
        src="~/assets/images/avatar.jpg"
        alt="Malene"
      />
    </div>
    <div>
      <h1>Hi there, I'm Malene 👋</h1>
      <div>
        I'm a full stack engineer who likes to think outside the browser. With a
        background in psychology and a love for clean, user-friendly design, I
        make websites that are as engaging as they are functional. From the
        drawing board to deployment, I enjoy managing the entire life cycle of a
        project.
      </div>
      <div class="mt-2">
        I build great products by working iteratively with stakeholders and
        fellow engineers to identify the best approach, starting with a simple
        MVP, and continuously improving through trial and error. I thrive on
        tackling complex problems, learning from each try, and experimenting
        with new ideas along the way.
      </div>
      <div class="flex gap-6 text-[24px] mt-6 text-gray-400">
        <a
          class="hover:text-gray-600"
          href="https://github.com/mthisgaard"
          target="_blank"
        >
          <FA :icon="['fab', 'github']" />
        </a>
        <a
          class="hover:text-gray-600"
          href="https://www.linkedin.com/in/malenethisgaard/"
          target="_blank"
        >
          <FA :icon="['fab', 'linkedin']" />
        </a>
        <a
          class="hover:text-gray-600"
          href="mailto:malene.thisgaard@gmail.com"
          target="_blank"
        >
          <FA :icon="['far', 'envelope']" />
        </a>
      </div>
    </div>
  </div>
</template>
