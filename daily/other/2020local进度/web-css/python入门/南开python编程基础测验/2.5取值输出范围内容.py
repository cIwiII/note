#编写程序实现以下功能：对于数值x，如果x在区间(1,2]上，则输出x+2.5的值；
#如果x在区间[-1,1]上，则输出4.35x的值；如果x在区间[-2,-1)上，
#则输出x的值；如果x为其他值，则输出“invalid”。
x=eval(input())
if x>1 and x<=2:
    print(x+2.5)
elif x>=-1 and x<=1:
    print(4.35*x)
elif x>=-2 and x<-1:
    print(x)
else:
    print("invalid")
