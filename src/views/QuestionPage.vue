<template>
  <div class="container">
    <div class="questions">
      <div class="wrapper">
        <h2>{{header}}</h2>
        <pre class="language-js"><code>{{sourcecode}}</code></pre>
        <div class="selections">
          <vs-radio
            class="radio-item"
            warn
            v-model="picked"
            v-for="(data,index) in selections"
            :val="++index"
          >
            <pre class="language-js"><code>{{data}}</code></pre>
          </vs-radio>
        </div>
      </div>
    </div>
    <div class="solutions">
      <vue-markdown :source="exp"></vue-markdown>
    </div>
  </div>
</template>
<script>
import axios from "axios";
import VueMarkdown from "vue-markdown";
export default {
  components: { VueMarkdown },
  data() {
    return {
      sourcecode: null,
      picked: 0,
      selections: null,
      header: null,
      exp: null
    };
  },
  mounted() {
    axios
      .get("https://js-best-tactical-questions.firebaseio.com/veri.json")
      .then(response => {
        this.selections = response.data.A1.split("\n");
        this.sourcecode = response.data.Q1;
        this.header = response.data.Header;
        this.exp = response.data.exp;
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
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
}

.selections {
  display: flex;
  flex-direction: column;
}
.radio-item {
  margin-right: auto;
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