class Sort():
    def __init__(self,list1,n,i,lens):
        






list1=[]
n=0
i=0
lens=eval(input())

while n<lens:
    m=eval(input())
    list1.append(m)
    n+=1
    
while i<lens-1:
    i+=1
    list2=list1[i-1:lens+1]
    if min(list2)!=list2[0]:
        n=list1[i-1]

        
        list1[list1.index(min(list2))]=n
        list1[i-1]=min(list2)
       
        
        print(list1)

    else:
        print(list1)








###时间输入及输出
##class Time:
##    def  SetTime(self,h,m,s):
##        self.h,self.m,self.s=h,m,s
##    def  AddOneSec(self):
##        self.s+=1
##        if self.s==60:
##            self.s=0
##            self.m+=1
##            if self.m==60:
##                self.m=0
##                self.h+=1
##                if self.h==24:
##                    self.h=0
##if __name__=='__main__':
##    h=int(input()) #输入时
##    m=int(input()) #输入分
##    s=int(input()) #输入秒
##    count=int(input()) #输入要数的秒数
##    t=Time()
##    t.SetTime(h,m,s)
##    for i in range(count):
##        print('%02d:%02d:%02d'%(t.h,t.m,t.s)) #输出当前时间
##        t.AddOneSec()
##


###3.8
##def jc(n):
##    h=1
##    for f in range(1,n+1):
##        h*=f
##    return h
##def Cs(i,n):
##    t=0
##    for b in range(1,i+1):
##        
##        s=jc(n)/jc(b)/jc(n-b)
##        t+=s
##    return t
##while True:
##    m=int(input())
##    n=int(input())
##    if 0<m<=n:
##        a=Cs(m,n)
##        print(a)
##    else:
##        print('invalid')
##







##编写程序实现以下功能：计算C(1,n)+C(2,n)+...+C(m,n)的值。其中，m
##和n是两个正整数，且m小于或等于n，C(i,n)=n!/i!/(n-i)!（这里的!表示阶
##乘，i在1~m上依次取值）。要求计算C(i,n)的功能用函数实现。
##
##
##
##输入格式:
##
##两个正整数m和n，其中m小于或等于n。
##
##
##
##输出格式：
##
##如果输入的两个整数无效，则输出invalid；否则输出计算结果。

##def zfc(x,y):
##    if len(x)>len(y):
##        return False
##    if y[:len(x)]==x:
##        return True
##    return False
##while True:
##s1=input()
##s2=input()
##if zfc(s1,s2)==True:
##    print(s1)
##elif zfc(s2,s1)==True:
##    print(s2)
##else:
##    print("no")
    


##def isprine(n):
##    #m=int(n**0.5)
##    for i in range(2,n):
##        if n%i==0:
##            return False
##    return True
##while True:
##    x=int(input())
##    if x==0:
##        break
##    elif x<2:
##        print("Invalid")
##    elif isprine(x)==True:
##        print("Yes")
##    else:
##        print("No")



