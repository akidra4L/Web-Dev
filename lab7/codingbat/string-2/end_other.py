def end_other(a, b):
    a = a.lower()
    b = b.lower()
    return True if (a in b or b in a) and a[-1] == b[-1] else False
