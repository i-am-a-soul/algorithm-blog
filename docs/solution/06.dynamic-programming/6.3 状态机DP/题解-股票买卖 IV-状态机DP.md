# 股票买卖 `IV`

[AcWing-1057-股票买卖 IV](https://www.acwing.com/problem/content/description/1059/)

## 分析

![](/img/0068.png)

## 实现

```cpp
#include <iostream>
#include <cstring>
using namespace std;

const int N = 100010, K = 110;
int n, a[N], k;
int f[N][K][2];

int main () {
    scanf("%d%d", &n, &k);
    for (int i = 1; i <= n; ++ i) scanf("%d", &a[i]);

    memset(f, -0x3f, sizeof(f));
    for (int i = 0; i <= n; ++ i) f[i][0][0] = 0;
    for (int i = 1; i <= n; ++ i) {
        for (int j = 1; j <= k; ++ j) {
            f[i][j][0] = max(f[i - 1][j][0], f[i - 1][j][1] + a[i]);
            f[i][j][1] = max(f[i - 1][j][1], f[i - 1][j - 1][0] - a[i]);
        }
    }

    int res = 0;
    for (int i = 1; i <= k; ++ i)
        res = max(res, f[n][i][0]);
    printf("%d", res);
    return 0;
}
```

