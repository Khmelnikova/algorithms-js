var graph = [ 
/*1*/ [0,1,0,1,0,0], 
/*2*/ [1,0,1,0,0,0], 
/*3*/ [0,1,0,1,0,0], 
/*4*/ [1,0,1,0,1,1], 
/*5*/ [0,0,0,1,0,1], 
/*6*/ [0,0,0,1,1,0]

];
function checkForEulerCycle(graph) {
    var count = 0;
    for(var i = 0; i < graph.length; i++) {
        var sum = 0;
        for (j = 0; j < graph[i].length; j++){
            if(graph[i][j]){
                sum++;
            }
        }
        if(sum%2) {
            return false;
        }
    }
    return true;
}

function searchForEulerCycle(graph) {
    var S = [];
    var Q = [];
    
    S.push(0);
    
    while(S.length) 
    {
        var current = S[S.length - 1];
        if(!nextVertex(graph, current)) {
            Q.push(S.pop());
        }
        else {
            for (var i = 0; i < graph.length; i++){
                if(graph[current][i]) {
                    S.push(i);
                    graph[current][i] = 0;
                    graph[i][current] = 0;
                    break;
                }
            }
        }
    }
    console.log(Q.toString())
}

function nextVertex(graph, vertex) {
    for( var i = 0; i < graph.length; i++){
        if(graph[vertex][i]) {
            return true;
        }
    }
    return false;
}

if(checkForEulerCycle(graph)) {
    searchForEulerCycle(graph);
}
else {
    alert("Этот граф не содержит Эйлеров цикл!");
}