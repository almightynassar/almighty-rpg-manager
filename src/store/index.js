import Vue from 'vue'
import Vuex from 'vuex'

import coinage from './coinage'
import gear from './gear'

Vue.use(Vuex)

/*
 * If not building with SSR mode, you can
 * directly export the Store instantiation;
 *
 * The function below can be async too; either use
 * async/await or return a Promise which resolves
 * with the Store instance.
 */

export default function (/* { ssrContext } */) {
  const Store = new Vuex.Store({
    modules: {
      coinage,
      gear
    },

    // enable strict mode (adds overhead!)
    // for dev mode only
    strict: process.env.DEV
  })

  // Hot Module updating
  if (process.env.DEV && module.hot) {
    module.hot.accept(['./coinage'], () => {
      const newCoinage = require('./coinage').default
      Store.hotUpdate({ modules: { coinage: newCoinage } })
    })
  }

  return Store
}
