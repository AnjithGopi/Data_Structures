


class Graph{

    constructor(){

        this.adjacensyList={}
    }



    addVertices(vertex){

        if(!this.adjacensyList[vertex]){

            this.adjacensyList[vertex]=new Set()
        }
    }


    addEdge(vertex1,vertex2){

        if(!this.adjacensyList[vertex1]){
            this.addVertices(vertex1)
        }
        if(!this.adjacensyList[vertex2]){
            this.addVertices(vertex2)
        }


        this.adjacensyList[vertex1].add(vertex2)
    }



    bfs(start){

        let queue=[start]
        let visited = new Set([start])


        while(queue.length>0){

            let vertex= queue.shift()
            console.log(vertex)


            for(let neighbor of this.adjacensyList){
                if(!this.adjacensyList[vertex].has(neighbor)){

                    visited.add(neighbor)
                    queue.push(neighbor)
                }
            }
        }
    }
}






const graph= new Graph()
graph.addVertices('A')
graph.addVertices('B')
graph.addVertices('C')