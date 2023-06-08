#settings配置
import pygame


class Settings(object):
    """设置常用的属性"""


    def __init__(self):
        self.bgImage = pygame.image.load('img/background.png')  # 背景图


        self.bgImageWidth = self.bgImage.get_rect()[2]  # 背景图宽
        self.bgImageHeight = self.bgImage.get_rect()[3]  # 背景图高
        self.start=pygame.image.load("img/start.png")
        self.pause=pygame.image.load("img/pause.png")
        self.gameover=pygame.image.load("img/gameover.png")
        self.heroImages = ["img/hero.gif",
                           "img/hero1.png", "img/hero2.png"]  # 英雄机图片
        self.airImage = pygame.image.load("img/enemy0.png") # airplane的图片
        self.beeImage = pygame.image.load("img/bee.png") # bee的图片
        self.heroBullet=pygame.image.load("img/bullet.png")# 英雄机的子弹
#飞行物类
import abc




class FlyingObject(object):
    """飞行物类，基类"""


    def __init__(self, screen, x, y, image):
        self.screen = screen
        self.x = x
        self.y = y
        self.width = image.get_rect()[2]
        self.height = image.get_rect()[3]
        self.image = image


    @abc.abstractmethod
    def outOfBounds(self):
        """检查是否越界"""
        pass


    @abc.abstractmethod
    def step(self):
        """飞行物移动一步"""
        pass


    def shootBy(self, bullet):
        """检查当前飞行物是否被子弹bullet（x，y）击中"""
        x1 = self.x
        x2 = self.x + self.width
        y1 = self.y
        y2 = self.y + self.height
        x = bullet.x
        y = bullet.y
        return x > x1 and x < x2 and y > y1 and y < y2


    def blitme(self):
        """打印飞行物"""
        self.screen.blit(self.image, (self.x, self.y))
#英雄机
from flyingObject import FlyingObject
from bullet import Bullet
import pygame




class Hero(FlyingObject):
    """英雄机"""
    index = 2  # 标志位
    def __init__(self, screen, images):


        # self.screen = screen
        
        self.images = images  # 英雄级图片数组,为Surface实例
        image = pygame.image.load(images[0])
        x = screen.get_rect().centerx
        y = screen.get_rect().bottom
        super(Hero,self).__init__(screen,x,y,image)
        self.life = 3  # 生命值为3
        self.doubleFire = 0  # 初始火力值为0


    def isDoubleFire(self):
        """获取双倍火力"""
        return self.doubleFire


    def setDoubleFire(self):
        """设置双倍火力"""
        self.doubleFire = 40


    def addDoubleFire(self):
        """增加火力值"""
        self.doubleFire += 100
    def clearDoubleFire(self):
        """清空火力值"""
        self.doubleFire=0


    def addLife(self):
        """增命"""
        self.life += 1
    
    def sublife(self):
        """减命"""
        self.life-=1
   
    def getLife(self):
        """获取生命值"""
        return self.life
    def reLife(self):
        self.life=3
        self.clearDoubleFire()




    def outOfBounds(self):
        return False


    def step(self):
        """动态显示飞机"""
        if(len(self.images) > 0):
            Hero.index += 1
            Hero.index %= len(self.images)
            self.image = pygame.image.load(self.images[int(Hero.index)])  # 切换图片


    def move(self, x, y):
        self.x = x - self.width / 2
        self.y = y - self.height / 2


    def shoot(self,image):
        """英雄机射击"""
        xStep=int(self.width/4-5)
        yStep=20
        if self.doubleFire>=100:
            heroBullet=[Bullet(self.screen,image,self.x+1*xStep,self.y-yStep),Bullet(self.screen,image,self.x+2*xStep,self.y-yStep),Bullet(self.screen,image,self.x+3*xStep,self.y-yStep)]
            self.doubleFire-=3
            return heroBullet
        elif self.doubleFire<100 and self.doubleFire > 0:
            heroBullet=[Bullet(self.screen,image,self.x+1*xStep,self.y-yStep),Bullet(self.screen,image,self.x+3*xStep,self.y-yStep)]
            self.doubleFire-=2
            return heroBullet
        else:
            heroBullet=[Bullet(self.screen,image,self.x+2*xStep,self.y-yStep)]
            return heroBullet


    def hit(self,other):
        """英雄机和其他飞机"""
        x1=other.x-self.width/2
        x2=other.x+self.width/2+other.width
        y1=other.y-self.height/2
        y2=other.y+self.height/2+other.height
        x=self.x+self.width/2
        y=self.y+self.height
        return x>x1 and x<x2 and y>y1 and y<y2
enemys
import abc


class Enemy(object):
    """敌人，敌人有分数"""
    @abc.abstractmethod
    def getScore(self):
        """获得分数"""
        pass
award
import abc




class Award(object):
    """奖励"""
    DOUBLE_FIRE = 0
    LIFE = 1


    @abc.abstractmethod
    def getType(self):
        """获得奖励类型"""
        pass




if __name__ == '__main__':


    print(Award.DOUBLE_FIRE)
airplane
import random
from flyingObject import FlyingObject
from enemy import Enemy




class Airplane(FlyingObject, Enemy):
    """普通敌机"""


    def __init__(self, screen, image):


        x = random.randint(0, screen.get_rect()[2] - 50)
        y = -40
        super(Airplane, self).__init__(screen, x, y, image)


    def getScore(self):
        """获得的分数"""
        return 5


    def outOfBounds(self):
        """是否越界"""


        return self.y < 715


    def step(self):
        """移动"""
        self.y += 3  # 移动步数
Bee
import random
from flyingObject import FlyingObject
from award import Award




class Bee(FlyingObject, Award):


    def __init__(self, screen, image):
        x = random.randint(0, screen.get_rect()[2] - 60)
        y = -50
        super(Bee, self).__init__(screen, x, y, image)
        self.awardType = random.randint(0, 1)
        self.index = True


    def outOfBounds(self):
        """是否越界"""
        return self.y < 715


    def step(self):
        """移动"""
        if self.x + self.width > 480:
            self.index = False
        if self.index == True:
            self.x += 3
        else:
            self.x -= 3
        self.y += 3  # 移动步数


    def getType(self):
        return self.awardType
#主类
#```python
import pygame
import sys
import random
from setting import Settings
from hero import Hero
from airplane import Airplane
from bee import Bee
from enemy import Enemy
from award import Award


START=0
RUNNING=1
PAUSE=2
GAMEOVER=3
state=START
sets = Settings()
screen = pygame.display.set_mode(
(sets.bgImageWidth, sets.bgImageHeight), 0, 32) #创建窗口
hero=Hero(screen,sets.heroImages)
flyings=[]
bullets=[]
score=0
def hero_blitme():
"""画英雄机"""
global hero
hero.blitme()


def bullets_blitme():
"""画子弹"""
for b in bullets:
b.blitme()


def flyings_blitme():
"""画飞行物"""
global sets
for fly in flyings:
fly.blitme()


def score_blitme():
"""画分数和生命值"""
pygame.font.init()
fontObj=pygame.font.Font("SIMYOU.TTF", 20) #创建font对象
textSurfaceObj=fontObj.render(u'生命值：%d\n分数：%d\n火力值：%d'%(hero.getLife(),score,hero.isDoubleFire()),False,(135,100,184))
textRectObj=textSurfaceObj.get_rect()
textRectObj.center=(300,40)
screen.blit(textSurfaceObj,textRectObj)


def state_blitme():
"""画状态"""
global sets
global state
if state==START:
screen.blit(sets.start, (0,0))
elif state==PAUSE:
screen.blit(sets.pause,(0,0))
elif state== GAMEOVER:
screen.blit(sets.gameover,(0,0))


def blitmes():
"""画图"""
hero_blitme()
flyings_blitme()
bullets_blitme()
score_blitme()
state_blitme()


def nextOne():
"""生成敌人"""
type=random.randint(0,20)
if type<4:
return Bee(screen,sets.beeImage)
elif type==5:
return Bee(screen,sets.beeImage) #本来准备在写几个敌机的，后面没找到好看的图片就删了
else:
return Airplane(screen,sets.airImage)


flyEnteredIndex=0
def enterAction():
"""生成敌人"""
global flyEnteredIndex
flyEnteredIndex+=1
if flyEnteredIndex%40==0:
flyingobj=nextOne()
flyings.append(flyingobj)


shootIndex=0
def shootAction():
"""子弹入场，将子弹加到bullets"""
global shootIndex
shootIndex +=1
if shootIndex % 10 ==0:
heroBullet=hero.shoot(sets.heroBullet)
for bb in heroBullet:
bullets.append(bb)


def stepAction():
"""飞行物走一步"""


hero.step()
for flyobj in flyings:
    flyobj.step()
global bullets
for b in bullets:       
    b.step()
def outOfBoundAction():
"""删除越界的敌人和飞行物"""
global flyings
flyingLives=[]
index=0
for f in flyings:
if f.outOfBounds()==True:
flyingLives.insert(index,f)
index+=1
flyings=flyingLives
index=0
global bullets
bulletsLive=[]
for b in bullets:
if b.outOfBounds()==True:
bulletsLive.insert(index,b)
index+=1
bullets=bulletsLive


j=0
def bangAction():
"""子弹与敌人碰撞"""
for b in bullets:
bang(b)


def bang(b):
"""子弹与敌人碰撞检测"""
index=-1
for x in range(0,len(flyings)):
f=flyings[x]
if f.shootBy(b):
index=x
break
if index!=-1:
one=flyings[index]
if isinstance(one,Enemy):
global score
score+=one.getScore() # 获得分数
flyings.remove(one) # 删除


    if isinstance(one,Award):
        type=one.getType()
        if type==Award.DOUBLE_FIRE:
            hero.addDoubleFire()
        else:
            hero.addLife()
        flyings.remove(one)


    bullets.remove(b)
def checkGameOverAction():
if isGameOver():
global state
state=GAMEOVER
hero.reLife()


def isGameOver():
for f in flyings:
if hero.hit(f):
hero.sublife()
hero.clearDoubleFire()
flyings.remove(f)


return hero.getLife()<=0
def action():
x, y = pygame.mouse.get_pos()


blitmes()  #打印飞行物 
for event in pygame.event.get():
    if event.type == pygame.QUIT:
        sys.exit()
    if event.type == pygame.MOUSEBUTTONDOWN:
        flag=pygame.mouse.get_pressed()[0] #左键单击事件
        rflag=pygame.mouse.get_pressed()[2] #右键单击事件
        global state
        if flag==True and (state==START or state==PAUSE):
            state=RUNNING
        if flag==True and state==GAMEOVER:
            state=START
        if rflag==True:
            state=PAUSE


if state==RUNNING:
    hero.move(x,y)  
    enterAction()
    shootAction()
    stepAction()      
    outOfBoundAction()
    bangAction()
    checkGameOverAction()


     
def main():


pygame.display.set_caption("飞机大战")


while True:
    screen.blit(sets.bgImage, (0, 0))  # 加载屏幕


    action()
    pygame.display.update()  # 重新绘制屏幕
    # time.sleep(0.1)       # 过0.01秒执行，减轻对cpu的压力
if name == 'main':
main()
