# 加分二叉树

[洛谷-P1040-加分二叉树](https://www.luogu.com.cn/problem/P1040)

## 实现

```cpp
#include <iostream>
using namespace std;

const int N = 30;
int n, w[N];
int f[N][N], rec[N][N];

void dfs (int l, int r) {
    if (l > r) return;

    int rt = rec[l][r];
    cout << rt << ' ';
    dfs(l, rt - 1);
    dfs(rt + 1, r);
}

int main () {
    cin >> n;
    for (int i = 1; i <= n; ++ i) cin >> w[i];

    for (int i = 1; i <= n; ++ i) {
        f[i][i] = w[i];
        rec[i][i] = i;
    }
    for (int len = 2; len <= n; ++ len) {
        for (int l = 1; l + len - 1 <= n; ++ l) {
            int r = l + len - 1;
            for (int k = l; k <= r; ++ k) {
                int a = (k == l ? 1 : f[l][k - 1]),
                    b = (k == r ? 1 : f[k + 1][r]),
                    c = a * b + w[k];
                if (c > f[l][r]) {
                    f[l][r] = c;
                    rec[l][r] = k;
                }
            }
        }
    }
    cout << f[1][n] << endl;
    dfs(1, n);
    return 0;
}
```

