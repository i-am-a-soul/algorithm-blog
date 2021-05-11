# 分级

[AcWing-273-分级](https://www.acwing.com/problem/content/275/)

## 分析

见《进阶指南》第`267`页。

把数组`A`按升序排序，得到数组`C`。

![](/algorithm-blog/img/0021.jpg)

## 实现

```cpp
#include <iostream>
#include <algorithm>
#define inf 0x3f3f3f3f
using namespace std;

const int N = 2010;
int n, a[N], c[N], f[N][N];

int solve () {
    for (int i = 1; i <= n; ++ i) c[i] = a[i];
    sort(c + 1, c + n + 1);

    for (int i = 1; i <= n; ++ i) {
        int min_val = inf;
        for (int j = 1; j <= n; ++ j) {
            min_val = min(min_val, f[i - 1][j]);
            f[i][j] = min_val + abs(c[j] - a[i]);
        }
    }

    int res = inf;
    for (int i = 1; i <= n; ++ i)
        res = min(res, f[n][i]);
    return res;
}

int main () {
    scanf("%d", &n);
    for (int i = 1; i <= n; ++ i) scanf("%d", &a[i]);

    int res = solve();
    reverse(a + 1, a + n + 1);
    res = min(res, solve());
    printf("%d", res);
    return 0;
}
```

