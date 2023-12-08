# `Always Cook Mushroom`

[HDOJ-5032-Always Cook Mushroom](https://vjudge.net/problem/HDU-5032)

## 分析

示意图：

![](/img/0049.png)

极角序统计答案。

## 实现

```cpp
#include <iostream>
#include <cstring>
#include <algorithm>
using namespace std;

typedef long long LL;
const int N = 1010, M = 100010;
struct node {
    int x, y;
    double k;
    LL res;
};
int A, B, m;
node a[N * N], rec[M];
LL c[N];

bool cmp1 (const node& a, const node& b) {
    return a.k < b.k;
}
bool cmp2 (const node& a, const node& b) {
    return a.y < b.y;
}
int lowbit (int x) {
    return x & -x;
}
void add (int idx, LL val) {
    while (idx <= 1000) {
        c[idx] += val;
        idx += lowbit(idx);
    }
}
LL sum (int idx) {
    LL res = 0;
    while (idx >= 1) {
        res += c[idx];
        idx -= lowbit(idx);
    }
    return res;
}

int main () {
    int idx = 0;
    for (int i = 1; i <= 1000; ++ i)
        for (int j = 1; j <= 1000; ++ j)
            a[++ idx] = { i, j, (double)j / i, 0 };
    sort(a + 1, a + idx + 1, cmp1); // 按斜率由小到大排序

    int _;
    scanf("%d", &_);
    for (int T = 1; T <= _; ++ T) {
        memset(c, 0, sizeof(c));

        scanf("%d%d%d", &A, &B, &m);
        for (int i = 1, a, b, x; i <= m; ++ i) {
            scanf("%d%d%d", &a, &b, &x);
            rec[i] = { x, i, (double)b / a, 0 }; // 离线
        }

        sort(rec + 1, rec + m + 1, cmp1); // 按斜率由小到大排序
        int ptr = 1;
        for (int i = 1; i <= m; ++ i) {
            while (a[ptr].k <= rec[i].k) {
                add(a[ptr].x, (LL)(a[ptr].x + A) * (a[ptr].y + B));
                ++ ptr;
            }
            rec[i].res = sum(rec[i].x);
        }

        sort(rec + 1, rec + m + 1, cmp2);
        printf("Case #%d:\n", T);
        for (int i = 1; i <= m; ++ i)
            printf("%lld\n", rec[i].res);
    }
    return 0;
}
```



