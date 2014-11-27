/**
 * Created by dev on 14-11-27.
 */

// 游戏载入对象 整个游戏的核心对象
GameLoader = function () {
    this.mapContainer = document.getElementById("divMap");  // 存放游戏地图的div
    this._selfTank = null;  // 玩家坦克
    this._gameListener = null; // 游戏主循环计时器id
}

GameLoader.prototype = {
    Begin: function () {
    // 初始化玩家坦克
    var selfT = new SelfTank();
    selfT.XPosition = 4;
    selfT.YPosition = 12;
    selfT.UpdateUI();
    this._selfTank = selfT;

    // 添加按键事件
    var warpper = UtilityClass.BindFunction(this, this.OnKeyDown);
    window.onkeydown = document.body.onkeydown = warpper;
    warpper = UtilityClass.BindFunction(this, this.OnKeyUp);
    window.onkeyup = document.body.onkeyup = warpper;
    // 游戏主循环
    warpper = UtilityClass.BindFunction(this, this.Run);
    /*长定时器监听控制键*/
    this._gameListener = setInterval(warpper, 20);

    }
// 键盘按下玩家坦克开始移动
, OnKeyDown: function (e) {
    switch ((window.event || e).keyCode) {
    case 37:
        this._selfTank.Direction = EnumDirection.Left;
        this._selfTank.MovingState = true;
        break;        //左
    case 38:
        this._selfTank.Direction = EnumDirection.Up;
        this._selfTank.MovingState = true;
        break;        //上
    case 39:
        this._selfTank.Direction = EnumDirection.Right;
        this._selfTank.MovingState = true;
        break;        //右
    case 40:
        this._selfTank.Direction = EnumDirection.Down;
        this._selfTank.MovingState = true;
        break;        //下
    }

}
// 按键弹起停止移动
, OnKeyUp: function (e) {
    switch ((window.event || e).keyCode) {
    case 37:
    case 38:
    case 39:
    case 40:
        this._selfTank.MovingState = false;
        break;
        }
    }
/*游戏主循环运行函数，游戏的心脏，枢纽*/
, Run: function () {
    if (this._selfTank.MovingState) {
        this._selfTank.Move();
    }
}
};