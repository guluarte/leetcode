/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
    let [l, r] = [0, s.length - 1]

    while (l < r) {
        let left = s[l].toUpperCase()
        let right = s[r].toUpperCase()
        while (!/[0-9A-Z]/.test(left) && l < r) {
            l++
            left = s[l]?.toUpperCase()
        }
        while (!/[0-9A-Z]/.test(right) && r > l) {
            r--
            right = s[r].toUpperCase()
        }
  
        if (left === right) {
            l++
            r--
            continue
        }

        return false
    }

    return true
} 
