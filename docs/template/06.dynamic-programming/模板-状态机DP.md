# 状态机`DP`

## 原理

![](/img/0067.bmp)

## 模板题

[大盗阿福](http://ybt.ssoier.cn:8088/problem_show.php?pid=1301)

```cpp
#include <iostream>
#include <cstdio>
#define inf 0x3f3f3f3f
using namespace std;

const int N = 100010;
int n, a[N];
int f[N][2];

int main () {
    int T;
    scanf("%d", &T);
    while (T --) {
        scanf("%d", &n);
        for (int i = 1; i <= n; ++ i) scanf("%d", &a[i]);

        f[0][0] = 0, f[0][1] = -inf;
        for (int i = 1; i <= n; ++ i) {
            f[i][0] = max(f[i - 1][0], f[i - 1][1]);
            f[i][1] = f[i - 1][0] + a[i];
        }
        printf("%d\n", max(f[n][0], f[n][1]));
    }
    return 0;
}
```

