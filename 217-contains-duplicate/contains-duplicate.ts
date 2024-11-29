function containsDuplicate(nums: number[]): boolean {
    let dups = {};
    
    for(let i = 0; i < nums.length; i++) {
      const bucket = Math.floor(nums[i] / 32);
      const x =  1 << nums[i];
      const num = x;
      
      if(num & dups[bucket]) return true;
      
      dups[bucket] = num | dups[bucket];

    }

    return false;
};