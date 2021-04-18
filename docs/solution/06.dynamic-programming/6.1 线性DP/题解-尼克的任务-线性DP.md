# 尼克的任务

[洛谷-P1280-尼克的任务](https://www.luogu.com.cn/problem/P1280)

## 实现

```cpp
#include <iostream>
using namespace std;

const int N = 10010;
int n, k;
int p[N], t[N]; // 开始时间、持续时间
int f[N]; // f[i] 记录从第 i 分钟到第 n 分钟空暇时间的最大值

int main () {
    cin >> n >> k;
    for (int i = 1; i <= k; ++ i) cin >> p[i] >> t[i];

    int ptr = k;
    for (int i = n; i >= 1; -- i) { // ⚠：倒序
        if (p[ptr] != i) {
            f[i] = f[i + 1] + 1;
        } else {
            while (p[ptr] == i) {
                f[i] = max(f[i], f[p[ptr] + t[ptr]]);
                -- ptr;
            }
        }
    }
    cout << f[1] << endl;
    return 0;
}
```
