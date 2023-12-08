# 双向`DFS`

## 原理

见《进阶指南》第`111`页。

## 模板题

[AcWing-171-送礼物](https://www.acwing.com/problem/content/description/173/)

```cpp
#include <iostream>
#include <algorithm>
#include <vector>
using namespace std;

typedef long long LL;
const int N = 50;
int n, mid;
LL a[N], w, res;
vector<LL> b;

bool cmp (const LL& a, const LL& b) {
    return a > b;
}
void dfs1 (int cur, LL sum) {
    if (cur == mid + 1) { // 递归边界
        b.push_back(sum);
        return;
    }

    dfs1(cur + 1, sum);

    if (sum + a[cur] <= w) dfs1(cur + 1, sum + a[cur]);
}
void dfs2 (int cur, LL sum) {
    if (cur == n + 1) {
        auto ptr = upper_bound(b.begin(), b.end(), w - sum);
        if (ptr != b.begin()) res = max(res, sum + *(-- ptr));
        return;
    }

    dfs2(cur + 1, sum);

    if (sum + a[cur] <= w) dfs2(cur + 1, sum + a[cur]);
}

int main () {
    cin >> w >> n;
    for (int i = 1; i <= n; ++ i) cin >> a[i];

    sort(a + 1, a + n + 1, cmp);
    mid = n / 2 + 2; // [1, mid], [mid + 1, n]
    dfs1(1, 0);
    sort(b.begin(), b.end());
    b.erase(unique(b.begin(), b.end()), b.end());
    dfs2(mid + 1, 0);
    cout << res << endl;
    return 0;
}
```

