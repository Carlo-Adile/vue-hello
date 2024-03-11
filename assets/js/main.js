const app = Vue.createApp({
  data() {
    return {
      message: 'Hello, Vue!',
      imageUrl: 'https://vuejs.org/images/logo.png',
    };
  },
});

app.mount('#app');