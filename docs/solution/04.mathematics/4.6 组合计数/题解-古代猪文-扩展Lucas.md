# 古代猪文

[AcWing-213-古代猪文](https://www.acwing.com/problem/content/215/)

## 分析

见《进阶指南》第`173`页。

## 实现

```cpp {32}
#include <iostream>
using namespace std;

typedef long long LL;
const int M = 999911659;
int a[4] = { 2, 3, 4679, 35617 };
int f[36000];
int b[4];

void fac (int n, int p) {
    f[0] = 1;
    for (int i = 1; i <= n; ++ i)
        f[i] = (LL)i * f[i - 1] % p;
}
int exgcd (int a, int b, int& x, int& y) {
    if (b == 0) {
        x = 1, y = 0;
        return a;
    }

    int d = exgcd(b, a % b, x, y);
    int copy_x = x, copy_y = y;
    x = copy_y, y = copy_x - copy_y * (a / b);
    return d;
}
int inv (int a, int p) {
    int x, y;
    exgcd(a, p, x, y);
    return (x % p + p) % p;
}
int C (int n, int m, int p) {
    if (n < m) return 0;
    return (LL)f[n] * inv(f[m], p) % p * inv(f[n - m], p) % p;
}
int Lucas (int n, int m, int p) {
    if (n < p && m < p)
        return C(n, m, p);
    return (LL)C(n % p, m % p, p) * Lucas(n / p, m / p, p) % p;
}
int power (int a, int b, int p) {
    int res = 1 % p;
    while (b > 0) {
        if (b & 1) res = (LL)res * a % p;
        a = (LL)a * a % p;
        b /= 2;
    }
    return res;
}

int main () {
    int n, q;
    cin >> n >> q;

    if (q == M) {
        cout << 0 << endl;
        return 0;
    }
    for (int i = 0; i < 4; ++ i) {
        fac(a[i], a[i]);
        for (int d = 1; d <= n / d; ++ d) {
            if (n % d == 0) { // n 的约数 d
                b[i] = (b[i] + Lucas(n, d, a[i])) % a[i];
                if (d * d != n)
                    b[i] = (b[i] + Lucas(n, n / d, a[i])) % a[i];
            }
        }
    }
    // 中国剩余定理
    int x = 0, prod_m = M - 1;
    for (int i = 0; i < 4; ++ i) {
        int ai = b[i], mi = a[i], Mi = prod_m / mi;
        // 这里的 mi 是质数，否则要用 exgcd 求逆元
        int inv_Mi = power(Mi, mi - 2, mi);
        x = (x + (LL)ai * Mi % prod_m * inv_Mi % prod_m) % prod_m;
    }
    x = (x % prod_m + prod_m) % prod_m;
    cout << power(q, x, M) << endl;
    return 0;
}
```

