# 小`Hi`的烦恼

[HihoCoder-1513-小Hi的烦恼](https://vjudge.net/problem/HihoCoder-1513)

## 分析

五维偏序。

## 实现

```cpp
#include <iostream>
#include <bitset>
using namespace std;

const int N = 30010, M = 7;
int n;
int a[N][M], h[M][N];
bitset<N> bs[M][N];

int main () {
    scanf("%d", &n);
    for (int i = 0; i < n; ++ i)
        for (int j = 1; j <= 5; ++ j)
            scanf("%d", &a[i][j]);
    
    for (int j = 1; j <= 5; ++ j)
        for (int i = 0; i < n; ++ i)
            h[j][a[i][j]] = i;
    for (int j = 1; j <= 5; ++ j) {
        for (int i = 2; i <= n; ++ i) { // 数值
            bs[j][i] |= bs[j][i - 1];
            bs[j][i].set(h[j][i - 1], 1);
        }
    }
    for (int i = 0; i < n; ++ i) { // 下标
        for (int j = 2; j <= 5; ++ j)
            bs[1][a[i][1]] = bs[1][a[i][1]] & bs[j][a[i][j]]; // 集合交
        printf("%d\n", bs[1][a[i][1]].count());
    }
    return 0;
}
```

