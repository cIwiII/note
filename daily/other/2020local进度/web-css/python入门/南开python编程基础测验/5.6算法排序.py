##（1）从n个元素中找出具有最小值的元素，如果其不是第1个元素则将其与第1个元素交换。
##（2）从后n-1个元素中找出具有最小值的元素，如果其不是第2个元素则将其与第2个元素交换。
##...
##（i）从后n-i+1个元素中找出具有最小值的元素，如果其不是第i个元素则将其与第i个
##元素交换。
##...
##（n-1）从后2个元素中找出具有最小值的元素，如果其不是第n-1个元素则将其与第n-1个元素交换。
##排序完毕。
##输入格式:
##先输入列表中的元素个数n。
##然后分n行输入n个元素的值。
list1=[]
n=0
i=0
lens=eval(input())

while n<lens:
    m=eval(input())
    list1.append(m)
    n+=1
    
while i<lens-1:
    i+=1
    list2=list1[i-1:lens+1]
    if min(list2)!=list2[0]:
        n=list1[i-1]

        
        list1[list1.index(min(list2))]=n
        list1[i-1]=min(list2)
       
        
        print(list1)

    else:
        print(list1)



    
    
            
