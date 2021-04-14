# `Count on a tree`

[洛谷-P2633-Count on a tree](https://www.luogu.com.cn/problem/P2633)

## 实现

```cpp
#include <iostream>
#include <cstring>
#include <algorithm>
#define size SiZe
using namespace std;

const int N = 100010;
struct edge {
    int to, next;
};
edge e[2 * N];
int idx, head[N];
int n, m;
int w[N];
int cnt, nums[N];
int depth[N], fa[N], size[N];
int heavy_son[N], top[N];
struct node {
    int ls, rs;
    int cnt;
    #define ls(x) t[x].ls
    #define rs(x) t[x].rs
    #define cnt(x) t[x].cnt
};
int tot, root[N]; // root[i] 记录路径 1 ~ i 上的点权
node t[N * 4 * 20];

void add_edge (int u, int v) {
    e[idx].to = v;
    e[idx].next = head[u];
    head[u] = idx ++;
}
void discrete () {
    for (int i = 1; i <= n; ++ i) nums[i] = w[i];
    sort(nums + 1, nums + n + 1);
    cnt = unique(nums + 1, nums + n + 1) - (nums + 1);
}
int ask (int x) {
    return lower_bound(nums + 1, nums + cnt + 1, x) - nums;
}
void dfs1 (int cur, int father) {
    size[cur] = 1;
    for (int i = head[cur]; i != -1; i = e[i].next) {
        int to = e[i].to;
        if (to == father) continue;
        depth[to] = depth[cur] + 1;
        fa[to] = cur;
        dfs1(to, cur);
        size[cur] += size[to];
        if (size[to] > size[heavy_son[cur]])
            heavy_son[cur] = to;
    }
}
void dfs2 (int cur, int top_node) {
    top[cur] = top_node;
    if (heavy_son[cur]) dfs2(heavy_son[cur], top_node);
    for (int i = head[cur]; i != -1; i = e[i].next) {
        int to = e[i].to;
        if (to == fa[cur] || to == heavy_son[cur]) continue;
        dfs2(to, to);
    }
}
int lca (int x, int y) {
    while (top[x] != top[y]) {
        if (depth[top[x]] < depth[top[y]]) swap(x, y);
        x = fa[top[x]];
    }
    if (depth[x] > depth[y]) swap(x, y);
    return x;
}
void update (int rt) {
    cnt(rt) = cnt(ls(rt)) + cnt(rs(rt));
}
int modify (int prev, int l, int r, int val) {
    int cur = ++ tot;
    ls(cur) = ls(prev), rs(cur) = rs(prev);
    cnt(cur) = cnt(prev) + 1;
    if (l == r) return cur;
    int mid = l + r >> 1;
    if (val <= mid)
        ls(cur) = modify(ls(prev), l, mid, val);
    else
        rs(cur) = modify(rs(prev), mid + 1, r, val);
    return cur;
}
int query (int x, int y, int z, int fa_z, int l, int r, int k) {
    if (l == r) return l;
    int mid = l + r >> 1;
    int cnt = cnt(ls(x)) + cnt(ls(y)) - cnt(ls(z)) - cnt(ls(fa_z));
    if (cnt >= k)
        return query(ls(x), ls(y), ls(z), ls(fa_z), l, mid, k);
    else
        return query(rs(x), rs(y), rs(z), rs(fa_z), mid + 1, r, k - cnt);
}
void dfs3 (int cur, int father) {
    root[cur] = modify(root[fa[cur]], 1, n, w[cur]);
    for (int i = head[cur]; i != -1; i = e[i].next) {
        int to = e[i].to;
        if (to == father) continue;
        dfs3(to, cur);
    }
}

int main () {
    memset(head, -1, sizeof(head));
    scanf("%d%d", &n, &m);
    for (int i = 1; i <= n; ++ i) scanf("%d", &w[i]);
    for (int i = 1, u, v; i <= n - 1; ++ i) {
        scanf("%d%d", &u, &v);
        add_edge(u, v);
        add_edge(v, u);
    }

    discrete();
    for (int i = 1; i <= n; ++ i) w[i] = ask(w[i]);

    dfs1(1, -1);
    dfs2(1, 1);
    dfs3(1, -1);
    int res = 0;
    for (int i = 1, x, y, k; i <= m; ++ i) {
        scanf("%d%d%d", &x, &y, &k);
        x = x ^ res;
        int z = lca(x, y);
        res = nums[query(root[x], root[y], root[z], root[fa[z]], 1, n, k)];
        printf("%d\n", res);
    }
    return 0;
}
```

