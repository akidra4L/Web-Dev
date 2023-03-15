n = int(input())
arr = list(map(int, input().split()))
res = 0
for i in range(1, len(arr)):
    if arr[i - 1] < arr[i]:
        res += 1
print(res)