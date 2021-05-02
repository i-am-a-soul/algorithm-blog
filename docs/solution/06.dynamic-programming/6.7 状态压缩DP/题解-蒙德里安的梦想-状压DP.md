# 蒙德里安的梦想

[AcWing-291-蒙德里安的梦想](https://www.acwing.com/problem/content/description/293/)

## 分析

见《进阶指南》第`300`页。

## 实现

```cpp
#include <iostream>
#include <cstring>
using namespace std;

typedef long long LL;
const int N = 12;
int n, m;
LL f[N][1 << N];
bool mark[1 << N];

int main () {
    while (cin >> n >> m, n || m) {
        memset(mark, 0, sizeof(mark));
        for (int i = 0; i < (1 << m); ++ i) {
            int cnt = 0;
            bool flag = true;
            for (int j = 0; j < m; ++ j) {
                if ((i >> j) & 1) {
                    if (cnt & 1) {
                        flag = false;
                        break;
                    }
                    cnt = 0;
                } else {
                    ++ cnt;
                }
            }
            if (cnt & 1) flag = false;
            mark[i] = flag;
        }

        memset(f, 0, sizeof(f));
        f[0][0] = 1;
        for (int i = 1; i <= n; ++ i)
            for (int j = 0; j < (1 << m); ++ j)
                for (int k = 0; k < (1 << m); ++ k)
                    if ((j & k) == 0 && mark[j | k] == true)
                        f[i][j] += f[i - 1][k];
        cout << f[n][0] << endl;
    }
    return 0;
}
```

