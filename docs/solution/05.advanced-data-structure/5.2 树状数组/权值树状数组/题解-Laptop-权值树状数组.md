# `Laptop`

[Nowcoder-Laptop](https://ac.nowcoder.com/acm/contest/16/A)

## 分析

二维偏序。

## 实现

```cpp
#include <iostream>
#include <algorithm>
using namespace std;

const int N = 100010;
struct node {
    int m, s;
    bool operator < (const node& o) const {
        return m > o.m;
    }
};
int n;
node a[N];
int m, nums[N];
int c[N];

void discrete () {
    for (int i = 1; i <= n; ++ i) nums[i] = a[i].s;
    sort(nums + 1, nums + n + 1);
    m = unique(nums + 1, nums + n + 1) - (nums + 1);
}
int query (int x) {
    return lower_bound(nums + 1, nums + m + 1, x) - nums;
}
int lowbit (int x) {
    return x & -x;
}
void add (int idx, int val) {
    while (idx <= m) {
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

int main () {
    scanf("%d", &n);
    for (int i = 1; i <= n; ++ i)
        scanf("%d%d", &a[i].m, &a[i].s);
    
    discrete();
    sort(a + 1, a + n + 1);
    int res = 0;
    for (int i = 1; i <= n; ++ i) {
        int s = query(a[i].s); // 1 ~ m
        if ((i - 1) - sum(s) >= 1) ++ res;
        add(s, 1);
    }
    printf("%d", res);
    return 0;
}
```

