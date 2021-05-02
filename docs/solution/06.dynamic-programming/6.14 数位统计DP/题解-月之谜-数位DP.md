# 月之谜

[AcWing-311-月之谜](https://www.acwing.com/problem/content/313/)

## 分析

见《进阶指南》第`344`页。

## 实现

```cpp
#include <iostream>
using namespace std;

const int N = 12, M = 85; // 1999999999：82
int f[N][M][M][M];
int power[N][M]; // 10^i % k

inline int cal (int x, int k) {
    return (x % k + k) % k;
}
void initialize () {
    for (int k = 1; k <= 82; ++ k) {
        power[0][k] = 1 % k;
        for (int i = 1; i <= 10; ++ i)
            power[i][k] = power[i - 1][k] * 10 % k;
        f[0][0][k][0] = 1;
        for (int i = 1; i <= 10; ++ i)
        for (int j = 0; j <= 82; ++ j)
        for (int l = 0; l <= k - 1; ++ l)
        for (int p = 0; p <= 9; ++ p) {
            if (j - p < 0) break;
            f[i][j][k][l] += f[i - 1][j - p][k][cal(l - p * power[i - 1][k], k)];
        }
    }
}
int count (int idx) {
    int n = 0, a[N];
    while (idx > 0) {
        a[++ n] = idx % 10;
        idx /= 10;
    }
    int res = 0;
    for (int sum = 1; sum <= 82; ++ sum) {
        int t = 0, q = 0;
        for (int i = n; i >= 1; -- i) {
            for (int p = 0; p < a[i]; ++ p) {
                if (sum - t - p < 0) break;
                res += f[i - 1][sum - t - p][sum][cal(0 - q - p * power[i - 1][sum], sum)];
            }
            t += a[i];
            q = (q + a[i] * power[i - 1][sum]) % sum;
        }
        if (t == sum && q == 0) ++ res;
    }
    return res;
}

int main () {
    initialize();
    int l, r;
    cin >> l >> r;
    cout << count(r) - count(l - 1) << endl;
    return 0;
}
```

