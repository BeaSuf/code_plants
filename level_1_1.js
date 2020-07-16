const grid = seedCount => {
    const square = Math.sqrt(seedCount);
    let height = Math.floor(square);
    let width = Math.ceil(square);

    if(height * width < seedCount) {
        height++;
    }
    return [height, width];
}

module.exports = {
    grid
}