

function getFirstSelector(selector) {
  return document.querySelector(selector)
}


//Define a function nestedTarget() that pulls a .target out of #nested
//(# is used for IDs in selectors — but you knew that because you read the docs, right? :) ).
//(Note that in index.html
  //#nested and .target just happen to be divs. This method should work with arbitrary elements.)


  function nestedTarget() {
  return document.querySelector('#nested .target')
}


//Define a function increaseRankBy(n) that increases the ranks in
//all of the .ranked-lists by n. (You might need to make use of parseInt()

function increaseRankBy(n) {
  const rankedLists = document.querySelectorAll('.ranked-list')

  for (let i = 0, l = rankedLists.length; i < l; i++) {
    let children = rankedLists[i].children

    for (let j = 0, k = children.length; j < k; j++) {
      children[j].innerHTML = parseInt(children[j].innerHTML) + n
    }
  }
}

function deepestChild() {
  let node = document.getElementById('grand-node')
  let nextNode = node.children[0]

  while (nextNode) {
    node = nextNode
    nextNode = node.children[0]
  }

  return node
}
