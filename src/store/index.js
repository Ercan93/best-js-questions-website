import Vue from "vue";
import Vuex from "vuex";
import questionsData from "../static/questions.json";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    questions: [
      {
        header: null,
        sourceCode: null,
        selections: null,
        description: null,
        trueAnswer: null
      }
    ]
  },
  getters: {
    getQuestion(state) {
      return index => {
        return state.questions[index];
      };
    }
  },
  mutations: {
    SET_QUESTIONS(state) {
      state.questions = questionsData;
    }
  },
  actions: {
    setQuestions({ commit }) {
      commit("SET_QUESTIONS");
    }
  }
});
