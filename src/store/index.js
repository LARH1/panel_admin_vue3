import {createStore} from 'vuex'
import app from "@/modules/app/store";

export default createStore({
  modules: {
    app,
  }
})
