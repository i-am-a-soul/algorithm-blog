# `Guardian of Decency`

[UVA-12083-Guardian of Decency](https://vjudge.net/problem/UVA-12083)

## 实现

```cpp
#include <iostream>
#include <cstring>
using namespace std;

const int N = 510;
struct edge {
    int to, next;
};
edge e[2 * N * N];
int idx, head[N];
struct node {
    int h; // 身高
    char g; // 性别
    string m, s; // 音乐、运动
};
int n;
node a[N];
int ln, rn;
bool mark[N];
int match[N];

void add_edge (int u, int v) {
    e[idx].to = v;
    e[idx].next = head[u];
    head[u] = idx ++;
}
bool dfs (int cur) {
    for (int i = head[cur]; i != -1; i = e[i].next) {
        int to = e[i].to;
        if (mark[to] == true) continue;
        mark[to] = true;
        if (match[to] == 0 || dfs(match[to]) == true) {
            match[to] = cur;
            return true;
        }
    }
    return false;
}
bool check (const node& a, const node& b) {
    if (abs(a.h - b.h) > 40 || a.g == b.g || a.m != b.m || a.s == b.s)
        return false;
    return true;
}

int main () {
    int T;
    cin >> T;
    while (T --) {
        idx = 0;
        memset(head, -1, sizeof(head));
        memset(match, 0, sizeof(match));

        cin >> n;
        for (int i = 1; i <= n; ++ i)
            cin >> a[i].h >> a[i].g >> a[i].m >> a[i].s;
        
        for (int i = 1; i <= n; ++ i) {
            for (int j = i + 1; j <= n; ++ j) {
                if (check(a[i], a[j]) == true) {
                    add_edge(i, j);
                    add_edge(j, i);
                }
            }
        }

        int cnt = 0;
        for (int i = 1; i <= n; ++ i) {
            if (a[i].g == 'F') continue;
            memset(mark, 0, sizeof(mark));
            if (dfs(i) == true) ++ cnt;
        }
        cout << n - cnt << endl;
    }
    return 0;
}
```