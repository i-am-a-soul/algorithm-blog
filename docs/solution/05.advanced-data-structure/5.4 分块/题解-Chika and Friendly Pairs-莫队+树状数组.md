# `Chika and Friendly Pairs`

[HDOJ-6534-Chika and Friendly Pairs](https://vjudge.net/problem/HDU-6534)

## 分析

去绝对值号：

$|a_i-a_j|\le K,i \lt j$。

$-K \le a_i - a_j \le K,i \lt j$。

$a_j - K \le a_i \le a_j + K,i \lt j$。

## 实现

```c++
#include <iostream>
#include <cmath>
#include <algorithm>
using namespace std;

const int N = 27010, M = 81010, T = 170;
struct node {
    int l, r;
    int idx, res;
};
int n, m, k;
int a[N], b[N], c[N];
int cnt, nums[M];
node q[N];
int L[T], R[T];
int tot, curL, curR;
int C[M]; // 权值树状数组

int query (int x) {
    return lower_bound(nums + 1, nums + cnt + 1, x) - nums;
}
void discrete () {
    for (int i = 1; i <= n; ++ i) {
        nums[++ cnt] = a[i];
        nums[++ cnt] = b[i];
        nums[++ cnt] = c[i];
    }
    sort(nums + 1, nums + cnt + 1);
    cnt = unique(nums + 1, nums + cnt + 1) - (nums + 1);
    for (int i = 1; i <= n; ++ i) {
        a[i] = query(a[i]);
        b[i] = query(b[i]);
        c[i] = query(c[i]);
    }
}
bool cmp1 (const node& a, const node& b) {
    return a.l < b.l;
}
bool cmp2 (const node& a, const node& b) {
    return a.r < b.r;
}
void initialize () {
    sort(q + 1, q + m + 1, cmp1);
    int t = sqrt(m);
    for (int i = 1; i <= t; ++ i) {
        L[i] = R[i - 1] + 1;
        R[i] = i * t;
    }
    if (R[t] < m) {
        ++ t;
        L[t] = R[t - 1] + 1;
        R[t] = m;
    }
    for (int i = 1; i <= t; ++ i)
        sort(q + L[i], q + R[i] + 1, cmp2);
}
int lowbit (int x) {
    return x & -x;
}
void add (int idx, int val) {
    while (idx <= 81000) {
        C[idx] += val;
        idx += lowbit(idx);
    }
}
int sum (int idx) {
    int res = 0;
    while (idx >= 1) {
        res += C[idx];
        idx -= lowbit(idx);
    }
    return res;
}
void add (int idx) {
    tot += sum(c[idx]) - sum(b[idx]);
    add(a[idx], 1);
}
void del (int idx) {
    add(a[idx], -1);
    tot -= sum(c[idx]) - sum(b[idx]);
}
int query (int l, int r) {
    while (curL < l) del(curL ++);
    while (curL > l) add(-- curL);
    while (curR > r) del(curR --);
    while (curR < r) add(++ curR);
    return tot;
}
bool cmp3 (const node& a, const node& b) {
    return a.idx < b.idx;
}

int main () {
    cin >> n >> m >> k;
    for (int i = 1; i <= n; ++ i) {
        cin >> a[i];
        b[i] = a[i] - k - 1;
        c[i] = a[i] + k;
    }
    for (int i = 1; i <= m; ++ i) {
        cin >> q[i].l >> q[i].r;
        q[i].idx = i;
    }

    discrete();
    initialize();

    for (int i = q[1].l; i <= q[1].r; ++ i) add(i);
    q[1].res = query(curL = q[1].l, curR = q[1].r);
    for (int i = 2; i <= m; ++ i)
        q[i].res = query(q[i].l, q[i].r);

    sort(q + 1, q + m + 1, cmp3);
    for (int i = 1; i <= m; ++ i)
        cout << q[i].res << endl;
    return 0;
}
```

