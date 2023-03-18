export const incNo = (xyz) => {
    return {
        type: "increment",
        payload : xyz
    }
}
export const decNo = (xyz) => {
    return {
        type: "decrement",
        payload : xyz
    }
}
export const changeName = () => {
    return {
        type: "change",
    }
}