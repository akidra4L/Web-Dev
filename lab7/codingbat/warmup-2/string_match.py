def string_match(a, b):
    cnt = 0
    l = min(len(a), len(b))
    for i in range(l - 1):
        if a[i:i + 2] == b[i:i + 2]:
            cnt += 1
    return cnt
