# 砝码称重

[洛谷-P2347-砝码称重](https://www.luogu.com.cn/problem/P2347)

## 实现

```cpp
#include <iostream>
#include <bitset>
using namespace std;

const int N = 7, M = 1010;
int w[N] = { 0, 1, 2, 3, 5, 10, 20 };
int cnt[N];

int main () {
    int n = 6;
    for (int i = 1; i <= n; ++ i) cin >> cnt[i];

    bitset<M> b;
    b[0] = 1;
    for (int i = 1; i <= n; ++ i)
        for (int j = 1; j <= cnt[i]; ++ j)
            b |= b << w[i];
    cout << "Total=" << b.count() - 1 << endl;
    return 0;
}
```

