# 木棒

[AcWing-167-木棒](https://www.acwing.com/problem/content/169/)

## 分析

见《进阶指南》第`104`页。

## 实现

```cpp
#include <iostream>
#include <algorithm>
#include <cstring>
using namespace std;

const int N = 110;
int n, l[N], length, tot;
bool mark[N];

bool cmp (const int& a, const int& b) {
    return a > b;
}
/*
* 正在拼第 cur 根原始木棒（已经拼好了 cur - 1 根）
* 第 cur 根木棒的当前长度为 cur_length
* 拼接到第 cur 根木棒中的上一根小木棍为 prev
*/
bool dfs (int cur, int cur_length, int prev) {
    if (cur == tot + 1) return true; // 所有原始木棒已经全部拼好，搜索成功。

    if (cur_length == length) // 第 cur 根木棒已经拼好，去拼下一根
        return dfs(cur + 1, 0, 1);
    int fail = 0; // 剪枝 (2)
    for (int i = prev; i <= n; ++ i) { // 剪枝 (1)，小木棍长度递减（从 prev 开始枚举）
        if (mark[i] == false
            && cur_length + l[i] <= length
            && fail != l[i]
        ) {
            mark[i] = true;
            if (dfs(cur, cur_length + l[i], i + 1) == true) return true;
            // ---------- 失败 ----------
            fail = l[i];
            mark[i] = false;
            if (cur_length == 0 || cur_length + l[i] == length) // 剪枝 (3)、(4)
                return false;
        }
    }
    return false; // 所有的分支均尝试过，搜索失败。
}

int main () {
    while (cin >> n && n) {
        int sum = 0, max_length = 0;
        for (int i = 1; i <= n; ++ i) {
            cin >> l[i];
            sum += l[i];
            max_length = max(max_length, l[i]);
        }

        sort(l + 1, l + n + 1, cmp);
        for (length = max_length; length <= sum; ++ length) {
            if (sum % length == 0) {
                tot = sum / length; // 原始木棒的根数
                memset(mark, 0, sizeof(mark));
                if (dfs(1, 0, 1) == true) break;
            }
        }
        cout << length << endl;
    }
    return 0;
}
```