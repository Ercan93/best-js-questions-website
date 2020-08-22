<template>
  <div class="container grid">
    <vs-row class="questionList">
      <vs-col vs-type="flex" vs-justify="center" vs-align="center" w="12">
        <vs-pagination
          class="page-num"
          circle
          progress
          :max="15"
          color="rgb(242, 19, 93)"
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
            :class="`radio-item radio-item-${index}`"
            v-model="picked"
            color="#5b3cc4"
            v-for="(data,index) in question.selections"
            :val="index"
            :key="index"
          >
            <vue-simple-markdown class="selection" :source="data"></vue-simple-markdown>
          </vs-radio>
        </vs-row>
      </vs-col>
    </vs-row>
    <vs-row justify="center" align="center" class="solutions">
      <vs-col class="answer" justify="center" align="center" v-if="showAnswer" w="10">
        <h2>Açıklama</h2>
        <vue-simple-markdown class="answer-text" :source="question.description"></vue-simple-markdown>
        <vs-button class="btn next-question" dark @click="nextQuestion">Sonraki Soru</vs-button>
      </vs-col>
      <vs-col v-else w="2">
        <vs-button class="btn showAnswer" dark @click="showAnswerSection">Cevabı göster</vs-button>
      </vs-col>
    </vs-row>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      picked: -1,
      number: 0,
      questionPageNum: 1,
      showAnswer: false,
      question: null,
    };
  },
  computed: {
    ...mapGetters(["getQuestion"]),
  },
  mounted() {
    this.getQuestionFromStore(this.number);
  },
  methods: {
    setRadiosBgColor(color) {
      let answer = this.question.trueAnswer;
      let picked = this.picked;

      if (answer == picked) {
        $(`.radio-item-${picked}`).css("backgroundColor", color[0]);
      } else {
        $(`.radio-item-${picked}`).css("backgroundColor", color[1]);
        $(`.radio-item-${answer}`).css("backgroundColor", color[0]);
      }
    },
    showAnswerSection() {
      this.showAnswer = true;
      this.setRadiosBgColor(["var(--green)", "var(--red)"]);
    },
    nextQuestion() {
      this.showAnswer = false;
      this.number = this.number + 1;
      this.setRadiosBgColor(["var(--white)", "var(--white)"]);
      this.resetPicked();
    },
    getQuestionFromStore(questionNum) {
      this.question = this.getQuestion(questionNum);
    },
    resetPicked() {
      this.picked = -1;
    },
  },
  watch: {
    number(val) {
      this.getQuestionFromStore(val);
      this.questionPageNum = this.number + 1;
    },
    questionPageNum(val) {
      this.getQuestionFromStore(--val);
      this.resetPicked();
    },
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
  background-color: var(--green);
  color: var(--red);
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
  margin-top: 20px;
  color: var(--white);
  background-color: var(--red);
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