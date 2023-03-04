/**
 * Obtener todos los menus del sistema
 * @returns Array Menus del sistema
 */
export const getMenus = (state) =>
{
    return state.menus
}

/**
 * Obtener si es la primera vez que se ingresa
 * @returns Boolead Si es la primera vez o no
 */
export const getReload = (state) =>
{
    return state.reload
}