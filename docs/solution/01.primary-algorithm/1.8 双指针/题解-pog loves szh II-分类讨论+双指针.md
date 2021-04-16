# `pog loves szh II`

[HDOJ-5265-pog loves szh II](https://vjudge.net/problem/HDU-5265)

## 分析

$x' = x \% p \in [0,p-1]$。

$x'+y' \in [0, 2p-2]$。

当$x'+y' \in [0,p-1]$时，利用双指针扫描法求最大的$x'+y'$，记为$z_1'$。

当$x'+y' \in [p,2p-2]$，即$(x'+y')\%p \in [0,p-2]$时，取最大的$x'+y'$，记为$z_2'$。

答案为$max(z_1',z_2' \% p)$。

## 实现

```cpp
#include <iostream>
#include <algorithm>
using namespace std;

typedef long long LL;
const int N = 100010;
int n, p;
int a[N];

int main () {
    while (cin >> n >> p) {
        for (int i = 1; i <= n; ++ i) cin >> a[i];

        for (int i = 1; i <= n; ++ i) a[i] %= p;
        sort(a + 1, a + n + 1);
        LL res = ((LL)a[n - 1] + a[n]) % p; // 可能是第二种情况

        for (int i = 1, j = n; i <= n; ++ i) {
            while (j > i && (LL)a[i] + a[j] >= p) -- j;
            if (i != j) {
                res = max(res, (LL)a[i] + a[j]);
            } else {
                break;
            }
        }
        cout << res << endl;
    }
    return 0;
}
```

