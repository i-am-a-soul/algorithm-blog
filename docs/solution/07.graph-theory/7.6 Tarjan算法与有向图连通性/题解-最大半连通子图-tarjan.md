# 最大半连通子图

[LibreOJ-10092-最大半连通子图](https://vjudge.net/problem/LibreOJ-10092)

## 实现

```cpp
#include <iostream>
#include <cstring>
#include <stack>
#include <unordered_set>
#define size SiZe
using namespace std;

typedef long long LL;
const int N = 100010, M = 2000010;
struct edge {
    int to, next;
};
edge e[M];
int idx, head[N];
struct node {
    int u, v;
};
int n, m, x;
node rec[M];
int cnt, dfn[N], low[N];
stack<int> s;
bool in_stack[N];
int tot, scc[N], size[N];
int f[N], g[N];

void add_edge (int u, int v) {
    e[idx].to = v;
    e[idx].next = head[u];
    head[u] = idx ++;
}
void tarjan (int cur) {
    low[cur] = dfn[cur] = ++ cnt;
    s.push(cur);
    in_stack[cur] = true;
    for (int i = head[cur]; i != -1; i = e[i].next) {
        int to = e[i].to;
        if (dfn[to] == 0) {
            tarjan(to);
            low[cur] = min(low[cur], low[to]);
        } else if (in_stack[to] == true) {
            low[cur] = min(low[cur], dfn[to]);
        }
    }
    if (dfn[cur] == low[cur]) {
        ++ tot;
        int t;
        do {
            t = s.top();
            s.pop();
            in_stack[t] = false;
            scc[t] = tot;
            ++ size[tot];
        } while (t != cur);
    }
}

int main () {
    memset(head, -1, sizeof(head));
    scanf("%d%d%d", &n, &m, &x);
    for (int i = 1, u, v; i <= m; ++ i) {
        scanf("%d%d", &u, &v);
        rec[i] = { u, v };
        add_edge(u, v);
    }

    for (int i = 1; i <= n; ++ i)
        if (dfn[i] == 0)
            tarjan(i);
    
    idx = 0;
    memset(head, -1, sizeof(head));
    unordered_set<LL> us;
    for (int i = 1; i <= m; ++ i) {
        int u = rec[i].u, v = rec[i].v;
        LL val = (LL)scc[u] * 100000 + scc[v];
        if (scc[u] == scc[v]) continue;
        if (us.find(val) != us.end()) continue;
        add_edge(scc[u], scc[v]);
        us.insert(val);
    }

    for (int i = tot; i >= 1; -- i) {
        if (f[i] == 0) {
            f[i] = size[i];
            g[i] = 1;
        }
        for (int j = head[i]; j != -1; j = e[j].next) {
            int to = e[j].to;
            if (f[i] + size[to] > f[to]) {
                f[to] = f[i] + size[to];
                g[to] = g[i];
            } else if (f[i] + size[to] == f[to]) {
                g[to] = (g[to] + g[i]) % x;
            }
        }
    }

    int res = 0, cnt = 0;
    for (int i = 1; i <= tot; ++ i) {
        if (f[i] > res) {
            res = f[i];
            cnt = g[i];
        } else if (f[i] == res) {
            cnt = (cnt + g[i]) % x;
        }
    }
    cout << res << endl << cnt << endl;
    return 0;
}
```

