const added = id => {
    const getItem = localStorage.getItem(id);
    if (getItem) {
        const num = parseInt(getItem)
        localStorage.setItem(id, num + 1)
    } else {
        localStorage.setItem(id, 1)
    }
}
export {added}