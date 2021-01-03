# 剪纸游戏

[AcWing-219-剪纸游戏](https://www.acwing.com/problem/content/221/)

## 分析

见《进阶指南》第`188`页。

## 实现

```cpp
#include <iostream>
#include <cstring>
using namespace std;

const int N = 210;
int n, m, sg[N][N];

int SG (int x, int y) {
    if (sg[x][y] != -1) return sg[x][y];

    bool mark[N];
    memset(mark, 0, sizeof(mark));
    for (int i = 2; i <= x - i; ++ i)
        mark[SG(i, y) ^ SG(x - i, y)] = true;
    for (int i = 2; i <= y - i; ++ i)
        mark[SG(x, i) ^ SG(x, y - i)] = true;
    int ptr = 0;
    while (mark[ptr] == true) ++ ptr;
    return sg[x][y] = ptr;
}

int main () {
    memset(sg, -1, sizeof(sg));
    sg[2][2] = sg[2][3] = sg[3][2] = 0;
    while (cin >> n >> m)
        printf("%s\n", SG(n, m) > 0 ? "WIN" : "LOSE");
    return 0;
}
```

