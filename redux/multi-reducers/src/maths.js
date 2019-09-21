const average = (data) => {
    return data.reduce( (acc, curr, index, array) => {
        acc += curr
        if (index === array.length -1 ) {
            return acc/array.length
        }else{
            return acc
        }
    })
}

export {
    average,
}