# 设计密码

[AcWing-1052-设计密码](https://www.acwing.com/solution/content/46767/)

## 分析

你现在需要设计一个密码`S`，`S`需要满足：

- `S`的长度是`N`；
- `S`只包含小写英文字母；
- `S`不包含子串`T`；

例如：`ab`和`abcde`是`abcde`的子串，`abd`不是`abcde`的子串。

请问共有多少种不同的密码满足要求？

由于答案会非常大，请输出答案模$10^9+7$的余数。

## 实现

```cpp
#include <iostream>
#include <cstring>
#define next NeXt
using namespace std;

const int N = 52, M = 1e9 + 7;
int n, m;
char str[N];
int next[N];
int f[N][N];

void get_next_array () {
    next[1] = 0;
    for (int i = 2, j = 0; i <= m; ++ i) {
        while (j > 0 && str[i] != str[j + 1]) j = next[j];
        if (str[i] == str[j + 1]) ++ j;
        next[i] = j;
    }
}

int main () {
    cin >> n >> str + 1;

    m = strlen(str + 1);
    get_next_array();
    f[0][0] = 1;
    for (int i = 0; i < n; ++ i)
    for (int j = 0; j < m; ++ j)
    for (char k = 'a'; k <= 'z'; ++ k) {
        int ptr = j;
        while (ptr > 0 && k != str[ptr + 1]) ptr = next[ptr];
        if (k == str[ptr + 1]) ++ ptr;
        if (ptr < m) f[i + 1][ptr] = (f[i + 1][ptr] + f[i][j]) % M;
    }

    int res = 0;
    for (int i = 0; i < m; ++ i)
        res = (res + f[n][i]) % M;
    cout << res << endl;
    return 0;
}
```

