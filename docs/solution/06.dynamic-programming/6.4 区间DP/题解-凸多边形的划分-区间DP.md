# 凸多边形的划分

[LibreOJ-10149-凸多边形的划分](https://vjudge.net/problem/LibreOJ-10149)

## 实现

```cpp
#include <iostream>
#define inf 0x3f3f3f3f
using namespace std;

const int N = 52;
int n, w[N];
int f[N][N];

int main () {
    cin >> n;
    for (int i = 1; i <= n; ++ i) cin >> w[i];

    for (int len = 3; len <= n; ++ len) {
        for (int l = 1; l + len - 1 <= n; ++ l) {
            int r = l + len - 1;
            f[l][r] = inf;
            for (int k = l + 1; k <= r - 1; ++ k)
                f[l][r] = min(f[l][r], f[l][k] + f[k][r] + w[l] * w[k] * w[r]);
        }
    }
    cout << f[1][n] << endl;
    return 0;
}
```

