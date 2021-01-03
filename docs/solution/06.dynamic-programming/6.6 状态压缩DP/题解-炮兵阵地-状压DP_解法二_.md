# 炮兵阵地（解法二）

[AcWing-292-炮兵阵地](https://www.acwing.com/problem/content/294/)

## 分析

见《进阶指南》第`303`页。

## 实现

```cpp
#include <iostream>
#include <cstring>
using namespace std;

const int N = 110, M = 12;
int n, m;
char g[N][M];
int f[N][60000];
int p[11] = { 1, 3, 9, 27, 81, 243, 729, 2187, 6561, 19683, 59049 };
int col[M];

void mark (int cur, int prev) {
    for (int i = 1; i <= m; ++ i, prev /= 3) {
        if (prev % 3 == 2) {
            col[i] = 1;
        } else if (prev % 3 == 1) {
            col[i] = 0;
        } else if (g[cur][i] == 'H') {
            col[i] = 0;
        } else {
            col[i] = 2;
        }
    }
}
void dfs (int r, int c, int prev, int cur, int cnt) {
    if (c > m) {
        f[r + 1][cur] = max(f[r + 1][cur], f[r][prev] + cnt);
        return;
    }

    if (col[c] == 2) { // 填 2
        int a = col[c + 1], b = col[c + 2];
        if (col[c + 1] == 2) col[c + 1] = 0;
        if (col[c + 2] == 2) col[c + 2] = 0;
        dfs(r, c + 1, prev, cur + 2 * p[c - 1], cnt + 1);
        // 还原
        col[c + 1] = a, col[c + 2] = b;
    }
    if (col[c] == 1) // 填 1
        dfs(r, c + 1, prev, cur + p[c - 1], cnt);
    if (col[c] == 2 || col[c] == 0) // 填 0
        dfs(r, c + 1, prev, cur, cnt);
}

int main () {
    cin >> n >> m;
    for (int i = 1; i <= n; ++ i) scanf("%s", g[i] + 1);

    memset(f, -1, sizeof(f));
    f[0][0] = 0;
    for (int i = 0; i < n; ++ i) {
        for (int j = 0; j < p[10]; ++ j) {
            if (f[i][j] == -1) continue;
            mark(i + 1, j);
            dfs(i, 1, j, 0, 0);
        }
    }
    int res = 0;
    for (int j = 0; j < p[10]; ++ j)
        res = max(res, f[n][j]);
    cout << res << endl;
    return 0;
}
```

