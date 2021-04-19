# `Hankson`的趣味题

[AcWing-200-Hankson的趣味题](https://www.acwing.com/problem/content/202/)

## 分析

见《进阶指南》第`143`页。

## 实现

```cpp
#include <iostream>
using namespace std;

typedef long long LL;
typedef pair<int, int> PII;
const int N = 45000, M = 50;
int idx, primes[N]; // 质数
bool mark[N];

int tot;
PII prime_factors[M]; // 质因数

int ptr, factors[N]; // 约数

void get_primes (int n) {
    for (int i = 2; i <= n; ++ i) {
        if (mark[i] == false) primes[++ idx] = i;
        for (int j = 1; primes[j] <= n / i; ++ j) {
            mark[i * primes[j]] = true;
            if (i % primes[j] == 0) break;
        }
    }
}
void prime_factorize (int x) {
    for (int i = 1; primes[i] <= x / primes[i]; ++ i) {
        int p = primes[i];
        if (x % p == 0) {
            int e = 0;
            while (x % p == 0) {
                ++ e;
                x /= p;
            }
            prime_factors[++ tot] = { p, e };
        }
    }
    if (x > 1) prime_factors[++ tot] = { x, 1 };
}
void dfs (int cur, int factor) {
    if (cur == tot + 1) {
        factors[++ ptr] = factor;
        return;
    }

    for (int i = 0; i <= prime_factors[cur].second; ++ i) {
        dfs(cur + 1, factor);
        factor *= prime_factors[cur].first;
    }
}
int gcd (int a, int b) {
    return b == 0 ? a : gcd(b, a % b);
}

int main () {
    get_primes(N - 10);
    int T;
    scanf("%d", &T);
    while (T --) {
        int a, b, c, d;
        scanf("%d%d%d%d", &a, &b, &c, &d);

        tot = 0;
        prime_factorize(d);
        ptr = 0;
        dfs(1, 1);
        int res = 0;
        for (int i = 1; i <= ptr; ++ i) {
            int x = factors[i];
            if (gcd(x, a) == b && (LL)x * c / gcd(x, c) == d)
                ++ res;
        }
        printf("%d\n", res);
    }
    return 0;
}
```

