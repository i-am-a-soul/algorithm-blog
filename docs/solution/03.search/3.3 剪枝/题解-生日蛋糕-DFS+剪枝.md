# 生日蛋糕

[AcWing-168-生日蛋糕](https://www.acwing.com/problem/content/description/170/)

## 分析

见《进阶指南》第`107`页。

## 实现

```cpp
#include <iostream>
#include <cmath>
#define inf 0x3f3f3f3f
using namespace std;

const int N = 22;
int n, m;
int s[N], v[N];
int res = inf;
int r[N], h[N];

void dfs (int dep, int cur_s, int cur_v) {
    if (cur_s + s[m] - s[dep - 1] > res) return;
    if (cur_v + v[m] - v[dep - 1] > n) return;
    
    if (dep == m + 1) {
        if (cur_v == n) res = min(res, cur_s + r[1] * r[1]);
        return;
    }

    int a = min(r[dep - 1] - 1, (int)sqrt(n - cur_v));
    for (int i = a; i >= m - dep + 1; -- i) {
        if (2 * (n - cur_v) / i + cur_s > res) break;

        int b = min(h[dep - 1] - 1, (n - cur_v) / (i * i));
        for (int j = b; j >= m - dep + 1; -- j) {
            r[dep] = i, h[dep] = j;
            dfs(dep + 1, cur_s + 2 * i * j, cur_v + i * i * j);
        }
    }
}

int main () {
    cin >> n >> m;
    
    r[0] = h[0] = inf;
    for (int i = m; i >= 1; -- i) {
        int r = (m - i + 1), h = (m - i + 1);
        s[i] = s[i + 1] + 2 * r * h;
        v[i] = v[i + 1] + r * r * h;
    }
    dfs(1, 0, 0);
    cout << (res == inf ? 0 : res) << endl;
    return 0;
}
```

