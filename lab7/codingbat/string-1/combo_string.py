def combo_string(a, b):
    if (len(a) < len(b)):
        return a + b + a
    return b + a + b
