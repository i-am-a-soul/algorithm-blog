# 装饰围栏

[AcWing-309-装饰围栏](https://www.acwing.com/problem/content/311/)

## 分析

见《进阶指南》第`339`页。

## 实现

```cpp
#include <iostream>
#include <cstring>
using namespace std;

typedef long long LL;
const int N = 22;
int n;
LL m, f[N][N][2];
bool mark[N];

void initialize () {
    f[1][1][0] = f[1][1][1] = 1;
    for (int i = 2; i <= 20; ++ i) {
        for (int j = 1; j <= i; ++ j) {
            for (int p = j; p <= i - 1; ++ p)
                f[i][j][0] += f[i - 1][p][1];
            for (int p = 1; p <= j - 1; ++ p)
                f[i][j][1] += f[i - 1][p][0];
        }
    }
}

int main () {
    initialize();
    int T;
    cin >> T;
    while (T --) {
        memset(mark, 0, sizeof(mark));
        cin >> n >> m;
        int last, k;
        for (int j = 1; j <= n; ++ j) {
            if (f[n][j][1] >= m) {
                last = j, k = 1;
                break;
            } else {
                m -= f[n][j][1];
            }
            if (f[n][j][0] >= m) {
                last = j, k = 0;
                break;
            } else {
                m -= f[n][j][0];
            }
        }
        mark[last] = true;
        cout << last;
        for (int i = 2; i <= n; ++ i) {
            k = k ^ 1;
            int j = 0;
            for (int len = 1; len <= n; ++ len) {
                if (mark[len] == true) continue;
                ++ j;
                if (k == 0 && len < last || k == 1 && len > last) {
                    if (f[n - i + 1][j][k] >= m) {
                        last = len;
                        break;
                    } else {
                        m -= f[n - i + 1][j][k];
                    }
                }
            }
            mark[last] = 1;
            cout << ' ' << last;
        }
        cout << endl;
    }
    return 0;
}
```

