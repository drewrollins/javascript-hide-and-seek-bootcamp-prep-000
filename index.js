function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
  return document.querySelector("div#nested div div div div.target");
}

function increaseRankBy(n) {
  var change = document.querySelectorAll("ul.ranked-list");
  
  for(var i = 0; i < change.length; i++) {
    change[i].innerHTML = parseInt(change[i].innerHTML);
  }
}

function deepestChild() {
  var deeper = document.querySelectorAll("div#grand-node");
  for(var i = 0; i < deeper.length; i++) {
    return deeper[i];
  }
}