let tag = document.querySelector('.tag');

tag.addEventListener('click', function (e) {
  if (e.target.className === 'tagging-title') {
    e.target.makeDraggable();
    if (e.target.nextElementSibling.className === 'delete hide') {
      e.target.nextElementSibling.className = 'delete';
      e.target.nextElementSibling.addEventListener('click', function () {
        e.target.parentNode.className = 'hide'
      })
    } else {
      e.target.nextElementSibling.className = 'delete hide'
    }
  }
});

Element.prototype.makeDraggable = function () {
  let o = this.parentNode;
  o.onmousedown = function (e) {
    let offsetX = e.pageX - parseInt(o.style.left);
    let offsetY = e.pageY - parseInt(o.style.top);
    document.onmousemove = function (e) {
      o.style.left = Math.max(Math.min(e.pageX - offsetX, o.parentNode.clientWidth - o.clientWidth), 0) + 'px';
      o.style.top = Math.max(Math.min(e.pageY - offsetY, o.parentNode.clientHeight - o.clientHeight), 0) + 'px'
    };
    document.onmouseup = function (e) {
      document.onmousemove = o.onmouseup = null
    }
  };
  o.ondragstart = function () {
    return 0
  }
};
