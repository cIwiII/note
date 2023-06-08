#汉诺塔问题：有三根杆（编号A、B、C
def hanoi(m,src,tmp,dst):
    if m==1:
        print('%d:%s->%s'%(m,src,dst))
    else:
        hanoi(m-1,src,dst,tmp)
        print('%d:%s->%s'%(m,src,dst))
        hanoi(m-1,tmp,src,dst)

n=int(input())
hanoi(n,'A','B','C')
