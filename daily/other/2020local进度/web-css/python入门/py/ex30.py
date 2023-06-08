#else和if，多个True只执行第一个语句
people=30
cars=40
trucks=15


if cars >people:
   print("We should take the  cars.")
elif cars <people:
    print("We should not take the cars.")
else:
   print("We can't decide.")

if trucks> cars:
   print("that'too many trucks.")
elif trucks <cars:
   print("Maybe we could take the trucks.")
else:
   print("We still can't decide.")

if people >trucks:
   print("Alright, let's just take the trucks.")
else:
   print("fine, let's stay home then.")
