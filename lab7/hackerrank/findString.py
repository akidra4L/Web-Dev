def count_substring(string, sub_string):
    i = 0
    res = 0
    while string.find(sub_string, i) != -1:
        res += 1
        i = string.find(sub_string, i) + 1
    return res

if __name__ == '__main__':
    string = input().strip()
    sub_string = input().strip()
    
    count = count_substring(string, sub_string)
    print(count)