# `Windy`数

[LibreOJ-10165-Windy数](https://vjudge.net/problem/LibreOJ-10165)

## 实现

```cpp
#include <iostream>
#include <vector>
using namespace std;

const int N = 12;
int f[N][N];

void initialize () {
    for (int i = 0; i <= 9; ++ i) f[1][i] = 1;
    for (int i = 2; i < N; ++ i)
        for (int j = 0; j <= 9; ++ j)
            for (int k = 0; k <= 9; ++ k)
                if (abs(j - k) >= 2)
                    f[i][j] += f[i - 1][k];
}
int count (int n) {
    if (n == 0) return 0;

    vector<int> a;
    while (n > 0) {
        a.push_back(n % 10);
        n /= 10;
    }

    int res = 0, last = -2;
    for (int i = a.size() - 1; i >= 0; -- i) {
        int val = a[i];
        for (int j = (i == a.size() - 1); j < val; ++ j)
            if (abs(j - last) >= 2)
                res += f[i + 1][j];
        
        if (abs(val - last) >= 2) {
            last = val;
        } else {
            break;
        }

        if (i == 0) ++ res;
    }

    // 前导 0
    for (int i = 1; i < a.size(); ++ i)
        for (int j = 1; j <= 9; ++ j)
            res += f[i][j];
    return res;
}

int main () {
    initialize();
    int l, r;
    cin >> l >> r;
    cout << count(r) - count(l - 1) << endl;
    return 0;
}
```

