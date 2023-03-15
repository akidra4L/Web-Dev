x = input()
res = 0
for i in range(len(x)):
    res += int(x[i]) * (2 ** (len(x) - i - 1))
print(res)