# `Xieldy And His Password`

[Nowcoder-Xieldy And His Password](https://ac.nowcoder.com/acm/contest/107/E?&headNav=www)

## 分析

$2^{2n} \% 3 = 1$，$2^{2n+1} \% 3=2$，$n=0,1,2,...$。

若$str[1 \sim r]_2 \% 3 = 1$，$str[1 \sim l-1]_2 \% 3 = 1$，则$str[l \sim r]_2 \% 3 = 0$。

## 实现

```cpp
#include <iostream>
#include <cstring>
using namespace std;

typedef long long LL;
const int N = 1000010;
int n;
char str[N];
int r[N], sum[N], cnt[3];

int main () {
    while (scanf("%s", str + 1) != EOF) {
        cnt[0] = 1; // ⚠
        cnt[1] = cnt[2] = 0;

        n = strlen(str + 1);
        for (int i = 1; i <= n; ++ i) {
            if (str[i] == '0') {
                r[i] = 0;
            } else if (i & 1) {
                r[i] = 1;
            } else {
                r[i] = 2;
            }
        }
        
        LL res = 0;
        for (int i = 1; i <= n; ++ i) { // 枚举区间右端点
            sum[i] = (sum[i - 1] + r[i]) % 3;
            res += cnt[sum[i]];
            ++ cnt[sum[i]];
        }
        cout << res << endl;
    }
    return 0;
}
```

