def swap_case(s):
    res = ''
    for i in s:
        res += i.upper() if i.islower() else i.lower()
    return res

if __name__ == '__main__':
    s = input()
    result = swap_case(s)
    print(result)