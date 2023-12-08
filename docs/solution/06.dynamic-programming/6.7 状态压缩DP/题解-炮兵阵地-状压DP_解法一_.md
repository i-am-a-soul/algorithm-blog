# 炮兵阵地（解法一）

[AcWing-292-炮兵阵地](https://www.acwing.com/problem/content/294/)

## 分析

见《进阶指南》第`302`页。

## 实现

```cpp
#include <iostream>
#include <vector>
using namespace std;

const int N = 110, M = 10;
int n, m;
int g[N];
int f[2][1 << M][1 << M];
vector<int> S;
int cnt[1 << M];

bool check (int x) {
    for (int i = 0; i < m; ++ i)
        if ((x >> i & 1) && ((x >> i + 1 & 1) || (x >> i + 2 & 1)))
            return false;
    return true;
}

int main () {
    cin >> n >> m;
    for (int i = 0; i < n; ++ i) {
        for (int j = 0; j < m; ++ j) {
            char ch;
            cin >> ch;
            if (ch == 'H') g[i] += 1 << j; // 山地
        }
    }

    for (int i = 0; i < (1 << m); ++ i) {
        if (check(i) == true) {
            S.push_back(i);
            cnt[i] = __builtin_popcount(i);
        }
    }
    for (int i = 0; i < n + 2; ++ i)
    for (int j = 0; j < S.size(); ++ j)
    for (int k = 0; k < S.size(); ++ k)
    for (int l = 0; l < S.size(); ++ l) {
        int a = S[l], b = S[j], c = S[k];
        if ((a & b) || (a & c) || (b & c)) continue;
        if (g[i] & c) continue;
        f[i & 1][j][k] = max(f[i & 1][j][k], f[(i - 1) & 1][l][j] + cnt[c]);
    }
    cout << f[(n + 1) & 1][0][0] << endl;
    return 0;
}
```

