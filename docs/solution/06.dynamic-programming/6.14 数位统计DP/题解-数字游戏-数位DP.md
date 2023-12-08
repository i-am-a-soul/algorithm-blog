# 数字游戏

[LibreOJ-10164-数字游戏](https://vjudge.net/problem/LibreOJ-10164)

## 实现

```cpp
#include <iostream>
#include <vector>
using namespace std;

const int N = 15;
int f[N][N]; // f[i][j] 记录最高位为 j 的 i 位数的数量

void initialize () {
    for (int i = 0; i <= 9; ++ i) f[1][i] = 1;
    for (int i = 2; i < N; ++ i)
        for (int j = 0; j <= 9; ++ j)
            for (int k = j; k <= 9; ++ k)
                f[i][j] += f[i - 1][k];
}
int count (int n) {
    if (n == 0) return 1;

    vector<int> a;
    while (n > 0) {
        a.push_back(n % 10);
        n /= 10;
    }

    int res = 0, last = 0;
    for (int i = a.size() - 1; i >= 0; -- i) {
        int val = a[i];
        for (int j = last; j < val; ++ j)
            res += f[i + 1][j];

        if (val < last) break;
        last = val;

        if (i == 0) ++ res;
    }
    return res;
}

int main () {
    initialize();
    int l, r;
    while (cin >> l >> r)
        cout << count(r) - count(l - 1) << endl;
    return 0;
}
```

