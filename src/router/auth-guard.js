import store from "@/store";

const isAuthenticated = async (to,from,next) =>
{
    // Verificar el status del
    const res = await store.dispatch("auth/checkToken");
    if (res.success) next();
    else
    {
        next({name: "auth-login"});
    }
}

export default isAuthenticated;