def string_bits(str):
    res = ''
    for i in range(len(str)):
        if i % 2 == 0:
            res += str[i]
    return res
