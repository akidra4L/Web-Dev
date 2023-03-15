def fix_teen(n):
    if n < 13 or n > 19:
        return True
    if n == 15 or n == 16:
        return True
    return False


def no_teen_sum(a, b, c):
    s = 0
    n = [a, b, c]
    for i in n:
        if fix_teen(i):
            s += i
    return s
