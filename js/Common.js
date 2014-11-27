/**
 * Created by dev on 14-11-27.
 */
// 坦克移动的四个方向
var EnumDirection = {
    Up: "0",
    Right: "1",
    Down: "2",
    Left: "3"
};


// 通用方法对象
var UtilityClass = {
    // 创建dom元素到parentNode中，可指定id，className
    CreateE: function (type, id, className, parentNode) {
        var J = document.createElement(type);
        if (id) { J.id = id };
        if (className) { J.className = className };
        return parentNode.appendChild(J);
    },  // 移除元素
    RemoveE: function (obj, parentNode) {
        parentNode.removeChild(obj);
    },
    GetFunctionName: function (context, argumentCallee) {
        for (var i in context) {
            if (context[i] == argumentCallee) { return i };
        }
        return "";
    },  // 绑定事件，返回func方法，this为传入的obj
    BindFunction: function (obj,func) {
        return function () {
            func.apply(obj, arguments);
        };
    }
};