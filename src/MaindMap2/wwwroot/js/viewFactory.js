var SimpleStyle = (function () {
    var lineId = 1;
    var nodeId = 1;
return{
    SimpleNode: function (ContextMenu) {
        var id = lineId++;
        this.getNode = function (top, left) { return 'this is simple node with top: ' + top + 'px and left: ' + left + ContextMenu.getParams() }
        this.getClone = function () { var temp = new SimpleStyle(); return new temp.SimpleNode(ContextMenu) }
    },
    SimpleContextMenuNode: function() {
        var params = {
            color: {
                is: 'red',
                get: function () { return 'color is ' + this.is },
                set: function (color) { this.is = color },
            },
            thickness: {
                is: '5px',
                get: function () { return ' thickness is ' + this.is },
                set: function (thickness) { this.is = thickness + 'px' }
            }
        }        
        this.getParams = function () {
            var inString = "";
            for (var prop in params) {
                inString += params[prop].get();
            }
            return inString;
        }
    },
    SimpleLine: function (ContextMenu) {
        this.getNode = function (top, left) { return 'this is simple line with top: ' + top + 'px and left: ' + left + ContextMenu.getParams() }
        this.getClone = function () { return new SimpleNode(new ContextMenu) }
    },
    SimpleContextMenuLine: function () {
        var params = {
            color: {
                is: 'red',
                get: function () { return 'color is ' + this.is },
                set: function (color) { this.is = color },
            },
            thickness: {
                is: '5px',
                get: function () { return ' thickness is ' + this.is },
                set: function (thickness) { this.is = thickness + 'px' }
            }
        }
        this.getParams = function () {
            var inString = "";
            for (var prop in params) {
                inString += params[prop].get();
            }
            return inString;
        }
    },
    SimpleStyle: function (Line, Node) {
       
    }

}
});
var a = SimpleStyle();
var b = new a.SimpleNode(new a.SimpleContextMenuNode());
b.getNode(10, 10);