##题目内容：
##
##假设有一种A语言，其单词也是由26个英文字母组成，但拼写与英文完全不同。请编写程序实现A语言单词翻译成英文单词的功能。
##
##
##
##输入格式:
##
##第1行输入单词的数量n。
##
##从第2~2*n+1行，每连续两行输入的单词，前一行单词是英文单词，后一行单词是对应的A语言单词。
##
##第2*n+2行输入待查单词的数量m。
##
##第2*n+3~2*n+m+2行，每行输入一个A语言单词。
##
##
##
##输出格式：
##
##分m行输出翻译结果。如果能够找到输入的A语言单词，则输出对应的英文；如果找不到，则输出notfound。
##
##
##
##输入样例：
##
##4
##
##cat
##
##atcay
##
##pig
##
##igpay
##
##froot
##
##ootfray
##
##loops
##
##oopslay
##
##3
##
##atcay
##
##ittenkay
##
##oopslay
##
##
##
##输出样例：
##
##cat
##
##notfound
##
##loops


n = int(input())
d = {}
for i in range(n):
    eng = input()
    a = input()
    d[a] = eng
m = int(input())
for i in range(m):
    a = input()
    if a in d:
        print(d[a])
    else:
        print('notfound')
