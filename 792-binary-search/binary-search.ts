function search(nums: number[], target: number): number {
    let low = 0
    let high = nums.length

    while (low < high) {
        let mid = low + Math.floor((high - low) / 2)
        let answer = nums[mid]
        console.log({ low, mid, high, answer, target }
        )
        if (answer === target) {
            return mid
        }
        if (answer < target) {
            low = mid + 1
        } else {
            high = mid
        }
    }
    return -1
};