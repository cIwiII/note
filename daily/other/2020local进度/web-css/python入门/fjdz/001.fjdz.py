from time import sleep
import pygame
from pygame import *


def main():
    """完成整个程序的控制"""
    #1创建一个窗口
    screen=pygame.display.set_mode((487,682),0,32)
    #2创建一个图片，当作背景
    background=pygame.image.load("./feiji/background.png")
    #2创建一个图片，玩家飞机
    player=pygame.image.load("./feiji/herol.png")
    

    x=487/2-101/2
    y=550
    #飞机速度
    speed=10

    #设定需要的背景图
    while True:

        #3将背景图片添加到窗口
        screen.blit(background,(0,0))
        #3将背景图片添加到窗口
        screen.blit(player,(x,y))


        #遍历所有的事件
        for event in pygame.event.get():
            #判断事件类型
            if event.type==QUIT:
                #执行pygame退出
                pygame.quit()
                #python程序退出
                exit()
        #监听键盘事件
        key_pressed=pygame.key.get_pressed()


        if key_pressed[K_w] or key_pressed[K_UP]:
            print("上")
            y -=speed
        if key_pressed[K_s] or key_pressed[K_DOWN]:
            print("下")
            y +=speed
        if key_pressed[K_a] or key_pressed[K_LEFT]:
            print("左")
            x -=speed
        if key_pressed[K_d] or key_pressed[K_RIGHT]:
            print("右")
            x +=speed
        if key_pressed[K_SPACE]:
            print("空格")
        
##            elif event.type==pygame.KEYDOWN:
##                #检验按键是否是a或者left
##                if event.key==K_a or event.key==K_LEFT:
##                    print('左')
##                #检验按键是否是d或者right
##                elif event.key==K_d or event.key==K_RIGHT:
##                    print('右')
##                
##                #检验按键是否是空格
##                elif event.key==K_SPACE:
##                    print('空格')
        #4显示窗口的内容
        pygame.display.update()
        sleep(0.01)

if __name__=='__main__':
    main()
