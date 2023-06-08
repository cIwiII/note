#使用for循环编写程序实现以下功能：
#计算1-1/3+1/5-1/7+...-1/99+......，结果保留2位小数。
n=eval(input())
if n>0:
    z=range(1,2*n,2)
    a=0 
    for i,k in enumerate(z,1):
        b=1/k
        if i%2==0:      
            a=a-b
        elif i%2==1:
            a=a+b
    print('%.2f'%a)
else:
  pass
