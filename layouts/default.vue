<template>
  <!-- Section 1 -->
  <section class="w-full px-8 pb-12 antialiased bg-white dark:bg-slate-800">
    <div class="mx-auto max-w-6xl">
      <TheHeader />
      <Nuxt />
      <TheFooter />
    </div>

    <!-- Utterances -->
    <!-- <script src="https://utteranc.es/client.js" repo="JeongYunLee/jyunlog" issue-term="pathname"
      label="Comment" theme="github-light" crossorigin="anonymous" async>
    </script> -->
  </section>
</template>

<script>
// import TheHeader from "../components/TheHeader.vue";
// import TheFooter from "../components/TheFooter.vue";

export default {
  component: {
    // TheHeader,
    TheFooter,
  },
};
</script>

<style></style>
