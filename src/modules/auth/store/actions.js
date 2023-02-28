import {login,checkTokenServer} from "@/api/auth"

export const loginUser = async (context,user) =>
{
    try
    {
        // Hacer login en Server
        const res = login(user.user,user.password)

        // Guardar token
        context.commit("loginUser",{user: res.user.name,token: res.user.token});
        return res
    } catch (ex)
    {
        return {ok: false,message: ex.message}
    }
}

export const checkToken = async (context) =>
{
    const token = localStorage.getItem("token")
    // Existe en el Storage
    if (!token)
    {
        context.commit("logOut");
        return {success: false,message: "403. Sin autorización"};
    }
    // Comprobar en server
    const res = checkTokenServer(token)
    if (res.success)
    {
        // Correcto. Guardar datos del usuario
        const {user} = res
        context.commit("loginUser",user)
    } else
    {
        // No valido
        context.commit("logOut"); // Limpiar datos
    }
    return res
}