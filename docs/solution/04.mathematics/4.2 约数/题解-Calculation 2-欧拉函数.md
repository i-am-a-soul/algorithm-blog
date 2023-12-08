# `Calculation 2`

[HDOJ-3501-Calculation 2](https://vjudge.net/problem/HDU-3501)

## 分析

![](/img/0070.png)

若`gcd(n, i) = 1`，则根据更相减损术有`gcd(n, n - i) = gcd(n, i) = 1`。

也就是说与`n`互质的`i`和`n - i`成对出现，且和为`n`。

$=\displaystyle\sum_{i=1}^{n-1}i-n\times\frac{\phi(n)}{2}$。

## 实现

```cpp
#include <iostream>
using namespace std;

typedef long long LL;
const int M = 1000000007;

int phi (int x) {
    int res = x;
    for (int i = 2; i <= x / i; ++ i) {
        if (x % i == 0) {
            res = res / i * (i - 1);
            while (x % i == 0) x /= i;
        }
    }
    if (x > 1) res = res / x * (x - 1);
    return res;
}

int main () {
    LL n;
    while (cin >> n && n)
        cout << ((n - 1) * n / 2 - n * phi(n) / 2) % M << endl;
    return 0;
}
```

