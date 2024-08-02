
// implementation and operations in Graph datastructure


class Graph{

    constructor(){
        this.adjacencyList={}
    }



    addVertex(vertex){

        if(!this.adjacencyList[vertex]){
            this.adjacencyList[vertex]= new Set()
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
    }

    display(){

        for(let vertex in this.adjacencyList){

            console.log(vertex+"-->"+[...this.adjacencyList[vertex]])

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


    dfs(start){


        let stack=[start]
        let visited= new Set([start])


        while(stack.length>0){

            let vertex=stack.pop()
            console.log(vertex)


            for(let neighbor of this.adjacencyList[vertex]){

                if(!visited.has(neighbor)){

                    visited.add(neighbor)
                    stack.push(neighbor)
                }
            }
        }
    }


    removeEdge(vertex1,vertex2){

        if(this.adjacencyList[vertex1]){

            this.adjacencyList[vertex1].delete(vertex2)
        }
    }


    deleteVertex(vertex){

        if(!this.adjacencyList[vertex]){
            return
        }

        for(let adjacentVertex of this.adjacencyList[vertex]){
            this.adjacencyList[adjacentVertex].delete(vertex)
        }

        delete this.adjacencyList[vertex]
    }
}




const graph= new Graph()


graph.addVertex("A")
graph.addVertex("B")
graph.addVertex("C")

graph.addEdge("A","B")
graph.addEdge("B","C")

graph.display()
graph.bfs("A")
graph.dfs("A")

graph.deleteVertex("B")
graph.display()