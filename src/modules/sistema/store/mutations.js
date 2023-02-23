export const addNewMenu = (state,menu) =>
{
    state.allMenus.push(menu)
}

export const updateMenu = (state,menu) =>
{
    const old = state.allMenus.find(m => m.id == menu.id)
    const idx = state.allMenus.indexOf(old)
    state.allMenus[idx] = menu
}

export const deleteMenu = (state,id) =>
{
    const old = state.allMenus.find(m => m.id == id)
    const idx = state.allMenus.indexOf(old)
    state.allMenus.splice(idx,1);
}