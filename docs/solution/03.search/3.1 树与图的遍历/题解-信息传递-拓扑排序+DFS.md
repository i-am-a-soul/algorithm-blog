# 信息传递

[洛谷-P2661-信息传递](https://www.luogu.com.cn/problem/P2661)

## 分析

有向图的最小环问题。

## 实现

```cpp
#include <iostream>
#include <cstring>
#include <queue>
#define inf 0x3f3f3f3f
using namespace std;

const int N = 200010;
struct edge {
    int to, next;
};
edge e[N];
int idx, head[N], in_deg[N];
int n;
bool mark[N];
int len;

void add_edge (int u, int v) {
    e[idx].to = v;
    e[idx].next = head[u];
    head[u] = idx ++;
}
void topo_sort () {
    queue<int> q;
    for (int i = 1; i <= n; ++ i)
        if (in_deg[i] == 0)
            q.push(i);
    while (!q.empty()) {
        int cur = q.front();
        q.pop();
        mark[cur] = true;
        for (int i = head[cur]; i != -1; i = e[i].next) {
            int to = e[i].to;
            if (-- in_deg[to] == 0)
                q.push(to);
        }
    }
}
void dfs (int cur) {
    mark[cur] = true;
    for (int i = head[cur]; i != -1; i = e[i].next) {
        int to = e[i].to;
        if (mark[to] == true) continue;
        ++ len;
        dfs(to);
    }
}

int main () {
    memset(head, -1, sizeof(head));
    scanf("%d", &n);
    for (int i = 1, to; i <= n; ++ i) {
        scanf("%d", &to);
        add_edge(i, to);
        ++ in_deg[to];
    }

    topo_sort();
    int res = inf;
    for (int i = 1; i <= n; ++ i) {
        if (mark[i] == false) {
            len = 0;
            dfs(i);
            res = min(res, len + 1);
        }
    }
    printf("%d", res);
    return 0;
}
```

