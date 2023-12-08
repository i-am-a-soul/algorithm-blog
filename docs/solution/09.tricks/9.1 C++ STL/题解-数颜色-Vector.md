# 数颜色

[洛谷-P3939-数颜色](https://www.luogu.com.cn/problem/P3939)

## 分析

区间颜色数。

## 实现

```cpp
#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;

const int N = 300010;
int n, m;
int color[N];
vector<int> a[N]; // a[i] 记录颜色为 i 的兔子在序列中的下标

int main () {
    scanf("%d%d", &n, &m);
    for (int i = 1; i <= n; ++ i) {
        scanf("%d", &color[i]);
        a[color[i]].push_back(i);
    }

    for (int i = 1, opt; i <= m; ++ i) {
        scanf("%d", &opt);
        if (opt == 2) {
            int x;
            scanf("%d", &x);
            if (color[x] != color[x + 1]) {
                auto p = lower_bound(a[color[x]].begin(), a[color[x]].end(), x),
                    q = lower_bound(a[color[x + 1]].begin(), a[color[x + 1]].end(), x + 1);
                ++ (*p), -- (*q);
                swap(color[x], color[x + 1]);
                // 下标仍然是单调的
            }
        } else {
            int l, r, c;
            scanf("%d%d%d", &l, &r, &c);
            int res = upper_bound(a[c].begin(), a[c].end(), r)
                - lower_bound(a[c].begin(), a[c].end(), l);
            printf("%d\n", res);
        }
    }
    return 0;
}
```

