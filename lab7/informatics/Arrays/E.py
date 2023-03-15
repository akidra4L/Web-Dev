n = int(input())
arr = list(map(int, input().split()))
res = False
for i in range(1, len(arr)):
    if arr[i - 1] > 0 and arr[i] > 0 or arr[i - 1] < 0 and arr[i] < 0:
        res = True
        break
print("YES" if res else "NO")