# 启示录

[AcWing-310-启示录](https://www.acwing.com/problem/content/description/312/)

## 分析

见《进阶指南》第`342`页。

## 实现

```cpp
#include <iostream>
using namespace std;

typedef long long LL;
const int N = 22;
LL f[N][4];

void initialize () {
    f[0][0] = 1;
    for (int i = 0; i < 20; ++ i) {
        for (int j = 0; j <= 2; ++ j) {
            f[i + 1][j + 1] += f[i][j];
            f[i + 1][0] += 9 * f[i][j];
        }
        f[i + 1][3] += 10 * f[i][3];
    }
}

int main () {
    initialize();
    int T;
    cin >> T;
    while (T --) {
        int n, m = 3;
        cin >> n;
        while (f[m][3] < n) ++ m;
        for (int i = m, k = 0; i >= 1; -- i) {
            for (int j = 0; j <= 9; ++ j) {
                LL cnt = f[i - 1][3];
                if (j == 6 || k == 3) {
                    for (int l = max(3 - k - (j == 6), 0); l <= 2; ++ l)
                        cnt += f[i - 1][l];
                }
                if (cnt < n) {
                    n -= cnt;
                } else {
                    if (k <= 2)
                        k = (j == 6 ? k + 1 : 0);
                    cout << j;
                    break;
                }
            }
        }
        cout << endl;
    }
    return 0;
}
```

