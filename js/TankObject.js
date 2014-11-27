/**
 * Created by dev on 14-11-27.
 */
// 顶级对象
TankObject = function () {
    this.XPosition = 0; // 对象在地图（13*13）中的X的位置
    this.YPosition = 0;
    this.UI = null; // dom元素
}

// 更改UI静态方法
TankObject.prototype.UpdateUI = function (battlFiled) { }
// 设置位置，参数是这样：1*40,6*40
TankObject.prototype.SetPosition = function (leftPosition, topPosition) {
    // 在地图的位置 Math.round四舍五入
    this.XPosition = Math.round(leftPosition / 40);
    this.YPosition = Math.round(topPosition / 40);
    // 设置在窗体上的位置
    if (this.UI != null && this.UI.style != null) {
            this.UI.style.left = leftPosition + "px";
            this.UI.style.top = topPosition + "px";
    }
}