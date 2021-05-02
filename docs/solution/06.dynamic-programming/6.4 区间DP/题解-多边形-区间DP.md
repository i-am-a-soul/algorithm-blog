# 多边形

[AcWing-283-多边形](https://www.acwing.com/problem/content/285/)

## 分析

见《进阶指南》第`284`页。

## 实现

```cpp
#include <iostream>
#define inf 0x3f3f3f3f
using namespace std;

const int N = 2 * 52;
int n;
char a[N];
int b[N];
int f[N][N][2]; // 0：最小值，1：最大值

int main () {
    cin >> n;
    for (int i = 1; i <= n; ++ i) {
        cin >> a[i] >> b[i];
        a[n + i] = a[i];
        b[n + i] = b[i];
    }

    for (int i = 1; i <= 2 * n; ++ i) f[i][i][0] = f[i][i][1] = b[i];
    for (int len = 2; len <= n; ++ len) {
        for (int l = 1; l + len - 1 <= 2 * n; ++ l) {
            int r = l + len - 1;
            f[l][r][0] = inf, f[l][r][1] = -inf;
            for (int k = l; k <= r - 1; ++ k) {
                char opt = a[k + 1];
                int li = f[l][k][0], la = f[l][k][1],
                    ri = f[k + 1][r][0], ra = f[k + 1][r][1];
                if (opt == 't') {
                    f[l][r][0] = min(f[l][r][0], li + ri);
                    f[l][r][1] = max(f[l][r][1], la + ra);
                } else {
                    int x1 = li * ri, x2 = li * ra, x3 = la * ri, x4 = la * ra;
                    f[l][r][0] = min(f[l][r][0], min(min(x1, x2), min(x3, x4)));
                    f[l][r][1] = max(f[l][r][1], max(max(x1, x2), max(x3, x4)));
                }
            }
        }
    }
    int res = -inf;
    for (int i = 1; i <= n; ++ i)
        res = max(res, f[i][i + n - 1][1]);
    cout << res << endl;
    for (int i = 1; i <= n; ++ i)
        if (res == f[i][i + n - 1][1])
            cout << i << ' ';
    return 0;
}
```

