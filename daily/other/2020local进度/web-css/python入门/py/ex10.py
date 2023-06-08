#10 那是什么
tabby_cat="\tI'm tabbed in."
persian_cat="I'm split\non a line."
backslash_cat="I'm  \\ a \\ cat."
#\\转义输出为\  \a转义为响铃声（中间不能有空格，否则不能转义）

fat_cat="""
I'll do a list:
\t* Cat food
\t* Fishies
\t* Catnip\n\t* Grass
"""

print(tabby_cat)
print(persian_cat)
print(backslash_cat)
print(fat_cat)
##  \\  反斜杠
##  \'  单引号
##  \"  双引号
##  \a  ASCII响铃符(BEL)
##  \b  ASCII退格符(BS)
##  \f  ASCII进纸符(FF)
##  \n  ASCII换行符(LF)
##  \N{name}  Unicode数据库中的字符名，其中name是它的名字，仅Unicode适用
##  \r  ASCII回车符(CR)
##  \t  ASCII水平制表符(TAB)
##  \uxxxx  值为16位十六进制值xxxx的字符
##  \uxxxxxxxx  值为32位十六进制值xxxxxxxx的字符
##   \v  ASCII垂直制表符(VT)
##  \ooo  值为八进制值ooo的字符
##  \xhh  值为十六进制值hh的字符
