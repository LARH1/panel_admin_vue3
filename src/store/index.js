import {createStore} from 'vuex'
import app from "@/modules/app/store";
import sistema from "@/modules/sistema/store";
import auth from "@/modules/auth/store";

export default createStore({
  modules: {
    app,
    sistema,
    auth
  }
})
