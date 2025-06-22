from fastapi import FastAPI, Request
from pydantic import BaseModel
from fastapi.middleware.cors import CORSMiddleware
from typing import List, Dict

app = FastAPI()


app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],  # 👈 specify frontend URL
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class Node(BaseModel):
    id: str

class Edge(BaseModel):
    source: str
    target: str

class Pipeline(BaseModel):
    nodes: List[Node]
    edges: List[Edge]

@app.post("/pipelines/parse")
async def parse_pipeline(pipeline: Pipeline):
    node_ids = {node.id for node in pipeline.nodes}
    adjacency_list = {node_id: [] for node_id in node_ids}
    in_degree = {node_id: 0 for node_id in node_ids}

    for edge in pipeline.edges:
        adjacency_list[edge.source].append(edge.target)
        in_degree[edge.target] += 1

    queue = [node_id for node_id in node_ids if in_degree[node_id] == 0]
    visited = 0

    while queue:
        node = queue.pop(0)
        visited += 1
        for neighbor in adjacency_list[node]:
            in_degree[neighbor] -= 1
            if in_degree[neighbor] == 0:
                queue.append(neighbor)

    is_dag = visited == len(node_ids)

    return {
        "num_nodes": len(pipeline.nodes),
        "num_edges": len(pipeline.edges),
        "is_dag": is_dag
    }
