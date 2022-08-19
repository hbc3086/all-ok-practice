<template>
  <div
    class="app"
    :class="page"
    oncontextmenu="return false"
    ondragstart="return false"
    onselectstart="return false"
  >
    <nuxt />
  </div>
</template>

<script>
import Setting from "~/mixins/Setting";

export default {
  name: "layout",
  components: {},
  mixins: [Setting],
  head() {
    return {
      title: "중소기업대출 | 다된다",
    };
  },
  computed: {
    page: function () {
      return this.$nuxt.$route.path === "/" ? "main" : "sub";
    },
  },
  mounted() {},
  methods: {},
};
</script>
