/**
 * Created by dev on 14-11-27.
 */
//tank对象 继承自Mover
Tank=function(){}

Tank.prototype = new Mover();


// 创建玩家坦克,继承自tank对象
SelfTank = function () {
    this.UI = UtilityClass.CreateE("div", "", "itank", document.getElementById("divMap"));
    this.MovingState = false;
    this.Speed = 4;
}
SelfTank.prototype = new Tank();
// 设置坦克的位置
SelfTank.prototype.UpdateUI = function () {
    this.UI.className = "itank";
    // 顶级对象方法，设置坦克的位置
    this.SetPosition(this.XPosition * 40, this.YPosition * 40);
}