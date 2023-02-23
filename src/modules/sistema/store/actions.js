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