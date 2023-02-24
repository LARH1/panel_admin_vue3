/**
 * Action para crear un nuevo menu
 * @param menu Nuevo menú 
 * @returns Respuesta
 */
export const createMenu = async (context,menu) =>
{
    try
    {
        // Guardar en DB
        context.commit("addNewMenu",{...menu})
        return {status: true,ms: ""}
    } catch (ex)
    {
        console.error(ex);
        return {status: false,ms: "Error"}
    }
}

/**
 * Action para crear un nuevo menu
 * @param menu Nuevo menú 
 * @returns Respuesta
 */
export const updateMenu = async (context,menu) =>
{
    try
    {
        // Guardar en DB
        context.commit("updateMenu",{...menu})
        return {status: true,ms: ""}
    } catch (ex)
    {
        console.error(ex);
        return {status: false,ms: "Error"}
    }
}

/**
 * Action para eliminar un nuevo menu
 * @param id Id del menú a eliminar 
 * @returns Respuesta
 */
export const deleteMenu = async (context,id) =>
{
    try
    {
        // Borrar en DB
        context.commit("deleteMenu",id)
        return {status: true,ms: ""}
    } catch (ex)
    {
        console.error(ex);
        return {status: false,ms: "Error"}
    }
}

/**
 * Action para crear un nuevo usuario
 * @param user Nuevo usuario 
 * @returns Respuesta
 */
export const createUser = async (context,user) =>
{
    try
    {
        // Guardar en DB
        delete user.password
        // Obtener ID (Se debe obtener de la DB)
        user.id = Math.floor(Math.random() * 100)
        context.commit("addNewUser",{...user})
        return {status: true,ms: ""}
    } catch (ex)
    {
        console.error(ex);
        return {status: false,ms: "Error"}
    }
}

/**
* Action para actualizar un usuario
* @param user Usuario a actualizar 
* @returns Respuesta
*/
export const updateUser = async (context,user) =>
{
    try
    {
        // Guardar en DB
        delete user.password
        context.commit("updateUser",{...user})
        return {status: true,ms: ""}
    } catch (ex)
    {
        console.error(ex);
        return {status: false,ms: "Error"}
    }
}

/**
 * Action para eliminar un usuario
 * @param id Id del usuario a eliminar 
 * @returns Respuesta
 */
 export const deleteUser = async (context,id) =>
 {
     try
     {
         // Borrar en DB
         context.commit("deleteUser",id)
         return {status: true,ms: ""}
     } catch (ex)
     {
         console.error(ex);
         return {status: false,ms: "Error"}
     }
 }