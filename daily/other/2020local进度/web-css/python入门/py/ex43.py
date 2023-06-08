#基本的面向对象分析和设计
from sys import exit
from random import randint
from textwrap import dedent
class Scene(object):
    def enter(self):
        print("场景加载中This scene is not yet configured.")
        print("按enter ()继续，Subclass it and implement enter().")
        exit(1)
class Engine(object):
    def __init__(self,scene_map):  #scene_map是Map类的
        self.scene_map=scene_map
    def play(self):
        current_scene=self.scene_map.opening_scene()
        last_scene=self.scene_map.next_scene('finished')
        while current_scene !=last_scene:      #返回的都是场景的类
            next_scene_name = current_scene.enter()     #返回的都是场景的类对应的key
            current_scene=self.scene_map.next_scene(next_scene_name)
        current_scene.enter()
class Death(Scene):
    quips=[ "你死了.", "2", "真是个骗子.", "3","You're worse than your Dad's jokes."]
    def enter(self):
        print(Death.quips[randint(0,len(self.quips)-1)])
        exit(1)
class CentralCorridor(Scene):
    def enter(self):
        print("""
The Gothons of Planet Percal #25 have invaded your ship and
destroyed your entirre crew.You are the last surviving
member and your last mission is to get the neutron destruct
bomb from the Weapons Armory,put it in the bridge, and
blow the ship up sfter getting into an secape pod.
you're running down the centrak corridor to the Weapons
Armory when a Gothon jumps out,red skin, dark griimy
teeth,and evil clown costume flowing around his hate
filled body.He's blocking the door to the Armoty and
about to pull a weapon to blast you.
            """)
          
        action=input(">")

        if action=="shoot！":
            print(dedent("""
            快速拔出你的枪并朝哥顿人开火他灵活的移动让你失去了目标，你的激
            光枪击中了他的服装，这让他整个燃烧起来"这让他非常愤怒，不停的揍
            你的脸，直到你死了，然后他吃了你
            Quick
            eats you.
             """))
            return 'death'
        elif action =="dodge!":
            print(dedent("""
            像一个世界级拳击手，你躲闪哥顿人的枪射穿了你的头，然后把你吃了
            Like a world class boxer you dodge,weave,slip and
            slide right as the Gothon's blaster cranks a laser
            past your head.In the mimddle of your artful dodge
            your foot slips and you bang your head on the metal
            wall and pass out .You wake up shortly after only to
            die as the Gothon stomps on your head and eats you.
            """))
            return 'death'
        elif action =="tell a joke":
            print(dedent("""
            哥顿人喜欢听笑话你给他讲了个非常搞笑的笑话，趁他不注意，你爆了他
            的头穿过了武器库的门
            """))
            return 'laser_weapon_armory'
        else:
            print("别想了DOES NOT COMPUTE!")
            return 'central_corridor'
class LaserWeaponArmory(Scene):

    def enter(self):
        print(dedent("""
        你打了个洞进入武器库
        这里死静死静的，好像埋伏着好多哥顿人
        你发现了中子炸弹，但是它被密码锁锁着
        你需要代码才能打开
        如果输错10次，密码锁将永远锁着
        提示：代码是3个数字
        """))
        code=f"{randint(1,9)}{randint(1,9)}{randint(1,9)}"
        print(code)
        guess=input("[keypad]>")
        guesses=0
        
        while guess != code and guesses<10:
            print("BZZZZEDDD!")
            guesses += 1
            guess=input("[keypad]>")

        if guess==code:
            print(dedent("""
                   集装箱咔嗒一声打开，密封条破裂，气体泄漏，你抓住中子弹，
                   尽快跑到桥那里，把它放在正确的位置
                   The container clicks open and the seal breaks,letting
                   gas out.You grab the neutron bomb and run as fast as
                   you can to the bridge where you must place it iin the
                   right spot.
                   """))
            return 'the_bridge'
        else:
            print(dedent("""
                  锁最后一次嗡嗡作响，然后你听到一个令人作呕的融化的声音，
                  因为机制融合在一起。你决定坐在那里，最后 gothons 把飞船
                  从他们的飞船上炸了，你死了。
                  The lock buzzes one last time and then you hear a
                  sickening melting sound as the mechanism is fused
                  together. You decide to sit there, and finally the
                  Gothons blow up the ship from their ship and you die.
                  """))
            return 'death'
class TheBridge(Scene):
    def enter(self):
        print(dedent("""
              你带着中子炸弹冲上舰桥，让5个试图控制飞船的哥森人措手不及。他
              们每个人都有一个比上一个更丑的小丑。他们还没有拿出武器，因为
              他们看到你手臂下有个炸弹，不想引爆。
              You burst onto the Bridge with the neutron destruct bomb
              under your arm and surprise 5 Gothons who are trying to
              take control of the ship. Each of them has an even uglier
              clown coostume than the last. They haven't pulled their
              weapons out yet,as they see the active bomb under your
              arm and don't want to set it off.
              """))
        action=input(">")
        if action== "throw the bomb":
            print(dedent("""
            恐慌中，你把炸弹扔向了哥顿人,这时一个哥顿人从背后把你射杀，
            你倒地的时候看见一个哥顿人正在解除炸弹
            In a panic you throw the bomb at the group of Gothons
            and make a leap for the door. Right as you drop it a
            Gothon shoots you right in the back killing you. As
            you die you see another Gothon frantically try to
            disarm the bomb.You die knowing they will probaly
            blow up when it goes off.
            """))
            return 'death'

        elif action=="slowly place the bomb":
            print(dedent("""
            你指着手中的炸弹，哥顿人被吓到了，他们举起手开始惊慌，你慢慢地移
            动到门口，小心的把炸弹放到地上你把门锁住，哥顿人出不来。
            炸弹放置好了，你跑向逃生仓
            """))
            return 'escape_pod'
        else:
            print("无法计算DOES NOT COMPUTE!")
            return "the_bridge"


class EscapePod(Scene):
    def enter(Self):
        print(dedent("""
        你冲向逃生仓，争取整个船爆炸前，
        似乎船上没有其他哥顿人，你一路很顺利
        你来到逃生仓，这里有5个仓位，你要选择一个
        你选择哪一个？
              """))
        good_pod=randint(1,5)
        print(good_pod)
        guess=input("[pod #]>")


        if int(guess)!=good_pod:
            print(dedent(f"""
            你跳进 {guess} 号逃生仓，按下了弹出按钮
            逃生仓发生了爆炸,
            你挂了
             """))
            return 'death'
        
        else:
            print(dedent(f"""
            你跳进{guess}号逃生仓，按下了弹出按钮"
            你赢了"
            """))
            return 'finished'
class Finished(Scene):
    def enter(self):
        print("你赢了，干得好You won! Good job.")
        return 'finished'
class Map(object):
    scene={
       'central_corridor': CentralCorridor(),
       'laser_weapon_armory': LaserWeaponArmory(),
       'the_bridge': TheBridge(),
       'escape_pod': EscapePod(),
       'death': Death(),
       'finished': Finished()
    }
    def __init__(self,start_scene):
        self.start_scene=start_scene

    def next_scene(self,scene_name):
        val=Map.scene.get(scene_name)
        return val#返回对应场景类

    def opening_scene(self):
      return self.next_scene(self.start_scene)


a_map=Map('central_corridor')
#print(a_map)
a_game=Engine(a_map)
a_game.play()
