<template>
  <div class="flex gap-16">
    <div>
      <img class="rounded-xl" src="~/assets/images/avatar.jpg" alt="Malene" />
    </div>
    <div>
      <h1 class="mb-6 text-4xl font-bold">Hi there, I'm Malene</h1>
      <div>
        I'm a Full-Stack Web Developer with a knack for creating user-friendly
        web experiences. Combining my coding skills with my psychology and
        behavioral design background, I love turning complex projects into
        smooth and enjoyable UX. Managing end-to-end project lifecycles, from
        scoping to coding and testing, I ensure that every part of the project
        gets the attention it needs. Let's build something great together!
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
    <LangSwitcher />
  </div>
</template>
