<template>
  <div class="container">
    <h1 class="text">
      Javascript'te 101
      <br />
      <span class="tactic">taktiksel</span> soru!
    </h1>
    <vs-button @click="QuestionPage" dark class="btn start-button">Hadi Başlayalım</vs-button>
  </div>
</template>
<script>
import { mapActions } from "vuex";
export default {
  data() {
    return {};
  },
  methods: {
    ...mapActions(["setQuestions"]),
    QuestionPage() {
      this.setQuestions();
      this.$router.push({ name: "questionPage" });
    },
  },
};
</script>

<style scoped>
.container {
  height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.start-button {
  background-color: var(--red);
  color: var(--white);
  font-size: 25px;
  padding: 10px;
  font-weight: bold;
}
.text {
  font-size: 60px;
  margin-bottom: 60px;
  text-align: center;
}
.tactic {
  background-color: var(--green);
  color: var(--dark);
}
</style>