<template>
  <div class="container">
    <div class="questions">
      <div class="wrapper">
        <h2>{{header}}</h2>
        <pre class="language-js"><code>{{sourcecode}}</code></pre>
        <div class="selections">
          <vs-radio
            class="radio-item"
            dark
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
      <div class="answer" v-if="showAnswer">
        <h2>Answer</h2>
        <vue-markdown class="answerText" :source="exp"></vue-markdown>
        <vs-button class="next-question" dark border @click="nextQuestion">Next question</vs-button>
      </div>
      <vs-button class="showAnswer" dark border @click="showAnswerFunc" v-else>Show Answer</vs-button>
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
      exp: null,
      trueAnswer: null,
      showAnswer: false
    };
  },
  methods: {
    showAnswerFunc() {
      this.showAnswer = true;
    }
  },
  mounted() {
    axios
      .get("https://js-best-tactical-questions.firebaseio.com/veri.json")
      .then(response => {
        this.selections = response.data.A1.split("\n");
        this.sourcecode = response.data.Q1;
        this.header = response.data.Header;
        this.exp = response.data.exp;
        this.trueAnswer = response.data.trueAnswer;
      });
  }
};
</script>
<style scoped>
.container {
  height: 90vh;
  display: flex;
  line-height: 30px;
  font-weight: bold;
}
.solutions {
  width: 60vw;
  height: 90vh;
  display: flex;
  padding-right: 20px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.questions {
  width: 40vw;
  height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
}
.answer {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.answer > h2 {
  margin-bottom: 20px;
}
.language-js {
  background-color: rgb(255, 254, 247);
  border-radius: 10px;
}
.showAnswer {
  width: 200px;
  height: 60px;
  font-size: 25px;
  font-weight: bold;
  color: black;
  background-color: rgb(255, 230, 0);
}
.showAnswer:hover {
  background-color: black;
  color: rgb(255, 230, 0);
}
.next-question {
  margin-top: 50px;
  width: 150px;
  height: 50px;
  font-size: 17px;
  font-weight: bold;
  background-color: rgb(255, 230, 0);
  color: black;
}
.next-question:hover {
  background-color: black;
  color: rgb(255, 230, 0);
}
.answerText {
  background-color: rgb(255, 254, 247);
  padding: 10px;
  border-radius: 10px;
}
.selections {
  display: flex;
  flex-direction: column;
}
.radio-item {
  margin-right: auto;
}
@media screen and (max-width: 870px) {
  .container {
    flex-direction: column;
    background-color: rgb(255, 230, 0);
    height: 100%;
  }
  .questions {
    width: auto;
    padding: 20px;
    height: auto;
  }
  .solutions {
    width: auto;
    height: auto;
    padding: 25px;
  }
}
@media screen and (max-width: 380px) {
  .language-js {
    font-size: 13px;
    height: auto;
  }
  .showAnswer {
    width: 150px;
    height: 40px;
    font-size: 15px;
    font-weight: bold;
  }
}
</style>