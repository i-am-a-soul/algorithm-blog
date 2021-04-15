# 拆分`Nim`游戏

## 模板题

[AcWing-894-拆分-Nim游戏](https://www.acwing.com/solution/content/39046/)

```cpp
#include <iostream>
#include <cstring>
#include <unordered_set>
using namespace std;

const int N = 110;
int n, f[N];

int sg (int x) {
    if (f[x] != -1) return f[x];

    unordered_set<int> us;
    for (int i = 0; i < x; ++ i)
        for (int j = 0; j < i; ++ j)
            us.insert(sg(i) ^ sg(j));
    
    int val = 0;
    while (us.find(val) != us.end()) ++ val;
    return f[x] = val;
}

int main () {
    memset(f, -1, sizeof(f));
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

   