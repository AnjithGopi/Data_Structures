

class Graph{

    constructor(){
        this.adjacencyList = {}
    }


    addVertex(vertex){

        if(!this.adjacencyList[vertex]){
            this.adjacencyList[vertex]=new Set()
        }
    }

    addEdge(vertex1,vertex2){

        if(!this.adjacencyList[vertex1]){
            this.addVertex(vertex1)
        }
        if(!this.adjacencyList[vertex2]){
            this.addVertex(vertex2)
        }

        

        this.adjacencyList[vertex1].add(vertex2)
        //this.adjacencyList[vertex2].add(vertex1)

    }


    display(){

        for(let vertex in this.adjacencyList){
            console.log(vertex + "->"+[...this.adjacencyList[vertex]])
        }
    }

    bfs(start){

        let queue=[start]

        let visited=new Set([start])

        while(queue.length>0){

            let vertex=queue.shift()
            console.log(vertex)

            for(let neighbor of this.adjacencyList[vertex]){

                if(!visited.has(neighbor)){

                    visited.add(neighbor)

                    queue.push(neighbor)
                }
            }
        }
    }


  



    
}





const graph= new Graph()
graph.addVertex('A')
graph.addVertex('B')
graph.addVertex('C')


graph.addEdge("A","C")
graph.addEdge("C","B")

graph.display()
graph.bfs("A")
//graph.dfs("A")