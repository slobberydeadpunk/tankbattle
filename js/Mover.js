/**
 * Created by dev on 14-11-27.
 */
// 移动对象，继承自顶层对象
Mover = function () {
    this.Direction = EnumDirection.Up;
    this.Speed = 1;
}

Mover.prototype = new TankObject();
Mover.prototype.Move = function () {
    if (this.lock) {
        return;/* 停用或者尚在步进中,操作无效 */
    }
    // 根据方向设置坦克的背景图片
    this.UI.style.backgroundPosition = "0 -" + this.Direction * 40 + "px";
    // 如果方向是上和下，vp就是top；如果方向是上和左，val就是-1
    var vp = ["top", "left"][((this.Direction == EnumDirection.Up) || (this.Direction == EnumDirection.Down)) ? 0 : 1];
    var val = ((this.Direction == EnumDirection.Up) || (this.Direction == EnumDirection.Left)) ? -1 : 1;
    this.lock = true;/* 加锁 */
    // 把当前对象保存到This
    var This = this;
    // 记录对象移动起始位置
    var startmoveP = parseInt(This.UI.style[vp]);
    var xp = This.XPosition, yp = This.YPosition;
    var subMove = setInterval(function () {
        // 开始移动，每次移动5px
        This.UI.style[vp] = parseInt(This.UI.style[vp]) + 5 * val + "px";
        // 每次移动一个单元格 40px
        if (Math.abs((parseInt(This.UI.style[vp]) - startmoveP)) >= 40) {
            clearInterval(subMove);
            This.lock = false;/* 解锁,允许再次步进 */
            // 记录对象移动后在表格中的位置
            This.XPosition = Math.round(This.UI.offsetLeft / 40);
            This.YPosition = Math.round(This.UI.offsetTop / 40);
        }
    }, 80 - this.Speed * 10);

}