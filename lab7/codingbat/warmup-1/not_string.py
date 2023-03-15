def not_string(str):
    if str[:3] != 'not':
        str = 'not ' + str
    return str
