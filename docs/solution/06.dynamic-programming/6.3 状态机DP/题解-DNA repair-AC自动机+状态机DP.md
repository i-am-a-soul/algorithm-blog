# `DNA repair`

[POJ-3691-DNA repair](https://vjudge.net/problem/POJ-3691)

## 实现

```cpp
#include <iostream>
#include <cstring>
#include <queue>
#define null 0
#define inf 0x3f3f3f3f
using namespace std;

const int N = 1010;
int n, m;
char str[N];
int idx, trie[N][4], mark[N], fail[N], root = 0;
int f[N][N];

void initialize () {
    idx = 0;
    memset(trie, 0, sizeof(trie));
    memset(mark, 0, sizeof(mark));
    memset(fail, 0, sizeof(fail));
}
int index_of (char ch) {
    if (ch == 'A') return 0;
    else if (ch == 'T') return 1;
    else if (ch == 'G') return 2;
    else return 3;
}
void insert () {
    int ptr = root;
    for (int i = 1; str[i]; ++ i) {
        int ch = index_of(str[i]);
        if (trie[ptr][ch] == null) trie[ptr][ch] = ++ idx;
        ptr = trie[ptr][ch];
    }
    mark[ptr] = 1;
}
void build () {
    queue<int> q;
    for (int i = 0; i < 4; ++ i)
        if (trie[root][i] != null)
            q.push(trie[root][i]);
    while (!q.empty()) {
        int cur = q.front();
        q.pop();
        for (int i = 0; i < 4; ++ i) {
            int ptr = trie[cur][i];
            if (ptr == null) {
                trie[cur][i] = trie[fail[cur]][i];
            } else {
                fail[ptr] = trie[fail[cur]][i];
                q.push(ptr);
                mark[ptr] |= mark[fail[ptr]];
            }
        }
    }
}

int main () {
    int T = 0;
    while (scanf("%d", &n) && n) {
        initialize();

        for (int i = 1; i <= n; ++ i) {
            scanf("%s", str + 1);
            insert();
        }
        scanf("%s", str + 1);

        m = strlen(str + 1);
        build();
        memset(f, 0x3f, sizeof(f));
        f[0][0] = 0;
        for (int i = 0; i < m; ++ i)
        for (int j = 0; j <= idx; ++ j)
        for (int k = 0; k < 4; ++ k) {
            int t = index_of(str[i + 1]) != k, ptr = trie[j][k];
            if (mark[ptr] == 0)
                f[i + 1][ptr] = min(f[i + 1][ptr], f[i][j] + t);
        }

        int res = inf;
        for (int i = 0; i <= idx; ++ i)
            res = min(res, f[m][i]);
        printf("Case %d: %d\n", ++ T, res == inf ? -1 : res);
    }
    return 0;
}
```

