def near_ten(num):
    a = num % 10
    return (10 - (10-a)) <= 2 or (10 - a) <= 2
