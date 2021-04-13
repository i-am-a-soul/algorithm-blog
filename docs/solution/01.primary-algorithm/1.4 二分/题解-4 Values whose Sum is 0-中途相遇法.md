# `4 Values whose Sum is 0`

[POJ-2785-4 Values whose Sum is 0](https://vjudge.net/problem/POJ-2785)

## 实现

```cpp
#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;

const int N = 4010;
int n, a[N][5];
vector<int> x, y;

int main () {
    scanf("%d", &n);
    for (int i = 1; i <= n; ++ i)
        for (int j = 1; j <= 4; ++ j)
            scanf("%d", &a[i][j]);
    
    for (int i = 1; i <= n; ++ i) {
        for (int j = 1; j <= n; ++ j) {
            x.push_back(a[i][1] + a[j][2]);
            y.push_back(a[i][3] + a[j][4]);
        }
    }
    sort(y.begin(), y.end());
    int res = 0;
    for (int i = 0; i < x.size(); ++ i)
        res += upper_bound(y.begin(), y.end(), -x[i])
            - lower_bound(y.begin(), y.end(), -x[i]);
    printf("%d", res);
    return 0;
}
```

