function produceDrivingRange(blockRange) {
  return function(startBlock, endBlock) {
    let start = parseInt(startBlock)
    let end = parseInt(endBlock)
    let trip = Math.abs(start - end)
    let range = blockRange - trip

    if (range > 0) {
      return `within range by ${range}`
    } else {
      return `${Math.abs(range)} blocks out of range`
    }
  }
}
