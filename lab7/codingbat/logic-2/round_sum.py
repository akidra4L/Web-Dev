def round_sum(a, b, c):
    return round10(a) + round10(b) + round10(c)


def round10(num):
    r = num % 10
    if r >= 5:
        return num + 10 - r
    else:
        return num - r
