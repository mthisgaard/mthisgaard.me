<template>
  <div class="lg:my-10">
    <div
      class="flex flex-col gap-12 mb-14 lg:mb-20 lg:items-center lg:gap-20 lg:flex-row"
    >
      <div>
        <img
          class="rounded-xl sm:max-w-[360px] grayscale"
          src="~/assets/images/avatar.jpg"
          alt="Malene"
        />
      </div>
      <div>
        <h1 class="mt-0 text-7xl sm:text-8xl">MALENE THISGAARD</h1>
        <h3 class="text-3xl">Full Stack Engineer</h3>
        <div class="flex gap-6 text-[24px] mt-4 text-gray-400">
          <a
            class="hover:text-gray-100 hoverLift"
            href="https://github.com/mthisgaard"
            target="_blank"
          >
            <FA :icon="['fab', 'github']" />
          </a>
          <a
            class="hover:text-gray-100 hoverLift"
            href="https://www.linkedin.com/in/malenethisgaard/"
            target="_blank"
          >
            <FA :icon="['fab', 'linkedin']" />
          </a>
          <a
            class="hover:text-gray-100 hoverLift"
            href="mailto:malene.thisgaard@gmail.com"
            target="_blank"
          >
            <FA :icon="['far', 'envelope']" />
          </a>
        </div>
      </div>
    </div>
    <div>
      <div class="max-w-[660px] mb-12">
        <h2>
          Hi I'm Malene, a psychologist turned web developer based in Tokyo.
        </h2>
        <div>
          <p class="mt-4">
            With a background in psychology and a love for clean, user-friendly
            design, I make websites that are as engaging as they are functional.
            From the drawing board to deployment, I enjoy managing the entire
            life cycle of a project.
          </p>
          <p class="mt-4">
            I build great products by working iteratively with stakeholders and
            fellow engineers to identify the best approach, starting with a
            simple MVP, and continuously improving through trial and error. I
            thrive on tackling complex problems, learning from each try, and
            experimenting with new ideas along the way.
          </p>
        </div>
      </div>
      <div class="hoverLift">
        <a
          href="https://www.linkedin.com/in/malenethisgaard/"
          download
          class="px-6 py-4 text-2xl text-gray-100 bg-gray-800 rounded-lg"
        >
          Let's connect!
        </a>
      </div>
    </div>
  </div>
</template>
