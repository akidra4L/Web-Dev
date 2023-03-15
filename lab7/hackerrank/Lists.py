if __name__ == '__main__':
    N = int(input())
    ls = []
    for _ in range(N):
        command = input().split()
        if command[0] == 'insert':
            i = int(command[1])
            e = int(command[2])
            ls.insert(i, e)
        if command[0] == 'print':
            print(ls)
        if command[0] == 'remove':
            e = int(command[1])
            ls.remove(e)
        if command[0] == 'append':
            e = int(command[1])
            ls.append(e)
        if command[0] == 'sort':
            ls.sort()
        if command[0] == 'pop':
            ls.pop()
        if command[0] == 'reverse':
            ls.reverse()