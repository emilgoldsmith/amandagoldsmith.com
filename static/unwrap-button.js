function delete_gift() {
  var bottom_left = document.getElementById("bottom-left");
  var bottom_right = document.getElementById("bottom-right");
  var top_left = document.getElementById("top-left");
  var top_right = document.getElementById("top-right");

  var body = document.getElementById("body");
  body.removeChild(bottom_left);
  body.removeChild(bottom_right);
  body.removeChild(top_left);
  body.removeChild(top_right);
}

function unwrap() {
  var bottom_left = document.getElementById("bottom-left");
  var bottom_right = document.getElementById("bottom-right");
  var top_left = document.getElementById("top-left");
  var top_right = document.getElementById("top-right");
  bottom_left.className += " unwrap unwrap-bottom-left";
  bottom_right.className += " unwrap unwrap-bottom-right";
  top_right.className += " unwrap unwrap-top-right";
  top_left.className += " unwrap unwrap-top-left";
  bottom_left.addEventListener('onanimationend', delete_gift);
  bottom_left.addEventListener('animationend', delete_gift);
  bottom_left.addEventListener('webkitAnimationEnd', delete_gift);

  var body = document.getElementById("body");
  body.removeChild(document.getElementById("unwrap-button"));
}
