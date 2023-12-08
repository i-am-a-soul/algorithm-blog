# 友好城市

[友好城市](http://ybt.ssoier.cn:8088/problem_show.php?pid=1263)

## 实现

```cpp
#include <iostream>
#include <algorithm>
using namespace std;

const int N = 5010;
struct node {
    int a, b;
    bool operator < (const node& o) const {
        return a < o.a;
    }
};
int n;
node a[N];
int f[N];

int main () {
    cin >> n;
    for (int i = 1; i <= n; ++ i) cin >> a[i].a >> a[i].b;

    sort(a + 1, a + n + 1);
    for (int i = 1; i <= n; ++ i) {
        f[i] = 1;
        for (int j = 1; j < i; ++ j)
            if (a[j].b < a[i].b)
                f[i] = max(f[i], f[j] + 1);
    }

    int res = 0;
    for (int i = 1; i <= n; ++ i)
        res = max(res, f[i]);
    cout << res << endl;
    return 0;
}
```

