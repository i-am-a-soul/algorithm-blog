# 区间`DP`

## 原理

见《进阶指南》第`283`页。

![](/algorithm-blog/img/0043.bmp)

## 模板题

[AcWing-282-石子合并](https://www.acwing.com/problem/content/284/)

```cpp
#include <iostream>
#include <cstring>
using namespace std;

const int N = 310;
int n, a[N], sum[N];
int f[N][N];

int main () {
    cin >> n;
    for (int i = 1; i <= n; ++ i) cin >> a[i];

    for (int i = 1; i <= n; ++ i) sum[i] = sum[i - 1] + a[i];
    memset(f, 0x3f, sizeof(f));
    for (int i = 1; i <= n; ++ i) f[i][i] = 0;
    for (int len = 2; len <= n; ++ len) { // 阶段
        for (int l = 1; l + len - 1 <= n; ++ l) { // 状态：左端点
            int r = l + len - 1; // 状态：右端点
            for (int k = l; k <= r - 1; ++ k)
                f[l][r] = min(f[l][r], f[l][k] + f[k + 1][r]);
            f[l][r] += sum[r] - sum[l - 1];
        }
    }
    cout << f[1][n] << endl;
    return 0;
}
```

