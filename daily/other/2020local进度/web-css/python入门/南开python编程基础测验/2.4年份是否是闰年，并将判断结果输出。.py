#年份是否是闰年，并将判断结果输出。
y=eval(input())
if (y%4==0 and y%100!=0) or y%400==0:
    print("yes")
else:
    print("no")
