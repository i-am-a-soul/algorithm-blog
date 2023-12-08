# `manacher`

## 模板题

[洛谷-P3805-【模板】manacher算法](https://www.luogu.com.cn/problem/P3805)

```cpp
#include <iostream>
#include <cstring>
using namespace std;

const int N = 11000010;
int n;
char str[2 * N];
int p[2 * N]; // p[i] 记录以 str[i] 为回文中心的最长回文串的半径

int manacher () {
    for (int i = n; i >= 1; -- i) str[2 * i] = str[i];
    for (int i = 1; i <= n + 1; ++ i) str[2 * i - 1] = '#';
    n = 2 * n + 1;

    int mid = 1, r = 1, res = 0;
    for (int i = 1; i < n; ++ i) {
        p[i] = (i < r ? min(r - i, p[mid * 2 - i]) : 1);

        while (i - p[i] >= 1 && i + p[i] <= n && str[i - p[i]] == str[i + p[i]]) ++ p[i];

        if (r < i + p[i]) {
            r = i + p[i];
            mid = i;
        }
        res = max(res, p[i] - 1);
    }
    return res;
}

int main () {
    scanf("%s", str + 1);
    n = strlen(str + 1);
    printf("%d", manacher());
    return 0;
}
```



