/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
   if(s.length !== t.length) return false
   const charCounts = {}

   for(let i = 0; i < s.length; i++) {
    const sL = s[i]
    const tL = t[i]
    charCounts[sL] = charCounts[s[i]] || 0
    charCounts[tL] = charCounts[t[i]] || 0
    charCounts[sL]++
    charCounts[tL]--
   }

   for(letter of Object.values(charCounts)) {
    console.log(letter)
    if(letter !== 0) return false
   }

   console.log(charCounts)

   return true
};