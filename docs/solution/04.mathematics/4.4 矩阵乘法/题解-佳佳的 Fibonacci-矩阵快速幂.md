# 佳佳的 `Fibonacci`

[佳佳的 Fibonacci](http://ybt.ssoier.cn:8088/problem_show.php?pid=1644)

## 实现

```cpp
#include <iostream>
#include <cstring>
using namespace std;

typedef long long LL;
const int N = 4;
int n, M;

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
    cin >> n >> M;

    int f[N] = { 1, 1, 1, 0 };
    int a[N][N] = {
        { 0, 1, 0, 0 },
        { 1, 1, 1, 0 },
        { 0, 0, 1, 1 },
        { 0, 0, 0, 1 }
    };

    int m = n - 1;
    while (m > 0) {
        if (m & 1) mul(f, a);
        mul(a);
        m /= 2;
    }
    cout << (((LL)n * f[2] - f[3]) % M + M) % M << endl;
    return 0;
}
```

