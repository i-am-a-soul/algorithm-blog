# 会场预约

[洛谷-P2161-会场预约](https://www.luogu.com.cn/problem/P2161)

## 分析

运算符重载。

## 实现

```cpp
#include <iostream>
#include <set>
using namespace std;

struct node {
    int l, r;
    bool operator < (const node& o) const {
        return r < o.l;
    }
    // 若 x.r < y.l，则 x < y。
    // 若 x.l > y.r，则 x > y。
    // 否则 x 等于 y
};
int n;
set<node> s;

int main () {
    scanf("%d", &n);
    for (int i = 1; i <= n; ++ i) {
        char opt[5];
        scanf("%s", opt);
        if (opt[0] == 'A') {
            int l, r;
            scanf("%d%d", &l, &r);

            int res = 0;
            auto ptr = s.find({ l, r });
            while (ptr != s.end()) {
                ++ res;
                s.erase(ptr); // 删除与线段 [l, r] 相交的线段
                ptr = s.find({ l, r });
            }
            printf("%d\n", res);
            s.insert({ l, r });
        } else {
            printf("%d\n", s.size());
        }
    }
    return 0;
}  
```

