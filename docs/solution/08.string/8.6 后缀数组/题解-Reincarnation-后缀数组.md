# `Reincarnation`

[HDOJ-4622-Reincarnation](https://vjudge.net/problem/HDU-4622)

## 分析

不同子串的数量。

## 实现

```cpp
#include <iostream>
#include <cstring>
#include <cmath>
#include <vector>
using namespace std;

const int N = 2010;
int n, m, q;
char str[N];
int x[N], y[N], c[N];
int sa[N], rk[N], height[N];
int f[N][12];

void get_suffix_array () {
    memset(c, 0, sizeof(c));
    for (int i = 1; i <= n; ++ i) ++ c[x[i] = str[i]];
    for (int i = 1; i <= m; ++ i) c[i] += c[i - 1];
    for (int i = n; i >= 1; -- i) sa[c[x[i]] --] = i;
    for (int k = 1; k <= n; k <<= 1) {
        int cnt = 0;
        for (int i = n - k + 1; i <= n; ++ i) y[++ cnt] = i;
        for (int i = 1; i <= n; ++ i)
            if (sa[i] > k)
                y[++ cnt] = sa[i] - k;
        memset(c, 0, sizeof(c));
        for (int i = 1; i <= n; ++ i) ++ c[x[i]];
        for (int i = 1; i <= m; ++ i) c[i] += c[i - 1];
        for (int i = n; i >= 1; -- i) sa[c[x[y[i]]] --] = y[i];
        for (int i = 1; i <= n; ++ i) y[i] = x[i];
        x[sa[1]] = 1;
        cnt = 1;
        for (int i = 2; i <= n; ++ i)
            x[sa[i]] = (y[sa[i]] == y[sa[i - 1]] && y[sa[i] + k] == y[sa[i - 1] + k] ? cnt : ++ cnt);
        if (cnt == n) break;
        m = cnt;
    }
}
void get_height () {
    for (int i = 1; i <= n; ++ i) rk[sa[i]] = i;
    int k = 0;
    for (int i = 1; i <= n; ++ i) {
        if (rk[i] == 1) continue;
        if (k > 0) -- k;
        int j = sa[rk[i] - 1];
        while (str[i + k] == str[j + k]) ++ k;
        height[rk[i]] = k;
    }
}
void ST_create () {
    for (int i = 1; i <= n; ++ i) f[i][0] = height[i];
    int k = log(n) / log(2);
    for (int j = 1; j <= k; ++ j)
        for (int i = 1; i <= n - (1 << j) + 1; ++ i)
            f[i][j] = max(f[i][j - 1], f[i + (1 << (j - 1))][j - 1]);
}
int ST_query (int l, int r) {
    int k = log(r - l + 1) / log(2);
    return max(f[l][k], f[r - (1 << k) + 1][k]);
}
int lcp (int l, int r) {
    if (l > r) swap(l, r);
    return ST_query(l + 1, r);
}
int query (int l, int r) {
    vector<int> pos;
    for (int i = 1; i <= n; ++ i)
        if (l <= sa[i] && sa[i] <= r)
            pos.push_back(sa[i]);
    int res = r - pos[0] + 1, prev = res;
    for (int i = 1; i < pos.size(); ++ i) {
        int k = lcp(rk[pos[i]], rk[pos[i - 1]]),
            len = r - pos[i] + 1;
        prev = min(prev, k);
        prev = max(prev, min(k, r - pos[i - 1] + 1));
        res += len - min(prev, len);
    }
    return res;
}

int main () {
    int T;
    scanf("%d", &T);
    while (T --) {
        scanf("%s", str + 1);
        scanf("%d", &q);

        n = strlen(str + 1);
        m = 122;
        get_suffix_array();
        get_height();
        ST_create();
        while (q --) {
            int l, r;
            scanf("%d%d", &l, &r);
            printf("%d\n", query(l, r));
        }
    }
    return 0;
}
```

