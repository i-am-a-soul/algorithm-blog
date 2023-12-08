# `Lomsat gelral`

[洛谷-CF600E-Lomsat gelral](https://www.luogu.com.cn/problem/CF600E)

## 分析

权值线段树合并。

## 实现

```cpp
#include <iostream>
#include <cstring>
#define null 0
using namespace std;

typedef long long LL;
const int N = 100010;
struct edge {
    int to, next;
};
edge e[2 * N];
int idx, head[N];
int n, c[N];
struct node {
    int ls, rs;
    int cnt; // 众数出现的次数
    LL sum;
    #define ls(x) t[x].ls
    #define rs(x) t[x].rs
    #define cnt(x) t[x].cnt
    #define sum(x) t[x].sum
};
int tot, root[N];
node t[N * 4 * 20];

void add_edge (int u, int v) {
    e[idx].to = v;
    e[idx].next = head[u];
    head[u] = idx ++;
}
void update (int rt) {
    if (cnt(ls(rt)) > cnt(rs(rt))) {
        cnt(rt) = cnt(ls(rt));
        sum(rt) = sum(ls(rt));
    } else if (cnt(rs(rt)) > cnt(ls(rt))) {
        cnt(rt) = cnt(rs(rt));
        sum(rt) = sum(rs(rt));
    } else {
        cnt(rt) = cnt(ls(rt));
        sum(rt) = sum(ls(rt)) + sum(rs(rt));
    }
}
int modify (int rt, int l, int r, int val, int delta) {
    if (rt == null) rt = ++ tot;
    if (l == r) {
        cnt(rt) += delta;
        sum(rt) = l;
        return rt;
    }
    int mid = l + r >> 1;
    if (val <= mid)
        ls(rt) = modify(ls(rt), l, mid, val, delta);
    else
        rs(rt) = modify(rs(rt), mid + 1, r, val, delta);
    update(rt);
    return rt;
}
int merge (int x, int y, int l, int r) {
    if (x == null || y == null) return x + y;
    if (l == r) {
        cnt(x) += cnt(y);
        sum(x) = l;
        return x;
    }
    int mid = l + r >> 1;
    ls(x) = merge(ls(x), ls(y), l, mid);
    rs(x) = merge(rs(x), rs(y), mid + 1, r);
    update(x);
    return x;
}
void dfs (int cur, int fa) {
    for (int i = head[cur]; i != -1; i = e[i].next) {
        int to = e[i].to;
        if (to == fa) continue;
        dfs(to, cur);
        root[cur] = merge(root[cur], root[to], 1, 100000);
    }
    modify(root[cur], 1, 100000, c[cur], 1);
}

int main () {
    memset(head, -1, sizeof(head));
    scanf("%d", &n);
    for (int i = 1; i <= n; ++ i) scanf("%d", &c[i]);
    for (int i = 1, u, v; i <= n - 1; ++ i) {
        scanf("%d%d", &u, &v);
        add_edge(u, v);
        add_edge(v, u);
    }

    for (int i = 1; i <= n; ++ i) root[i] = ++ tot;
    dfs(1, -1);
    for (int i = 1; i <= n; ++ i)
        printf("%lld ", sum(root[i]));
    return 0;
}
```

