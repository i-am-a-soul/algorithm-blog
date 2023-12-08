# 偏序

[COGS-2479-偏序](http://cogs.pro:8081/cogs/problem/problem.php?pid=vmXQmVqWP)

## 分析

四维偏序。

## 实现

```cpp
#include <iostream>
#include <vector>
#include <cstdio>
using namespace std;

const int N = 50010;
struct node {
    int a, b, c, d;
    int flag;
};
int n, res;
node a[N], b[N], temp[N];
int c[N];

int lowbit (int x) {
    return x & -x;
}
void add (int idx, int val) {
    while (idx <= 50000) {
        c[idx] += val;
        idx += lowbit(idx);
    }
}
int sum (int idx) {
    int res = 0;
    while (idx >= 1) {
        res += c[idx];
        idx -= lowbit(idx);
    }
    return res;
}
void cdq2 (int l, int r) {
    if (l >= r) return;

    int mid = l + r >> 1;
    cdq2(l, mid);
    cdq2(mid + 1, r);

    vector<int> rec;
    int i = l, j = mid + 1, k = l;
    while (i <= mid && j <= r) {
        if (b[i].c < b[j].c) {
            if (b[i].flag == 1) {
                add(b[i].d, 1);
                rec.push_back(b[i].d);
            }
            temp[k ++] = b[i ++];
        } else {
            if (b[j].flag == 0) res += sum(b[j].d);
            temp[k ++] = b[j ++];
        }
    }
    while (i <= mid)
        temp[k ++] = b[i ++];
    while (j <= r) {
        if (b[j].flag == 0) res += sum(b[j].d);
        temp[k ++] = b[j ++];
    }
    for (int i = 0; i < rec.size(); ++ i) add(rec[i], -1);
    for (int i = l; i <= r; ++ i) b[i] = temp[i];
}
void cdq1 (int l, int r) {
    if (l >= r) return;

    int mid = l + r >> 1;
    cdq1(l, mid);
    cdq1(mid + 1, r);

    int i = l, j = mid + 1, k = l;
    while (i <= mid && j <= r) {
        if (a[i].b < a[j].b) {
            b[k ++] = a[i ++];
            b[k - 1].flag = 1; // 左
        } else {
            b[k ++] = a[j ++];
            b[k - 1].flag = 0; // 右
        }
    }
    while (i <= mid) {
        b[k ++] = a[i ++];
        b[k - 1].flag = 1;
    }
    while (j <= r) {
        b[k ++] = a[j ++];
        b[k - 1].flag = 0;
    }
    for (int i = l; i <= r; ++ i) a[i] = b[i];
    cdq2(l, r);
}

int main () {
    freopen("partial_order.in", "r", stdin);
    freopen("partial_order.out", "w", stdout);
    
    cin >> n;
    for (int i = 1; i <= n; ++ i) a[i].a = i;
    for (int i = 1; i <= n; ++ i) cin >> a[i].b;
    for (int i = 1; i <= n; ++ i) cin >> a[i].c;
    for (int i = 1; i <= n; ++ i) cin >> a[i].d;

    cdq1(1, n);
    cout << res << endl;
    return 0;
}
```

