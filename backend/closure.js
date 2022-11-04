function grandParent() {
  debugger;
  var a = 10;
  var b = 20;
  function Parent() {
    var c = 30;
    var d = 40;
    function Child() {
      var e = 50;
      var f = 70;
    }
    return Child();
  }
  return Parent();
}
return grandParent();
