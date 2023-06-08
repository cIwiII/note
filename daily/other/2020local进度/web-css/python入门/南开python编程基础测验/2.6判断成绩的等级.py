x=eval(input())
if x>=0 and x<=100:
    if x>=90:
        print("A")
    elif x>=80:
        print("B")
    elif x>=70:
        print("C")
    elif x>=60:
        print("D")
    else:
        print("E")
else:
    print("invalid")
