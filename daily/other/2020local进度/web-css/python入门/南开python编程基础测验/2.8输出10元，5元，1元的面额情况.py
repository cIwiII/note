n=eval(input())
a=range(n//10+1)
t=0
for s in a:
    b=range((n-10*s)//5+1)
    for w in b:
        y=n-s*10-w*5
        t+=1
        print('%d,%d,%d'%(s,w,y))
print(t)n=eval(input())
a=range(n//10+1)
t=0
for s in a:
    b=range((n-10*s)//5+1)
    for w in b:
        y=n-s*10-w*5
        t+=1
        print('%d,%d,%d'%(s,w,y))
print(t)
