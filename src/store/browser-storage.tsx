const key = "aircraft-scheduling";

export const loadState = () => {
    const state = localStorage.getItem(key);

    return state ? { rotations: JSON.parse(state) } : { rotations: []};
}

export const saveState = (state:{}) => {
    localStorage.setItem(key, JSON.stringify(state))
}