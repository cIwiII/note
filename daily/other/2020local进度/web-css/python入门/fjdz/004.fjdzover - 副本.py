from time import sleep
import random
import time
import pygame
from pygame.constants import *


#玩家飞机类      完成借鉴与抖音胖虎
class HeroPlane(pygame.sprite.Sprite):
    #存放所有飞机子弹的组
    bullets=pygame.sprite.Group()
    def __init__(self,screen):
        #这个精灵的初始化方法必须调用
        pygame.sprite.Sprite.__init__(self)


        
        #4创建一个图片，玩家飞机
        self.image=pygame.image.load("./feiji/hero.png")

        #根据图片image获取矩形对象
        self.rect=self.image.get_rect()#rect矩形
        self.rect.topleft=[Manager.bg_size[0]/2-100/2,550]

        #飞机速度
        self.speed=15

        #记录当前窗口对象
        self.screen=screen


        #装子弹的列表
        self.bullets=pygame.sprite.Group()#group()类似列表专门装精灵也就是子弹

    def key_control(self):
        #监听键盘事件
        key_pressed=pygame.key.get_pressed()


        if key_pressed[K_w] or key_pressed[K_UP]:
            self.rect.top -=self.speed
        if key_pressed[K_s] or key_pressed[K_DOWN]:
            self.rect.bottom +=self.speed
        if key_pressed[K_a] or key_pressed[K_LEFT]:
            self.rect.left -=self.speed
        if key_pressed[K_d] or key_pressed[K_RIGHT]:
            self.rect.right +=self.speed
        if key_pressed[K_SPACE]:
            #按下空格键发射子弹
            bullet=Bullet(self.screen,self.rect.left,self.rect.top)
            #把子弹放到列表里
            self.bullets.add(bullet)
            HeroPlane.bullets.add(bullet)

        
    def display(self):
##        #5将feiji图片添加到窗口
##        self.screen.blit(self.player,(self.x,self.y))
##        #遍历所有子弹
##        for bullet in self.bullets:
##            #让子弹飞 修改子弹y坐标
##            bullet.auto_move()
##            #子弹显示在窗口
##            bullet.display()
        #5将feiji图片添加到窗口
        self.screen.blit(self.image,self.rect)
        #更新子弹坐标
        self.bullets.update()

        #把所有子弹全部添加到屏幕
        self.bullets.draw(self.screen)
    def update(self):
        self.key_control()
        self.display()

    @classmethod
    def clear_bullets(cls):
        #清空子弹
        cls.bullets.empty()

#敌方飞机类
class EnemyPlane(pygame.sprite.Sprite):
    #存放所有敌机子弹的组
    enemy_bullets=pygame.sprite.Group()
    def __init__(self,screen):
        #这个精灵的初始化方法必须调用
        pygame.sprite.Sprite.__init__(self)
        
        #4创建一个图片，敌方飞机./feiji/enemy1.png
        self.image=pygame.image.load("./feiji/enemy.png")#56*38

        #根据图片image获取矩形对象
        self.rect=self.image.get_rect()#rect矩形

        x=random.randrange(1,Manager.bg_size[0],50)#50为步长
        self.rect.topleft=[x,0]


        #飞机速度
        self.speed=8
        #记录当前窗口位置
        self.screen=screen


        #装子弹的列表
        self.bullets=pygame.sprite.Group()

        #敌机移动方向
        self.direction='right'

            
    def display(self):
        #5将feiji图片添加到窗口
        self.screen.blit(self.image,self.rect)

        #更新子弹坐标
        self.bullets.update()

        #把所有子弹全部添加到屏幕
        self.bullets.draw(self.screen)#draw方法遍历显示出来
        #遍历所有子弹
##        for bullet in self.bullets:
##            #让子弹飞 修改子弹y坐标
##            bullet.auto_move()
##            #子弹显示在窗口
##            bullet.display()

    def auto_move(self):
        if self.direction=='right':
            self.rect.right +=self.speed
        elif self.direction=='left':
            self.rect.right -=self.speed

        if self.rect.right > Manager.bg_size[0]:
            self.direction='left'
        elif self.rect.right < 56:
            self.direction='right'

        self.rect.bottom+=self.speed#敌机子弹随地机位置改变
            
    def auto_fire(self):
        """敌机自动开火 创建子弹对象 添加进列表"""
        random_num=random.randint(1,2)
        if random_num==1:
            bullet=EnemyBullet(self.screen,self.rect.left,self.rect.top)
            self.bullets.add(bullet)
            #把子弹添加到类属性的子弹组里
            EnemyPlane.enemy_bullets.add(bullet)
            
    def update(self):
        self.auto_move()
        self.auto_fire()
        self.display()

    @classmethod
    def clear_bullets(cls):
        #清空子弹
        cls.enemy_bullets.empty()

#子弹类
#属性
class Bullet(pygame.sprite.Sprite):
    def __init__(self,screen,x,y):
        #初始化精灵类
        pygame.sprite.Sprite.__init__(self)

        #图片
        self.image=pygame.image.load("./feiji/bullet1.png")

        #获取矩形对象
        self.rect=self.image.get_rect()
        self.rect.topleft=[x+102/2-12/2,y-22]

        #窗口
        self.screen=screen
        #速度
        self.speed=20

##
##    def display(self):
##        """显示子弹到窗口"""
##        self.screen.blit(self.image,(self.x,self.y))
##
##    def auto_move(self):
##        """让子弹飞 修改子弹y坐标"""
##        self.y -=self.speed

    def update(self):
        #修该子弹坐标
        self.rect.top -=self.speed
        #如果子弹移出屏幕上方，则子弹对象销毁
        if self.rect.top<-22:
            self.kill()
            


#敌方子弹类
#属性
class EnemyBullet(pygame.sprite.Sprite):
    def __init__(self,screen,x,y):

        #初始化精灵类
        pygame.sprite.Sprite.__init__(self)

        #图片
        self.image=pygame.image.load("./feiji/bullet2.png")

        #获取矩形对象
        self.rect=self.image.get_rect()
        self.rect.topleft=[x+56/2-10/2,y+38]

        #窗口
        self.screen=screen
        #速度
        self.speed=20


##    def display(self):
##        """显示子弹到窗口"""
##        self.screen.blit(self.image,self.rect)
##
##    def auto_move(self):
##        """让子弹飞 修改子弹y坐标"""
##        self.rect.top +=self.speed
    def update(self):
        #修该子弹坐标
        self.rect.top +=self.speed
        #如果子弹移出屏幕xia方，则子弹对象销毁
        if self.rect.top> Manager.bg_size[1]:
            self.kill()

class GameSound(object):
    def __init__(self):
        pygame.mixer.init()#音乐模块初始化
        pygame.mixer.music.load("./feiji/bg2.mp3")
        pygame.mixer.music.set_volume(0.5)  #声音大小

        self.__bomb=pygame.mixer.Sound('./feiji/bomb.wav')#私有属性不能随便被调用

    def playBackgroundMusic(self):
        pygame.mixer.music.play(-1) #开始播放音乐

    def playBombSound(self):#使用特定方法调用音效
        pygame.mixer.Sound.play(self.__bomb)

class Bomb(object):
    #初始化碰撞
    def __init__(self,screen,type):
        self.screen=screen
        if type=="enemy":
            #加载爆炸资源
            self.mImage=[pygame.image.load
                         ("./feiji/enemy.down"+str(v)+".png")for v in range(1,3)]
        else:
            self.mImage=[pygame.image.load
                         ("./feiji/hero.down"+str(v)+".png")for v in range(1,3)]

        #设置当前爆炸播放索引
        self.mIndex=0
        #爆炸设置
        self.mPos=[0,0]
        #是否可见
        self.mVisible=False#两个目标没有撞到一起为false,默认为false
        
    def action(self,rect):
        #触发爆炸的方法draw
        #爆炸的坐标
        self.mPos[0]=rect.left
        self.mPos[1]=rect.top
        #打开爆炸的开关
        self.mVisible=True

    def draw(self):
        if not self.mVisible:
            return
        self.screen.blit(self.mImage[self.mIndex],(self.mPos[0],self.mPos[1]))
        self.mIndex +=1
        if self.mIndex >=len(self.mImage):
            #如果下标已经到了最后 代表爆炸结束
            #下标位置重值 mVisible重置
            self.mIndex=0
            self.mVisible=False


class GameBackground(object):
    #初始化地图
    def __init__(self,screen):
        self.mImage1=pygame.image.load("./feiji/img.jpg")
        self.mImage2=pygame.image.load("./feiji/img.jpg")
        #窗口
        self.screen=screen
        #辅助移动地图
        self.y1=0
        self.y2=-Manager.bg_size[1]#-768

    #移动地图
    def move(self):
        self.y1+=2
        self.y2+=2
        if self.y1>=Manager.bg_size[1]:
            self.y1=0
        if self.y2>=0:
            self.y2=-Manager.bg_size[1]

        
    #绘制地图
    def draw(self):
        self.screen.blit(self.mImage1,(0,self.y1))
        self.screen.blit(self.mImage2,(0,self.y2))
                                       

class Manager(object):
    
    bg_size=(512,768)
    #创建敌机定时器id
    create_enemy_id=10
    
    #游戏结束 倒计时的id
    game_over_id=11#(1-32中取)
    #游戏是否结束
    is_game_over=False  #false变为True时代表结束
    #倒计时时间
    over_time=3

    
    def __init__(self):
        pygame.init()
        #1创建一个窗口
        self.screen=pygame.display.set_mode(Manager.bg_size,0,32)
        #2创建一个图片，当作背景
        self.background=pygame.image.load("./feiji/background.png")
        self.map=GameBackground(self.screen)
        
        #初始化一个装玩家精灵的group()
        self.players=pygame.sprite.Group()
        #初始化一个装敌机精灵的group()
        self.enemys=pygame.sprite.Group()
        #初始化一个玩家爆炸的对象
        self.player_bomb=Bomb(self.screen,'player')
        #初始化一个敌机爆炸的对象
        self.enemy_bomb=Bomb(self.screen,'enemy')
        #初始化一个声音播放对象
        self.sound=GameSound()

    def exit(self):
        print("退出")
        pygame.quit()
        exit()

    def show_over_text(self):
        #游戏结束 倒计时后重新开始
        self.drawText('gameover %d'%Manager.over_time,100,Manager.bg_size[1]/2,
                      textHeight=50,fontColor=[255,0,0])

    def game_over_timer(self):
        self.show_over_text()
        #倒计时-1
        Manager.over_time -=1
        if Manager.over_time==0:
            #参数2改为0 定时器停止:
            pygame.time.set_timer(Manager.game_over_id,0)
            #倒计时后重新开始
            Manager.over_time=3
            Manager.is_game_over=False
            self.start_game()

    def start_game(self):
        #重新开始游戏 有些雷属性要清空
        EnemyPlane.clear_bullets()
        HeroPlane.clear_bullets()
        manager=Manager()
        manager.main()

    def new_player(self):
        #创建飞机对象 添加到玩家的组
        player=HeroPlane(self.screen)
        self.players.add(player)
    def new_enemy(self):
        #创建敌机对象 添加到敌机组
        enemy=EnemyPlane(self.screen)
        self.enemys.add(enemy)

    #绘制文字text是文字内容，xy是文字坐标,txetHeight文字大小
    def drawText(self,text,x,y,textHeight=30,fontColor=(255,0,0),backgroundColor=None):
        #通过字体文件获取字体对象
        font_obj=pygame.font.Font('./feiji/baddf.ttc',textHeight)
        #配置要显示的文字
        text_obj=font_obj.render(text,True,fontColor,backgroundColor)
        #获取要显示对象的rect
        text_rect=text_obj.get_rect()
        #设置对象的坐标
        text_rect.topleft=(x,y)
        #绘制字到指定区域
        self.screen.blit(text_obj,text_rect)

        
    def main(self):
        #播放背景音乐
        self.sound.playBackgroundMusic()
        #创建一个玩家
        self.new_player()
        #self.new_player()多行就创建多个飞机
        #开启创建敌机定时器
        pygame.time.set_timer(Manager.create_enemy_id,1000)  #1000毫秒创建一个
        
        while True:
            #创建一个图片，当作背景
            self.screen.blit(self.background,(0,0))

            #地图移动
            self.map.move()
            #把地图贴到窗口上
            self.map.draw()

            #绘制文字
            self.drawText('hp:10000',0,0)
            if Manager.is_game_over:
                #判断游戏结束才显示结束文字
                self.show_over_text()
            
            
            #遍历所有的事件
            for event in pygame.event.get():
                #判断事件类型 执行pygame退出
                if event.type==QUIT:
                    self.exit()
                elif event.type==Manager.create_enemy_id:
                    #创建一个敌机
                    self.new_enemy()
                elif event.type == Manager.game_over_id:
                    #定时器触发事件
                    self.game_over_timer()


            #调用爆炸的对象
            self.player_bomb.draw()
            self.enemy_bomb.draw()

            #玩家飞机和敌机子弹的碰撞判断
            if self.players.sprites():
                isover=pygame.sprite.spritecollide(self.players.sprites()[0],EnemyPlane.enemy_bullets,True)
                if isover:
                    Manager.is_game_over=True #表示结束
                    pygame.time.set_timer(Manager.game_over_id,1000)#ms毫秒开始倒计时
                    print("中弹")
                    self.player_bomb.action(self.players.sprites()[0].rect)
                    #把玩家飞机从精灵组中移除
                    self.players.remove(self.players.sprites()[0])
                    #爆炸的声音
                    self.sound.playBombSound()

                    
            #判断碰撞    两个Ture是发生碰撞两个移出，false是不移除
            iscollide=pygame.sprite.groupcollide(self.players,self.enemys,True,True)

            if iscollide:
                Manager.is_game_over=True#标志着游戏结束
                pygame.time.set_timerr(Manager.game_over_id,1000)#开启游戏倒计时
                #[(x,(y))]
                items=list(iscollide.items())[0]
                print(items)
                x=items[0]
                y=items[1][0]
                #玩家爆炸图片
                self.player_bomb.action(x.rect)
                #敌机爆炸图片
                self.enemy_bomb.action(y.rect)
                #爆炸的声音
                self.sound.playBombSound()

            #玩家子弹和所有敌机的碰撞判断
            is_enemy=pygame.sprite.groupcollide(HeroPlane.bullets,self.enemys,True,True)
            if is_enemy:
                items=list(is_enemy.items())[0]
                y=items[1][0]
                #敌机爆炸图片
                self.enemy_bomb.action(y.rect)
                #爆炸的声音
                self.sound.playBombSound()
                
            #玩家飞机和子弹的显示
            self.players.update()
            #敌机和子弹的显示
            self.enemys.update()

            #刷新窗口内容
            pygame.display.update()
            time.sleep(0.01)

if __name__=='__main__':
    manager=Manager()
    manager.main()

        

##def main():
##    """完成整个程序的控制"""
##    sound=GameSound()
##    sound.playBackgroundMusic()
##
##    
##    #1创建一个窗口
##    screen=pygame.display.set_mode((487,682),0,32)
##    #2创建一个图片，当作背景
##    background=pygame.image.load("./feiji/background.png")
##
##    #创建一个飞机的对象，注意不要忘记关闭窗口
##    player=HeroPlane(screen)
##    #创建一个敌方飞机的对象，注意不要忘记关闭窗口
##    enemyplane=EnemyPlane(screen)
##
##    #设定需要的背景图
##    while True:
##
##        #3将背景图片添加到窗口
##        screen.blit(background,(0,0))
##        
##
##
##        #遍历所有的事件
##        for event in pygame.event.get():
##            #判断事件类型
##            if event.type==QUIT:
##                #执行pygame退出
##                pygame.quit()
##                #python程序退出
##                exit()
##
##
##        #执行飞机的按键监听
##        player.key_control()
##        #飞机的显示
##        player.display()
##        #敌方飞机的显示
##        enemyplane.display()
##        #敌机自动移动
##        enemyplane.auto_move()
##        #敌机自动开火
##        enemyplane.auto_fire()
##
####            elif event.type==pygame.KEYDOWN:
####                #检验按键是否是a或者left
####                if event.key==K_a or event.key==K_LEFT:
####                    print('左')
####                #检验按键是否是d或者right
####                elif event.key==K_d or event.key==K_RIGHT:
####                    print('右')
####
####                #检验按键是否是空格
####                elif event.key==K_SPACE:
####                    print('空格')
##        #4显示窗口的内容
##        pygame.display.update()
##        sleep(0.01)
##
##if __name__=='__main__':
##    main()
