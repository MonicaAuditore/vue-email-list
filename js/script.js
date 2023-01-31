const { createApp } = Vue;

createApp({
  data() {
    return {
      listaMail: [],
    };
  },
  mounted() {
    for (let i = 0; i < 10; i++) {
      axios
        .get("https://flynn.boolean.careers/exercises/api/random/mail")
        .then((response) => {
          this.listaMail.push(response.data.response);
          console.log(response);
        });
    }
  },
}).mount("#app");
