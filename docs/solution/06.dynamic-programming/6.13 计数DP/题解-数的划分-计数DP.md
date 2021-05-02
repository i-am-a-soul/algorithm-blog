# 数的划分

[洛谷-P1025-数的划分](https://www.luogu.com.cn/problem/P1025)

## 分析

`f[i][j]`记录把`i`个物品分为非空的`j`份的方案数。

`f[i][j] = f[i - 1][j - 1] + f[i - j][j]`。

分类讨论：是否存在一份物品的数量为`1`。

- 存在，接下来把`i - 1`个物品分为`j - 1`份；
- 不存在，为了保证这一点，提前拿出`j`个物品放入每一份，接下来把`i - j`个物品分为`j`份。

如果每份可以为空，那么讨论是否存在一份物品的数量为`0`。

## 实现

```cpp
#include <iostream>
using namespace std;

const int N = 210;
int n, k;
int f[N][N];

int main () {
    cin >> n >> k;
    f[0][0] = 1;
    for (int i = 1; i <= n; ++ i)
        for (int j = 1; j <= i; ++ j)
            f[i][j] = f[i - 1][j - 1] + f[i - j][j];
    cout << f[n][k] << endl;
    return 0;
}
```
