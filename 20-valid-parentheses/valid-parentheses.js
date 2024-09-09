/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
   const pairs = {
        ')' : '(',
        ']' : '[',
        '}' : '{',
   } 

   const stack = []

   for(let i = 0; i < s.length; i++) {
        const letter = s[i]

        if(pairs[letter]) {
            const top = stack.pop();

            if(pairs[letter] !== top) {
                return false
            }

            continue;
        }   

        stack.push(letter)

   }

   if(stack.length > 0) return false

   return true


};