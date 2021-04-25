# 反素数

[AcWing-198-反素数](https://www.acwing.com/problem/content/200/)

## 分析

见《进阶指南》第`140`页。

## 实现

```cpp
#include <iostream>
#define inf 0x7fffffff
using namespace std;

typedef long long LL;
const int N = 11;
const int p[N] = { 0, 2, 3, 5, 7, 11, 13, 17, 19, 23, 29 };
int n;
int e[N];
int res = inf, min_cnt = 1;

void dfs (int dep, LL cur_val, int cnt) {
    if (dep == 10 + 1) {
        if (cnt > min_cnt
            || (cnt == min_cnt && cur_val < res)
        ) {
            res = cur_val;
            min_cnt = cnt;
        }
        return;
    }

    LL next_val = cur_val;
    for (int i = 0; i <= e[dep - 1]; ++ i) {
        if (next_val > n) break;
        
        e[dep] = i;
        dfs(dep + 1, next_val, cnt * (i + 1));
        next_val *= p[dep];
    }
}

int main () {
    cin >> n;

    e[0] = inf;
    dfs(1, 1, 1);
    cout << res << endl;
    return 0;
}
```

