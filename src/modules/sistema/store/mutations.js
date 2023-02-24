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

export const addNewUser = (state,user) =>
{
    state.users.push(user)
}

export const updateUser = (state,user) =>
{
    const old = state.users.find(u => u.id == user.id)
    const idx = state.users.indexOf(old)
    state.users[idx] = user
}

export const deleteUser = (state,id) =>
{
    const old = state.users.find(m => m.id == id)
    const idx = state.users.indexOf(old)
    state.users.splice(idx,1);
}