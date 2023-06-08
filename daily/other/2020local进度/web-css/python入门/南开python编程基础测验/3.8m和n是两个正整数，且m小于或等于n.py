#计算C(1,n)+C(2,n)+...+C(m,n)的值。其中，m和n是两个正整数，且m小于或等于n，
#C(i,n)=n!/i!/(n-i)!（这里的!表示阶乘，i在1~m上依次取值）。要求计算C(i,n)的
#功能用函数实现。
def combination(m,n):
    a,b,c=1,1,1
    for i in range(1,n+1):
        a*=i
    for j in range(1,m+1):
        b*=j
    for k in range(1,n-m+1):
        c*=k
    com=a/b/c
    return com
m=eval(input())
n=eval(input())
sum=0
if m<=0 or n<=0 or m>n:
    i=0
    print('invalid')
else:
    for t in range(1,m+1):
        i=1
        s=combination(t,n)
        sum+=s
    print('%d'%sum)
