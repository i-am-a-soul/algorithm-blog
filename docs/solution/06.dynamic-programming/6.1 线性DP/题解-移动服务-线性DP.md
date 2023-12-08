# 移动服务

[AcWing-274-移动服务](https://www.acwing.com/problem/content/276/)

## 分析

见《进阶指南》第`269`页。

![](/img/0031.jpg)

## 实现

```cpp
#include <iostream>
#include <cstring>
#define inf 0x3f3f3f3f
using namespace std;

const int N = 210, M = 1010;
int n, m;
int c[N][N], p[M];
int f[M][N][N];

int main () {
    scanf("%d%d", &n, &m);
    for (int i = 1; i <= n; ++ i)
        for (int j = 1; j <= n; ++ j)
            scanf("%d", &c[i][j]);
    for (int i = 1; i <= m; ++ i) scanf("%d", &p[i]);

    p[0] = 3;
    memset(f, 0x3f, sizeof(f));
    f[0][1][2] = 0;
    for (int i = 0; i < m; ++ i) {
        for (int x = 1; x <= n; ++ x) {
            for (int y = 1; y <= n; ++ y) {
                int z = p[i];
                if (x == y || x == z || y == z) continue;
                f[i + 1][x][y] = min(f[i + 1][x][y], f[i][x][y] + c[z][p[i + 1]]);
                f[i + 1][z][y] = min(f[i + 1][z][y], f[i][x][y] + c[x][p[i + 1]]);
                f[i + 1][x][z] = min(f[i + 1][x][z], f[i][x][y] + c[y][p[i + 1]]);
            }
        }
    }

    int res = inf;
    for (int x = 1; x <= n; ++ x) {
        for (int y = 1; y <= n; ++ y) {
            int z = p[m];
            if (x == y || x == z || y == z) continue;
            res = min(res, f[m][x][y]);
        }
    }
    printf("%d", res);
    return 0;
}
```

