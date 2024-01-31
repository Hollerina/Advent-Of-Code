import networkx as nx

graph = nx.Graph()

for line in open("day25.txt"):
    left, right =  line.split(": ")
    for node in right.split():
        graph.add_edge(left, node)
        graph.add_edge(node, left)
    
graph.remove_edges_from(nx.minimum_edge_cut(graph))
a, b = nx.connected_components(graph)

print(len(a) * len(b))