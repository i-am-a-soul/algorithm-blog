# `Rainbow`的信号

[AcWing-216-Rainbow的信号](https://www.acwing.com/problem/content/218/)

## 分析

见《进阶指南》第`181`页。

## 实现

```cpp
#include <iostream>
using namespace std;

const int N = 100010;
int n, a[N], b[N];
int last[2], c1, c2;

int main () {
    scanf("%d", &n);
    for (int i = 1; i <= n; ++ i) scanf("%d", &a[i]);

    double res_xor = 0, res_and = 0, res_or = 0;
    for (int k = 0; k <= 30; ++ k) {
        for (int i = 1; i <= n; ++ i) {
            b[i] = ((a[i] >> k) & 1);
            if (b[i] == 1) {
                res_xor += (1 << k) * 1.0 / n / n;
                res_and += (1 << k) * 1.0 / n / n;
                res_or += (1 << k) * 1.0 / n / n;
            }
        }
        last[0] = last[1] = c1 = c2 = 0;
        for (int i = 1; i <= n; ++ i) {
            if (b[i] == 0) {
                res_or += (1 << k) * 2.0 / n / n * last[1];
                res_xor += (1 << k) * 2.0 / n / n * c2;
            } else {
                res_and += (1 << k) * 2.0 / n / n * ((i - 1) - (last[0] + 1) + 1);
                res_or += (1 << k) * 2.0 / n / n * (i - 1);
                res_xor += (1 << k) * 2.0 / n / n * c1;
            }
            ++ c1;
            if (b[i] == 1) swap(c1, c2);
            last[b[i]] = i;
        }
    }
    printf("%.3lf %.3lf %.3lf", res_xor, res_and, res_or);
    return 0;
}
```

