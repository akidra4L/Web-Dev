def xor(a, b):
    return a and not b or not a and b
a, b = map(int, input().split())
print(int(xor(a, b)))