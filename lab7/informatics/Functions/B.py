def power(a, n):
    res = 1
    for _ in range(n):
        res *= a
    return res

a, n = map(int, input().split())
print(power(a,n))