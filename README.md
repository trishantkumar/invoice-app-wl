# invoice-app

This is a dummy application to print invoices of 2 types, we have implemented the logic in this way that you can download
2 types on invoice with the help of Download Invoice button.

Vue version - In this we are using Vue 3 with composition API.

npm Dependencies - [vue-router](https://v3.router.vuejs.org/guide/),
[html2pdf](https://www.npmjs.com/package/html2pdf.js/v/0.9.0), [axios](https://www.npmjs.com/package/axios), [Vuex](https://vuex.vuejs.org/)

## Demo
Netlify URL - [https://sweet-dusk-d00b30.netlify.app/](https://sweet-dusk-d00b30.netlify.app/)

## Web application details
In this we have 1 sales invoice and 2 invoices, on "/" route you will see the sales invoice after clicking on Submit button
you'll be able to see in voices list where you have Invoice 1, Invoice 2 and Sales Invoice, after clicking on any invoice
you'll be able to see the in voice and download it.

Some Details:
- Store staic json data in data.js file
- Used VueX store to get invoice state where we have satte and getters
- On submit button store the data in localStorage and then fetched it on particular page.
- Use html2pdf library to convert html into pdf

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar)

## Tech Stack

**Client:** [Vue3](https://vuejs.org/), [Javascript](https://www.javascript.com/)

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

## Author
Trishant Kumar (trishantshishodia@gmail.com)
