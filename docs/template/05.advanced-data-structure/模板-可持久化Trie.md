# 可持久化`Trie`

## 原理

见《进阶指南》第`252`页。

## 模板题

[AcWing-256-最大异或和](https://www.acwing.com/problem/content/description/258/)

```cpp
#include <iostream>
using namespace std;

const int N = 600010;
int a[N], sum[N];
int idx, trie[N << 5][2], cnt[N << 5];
int root[N];

void insert (int cur, int prev, int val) {
    for (int i = 28; i >= 0; -- i) {
        cnt[cur] = cnt[prev] + 1;
        if ((val >> i) & 1) {
            trie[cur][1] = ++ idx;
            trie[cur][0] = trie[prev][0];
            cur = trie[cur][1], prev = trie[prev][1];
        } else {
            trie[cur][0] = ++ idx;
            trie[cur][1] = trie[prev][1];
            cur = trie[cur][0], prev = trie[prev][0];
        }
    }
    cnt[cur] = cnt[prev] + 1;
}
int query (int x, int y, int val) {
    int res = 0;
    for (int i = 28; i >= 0; -- i) {
        int k = (val >> i) & 1;
        if (cnt[trie[x][!k]] - cnt[trie[y][!k]] >= 1) {
            res += (1 << i);
            x = trie[x][!k], y = trie[y][!k];
        } else {
            x = trie[x][k], y = trie[y][k];
        }
    }
    return res;
}

int main () {
    int n, m;
    scanf("%d%d", &n, &m);
    for (int i = 1; i <= n; ++ i) scanf("%d", &a[i]);

    for (int i = 1; i <= n; ++ i) sum[i] = sum[i - 1] ^ a[i];
    for (int i = 1; i <= n; ++ i) {
        root[i] = ++ idx;
        insert(root[i], root[i - 1], sum[i]);
    }
    while (m --) {
        char opt[5];
        scanf("%s", opt);
        if (opt[0] == 'A') {
            scanf("%d", &a[++ n]);
            sum[n] = sum[n - 1] ^ a[n];
            root[n] = ++ idx;
            insert(root[n], root[n - 1], sum[n]);
        } else {
            int l, r, x;
            scanf("%d%d%d", &l, &r, &x);
            -- l, -- r;
            if (l == 0 && r == 0)
                printf("%d\n", sum[n] ^ x);
            else
                printf("%d\n", query(root[r], root[max(l - 1, 0)], sum[n] ^ x));
        }
    }
    return 0;
}
```

