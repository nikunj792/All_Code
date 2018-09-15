print('hello Word')
def myfunc(*args):
    print('Inside ', args)
    for item in args:
        print('inside the for ', item)
        if item % 2 is 0:
            return item
myfunc(1,2,3,4)