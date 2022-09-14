<template>
  <div>
    <PageBar />
    <v-main class="heightNav">
      <router-view />
    </v-main>
    <PageFooter />
  </div>
</template>

<script>
import PageBar from "@/components/PageBar.vue";
import PageFooter from "@/components/PageFooter.vue";
export default {
  data: () => ({}),
  components: {
    PageBar,
    PageFooter,
  },
};
</script>

<style>
.heightNav {
  min-height: calc(100vh - 122px - 42px);
}
</style>
