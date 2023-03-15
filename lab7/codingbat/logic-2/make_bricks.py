def make_bricks(small, big, goal):
    if big * 5 == goal or small == goal:
        return True
    if big * 5 > goal:
        goal %= 5
        return goal <= small
    goal -= big * 5
    return goal <= small
