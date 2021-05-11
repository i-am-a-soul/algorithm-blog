# `Anti-Nim`游戏

[XDOJ-最后一个](http://acm.xidian.edu.cn/problem.php?id=1414)

## 分析

![](/algorithm-blog/img/0064.png)

## 实现

```cpp
#include <cstdio>
using namespace std;

int main () {
    int n;
    while (scanf("%d", &n) != EOF) {
        bool flag = true;
        int res = 0;
        for (int i = 1, x; i <= n; ++ i) {
            scanf("%d", &x);
            if (x > 1) flag = false;
            res ^= x;
        }

        if (flag == true) {
            printf("%s\n", res != 0 ? "orzwang9897" : "orzwym6912");
        } else {
            printf("%s\n", res != 0 ? "orzwym6912" : "orzwang9897");
        }
    }
    return 0;
}
```

