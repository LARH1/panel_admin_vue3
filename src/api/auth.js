export const login = (user,password) =>
{
    // Comprobar en servidor
    if (user === "admin" & password === "123456")
        return {
            success: true,
            user: {
                user: "Admin",
                token: "123-abc"
            }
        }
    throw new Error("Usuario o contraseña incorrecta")
}

export const checkTokenServer = (token) =>
{
    // Comprobar en servidor
    if (token === "123-abc")
        return {
            success: true,
            user: {
                user: "Admin",
                token: "123-abc" // Generar nuevo
            }
        }
    throw new Error("Token No Válido")
}