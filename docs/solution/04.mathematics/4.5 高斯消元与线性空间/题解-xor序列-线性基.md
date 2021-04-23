# `xor`序列

[Nowcoder-xor序列](https://ac.nowcoder.com/acm/problem/17968)

## 分析

![](/img/0063.bmp)

## 实现

```cpp
#include <iostream>
using namespace std;

typedef unsigned long long ULL;
const int N = 100010, M = 70;
int n, m;
ULL a[N], p[M];

void insert (ULL x) {
    for (int i = 61; i >= 0; -- i) {
        if ((x >> i) & 1) {
            if (p[i] == 0) {
                p[i] = x;
                return;
            }
            x = x ^ p[i];
        }
    }
}
bool query (ULL x) {
    for (int i = 61; i >= 0; -- i)
        if ((x >> i) & 1)
            x = x ^ p[i];
    return x == 0;
}

int main () {
    cin >> n;
    for (int i = 1; i <= n; ++ i) cin >> a[i];
    cin >> m;

    for (int i = 1; i <= n; ++ i) insert(a[i]);
    while (m --) {
        ULL x, y;
        cin >> x >> y;
        cout << (query(x ^ y) == true ? "YES" : "NO") << endl;
    }
    return 0;
}
```

