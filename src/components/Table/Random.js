const getRandomIntInclusive = (left, right) => {
    let min = Math.ceil(left);
    let max = Math.floor(right);
    return Math.floor(Math.random() * (max - min + 1)) + min; //Максимум и минимум включаются
}

export {getRandomIntInclusive}