# 金字塔

[AcWing-284-金字塔](https://www.acwing.com/problem/content/286/)

## 分析

见《进阶指南》第`286`页。

## 实现

```cpp
#include <iostream>
using namespace std;

typedef long long LL;
const int N = 310, M = 1e9;
string str;
int f[N][N];

int main () {
    cin >> str;

    int n = str.size();
    if (n % 2 == 0) {
        cout << 0 << endl;
        return 0;
    }
    for (int i = 0; i < n; ++ i) f[i][i] = 1;
    for (int len = 2; len <= n; ++ len) {
        for (int l = 0; l + len - 1 < n; ++ l) {
            int r = l + len - 1;
            if (str[l] == str[r]) {
                for (int k = l; k <= r - 1; k += 2)
                    if (str[k] == str[r])
                        f[l][r] = (f[l][r] + (LL)f[l][k] * f[k + 1][r - 1]) % M;
            }
        }
    }
    cout << f[0][n - 1] << endl;
    return 0;
}
```

