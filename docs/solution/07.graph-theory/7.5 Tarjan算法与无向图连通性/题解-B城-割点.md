# `B`城

[AcWing-363-B城](https://www.acwing.com/problem/content/description/365/)

## 分析

见《进阶指南》第`399`页。

## 实现

```cpp
#include <iostream>
#include <cstring>
#define size SiZe
using namespace std;

typedef long long LL;
const int N = 100010, M = 1000010;
struct edge {
    int to, next;
};
edge e[M];
int idx, head[N];
int n, m;
int cnt, dfn[N], low[N], size[N];
bool cut[N];
LL res[N];

void add_edge (int u, int v) {
    e[idx].to = v;
    e[idx].next = head[u];
    head[u] = idx ++;
}
void tarjan (int cur) {
    low[cur] = dfn[cur] = ++ cnt;
    size[cur] = 1;
    int tot = 0, sum = 0;
    for (int i = head[cur]; i != -1; i = e[i].next) {
        int to = e[i].to;
        if (dfn[to] == 0) {
            tarjan(to);
            low[cur] = min(low[cur], low[to]);
            size[cur] += size[to];

            if (low[to] >= dfn[cur]) {
                ++ tot;
                res[cur] += (LL)size[to] * (n - size[to]);
                sum += size[to];
                if (cur != 1 || tot >= 2)
                    cut[cur] = true;
            }
        } else {
            low[cur] = min(low[cur], dfn[to]);
        }
    }
    if (cut[cur] == true)
        res[cur] += 1 * (n - 1) + (LL)(sum + 1) * (n - (sum + 1));
    else
        res[cur] = 2 * (n - 1);
}

int main () {
    memset(head, -1, sizeof(head));
    scanf("%d%d", &n, &m);
    for (int i = 1, u, v; i <= m; ++ i) {
        scanf("%d%d", &u, &v);
        add_edge(u, v);
        add_edge(v, u);
    }

    tarjan(1);
    for (int i = 1; i <= n; ++ i)
        printf("%lld\n", res[i]);
    return 0;
}
```



