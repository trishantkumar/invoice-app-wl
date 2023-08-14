import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

const app = createApp(App)

app.config.globalProperties.$filters = {
    numberSystem(value) {
    var numFormat = new Intl.NumberFormat("en-IN");
      return numFormat.format(value)
    },
    convertInWords(number) {
      const words = ["", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "Ten",
      "Eleven", "Twelve", "Thirteen", "Fourteen", "Fifteen", "Sixteen", "Seventeen", "Eighteen", "Nineteen"];
      const tens = ["", "", "Twenty", "Thirty", "Forty", "Fifty", "Sixty", "Seventy", "Eighty", "Ninety"];

      function convertLessThanThousand(num) {
      if (num === 0) return "";
      if (num < 20) return words[num] + " ";
      if (num < 100) return tens[Math.floor(num / 10)] + " " + convertLessThanThousand(num % 10);
      return words[Math.floor(num / 100)] + " Hundred " + convertLessThanThousand(num % 100);
      }

      function convert(number) {
      if (number === 0) return "Zero Rupees";
      if (number < 0) return "Negative value is not supported";

      const crore = Math.floor(number / 10000000);
      const lakh = Math.floor((number % 10000000) / 100000);
      const thousand = Math.floor((number % 100000) / 1000);
      const rest = number % 1000;

      let result = "";

      if (crore > 0) {
      result += convertLessThanThousand(crore) + "Crore ";
      }

      if (lakh > 0) {
      result += convertLessThanThousand(lakh) + "Lakh ";
      }

      if (thousand > 0) {
      result += convertLessThanThousand(thousand) + "Thousand ";
      }

      if (rest > 0) {
      result += convertLessThanThousand(rest);
      }

      return result.trim() + " INR Only";
      }

      return convert(number);
    }
}
app.use(router)
app.use(store)
app.mount('#app')
import 'bootstrap/dist/js/bootstrap.js'