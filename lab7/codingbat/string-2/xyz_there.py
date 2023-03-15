def xyz_there(str):
    if str[:3] == "xyz":
        return True
    for i in range(1, len(str) - 2):
        if str[i-1] != "." and str[i:i+3] == "xyz":
            return True
    return False
