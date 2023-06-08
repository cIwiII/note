#作出决定，遇见一只小熊
print("""你进了一间有两扇门的黑屋子，你是走1号门还是2号门？
You enter a dark room with two doors.Do you go through door #1 or door #2?""")

door=input(">")

if door == "1":
   print("这里有只大熊在吃芝士蛋糕。There's a giant bear here eating a cheesr cake.")
   print("你是做什么的。What do you do?")
   print("1. 吃蛋糕。1.Take the cake.")
   print("2. 对着熊尖叫。2.Scream at the bear.")

   bear=input(">")

   if bear=="1":
      print("熊把你的脸吃掉了，干得好！The bear eats your face off. Good job!")
   elif bear=="2":
      print("熊把你的腿吃掉了，干得好！The bear eats your legs off. Good job!")
   else:
      print(f" 嗯，做{ bear }可能更好。Well,doing {bear} is probably better.")
      print("熊跑了。bear runs away.")

elif door=="2":
   print("你看着一个叫Cthulhu的无尽深渊，前面有一些东西。You stare into the endless abyss at Cthulhu's retina.")
   print("1.Blueberries.蓝莓")
   print("2.黄夹克衣夹。Yellow jacket clothespins.")
   print("3.理解不了，对着深渊吼叫。Understanding  revovers yelling melodies.")

   insanity=input(">")

   if insanity=="1" or insanity=="2":
      print("你们靠人性的思维活下来了。You bsdy survives powered by a mind ofjello.")
      print("干得好Good job!")
   else:
      print("你变得疯掉了The insanity rots your eyes into a pool of muck.")
      print("结束Good job!")

else:
   print("你在附近绊倒，摔倒在刀上，然后死掉，干得好！You stumble around anf=d fall on a knife and die. Good job!")
