n = int(input())
arr = list(map(int, input().split()))
pos = 0
for i in arr:
    if i > 0:
        pos += 1
print(pos)