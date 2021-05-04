# 拯救大兵瑞恩

[拯救大兵瑞恩](https://loj.ac/p/6121)

## 实现

```cpp
#include <iostream>
#include <cstring>
#include <queue>
#include <set>
using namespace std;

int dirx[4] = { -1, 1, 0, 0 };
int diry[4] = { 0, 0, -1, 1 };
typedef pair<int, int> PII;
const int N = 12, M = N * N;
struct edge {
    int to, next, w;
};
edge e[4 * M];
int idx, head[M];
struct node {
    int pos, keys;
};
int n, m, p, k, s;
int pos[N][N], keys[M];
int dis[M][1 << N];
bool mark[M][1 << N];
set<PII> edges;

void add_edge (int u, int v, int w) {
    e[idx].w = w;
    e[idx].to = v;
    e[idx].next = head[u];
    head[u] = idx ++;
}
int bfs_01 () {
    memset(dis, 0x3f, sizeof(dis));

    deque<node> dq;
    dis[1][0] = 0;
    dq.push_back({ 1, 0 });
    while (!dq.empty()) {
        node cur = dq.front();
        dq.pop_front();
        if (mark[cur.pos][cur.keys] == true) continue;
        mark[cur.pos][cur.keys] = true;
        if (cur.pos == n * m) return dis[cur.pos][cur.keys];

        if (keys[cur.pos]) {
            int s = cur.keys | keys[cur.pos];
            if (dis[cur.pos][cur.keys] < dis[cur.pos][s]) {
                dis[cur.pos][s] = dis[cur.pos][cur.keys];
                dq.push_front({ cur.pos, s });
            }
        }
        for (int i = head[cur.pos]; i != -1; i = e[i].next) {
            int to = e[i].to, w = e[i].w;
            if (w >= 1 && ((cur.keys >> (w - 1)) & 1) == 0) continue;
            if (dis[cur.pos][cur.keys] + 1 < dis[to][cur.keys]) {
                dis[to][cur.keys] = dis[cur.pos][cur.keys] + 1;
                dq.push_back({ to, cur.keys });
            }
        }
    }
    return -1;
}

int main () {
    memset(head, -1, sizeof(head));

    cin >> n >> m >> p >> k;

    for (int i = 1, idx = 0; i <= n; ++ i)
        for (int j = 1; j <= m; ++ j)
            pos[i][j] = ++ idx;

    while (k --) {
        int x1, y1, x2, y2, c;
        cin >> x1 >> y1 >> x2 >> y2 >> c;

        int a = pos[x1][y1], b = pos[x2][y2];
        edges.insert({ a, b });
        edges.insert({ b, a });
        if (c >= 1) {
            add_edge(a, b, c);
            add_edge(b, a, c);
        }
    }
    cin >> s;
    while (s --) {
        int x, y, idx;
        cin >> x >> y >> idx;
        keys[pos[x][y]] |= 1 << (idx - 1);
    }

    for (int i = 1; i <= n; ++ i) {
        for (int j = 1; j <= m; ++ j) {
            for (int k = 0; k < 4; ++ k) {
                int nx = i + dirx[k], ny = j + diry[k];
                if (nx < 1 || nx > n || ny < 1 || ny > m) continue;
                int a = pos[i][j], b = pos[nx][ny];
                if (edges.count({ a, b}) == 0) add_edge(a, b, 0);
            }
        }
    }

    cout << bfs_01() << endl;
    return 0;
}
```

