# 最佳买卖股票时机含冷冻期

[Leetcode-309-最佳买卖股票时机含冷冻期](https://leetcode-cn.com/problems/best-time-to-buy-and-sell-stock-with-cooldown/)

## 分析

![](/img/0069.png)

## 实现

```cpp
#include <iostream>
#define inf 0x3f3f3f3f
using namespace std;

const int N = 100010;
int n, a[N];
int f[N][3];

int main () {
    scanf("%d", &n);
    for (int i = 1; i <= n; ++ i) scanf("%d", &a[i]);

    f[0][0] = f[0][1] = -inf;
    f[0][2] = 0;
    for (int i = 1; i <= n; ++ i) {
        f[i][0] = max(f[i - 1][0], f[i - 1][2] - a[i]);
        f[i][1] = f[i - 1][0] + a[i];
        f[i][2] = max(f[i - 1][1], f[i - 1][2]);
    }
    printf("%d", max(f[n][1], f[n][2]));
    return 0;
}
```

