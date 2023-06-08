#while循环,程序停不下来时ctrl+c中止
i=0
numbers=[]

while i < 6:#如果没有这个条件程序就不会停止
    print(f"At the top i s {i}")
    numbers.append(i)#将每次的i追加到numbers里面

    i=i+1#可写为i+=1
    print("Numbers now:",numbers)
    print(f"At the bottom i is {i}")


print("The numbers:")

for num in numbers:
    print(num)
