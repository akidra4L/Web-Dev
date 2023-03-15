n = int(input())
res = 0
for _ in range(n):
    tmp = int(input())
    if tmp == 0:
        res += 1
print(res)