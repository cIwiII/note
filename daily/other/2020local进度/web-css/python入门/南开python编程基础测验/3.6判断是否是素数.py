def isprine(n):
    #m=int(n**0.5)
    for i in range(2,n):
        if n%i==0:
            return False
    return True
while True:
    x=int(input())
    if x==0:
        break
    elif x<2:
        print("Invalid")
    elif isprine(x)==True:
        print("Yes")
    else:
        print("No")
