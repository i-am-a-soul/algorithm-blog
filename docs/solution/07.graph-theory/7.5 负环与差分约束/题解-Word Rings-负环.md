# `Word Rings`

[LibreOJ-10082-Word Rings](https://vjudge.net/problem/LibreOJ-10082)

## 实现

```cpp
#include <iostream>
#include <cstring>
#include <queue>
#define inf 0x3f3f3f3f
using namespace std;

const int N = 700, M = 100010, L = 1010;
const double eps = 1e-4;
struct edge {
    int to, next, w;
};
edge e[M];
int idx, head[N];
int n;
char str[L];
double dis[N];
int cnt[N];
bool mark[N];

void add_edge (int u, int v, int w) {
    e[idx].w = w;
    e[idx].to = v;
    e[idx].next = head[u];
    head[u] = idx ++;
}
int ch2i (char ch) {
    return ch - 'a';
}
bool check (double x) { // spfa
    memset(mark, 0, sizeof(mark));
    memset(cnt, 0, sizeof(cnt));

    queue<int> q;
    for (int i = 0; i < 26 * 26; ++ i) {
        q.push(i);
        mark[i] = true;
    }
    int tot = 0;
    while (!q.empty()) {
        int cur = q.front();
        q.pop();
        mark[cur] = false;
        for (int i = head[cur]; i != -1; i = e[i].next) {
            int to = e[i].to, w = e[i].w;
            if (dis[cur] + w - x > dis[to]) {
                dis[to] = dis[cur] + w - x;
                cnt[to] = cnt[cur] + 1;
                if (++ tot > 10000) return true;
                if (cnt[to] >= N) return true; // 正环
                if (mark[to] == false) {
                    q.push(to);
                    mark[to] = true;
                }
            }
        }
    }
    return false;
}

int main () {
    while (cin >> n && n) {
        idx = 0;
        memset(head, -1, sizeof(head));

        for (int i = 1; i <= n; ++ i) {
            cin >> str + 1;
            int len = strlen(str + 1);
            if (len >= 2) {
                int u = ch2i(str[1]) * 26 + ch2i(str[2]),
                    v = ch2i(str[len - 1]) * 26 + ch2i(str[len]);
                add_edge(u, v, len);
            }
        }

        double l = 0, r = 1000;
        while (r - l > eps) {
            double mid = (l + r) / 2;
            if (check(mid) == true)
                l = mid;
            else
                r = mid;
        }
        if (l < eps) {
            cout << "No solution" << endl;
        } else {
            cout << l << endl;
        }
    }
    return 0;
}
```

