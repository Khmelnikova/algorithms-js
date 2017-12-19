var graph = [
    [1,2,3],
    [1,4,6],
    [1,6,3],
    [2,5,3],
    [2,4,2],
    [2,3,10],
    [3,4,3],
    [4,6,1],
    [4,5,5],
    [5,6,2],
    [1,7,2],
    [2,7,3]
];


function primsMst(g) {
  var x = {};
  x[g[0][0]] = true;

  var t = [];

  var nodes = calcVertices(g);

  while(Object.keys(x).length != nodes.length) {
      
    var minEdge = undefined;
    for(var ei in g) {
      var curEdge = g[ei];

      if( !x[curEdge[0]] != !x[curEdge[1]] ) {
        if(minEdge) {
          minEdge = (minEdge[2] > curEdge[2]) ? curEdge : minEdge;
        } else {
          minEdge = curEdge;
        }

      }

    }

    t.push(minEdge);

    x[minEdge[0]] = true;
    x[minEdge[1]] = true;
  }

  return t;
}

function calcVertices(g) {
  var acc = {};

  for(var ei in g) {
    var cur = g[ei];
    acc[cur[0]] = true;
    acc[cur[1]] = true;
  }

  return Object.keys(acc).map(
    function(e){ return parseInt(e); }
  )
}


console.log(primsMst(graph));