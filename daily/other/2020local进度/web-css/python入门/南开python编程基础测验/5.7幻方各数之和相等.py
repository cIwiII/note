##一个n度幻方共有n的平方个数字的排列，它们都是不同的整数，在一个方块中，n个数字在所有行、所有列和所有对角线中的和都相同。
##
##请编写is_magicsquare函数判断一个填充好数字的方形是否是幻方。
##输入格式:
##
##第一行输入一个整数n，表示该数字正方形的度数。然后下面是n行，每行包含n个用英文逗号分开的正整数。
##
##
##
##输出格式：
##
##如果是幻方则输出Yes，否则输出No


def is_magicsquare(ls):
    sum_set = set()
    element_set = set()
    diag_sum,rdiag_sum=0,0
    for rowidx in range(len(ls)):
        diag_sum += ls[rowidx][rowidx]
        rdiag_sum += ls[rowidx][len(ls)-1-rowidx]
        row_sum,col_sum=0,0
        for colidx in range(len(ls[rowidx])):
            element_set.add(ls[rowidx][colidx])
            row_sum += ls[rowidx][colidx]
            col_sum += ls[colidx][rowidx]
        sum_set.add(row_sum)
        sum_set.add(col_sum)
        if len(element_set)!=(rowidx+1)*len(ls[rowidx]):
            return False
        if len(sum_set)>1:
            return False
    sum_set.add(diag_sum)
    sum_set.add(rdiag_sum)
    if len(sum_set)>1:
        return False
    return True
            
if __name__=='__main__':
    n = eval(input())
    ls = []
    for i in range(n):
        ls.append(list(eval(input())))
    #print(ls)
    if is_magicsquare(ls)==True:
        print('Yes')
    else:
        print('No')
