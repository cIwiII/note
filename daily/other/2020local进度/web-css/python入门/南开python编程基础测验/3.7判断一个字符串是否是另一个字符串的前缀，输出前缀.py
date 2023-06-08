def zfc(x,y):
    if len(x)>len(y):
        return False
    if y[:len(x)]==x:
        return True
    return False
#while True:
s1=input()
s2=input()
if zfc(s1,s2)==True:
    print(s1)
elif zfc(s2,s1)==True:
    print(s2)
else:
    print("no")
