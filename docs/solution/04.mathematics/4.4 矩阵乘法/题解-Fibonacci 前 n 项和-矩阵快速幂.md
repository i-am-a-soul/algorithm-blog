# `Fibonacci` 前 `n` 项和

[Fibonacci 前 n 项和](http://ybt.ssoier.cn:8088/problem_show.php?pid=1643)

## 实现

```cpp
#include <iostream>
#include <cstring>
using namespace std;

typedef long long LL;
const int N = 3;
int n, M;

void mul (int f[N], int a[N][N]) {
    int res[N];
    memset(res, 0, sizeof(res));
    for (int j = 0; j < N; ++ j)
        for (int k = 0; k < N; ++ k)
            res[j] = (res[j] + (LL)f[k] * a[k][j]) % M;
    memcpy(f, res, sizeof(res));
}
void mul_self (int a[N][N]) {
    int res[N][N];
    memset(res, 0, sizeof(res));
    for (int i = 0; i < N; ++ i)
        for (int k = 0; k < N; ++ k)
            for (int j = 0; j < N; ++ j)
                res[i][j] = (res[i][j] + (LL)a[i][k] * a[k][j]) % M;
    memcpy(a, res, sizeof(res));
}

int main () {
    cin >> n >> M;

    int f[N] = { 1, 1, 1 };
    int a[N][N] = {
        { 0, 1, 0 },
        { 1, 1, 1 },
        { 0, 0, 1 }
    };

    -- n;
    while (n > 0) {
        if (n & 1) mul(f, a);
        mul_self(a);
        n /= 2;
    }
    cout << f[2] << endl;
    return 0;
}
```
