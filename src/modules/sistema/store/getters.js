/**
 * Obtener todos los menus del sistema
 * @returns Array Menus del sistema
 */
export const getAllMenus = (state) =>
{
    return state.allMenus
}

/**
 * Obtener todass las categorías de menus del sistema
 * @returns Array Categorías del sistema
 */
export const getAllGroups = (state) =>
{
    return state.groups;
}

/**
 * Obtener todass los menus del sistema, de tipo Menu
 * @returns Array Menus del sistema
 */
export const getOnlyMenus = (state) =>
{
    return state.groups;
}

/**
 * Obtener todass los menus del sistema, de tipo Menu
 * @returns Array Menus del sistema
 */
export const getAllUsers = (state) =>
{
    return state.users;
}