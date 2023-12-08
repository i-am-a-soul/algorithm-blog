# 兔子与兔子

[AcWing-138-兔子与兔子](https://www.acwing.com/problem/content/description/140/)

## 分析

见《进阶指南》第`68`页。

## 实现

```cpp
#include <iostream>
#include <cstring>
using namespace std;

typedef unsigned long long ULL;
const int N = 1000010;
int n, m;
char str[N];
ULL p[N], h[N];

ULL get_substr_hash_value (int l, int r) {
    return h[r] - p[r - l + 1] * h[l - 1];
}

int main () {
    p[0] = 1;
    for (int i = 1; i <= 1000000; ++ i) p[i] = 131 * p[i - 1];
    scanf("%s%d", str + 1, &m);

    n = strlen(str + 1);
    for (int i = 1; i <= n; ++ i)
        h[i] = 131 * h[i - 1] + (str[i] - 'a' + 1);
    while (m --) {
        int l, r, x, y;
        scanf("%d%d%d%d", &l, &r, &x, &y);
        ULL a = get_substr_hash_value(l, r);
        ULL b = get_substr_hash_value(x, y);
        printf(a == b ? "Yes\n" : "No\n");
    }
    return 0;
}
```

