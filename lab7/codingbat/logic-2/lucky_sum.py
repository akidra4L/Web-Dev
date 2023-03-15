def lucky_sum(a, b, c):
    n = [a, b, c]
    s = 0
    for i in range(3):
        if n[i] == 13:
            break
        s += n[i]
    return s
