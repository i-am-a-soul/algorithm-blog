# 集合`-Nim`游戏

[AcWing-893-集合-Nim游戏](https://www.acwing.com/solution/AcWing/content/3929/)

## 分析

```
/* 
样例输入:
2
2 5
3
2 4 7
样例输出:
Yes
*/
```

有向图游戏`7`：

![](/img/0055.bmp)

## 实现

```cpp
#include <iostream>
#include <cstring>
#include <unordered_set>
using namespace std;

const int N = 110, M = 10010;
int n, m;
int s[N], f[M];

int sg (int x) { // 记忆化搜索
    if (f[x] != -1) return f[x];

    unordered_set<int> us;
    for (int i = 1; i <= m; ++ i)
        if (x >= s[i])
            us.insert(sg(x - s[i]));
    int val = 0;
    while (us.find(val) != us.end()) ++ val;
    return f[x] = val;
}

int main () {
    memset(f, -1, sizeof(f));
    cin >> m;
    for (int i = 1; i <= m; ++ i) cin >> s[i];
    cin >> n;

    int res = 0;
    for (int i = 1, x; i <= n; ++ i) {
        cin >> x;
        res ^= sg(x);
    }
    cout << (res != 0 ? "Yes" : "No") << endl;
    return 0;
}
```

