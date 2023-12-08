# 回文子串的最大长度

[AcWing-139-回文子串的最大长度](https://www.acwing.com/problem/content/141/)

## 分析

见《进阶指南》第`69`页。

## 实现

```cpp
#include <iostream>
#include <cstring>
using namespace std;

typedef unsigned long long ULL;
const int N = 1000010;
char str[N];
ULL p[N], ph[N], sh[N];

int ch2i(char ch) {
    return ch - 'a' + 1;
}
ULL get_substr_hash_value (int l, int r) {
    return ph[r] - p[r - l + 1] * ph[l - 1];
}
ULL get_rev_substr_hash_value (int l, int r) {
    return sh[l] - p[r - l + 1] * sh[r + 1];
}
bool check (int l, int r, int x, int y) {
    return get_substr_hash_value(l, r) == get_rev_substr_hash_value(x, y);
}

int main () {
    p[0] = 1;
    for (int i = 1; i <= 1000000; ++ i) p[i] = 131 * p[i - 1];
    int T = 0;
    while (scanf("%s", str + 1)) {
        if (strcmp(str + 1, "END") == 0) break;
        int n = strlen(str + 1);
        for (int i = 1; i <= n; ++ i)
            ph[i] = 131 * ph[i - 1] + ch2i(str[i]);
        for (int i = n; i >= 1; -- i)
            sh[i] = 131 * sh[i + 1] + ch2i(str[i]);
        
        int res = 1;
        for (int i = 1; i <= n; ++ i) {
            int l = 0, r = min(i - 1, n - i);
            while (l < r) {
                int mid = l + r + 1 >> 1;
                if (check(i - mid, i - 1, i + 1, i + mid) == true)
                    l = mid;
                else
                    r = mid - 1;
            }
            res = max(res, l * 2 + 1);

            l = 0, r = min(i - 1, n - i + 1);
            while (l < r) {
                int mid = l + r + 1 >> 1;
                if (check(i - mid, i - 1, i, i + mid - 1) == true)
                    l = mid;
                else
                    r = mid - 1;
            }
            res = max(res, l * 2);
        }
        printf("Case %d: %d\n", ++ T, res);
        memset(str, 0, sizeof(str));
    }
    return 0;
}
```

