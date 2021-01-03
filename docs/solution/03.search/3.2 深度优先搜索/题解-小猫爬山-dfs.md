# 小猫爬山

[AcWing-165-小猫爬山](https://www.acwing.com/problem/content/167/)

## 分析

见《进阶指南》第`100`页。

## 实现

```cpp
#include <iostream>
#include <algorithm>
using namespace std;

const int N = 20;
int n, w, weight[N], cab[N], res;

bool cmp (const int& a, const int& b) {
    return a > b;
}
void dfs (int cur, int tot) {
    if (tot > res) return; // 剪枝

    if (cur == n + 1) { // 递归边界
        res = min(res, tot);
        return;
    }

    for (int i = 1; i <= tot; ++ i) { // 上已租用的缆车
        if (cab[i] + weight[cur] <= w) {
            cab[i] += weight[cur];
            dfs(cur + 1, tot);
            cab[i] -= weight[cur];
        }
    }

    // 新租一辆缆车
    cab[tot + 1] = weight[cur];
    dfs(cur + 1, tot + 1);
    cab[tot + 1] = 0;
}

int main () {
    cin >> n >> w;
    for (int i = 1; i <= n; ++ i) cin >> weight[i];

    sort(weight + 1, weight + n + 1, cmp);
    res = n; // 最多租 n 辆缆车
    dfs(1, 0);
    cout << res << endl;
    return 0;
}
```