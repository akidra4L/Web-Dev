def max_end3(nums):
    if nums[0] > nums[-1]:
        nums[0:] = [nums[0]] * len(nums)
    else:
        nums[0:] = [nums[-1]] * len(nums)
    return nums
