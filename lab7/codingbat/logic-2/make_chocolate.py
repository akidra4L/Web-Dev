def make_chocolate(small, big, goal):
    if big * 5 == goal:
        return 0
    if big * 5 > goal:
        goal %= 5
        if goal <= small:
            return goal
        return -1
    goal -= big * 5
    if goal <= small:
        return goal
    return -1
