def sum13(nums):
    if len(nums) == 0:
        return 0
    sum = 0
    for i in range(len(nums)):
        if nums[i] == 13 or (i > 0 and nums[i-1] == 13):
            continue
        sum += nums[i]
    return sum
