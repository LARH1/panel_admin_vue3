export const loginUser = (state,user) =>
{
    // Guardar IdToken en el storage
    if (user.token) localStorage.setItem("token",user.token);
    // Guardar IdToken en el state
    state.token = user.token;
    // Guardar usuario
    state.user = user.user;
    state.status = 1;
}

export const logOut = (state) =>
{
    state.status = 0;
    state.user = null;
    state.token = null;
    localStorage.removeItem("token");
}