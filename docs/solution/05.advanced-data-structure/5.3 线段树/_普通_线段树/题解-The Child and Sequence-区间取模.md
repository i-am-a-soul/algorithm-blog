# `The Child and Sequence`

[洛谷-CF438D-The Child and Sequence](https://www.luogu.com.cn/problem/CF438D)

## 分析

如果一个数在取模后其数值发生了变化，那么其数值必然减少了至少一半。

## 实现

```cpp
#include <iostream>
#define ls rt << 1
#define rs rt << 1 | 1
using namespace std;

typedef long long LL;
const int N = 100010;
struct node {
    int l, r;
    LL sum, max_val;
    #define l(x) t[x].l
    #define r(x) t[x].r
    #define sum(x) t[x].sum
    #define max_val(x) t[x].max_val
};
int n, m;
int a[N];
node t[N << 2];

void update (int rt) {
    sum(rt) = sum(ls) + sum(rs);
    max_val(rt) = max(max_val(ls), max_val(rs));
}
void build (int rt, int l, int r) {
    l(rt) = l, r(rt) = r;
    if (l == r) {
        sum(rt) = a[l];
        max_val(rt) = a[l];
        return;
    }
    int mid = l + r >> 1;
    build(ls, l, mid);
    build(rs, mid + 1, r);
    update(rt);
}
void modify (int rt, int idx, int val) {
    if (l(rt) == r(rt)) {
        sum(rt) = val;
        max_val(rt) = val;
        return;
    }
    int mid = l(rt) + r(rt) >> 1;
    modify(idx <= mid ? ls : rs, idx, val);
    update(rt);
}
void modulo (int rt, int l, int r, int p) {
    if (l(rt) == r(rt)) {
        sum(rt) %= p;
        max_val(rt) %= p;
        return;
    }
    int mid = l(rt) + r(rt) >> 1;
    if (l <= mid && max_val(ls) >= p) // 剪枝
        modulo(ls, l, r, p);
    if (r >= mid + 1 && max_val(rs) >= p)
        modulo(rs, l, r, p);
    update(rt);
}
LL query (int rt, int l, int r) {
    if (l <= l(rt) && r(rt) <= r) return sum(rt);
    int mid = l(rt) + r(rt) >> 1;
    LL res = 0;
    if (l <= mid) res += query(ls, l, r);
    if (r >= mid + 1) res += query(rs, l, r);
    return res;
}

int main () {
    scanf("%d%d", &n, &m);
    for (int i = 1; i <= n; ++ i) scanf("%d", &a[i]);

    build(1, 1, n);
    while (m --) {
        int opt;
        scanf("%d", &opt);
        if (opt == 1) { // 区间和查询
            int l, r;
            scanf("%d%d", &l, &r);
            printf("%lld\n", query(1, l, r));
        } else if (opt == 2) { // 区间取模
            int l, r, p;
            scanf("%d%d%d", &l, &r, &p);
            modulo(1, l, r, p);
        } else { // 单点修改
            int idx, val;
            scanf("%d%d", &idx, &val);
            modify(1, idx, val);
        }
    }
    return 0;
}
```

