# `BSGS`

## 原理

见《进阶指南》第`155`页。

## 模板题

[洛谷-P3846-可爱的质数](https://www.luogu.com.cn/problem/P3846)

```cpp
#include <iostream>
#include <map>
#include <cmath>
using namespace std;

typedef long long LL;
map<int, int> h;

int power (int a, int b, int p) {
    int res = 1 % p;
    while (b > 0) {
        if (b & 1) res = (LL)res * a % p;
        a = (LL)a * a % p;
        b /= 2;
    }
    return res;
} 
int bsgs (int a, int b, int p) {
    b %= p;
    int t = (int)sqrt(p) + 1;
    for (int j = 0; j < t; ++ j) {
        int val = (LL)b * power(a, j, p) % p; // b*a^j
        h[val] = j;
    }
    a = power(a, t, p); // a^t
    if (a == 0) return b == 0 ? 1 : -1;
    for (int i = 0; i <= t; ++ i) {
        int val = power(a, i, p); // (a^t)^i
        int j = h.find(val) == h.end() ? -1 : h[val];
        if (j >= 0 && i * t - j >= 0) return i * t - j;
    }
    return -1;
}

int main () {
    int a, b, p;
    scanf("%d%d%d", &p, &a, &b);
    int res = bsgs(a, b, p);
    res == -1 ? printf("no solution") : printf("%d", res);
    return 0;
}
```

