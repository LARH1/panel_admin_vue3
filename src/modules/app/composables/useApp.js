import {useStore} from "vuex";

const useApp = () =>
{
    const store = useStore()
    return {
        menus: store.getters["app/getMenus"],
    }
};
export default useApp