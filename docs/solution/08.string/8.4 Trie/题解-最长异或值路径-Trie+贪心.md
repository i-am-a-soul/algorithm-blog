# 最长异或值路径

[AcWing-144-最长异或值路径](https://www.acwing.com/problem/content/146/)

## 分析

见《进阶指南》第`80`页。

## 实现

```cpp
#include <iostream>
#include <cstring>
#define null 0
using namespace std;

const int N = 100010;
struct edge {
    int to, next, w;
};
edge e[2 * N];
int idx, head[N];
int n, d[N];
int tot, trie[N * 32][2], root = 0;

void add_edge (int u, int v, int w) {
    e[idx].w = w;
    e[idx].to = v;
    e[idx].next = head[u];
    head[u] = idx ++;
}
void dfs (int cur, int fa) {
    for (int i = head[cur]; i != -1; i = e[i].next) {
        int to = e[i].to, w = e[i].w;
        if (to == fa) continue;
        d[to] = d[cur] ^ w;
        dfs(to, cur);
    }
}
void insert (int val) {
    int ptr = root;
    for (int i = 30; i >= 0; -- i) {
        int k = (val >> i) & 1;
        if (trie[ptr][k] == null) trie[ptr][k] = ++ tot;
        ptr = trie[ptr][k];
    }
}
int query (int val) {
    int ptr = root, res = 0;
    for (int i = 30; i >= 0; -- i) {
        int k = (val >> i) & 1;
        if (trie[ptr][k ^ 1] == null) {
            ptr = trie[ptr][k];
        } else {
            res = res | (1 << i);
            ptr = trie[ptr][k ^ 1];
        }
    }
    return res;
}

int main () {
    memset(head, -1, sizeof(head));
    scanf("%d", &n);
    for (int i = 1, u, v, w; i <= n - 1; ++ i) {
        scanf("%d%d%d", &u, &v, &w);
        add_edge(u, v, w);
        add_edge(v, u, w);
    }

    dfs(0, -1);
    int res = 0;
    for (int i = 0; i < n; ++ i) {
        insert(d[i]);
        res = max(res, query(d[i]));
    }
    printf("%d", res);
    return 0;
}
```

