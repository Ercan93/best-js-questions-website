<template>
  <div class="container">
    <div class="questions">
      <pre v-highlightjs="sourcecode"><code class="javascript"></code></pre>
    </div>
    <div class="solutions"></div>
  </div>
</template>
<script>
import axios from "axios";

export default {
  data() {
    return {
      sourcecode: null
    };
  },
  created() {
    axios
      .get("https://js-best-tactical-questions.firebaseio.com/veri.json")
      .then(response => {
        console.log(response.data.Q1);
        this.sourcecode = response.data.A1;
      });
  }
};
</script>
<style scoped>
.container {
  height: 90vh;
  display: flex;
}
.solutions {
  width: 50vw;
  height: 90vh;
}
.questions {
  width: 50vw;
  height: 90vh;
}
@media screen and (max-width: 840px) {
  .container {
    flex-direction: column;
  }
  .questions {
    width: 100vw;
    height: 45vh;
  }
  .solutions {
    width: 100vw;
    height: 45vh;
  }
}
</style>