

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
        if(!this.adjacencyList[vertex1]){
            this.addVertex(vertex2)
        }

        this.adjacencyList[vertex1].add(vertex2)
        this.adjacencyList[vertex2].add(vertex1)

    }


    display(){

        for(let vertex in this.adjacencyList){
            console.log(vertex + "->"+[...this.adjacencyList[vertex]])
        }
    }

    bfs(start){
        let queue=[start]
        let visited= new Set([start])

        while(queue.length){

            let vertex=queue.shift()
            console.log(vertex)

            for(let neighbour of this.adjacencyList[vertex]){

                if(!visited.has(neighbour)){
                    visited.add(neighbour)
                    queue.push(neighbour)
                }
            }
        }

        console.log(visited)
    }



    dfs(start) {
        const stack = [start]
        const visited = new Set()
    
        while (stack.length) {
            const vertex = stack.pop()
            if (!visited.has(vertex)) {
                console.log(vertex)
                visited.add(vertex)
    
                for (const neighbor of this.adjacencyList[vertex] || []) {
                    if (!visited.has(neighbor)) {
                        stack.push(neighbor);
                    }
                }
            }
        }
        console.log("visited in dfs:",visited)
    }

    
}





const graph= new Graph()
graph.addVertex('A')
graph.addVertex('B')
graph.addVertex('C')


graph.addEdge("A","B")
graph.addEdge("B","C")

graph.display()
graph.bfs("A")
graph.dfs("A")