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
            this.listaMail.push(response.data.response);

            if (this.listaMail.length == 10) {
              this.isLoading = true;
              console.log("pieno");
            }
          });
      }
    },
  },
}).mount("#app");
