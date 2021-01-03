# 最短`Hamilton`路径

[AcWing-91-最短Hamilton路径](https://www.acwing.com/problem/content/93/)

## 分析

见《进阶指南》第`7`页。

![](/img/0044.bmp)

## 实现

```cpp
#include <iostream>
#include <cstring>
using namespace std;

const int N = 20;
int n, dis[N][N];
int f[N][1 << N];

int main () {
    cin >> n;
    for (int i = 0; i < n; ++ i)
        for (int j = 0; j < n; ++ j)
            cin >> dis[i][j];
    
    memset(f, 0x3f, sizeof(f));
    f[0][1] = 0;
    for (int k = 1; k <= (1 << n); ++ k)
        for (int i = 0; i < n; ++ i)
            if ((k >> i) & 1)
                for (int j = 0; j < n; ++ j)
                    if ((k >> j) & 1)
                        f[i][k] = min(f[i][k], f[j][k ^ (1 << i)] + dis[j][i]);
    cout << f[n - 1][(1 << n) - 1] << endl;
    return 0;
}
```

