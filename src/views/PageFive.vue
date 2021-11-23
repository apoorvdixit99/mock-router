<template>
  <div class="page-five">
    <h1>Page Five</h1>
    <button @click="goToPreviousPage">
      Go to Previous Page using router.go(-1)
    </button>
    <br /><br /><br />
    <button @click="goToPreviousPageTwo">
      Go to Previous Page using window.history.back()
    </button>
    <br /><br /><br />
    <button @click="goToPageTwo">Go to Page Two</button>
    <br /><br /><br />
  </div>
</template>

<script>
export default {
  name: "PageFive",
  mounted() {
    console.log("Page five mounted");
    console.log(navigator.platform);
  },
  methods: {
    goToPageTwo() {
      console.log("Going to page two...");
      this.$router.push({
        name: "PageTwo",
      });
    },
    goToPreviousPage() {
      console.log("Going to Previous Page using router.go(-1)...");
      this.$router.go(-1);
    },
    goToPreviousPageTwo() {
      console.log("Going to Previous Page using window.history.back()...");
      console.log("window.history.length", window.history.length);
      window.history.back();
    },
  },
};
</script>
