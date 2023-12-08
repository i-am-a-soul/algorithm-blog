# `IDA*`

## 原理

见《进阶指南》第`128`页。

## 模板题

[AcWing-180-排书](https://www.acwing.com/problem/content/182/)

```cpp
#include <iostream>
#include <cstring>
using namespace std;

const int N = 20;
int n, a[N], max_dep;

int get_tot () {
    int res = 0;
    for (int i = 1; i < n; ++ i)
        if (a[i] + 1 != a[i + 1])
            ++ res;
    if (a[n] != n) ++ res;
    return res;
}
void insert (int l, int r, int k) {
    int temp[20], ptr = r;
    for (int i = l; i <= k; ++ i) {
        temp[i] = a[++ ptr];
        if (ptr == k) ptr = l - 1;
    }
    for (int i = l; i <= k; ++ i) a[i] = temp[i];
}
bool dfs (int cur) {
    int tot = get_tot();
    if (tot == 0) return true;

    if (cur + (tot + 1) / 3 > max_dep) return false;

    int copy_a[N];
    memcpy(copy_a, a, sizeof(copy_a));
    for (int l = 1; l <= n; ++ l) {
        for (int r = l; r <= n; ++ r) { // [l, r]
            for (int k = r + 1; k <= n; ++ k) {
                insert(l, r, k);
                if (dfs(cur + 1) == true) return true;
                memcpy(a, copy_a, sizeof(copy_a));
            }
        }
    }
    return false;
}

int main () {
    int T;
    cin >> T;
    while (T --) {
        cin >> n;
        for (int i = 1; i <= n; ++ i) cin >> a[i];

        bool flag = false;
        for (max_dep = 0; max_dep <= 4; ++ max_dep) {
            if (dfs(0) == true) {
                flag = true;
                break;
            }
        }
        if(flag == true)
            cout << max_dep << endl;
        else
            cout << "5 or more" << endl;
    }
    return 0;
}
```

