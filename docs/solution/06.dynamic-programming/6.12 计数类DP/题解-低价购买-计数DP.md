# 低价购买

[洛谷-P1108-低价购买](https://www.luogu.com.cn/problem/P1108)

## 分析

最长下降子序列计数。

重复计算的情况：

![](/img/0052.bmp)

例子：序列`4 3 2 7 6 5 1 1`。

## 实现

```cpp
#include <iostream>
using namespace std;

const int N = 5010;
int n, a[N];
int f[N], cnt[N];

int main () {
    cin >> n;
    for (int i = 1; i <= n; ++ i) cin >> a[i];

    for (int i = 1; i <= n; ++ i) {
        f[i] = cnt[i] = 1;
        for (int j = 1; j < i; ++ j) {
            if (a[j] > a[i]) {
                if (f[j] + 1 > f[i]) {
                    cnt[i] = cnt[j];
                } else if (f[j] + 1 == f[i]) {
                    cnt[i] += cnt[j];
                }
                f[i] = max(f[i], f[j] + 1);
            } else if (a[j] == a[i] && f[j] == f[i]) {
                cnt[j] = 0;
            }
        }
    }

    int res = 0, tot = 0;
    for (int i = 1; i <= n; ++ i)
        res = max(res, f[i]);
    for (int i = 1; i <= n; ++ i)
        if (f[i] == res)
            tot += cnt[i];
    cout << res << ' ' << tot << endl;
    return 0;
}
```

