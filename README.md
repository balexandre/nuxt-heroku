# nuxt-heroku-test

- using custom `serverMiddleware` and using `fetch()`, `axios()` and even `Vuex` actions to testing the Nuxt application to fetch data inside Heroku

- trying ways to fetch `process.env.XXXXX` into the app

app is live on [https://ba-nuxt-heroku-test.herokuapp.com/inspire](https://ba-nuxt-heroku-test.herokuapp.com/inspire), just use the buttons and check the source code (app is hosted on a Free account, that will sleep after no request in 30min... will take 15sec to became available...)

## Build Setup

``` bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm run start

# generate static project
$ npm run generate
```

For detailed explanation on how things work, check out [Nuxt.js docs](https://nuxtjs.org).
