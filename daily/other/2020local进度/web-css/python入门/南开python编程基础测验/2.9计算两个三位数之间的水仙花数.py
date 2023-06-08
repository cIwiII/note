

start,end=eval(input()),eval(input())
z=range(start,end+1)
t=0
for x in z:
    a=x//100
    b=(x-a*100)//10
    c=x%10
    
    if x==a**3+b**3+c**3:
        print(x)
        t+=1
if t==0:
    print("not found")
