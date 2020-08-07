<template>
  <div class="container">
    <h3>Hoş Geldiniz</h3>
    <h1 class="text">Javascript'te 100 taktiksel soru!</h1>
    <vs-button @click="QuestionPage" dark border class="start-button">Hadi Başlayalım</vs-button>
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
  color: black;
}
.start-button {
  background-color: rgb(255, 230, 0);
  color: black;
  height: 70px;
  width: 180px;
  font-size: 20px;
  font-weight: bold;
}
.text {
  font-size: 60px;
  margin-bottom: 60px;
  text-align: center;
}
.start-button:hover {
  background-color: black;
  color: rgb(255, 230, 0);
}
</style>