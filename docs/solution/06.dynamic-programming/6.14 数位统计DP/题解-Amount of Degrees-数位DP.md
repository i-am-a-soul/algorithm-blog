# `Amount of Degrees`

[LibreOJ-10163-Amount of Degrees](https://vjudge.net/problem/LibreOJ-10163)

## 实现

```cpp
#include <iostream>
#include <vector>
using namespace std;

const int N = 32;
int l, r, K, B;
int f[N][N];

void initialize () {
    for (int i = 0; i < N; ++ i)
        for (int j = 0; j <= i; ++ j)
            f[i][j] = (j == 0 ? 1 : f[i - 1][j] + f[i - 1][j - 1]);
}
int count (int n) {
    if (n == 0) return 0;

    vector<int> a;
    while (n > 0) {
        a.push_back(n % B);
        n /= B;
    }

    int res = 0, last = 0;
    for (int i = a.size() - 1; i >= 0; -- i) {
        int val = a[i];
        if (val >= 1) {
            res += f[i][K - last];
            if (val >= 2) {
                if (K - last - 1 >= 0) res += f[i][K - last - 1];
                break;
            } else {
                ++ last;
                if (last > K) break;
            }
        }
        if (i == 0 && last == K) ++ res;
    }
    return res;
}

int main () {
    initialize();
    cin >> l >> r >> K >> B;
    cout << count(r) - count(l - 1) << endl;
    return 0;
}
```

