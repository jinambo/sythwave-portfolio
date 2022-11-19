const random = (min, max) => {
    return min + Math.random() * (max + 1 - min)
}

export default random