function runningSum(nums) {
    const res = [];
    res.push(nums[0]);
    
    for (let i = 1; i < nums.length; i++) {
        res.push(nums[i] + res[i - 1]);
    }

    return res;
}
console.log(runningSum([3,1,2,10,1]));