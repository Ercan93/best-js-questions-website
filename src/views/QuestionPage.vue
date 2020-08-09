<template>
  <div class="container grid">
    <vs-row class="questionList">
      <vs-col vs-type="flex" vs-justify="center" vs-align="center" w="12">
        <vs-pagination
          circle
          class="page-num"
          max="20"
          color="rgb(255, 130, 0)"
          v-model="questionPageNum"
          :length="101"
        />
      </vs-col>
    </vs-row>
    <vs-row class="questions" justify="center" align="center">
      <vs-col w="5">
        <h2>{{question.header}}</h2>
        <pre class="language-js"><code v-html="question.sourceCode"></code></pre>
      </vs-col>
      <vs-col class="selections" w="5">
        <vs-row direction="column">
          <vs-radio
            class="radio-item"
            v-model="picked"
            color="rgb(255, 130, 0)"
            v-for="(data,index) in question.selections"
            :val="++index"
          >
            <vue-simple-markdown class="selection" :source="data"></vue-simple-markdown>
          </vs-radio>
        </vs-row>
      </vs-col>
    </vs-row>
    <vs-row justify="center" align="center" class="solutions">
      <vs-col class="answer" justify="center" align="center" v-if="showAnswer" w="10">
        <h2>Cevap</h2>
        <vue-simple-markdown class="answer-text" :source="question.description"></vue-simple-markdown>
        <vs-button class="btn next-question" dark border @click="nextQuestion">Sonraki Soru</vs-button>
      </vs-col>
      <vs-col v-else w="2">
        <vs-button class="btn showAnswer" dark border @click="showAnswerFunc">Cevabı göster</vs-button>
      </vs-col>
    </vs-row>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      picked: 0,
      number: 0,
      questionPageNum: 1,
      showAnswer: false,
      question: null,
    };
  },
  methods: {
    showAnswerFunc() {
      this.showAnswer = true;
    },
    nextQuestion() {
      this.showAnswer = false;
      this.number = this.number + 1;
      this.picked = 0;
    },
  },
  watch: {
    number(val) {
      this.question = this.getQuestion(val);
      this.questionPageNum = this.number + 1;
    },
    questionPageNum(val) {
      this.question = this.getQuestion(--val);
    },
  },
  computed: {
    ...mapGetters(["getQuestion"]),
  },
  mounted() {
    this.question = this.getQuestion(0);
  },
};
</script>
<style scoped>
.container {
  line-height: 30px;
  min-height: 90vh;
  font-weight: bold;
  background-color: var(--dark);
}
.questionList {
  margin: 20px 0;
}
.questions,
.solutions {
  padding: 30px;
}
.page-num {
  background-color: var(--success);
}
.selections {
  margin-left: 60px;
}
.selection {
  line-height: 27px;
}
.radio-item {
  margin: 10px 0;
  padding: 10px;
  border-radius: 10px;
  background-color: var(--white);
}
.answer > h2 {
  margin-bottom: 20px;
}
.language-js {
  background-color: var(--white);
  border-radius: 10px;
}
.showAnswer,
.next-question {
  width: 200px;
  height: 60px;
  font-size: 20px;
  font-weight: bold;
  color: white;
  background-color: var(--warning);
}
.answer-text {
  width: 80%;
  padding: 30px;
  border-radius: 10px;
  background-color: var(--white);
}

@media screen and (max-width: 870px) {
  .container {
    flex-direction: column;
    height: 100%;
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