def sum67(nums):
    if len(nums) == 0:
        return 0
    isOk = True
    sum = 0
    for i in nums:
        if i == 6:
            isOk = False
        elif isOk == False and i == 7:
            isOk = True
        elif isOk:
            sum += i
    return sum
