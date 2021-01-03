# 邻值查找

[AcWing-136-邻值查找](https://www.acwing.com/problem/content/138/)

## 分析

见《进阶指南》第`61`页。

`set`的`insert`函数的返回值：

> The single element versions (1) return a [pair](http://www.cplusplus.com/pair), with its member `pair::first` set to an iterator pointing to either the newly inserted element or to the equivalent element already in the [set](http://www.cplusplus.com/set). The `pair::second` element in the [pair](http://www.cplusplus.com/pair) is set to `true` if a new element was inserted or `false` if an equivalent element already existed.  

## 实现

```cpp
#include <iostream>
#include <set>
#define inf 0x3f3f3f3f
using namespace std;

struct node {
    int val, idx;
    bool operator < (const node& o) const {
        return val < o.val;
    }
};
set<node> s;

int main () {
    int n;
    scanf("%d", &n);
    for (int i = 1, cur; i <= n; ++ i) {
        scanf("%d", &cur);
        auto j = s.insert({ cur, i }).first;
        if (i == 1) continue;
        
        int res = inf, index;
        auto k = j;
        // ---------- 后继 ----------
        ++ k;
        if (k != s.end() && res > abs((*k).val - cur)) {
            res = abs((*k).val - cur);
            index = (*k).idx;
        }
        // ---------- 前驱 ----------
        k = j;
        if (k != s.begin() && res >= abs((*(-- k)).val - cur)) {
            res = abs((*k).val - cur);
            index = (*k).idx;
        }
        printf("%d %d\n", res, index);
    }
    return 0;
}
```

