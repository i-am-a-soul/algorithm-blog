# 杨老师的照相排列

[AcWing-271-杨老师的照相排列](https://www.acwing.com/problem/content/273/)

## 分析

见《进阶指南》第`265`页。

![](/algorithm-blog/img/0014.jpg)

## 实现

```cpp
#include <iostream>
#include <cstring>
using namespace std;

typedef long long LL;
const int N = 32;
int n;
int g[6];
LL f[N][N][N][N][N];

int main () {
    while (scanf("%d", &n) && n) {
        memset(g, 0, sizeof(g));
        memset(f, 0, sizeof(f));
        for (int i = 1; i <= n; ++ i) scanf("%d", &g[i]);

        f[0][0][0][0][0] = 1;
        for (int a = 0; a <= g[1]; ++ a)
        for (int b = 0; b <= min(a, g[2]); ++ b)
        for (int c = 0; c <= min(b, g[3]); ++ c)
        for (int d = 0; d <= min(c, g[4]); ++ d)
        for (int e = 0; e <= min(d, g[5]); ++ e) {
            LL &val = f[a][b][c][d][e];
            if (a - 1 >= b) val += f[a - 1][b][c][d][e];
            if (b - 1 >= c) val += f[a][b - 1][c][d][e];
            if (c - 1 >= d) val += f[a][b][c - 1][d][e];
            if (d - 1 >= e) val += f[a][b][c][d - 1][e];
            if (e >= 1) val += f[a][b][c][d][e - 1];
        }
        printf("%lld\n", f[g[1]][g[2]][g[3]][g[4]][g[5]]);
    }
    return 0;
}
```

