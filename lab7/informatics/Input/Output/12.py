n = int(input())
h = (n // 3600) % 24
m = (n % 3600) // 60
s = n % 60
if m < 10:
    print(f'{h}:0{m}', end=":")
else:
    print(f'{h}:{m}', end=":")
if s < 10:
    print(f'0{s}')
else:
    print(s)
