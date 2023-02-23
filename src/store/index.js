import {createStore} from 'vuex'
import app from "@/modules/app/store";
import sistema from "@/modules/sistema/store";

export default createStore({
  modules: {
    app,
    sistema,
  }
})
