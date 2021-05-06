# `GT`考试

[计蒜客-T2313-GT考试](https://vjudge.net/problem/%E8%AE%A1%E8%92%9C%E5%AE%A2-T2313)

## 实现

```cpp
#include <iostream>
#include <cstring>
#define next NeXt
using namespace std;

typedef long long LL;
const int N = 22;
int n, m, M;
char str[N];
int next[N];
int a[N][N];

void get_next_array () {
    next[1] = 0;
    for (int i = 2, j = 0; i <= m; ++ i) {
        while (j > 0 && str[i] != str[j + 1]) j = next[j];
        if (str[i] == str[j + 1]) ++ j;
        next[i] = j;
    }
}
void mul (int f[N], int a[N][N]) {
    int res[N];
    memset(res, 0, sizeof(res));
    for (int j = 0; j < N; ++ j)
        for (int k = 0; k < N; ++ k)
            res[j] = (res[j] + (LL)f[k] * a[k][j]) % M;
    memcpy(f, res, sizeof(res));
}
void mul (int a[N][N]) {
    int res[N][N];
    memset(res, 0, sizeof(res));
    for (int i = 0; i < N; ++ i)
        for (int k = 0; k < N; ++ k)
            for (int j = 0; j < N; ++ j)
                res[i][j] = (res[i][j] + (LL)a[i][k] * a[k][j]) % M;
    memcpy(a, res, sizeof(res));
}

int main () {
    cin >> n >> m >> M;
    cin >> str + 1;

    get_next_array();
    for (int j = 0; j < m; ++ j) {
        for (int k = '0'; k <= '9'; ++ k) {
            int ptr = j;
            while (ptr > 0 && k != str[ptr + 1]) ptr = next[ptr];
            if (k == str[ptr + 1]) ++ ptr;
            if (ptr < m) ++ a[j][ptr];
        }
    }

    int f[N] = { 1 };
    while (n > 0) {
        if (n & 1) mul(f, a);
        mul(a);
        n /= 2;
    }
    
    int res = 0;
    for (int i = 0; i < m; ++ i)
        res = (res + f[i]) % M;
    cout << res << endl;
    return 0;
}
```

