# 传纸条

[AcWing-275-传纸条](https://www.acwing.com/problem/content/277/)

## 分析

见《进阶指南》第`270`页。

一去一回等价于去两次。

![](/algorithm-blog/img/0032.jpg)

## 实现

```cpp
#include <iostream>
using namespace std;

const int N = 52;
int n, m;
int g[N][N];
int f[2 * N][N][N];

int main () {
    scanf("%d%d", &n, &m);
    for (int i = 1; i <= n; ++ i)
        for (int j = 1; j <= m; ++ j)
            scanf("%d", &g[i][j]);
    
    for (int k = 2; k <= n + m; ++ k)
    for (int x1 = max(1, k - m); x1 <= min(n, k - 1); ++ x1)
    for (int x2 = max(1, k - m); x2 <= min(n, k - 1); ++ x2)
    for (int i = 0; i <= 1; ++ i)
    for (int j = 0; j <= 1; ++ j) {
        int val = g[x1][k - x1];
        if (x1 != x2 || k == 2 || k == n + m) {
            val += g[x2][k - x2];
            f[k][x1][x2] = max(f[k][x1][x2], f[k - 1][x1 - i][x2 - j] + val);
        }
    }
    printf("%d", f[n + m][n][n]);
    return 0;
}
```

