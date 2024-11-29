function lengthOfLongestSubstring(s: string): number {
       if(s.length <= 1) return s.length;
    
    let max: number = 1;
    let start: number = 0;
    for(let end: number = 1; end <= s.length; end++) {
        max = Math.max(max, end - start); 
        while(start < end && s.substring(start, end).includes(s[end])) {
            start++;
        }
    }
    return max; 
};