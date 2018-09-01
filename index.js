function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
  return document.getElementById('nested').querySelectorAll('.target')
}

function increaseRankBy (n) {
  const lis = document.getElementById('app').querySelectorAll('.ranked-list');
  for (let i = 0; o < lis.length; i++) {
    lis[i].innerHTML = (i + 1).toString();
  }
}
