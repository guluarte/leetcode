/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
    let maxPrice = 0
    let l = 0

    for (let r = 0; r < prices.length; r++) {
        const sellPrice = prices[r] - prices[l]
        maxPrice = Math.max(maxPrice, sellPrice)
        if (prices[r] < prices[l]) {
            l = r
        }
    }

    return maxPrice
};