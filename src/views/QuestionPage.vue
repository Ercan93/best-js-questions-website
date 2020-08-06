<template>
  <div class="container">
    <div class="questions">
      <div class="wrapper">
        <h2>{{question.header}}</h2>
        <pre class="language-js"> <code v-html="question.sourceCode"></code> </pre>
      </div>
      <div class="selections">
        <vs-radio
          class="radio-item"
          dark
          v-model="picked"
          v-for="(data,index) in question.selections"
          :val="++index"
        >
          <pre class="language-js"><code v-html="data"></code></pre>
        </vs-radio>
      </div>
    </div>
    <div class="solutions">
      <div class="answer" v-if="showAnswer">
        <h2>Cevap</h2>
        <vue-markdown class="answerText" :source="question.description"></vue-markdown>
        <vs-button class="next-question" dark border @click="nextQuestion">Sonraki Soru</vs-button>
      </div>
      <vs-button class="showAnswer" dark border @click="showAnswerFunc" v-else>Cevabı göster</vs-button>
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
      picked: 0,
      number: 0,
      showAnswer: false,
      question: null,
      questions: null,
    };
  },
  methods: {
    showAnswerFunc() {
      this.showAnswer = true;
    },
    nextQuestion() {
      this.showAnswer = false;
      this.number = this.number + 1;
    },
  },
  watch: {
    number(val) {
      this.question = this.questions[val];
    },
  },
  computed: {
    question() {
      return this.question;
    },
  },
  mounted() {
    this.questions = this.$store.getters.getQuestions;
    this.question = this.questions[0];
    this.sourceCode = this.question.sourceCode;
  },
};
</script>
<style scoped>
.container {
  display: flex;
  flex-direction: column;
  line-height: 30px;
  min-height: 90vh;
  font-weight: bold;
  background-color: rgb(255, 230, 0);
}
.solutions {
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 30px;
}
.questions {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 10vw;
  padding-top: 30px;
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
  margin-bottom: 30px;
}
.next-question:hover {
  background-color: black;
  color: rgb(255, 230, 0);
}
.answerText {
  background-color: rgb(255, 254, 247);
  padding: 30px;
  border-radius: 10px;
  width: 80%;
}
.selections {
  display: flex;
  flex-direction: column;
  margin-left: 60px;
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