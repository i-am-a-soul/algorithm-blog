# `Brave Game`

[HDOJ-1846-Brave Game](https://vjudge.net/problem/HDU-1846)

## 分析

巴什博弈。

必胜策略：永远留给对手`m + 1`的整数倍个石子。

当`n = k * (m + 1) + r`时，我方（先手）取`r`个石子，如果对手取`a`个石子，那么我方取`(m + 1) - a`个石子，此时还有`(k - 1) * (m + 1)`个石子。当对手从`m + 1`个石子中取时，我方获胜。

## 实现

```cpp
#include <iostream>
using namespace std;

int main () {
    int T;
    cin >> T;
    while (T --) {
        int n, m;
        cin >> n >> m;
        cout << (n % (m + 1) >= 1 ? "first" : "second") << endl;
    }
    return 0;
}
```

