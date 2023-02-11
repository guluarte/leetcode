/*
 * @lc app=leetcode id=121 lang=javascript
 *
 * [121] Best Time to Buy and Sell Stock
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {

    // dp from end to start

    if(!prices || prices.length < 1) return 0

    let maxProfit = 0
    const lasItem = prices.length - 1
    let high = prices[lasItem]

    for (let i = lasItem; i >= 0; i--) {
        
        let profit = high - prices[i]

        maxProfit = Math.max(maxProfit, profit)
        high = Math.max(prices[i], high)
    }


    return maxProfit

};
// @lc code=end


// @after-stub-for-debug-begin
module.exports = maxProfit;
// @after-stub-for-debug-end