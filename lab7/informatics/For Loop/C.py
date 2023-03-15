a = int(input())
b = int(input())
for i in range(a, b + 1):
    if i ** 0.5 % 1.0 == 0:
        print(i)