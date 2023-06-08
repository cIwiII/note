n=eval(input())
i,s,sum=1,1,0
while i<=n:
    s*=i
    i+=1
    sum+=s
print(sum)
