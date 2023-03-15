def count_evens(nums):
    cnt = 0
    for i in nums:
        if i % 2 == 0:
            cnt += 1
    return cnt
