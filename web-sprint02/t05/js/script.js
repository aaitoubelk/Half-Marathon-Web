function total(addCount = 1, addPrice, currentTotal = 0) {
    let res = (+currentTotal + +addCount * +addPrice).toFixed(2);
    console.log(res);
    return res;
}
