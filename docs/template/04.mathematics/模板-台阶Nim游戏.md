# 台阶`Nim`游戏

## 模板题

[AcWing-892-台阶-Nim游戏](https://www.acwing.com/solution/AcWing/content/8393/)

```cpp
#include <iostream>
using namespace std;

int main () {
    int n;
    cin >> n;

    int res = 0;
    for (int i = 1, x; i <= n; ++ i) {
        cin >> x;
        if (i & 1) res ^= x;
    }
    cout << (res != 0 ? "Yes" : "No") << endl;
    return 0;
}
```

