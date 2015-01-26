/**
 * Created by kenkozheng on 2014/8/20.
 */

var AboutScene = cc.Scene.extend({

    ctor:function () {
        this._super();
        var layer = new cc.Layer();
        this.addChild(layer);

        var winSize = cc.director.getWinSize();
        var bgWelcome = new cc.Sprite("res/graphics/bgWelcome.jpg");
        bgWelcome.x = winSize.width/2;
        bgWelcome.y = winSize.height/2;
        layer.addChild(bgWelcome);

        var aboutText = "This is a story about Princess PiPi.\r\n"+
        	"Princess PiPi, as we all know, is a very lovely and beautiful girl.\r\n"+
        	"She loves new clothes. And she just can't have enough clothes.\r\n"+
        	"On her birthday, an angel gives her a pair of wings,\r\n"+
        	"and put thousands of clothes in the sky.\r\n"+
        	"So now you need to control Princess PiPi to fly and\r\n"+
        	"collect as much clothes as possible.\r\n"+
        	"But be ware of the other things flying in the sky!\r\n"+
        	"Now let's start the journey!\r\n\r\n"+
        	"This is a game I made for my girlfriend DongLi as a birthday Gift.\r\n"+
        	"It's based on Hungry Hero, cocos2d-js version made by Kenko.\r\n\r\n"+
        	"                                                                        Anderson";

        var helloLabel = cc.LabelTTF.create(aboutText, "Arial", 24);
//        helloLabel.color = cc.color(0,0,0);
//        helloLabel._setStrokeStyle(cc.color(0,0,255));
        helloLabel.x = winSize.width/2;
        helloLabel.y = winSize.height/2 + 20;
//        helloLabel.textAlign = cc.TEXT_ALIGNMENT_CENTER;
        layer.addChild(helloLabel);

        var backButton = new cc.MenuItemImage("#about_backButton.png", "#about_backButton.png", this._back);
        backButton.x = - 200;
        backButton.y = - 200;
        var menu = new cc.Menu(backButton);
        layer.addChild(menu);

        cc.eventManager.addListener({event: cc.EventListener.KEYBOARD, onKeyReleased: this._back}, this);

        return true;
    },

    _back:function() {
        Sound.playCoffee();
        cc.director.runScene(new MenuScene());
    }

});
