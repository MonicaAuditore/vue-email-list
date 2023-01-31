const { createApp } = Vue;

createApp({
  data() {
    return {
      listaMail: [],
      isLoading: false,
    };
  },
  methods: {
    StampaDate() {
      for (let i = 0; i < 10; i++) {
        axios
          .get("https://flynn.boolean.careers/exercises/api/random/mail")
          .then((response) => {
            this.isLoading = false;
            this.listaMail.push(response.data.response);
          });
      }
      this.isLoading = true;
    },
  },

  // mounted() {
  //   for (let i = 0; i < 10; i++) {
  //     axios
  //       .get("https://flynn.boolean.careers/exercises/api/random/mail")
  //       .then((response) => {
  //         this.listaMail.push(response.data.response);
  //         console.log(response);
  //       });
  //   }
  // },
}).mount("#app");
