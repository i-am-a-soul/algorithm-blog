# 小`Q`的无敌异或

[黑暗爆炸-4017-小Q的无敌异或](https://vjudge.net/problem/%E9%BB%91%E6%9A%97%E7%88%86%E7%82%B8-4017)

## 分析

按位统计答案。

若$xor\_sum[1 \sim r]_k \oplus xor\_sum[1 \sim l-1]_k = 1$，则$xor\_sum[l \sim r]_k$对答案有$2^k$的贡献。

## 实现

```cpp {16}
#include <iostream>
using namespace std;

const int N = 200010, M = 998244353;
int n, a[N];
int xor_sum[N], cnt[2];

int main () {
    cin >> n;
    for (int i = 1; i <= n; ++ i) cin >> a[i];

    for (int i = 1; i <= n; ++ i)
        xor_sum[i] = xor_sum[i - 1] ^ a[i];
    int res = 0;
    for (int k = 0; k <= 19; ++ k) {
        cnt[0] = 1;
        cnt[1] = 0;

        for (int i = 1; i <= n; ++ i) {
            int val = (xor_sum[i] >> k) & 1;
            res = (res + cnt[val ^ 1] * (1 << k) % M) % M;
            ++ cnt[val];
        }
    }
    cout << res << endl;
    return 0;
}
```

