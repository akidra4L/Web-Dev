n = int(input())
t = n * 45 + (n // 2) * 5 + (n - n // 2 - 1) * 15
print(9 + t // 60, t % 60)