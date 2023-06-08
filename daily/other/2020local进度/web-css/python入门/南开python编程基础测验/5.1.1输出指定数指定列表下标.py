##题目内容：

##编写程序实现以下功能：根据指定值从一个列表中查找所有匹配元素的位置，
##要求使用列表中的index方法进行查找
##输入格式:
##先输入带查找元素的值。
##再输入一个整数，表示列表中的元素个数。
##最后依次输入列表中的元素。

look=eval(input())#查找的数字
lens=eval(input())#查找的长度
list1=[]#创建查找的列表
list2=[]#过渡列表
list3=[]#输出索引的列表
n=0
while n<lens:#限制长度
    sums=eval(input())#输入元素
    list1.append(sums)#将元素添加到列表中
    n+=1#对写入元素的次数进行计数

for k,v in enumerate(list1):#分离列表中的元素和索引值
    list2.append(k)#将分离出的索引值添加到过渡列表
    if v==look:#当列表元素等于查找的值时执行
        m=list2.index(k)#元素对应的索引值提出
        list3.append(m)#添加到第三个列表

print(list3)
    
    
            






