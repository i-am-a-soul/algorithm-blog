# `Fractal`

[POJ-2083-Fractal](https://vjudge.net/problem/POJ-2083)

## 分析

![](/img/0025.bmp)

## 实现

```cpp
#include <iostream>
#include <cmath>
#define size SiZe
using namespace std;

char a[800][800];

void solve (int n, int x, int y) {
    if (n == 1) {
        a[x][y] = 'X';
        return;
    }
    int size = pow(3.0, n - 2);
    solve(n - 1, x, y);
    solve(n - 1, x, y + 2 * size);
    solve(n - 1, x + size, y + size);
    solve(n - 1, x + 2 * size, y);
    solve(n - 1, x + 2 * size, y + 2 * size);
}

int main () {
    int n;
    while (cin >> n && ~n) {
        int size = pow(3.0, n - 1);
        for (int i = 1; i <= size; ++ i)
            for (int j = 1; j <= size; ++ j)
                a[i][j] = ' ';
        solve(n, 1, 1);
        for (int i = 1; i <= size; ++ i) {
            for (int j = 1; j <= size; ++ j)
                cout << a[i][j];
            cout << endl;
        }
        cout << '-' << endl;
    }
    return 0;
}
```

