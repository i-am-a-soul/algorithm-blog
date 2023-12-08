# 第`K`大的数

[51Nod-1105-第K大的数](https://vjudge.net/problem/51Nod-1105)

## 分析

第`K`大是前`K`大，即大于自身的数小于`K`个的数中最小的。

## 实现

```cpp
#include <iostream>
#include <algorithm>
using namespace std;

typedef long long LL;
const int N = 50010;
int n, k;
LL a[N], b[N];

bool check (LL x) {
    int cnt = 0;
    for (int i = 1; i <= n; ++ i) { // a[i]
        int l = 0, r = n;
        while (l < r) {
            int mid = l + r + 1 >> 1;
            if (a[i] * b[mid] <= x)
                l = mid;
            else
                r = mid - 1;
        }
        cnt += n - l;
    }
    return cnt < k;
}

int main () {
    cin >> n >> k;
    for (int i = 1; i <= n; ++ i) cin >> a[i] >> b[i];

    sort(a + 1, a + n + 1);
    sort(b + 1, b + n + 1);
    LL l = 1, r = 1e18;
    while (l < r) {
        LL mid = l + r >> 1;
        if (check(mid) == true)
            r = mid;
        else
            l = mid + 1;
    }
    cout << l << endl;
    return 0;
}
```

