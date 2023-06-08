#计算1~n之间的素数并输出。
n=eval(input())
z=range(2,n+1)
for a in z:
    for b in range(2,a):
        if a%b==0:
            break
    else:    #为什么if和else之间缩进不同
        print(a)
