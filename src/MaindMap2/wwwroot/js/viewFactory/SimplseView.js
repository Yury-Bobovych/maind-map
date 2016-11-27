var getGuid = (function () {
    function S4() {
        return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
    }
    return (S4() + S4() + "-" + S4() + "-4" + S4().substr(0, 3) + "-" + S4() + "-" + S4() + S4() + S4()).toLowerCase();

});

var SimpleStyleView = (function () {    
    return {
        SimpleNode: function (ContextMenu) {
            if (ContextMenu === undefined)
            {
                ContextMenu = new SimpleStyleView.SimpleNodeContextMenu();
            }
            var name = (function () {
                for (var name in window) { if (window[name] === this) { return (name) } }
            })();
            var id = getGuid();
            var top = 0, left=0;
            var childrens = [];
            this.getNode = function (_top, _left,styleString,mainAttrString,subAttrString) {
                top = _top; left = _left;
                if (styleString === undefined) { styleString = " "; }
                if (mainAttrString === undefined) { mainAttrString = " "; }
                if (subAttrString === undefined) { subAttrString = " "; }
           
                return "<div></div>";
            }
            this.click = function () { }
            this.getClone = function () { return new  SimpleStyleView.SimpleNode() }
            this.addChildrens = function (_childrens) {
                if (Array.isArray(_childrens)) {
                    for (var param in _childrens)
                    { childrens.push(_childrens[param]) }
                } else { childrens.push(_childrens) }
            }
        },
        SimpleNodeContextMenu: function () {
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
            this.getStyle = function () { return " " }
            this.getParams = function () {
                var inString = " ";
                for (var prop in params) {
                    inString += params[prop].get();
                }
                return inString;
            }

        },
        SimpleLine: function (ContextMenu) {
            var id = getGuid();
            var top_begin=0, left_begin=0, top_end=0, left_end=0, begin_id, end_id
            this.getLine = function (_top_begin,_left_begin,_top_end,_left_end,_begin_id,_end_id) {
                top_begin = _top_begin; left_begin = _left_begin; top_end = _top_end; left_end = _left_end; begin_id = _left_begin; begin_id = _begin_id; end_id = _end_id;

                var min_top = Math.min(_top_begin, _top_end);
                _top_begin -= min_top; _top_end -= top_end;

                var min_left = Math.min(_left_begin, _left_end);
                _left_begin -= min_left; _left_end -= min_left;
                return "<svg style='position:absolute; '></svg>"
            }
        },
        SimpleLineContextMenu: function () { },
        SimpleStyleFactory: function () {
            this.getLineStyle = function () { return new SimpleStyleView.SimpleLine(new SimpleStyleView.SimpleLineContextMenu) };
            this.getNodeStyle = function () { return new SimpleStyleView.SimpleNode(new SimpleStyleView.SimpleLineContextMenu) };
        }
    }
})();


var Style = (function () {
    return function (Factory) {
        var Line = Factory.getLineStyle();
        var Node = Factory.getNodeStyle();
        function qwe() {
            for (var name in window) {
                if (window[name] === this) {
                    return(name);
                   
                }
            }
        }
        this.getLine = function (top,left) { };
        this.getNode = function (top, left) { return Node.getNode(top, left,'','','onclick="'+qwe.call(this)+'.getNode(50,50)"') };
        this.getname = function () { qwe() }
        this.getnameclall = function () {qwe.call(this) }
    }
    
})();

var qwe = (function () {
    for (var name in window) {
        if (window[name] === this) {
            return name;
            
        }
    }
})();
var myObject = {
    'myFunction': function () {
        for (var name in window) {
            if (window[name] === this) {
                alert(name);
                break;
            }
        }
    }
}
