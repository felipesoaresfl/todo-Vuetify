<template>
  <div>
    <v-main class="heightFooter">
      <router-view />
    </v-main>
    <PageFooter />
  </div>
</template>

<script>
import PageFooter from "@/components/PageFooter.vue";
export default {
  data: () => ({}),
  components: {
    PageFooter,
  },
};
</script>

<style>
.heightFooter {
  min-height: calc(100vh - 122px);
}
</style>
