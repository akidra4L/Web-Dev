if __name__ == '__main__':
    s = input()
    alnum, alpha, digit, lower, upper = 0, 0, 0, 0, 0
    for c in s:
        if c.isalnum():
            alnum += 1
        if c.isalpha():
            alpha += 1
        if c.isdigit():
            digit += 1
        if c.islower():
            lower += 1
        if c.isupper():
            upper += 1
    print("True" if alnum else "False")
    print("True" if alpha else "False")
    print("True" if digit else "False")
    print("True" if lower else "False")
    print("True" if upper else "False")