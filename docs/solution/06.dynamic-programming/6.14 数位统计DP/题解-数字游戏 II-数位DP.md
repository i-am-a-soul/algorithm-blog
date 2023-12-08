# 数字游戏 `II`

[LibreOJ-10166-数字游戏](https://vjudge.net/problem/LibreOJ-10166)

## 实现

```cpp
#include <iostream>
#include <vector>
#include <cstring>
using namespace std;

const int N = 12, M = 110;
int l, r, p;
int f[N][N][M];

int mod (int x) {
    return (x % p + p) % p;
}
void initialize () {
    memset(f, 0, sizeof(f));
    for (int i = 0; i <= 9; ++ i) ++ f[1][i][i % p];
    for (int i = 2; i < N; ++ i)
        for (int j = 0; j <= 9; ++ j)
            for (int k = 0; k < p; ++ k)
                for (int l = 0; l <= 9; ++ l)
                    f[i][j][k] += f[i - 1][l][mod(k - j)];
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
        for (int j = 0; j < val; ++ j)
            res += f[i + 1][j][mod(-last)];
        
        last += val;

        if (i == 0 && last % p == 0) ++ res;
    }
    return res;
}

int main () {
    while (cin >> l >> r >> p) {
        initialize();
        cout << count(r) - count(l - 1) << endl;
    }
    return 0;
}
```

