# `Xor Sum 2`

[AtCoder-Xor Sum 2](https://vjudge.net/problem/AtCoder-arc098_b)

## 分析

异或是不进位的加法。

性质：$a \oplus b \le a + b$，当且仅当$a \& b=0$时取等号。

设$a \lt b \lt c$，

- 如果$[b,c]$不满足题意，那么$[a,c]$也不满足题意；
- 如果$[a,c]$满足题意，那么$[b,c]$也满足题意。

## 实现

```cpp
#include <iostream>
using namespace std;

typedef long long LL;
const int N = 200010;
int n, a[N];

int main () {
    cin >> n;
    for (int i = 1; i <= n; ++ i) cin >> a[i];

    LL res = 0, sum = 0, xor_sum = 0;
    for (int j = 1, i = 1; j <= n; ++ j) {
        sum += a[j], xor_sum ^= a[j];
        while (i < j && sum != xor_sum) {
            sum -= a[i];
            xor_sum ^= a[i];
            ++ i;
        }
        res += j - i + 1;
    }
    cout << res << endl;
    return 0;
}
```
