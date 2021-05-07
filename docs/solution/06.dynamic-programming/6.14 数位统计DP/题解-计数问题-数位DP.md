# 计数问题

[AcWing-338-计数问题](https://www.acwing.com/problem/content/description/340/)

## 实现

```cpp
#include <iostream>
#include <cmath>
#include <vector>
using namespace std;

const int N = 12;
int f[N][N][N];

void initialize () {
    for (int i = 0; i <= 9; ++ i) f[1][i][i] = 1;

    for (int i = 2; i <= 10; ++ i)
    for (int j = 0; j <= 9; ++ j)
    for (int k = 0; k <= 9; ++ k) {
        if (k == j) f[i][j][k] += pow(10, i - 1);
        for (int l = 0; l <= 9; ++ l)
            f[i][j][k] += f[i - 1][l][k];
    }
}
int count (int n, int k) {
    if (n == 0) return k == 0 ? 1 : 0;

    vector<int> a;
    while (n > 0) {
        a.push_back(n % 10);
        n /= 10;
    }

    int res = 0, last = 0;
    for (int i = a.size() - 1; i >= 0; -- i) {
        int val = a[i];
        for (int j = (i == a.size() - 1); j < val; ++ j)
            res += f[i + 1][j][k];
        
        res += val * last * pow(10, i);
        if (val == k) ++ last;

        if (i == 0) res += last;
    }
    for (int i = 1; i < a.size(); ++ i)
        for (int j = (i != 1); j <= 9; ++ j)
            res += f[i][j][k];
    return res;
}

int main () {
    initialize();
    int l, r;
    while (cin >> l >> r, l || r) {
        if (l > r) swap(l, r);

        for (int i = 0; i <= 9; ++ i)
            cout << count(r, i) - count(l - 1, i) << ' ';
        cout << endl;
    }
    return 0;
}
```

