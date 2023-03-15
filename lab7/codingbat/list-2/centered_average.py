def centered_average(nums):
    return (sum(nums) - max(nums) - min(nums)) // (len(nums)-2)
