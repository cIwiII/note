#字符串、字节串和字符编码，
import sys
#导入模块并执行了一遍，if__main__=="__main__"里的没有执行，同时在当前的命名空间
#需要=xxx.yyy导入，而以from xxx import yyy导入时，使用的是=yyy,即
#     import sys(如下）              
script,encoding,error=sys.argv#相对来说用第一种降低导入函数和变量命名相同的风险
#第一种import xxx出现多个模块时公用一个，程序间会相互影响，
#而from xxx import yyy不会共用一个副本，单独存在，程序间不会影响

def main(language_file,encoding,errors):
    line=language_file.readline()#readline()返回内容为真，执行if，否则不执行

    if line:
        print_line(line,encoding,errors)#调用了另一个函数用来打印
        return main(language_file,encoding,errors)#main函数中调用main函数，实现
#直到符合条件则停止，这里是读取文本信息，直到文本结束没有内容停止


def print_line(line,encoding,errors):#对文件中的每一行进行编码
    next_lang=line.strip()#将每一行的\n删掉
    raw_bytes=next_lang.encode(encoding,errors=errors)
    cooked_string=raw_bytes.decode(encoding,errors=errors)

    print(raw_bytes,"<===>",cooked_string)


languages=open("languages.txt",encoding="utf-8")#打开文件开始执行main函数

main(languages,encoding,error)

#encoding编码 函数形式.encode
#decode解码  函数形式,decode
