const added = id => {
    let obj;
    let upCart = localStorage.getItem('cart');
    if (upCart) {
        obj = JSON.parse(upCart)
    } else {
        obj = {};
    }

    const quantity = obj[id];
    if (quantity) {
        const upQuan = quantity + 1;
        obj[id] = upQuan;
    } else {
        obj[id] = 1;
    }
    localStorage.setItem('cart', JSON.stringify(obj));
    // console.log(setCart)
}

const removeFromDb = id => {
    const ckForRem = localStorage.getItem('cart');
    if (ckForRem) {
        const objRem = JSON.parse(ckForRem);
        if (id in objRem) {
            delete objRem[id];
            localStorage.setItem('cart', JSON.stringify(objRem));
        }
    }
}
export { added, removeFromDb }