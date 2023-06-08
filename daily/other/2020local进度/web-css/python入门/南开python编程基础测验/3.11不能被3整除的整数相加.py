#不能被3整除的整数相加
def isDivisible(n,m): #定义一个用于判断n是否能被m整除的函数
    return n%m==0 #如果n能被m整除则返回True，否则返回False

sum=0
while True: 
    n=eval(input()) 
    if n==0: 
        break
    if not isDivisible(n,3): #如果n不能被3整除
        sum+=n #将不能被3整除的n加到sum上
print(sum) 






##def isa(n,m):
##    if n%m!==0:
##        return Ture
##t=0
##while True:
##    n=eval(input())
##    if n==0:
##        break
##    if isa(n,3):
##        t+=n
##
##print(t)
