# `Graveyard Design`

[POJ-2100-Graveyard Design](https://vjudge.net/problem/POJ-2100)

## 实现

```c++
#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;

typedef long long LL;
typedef pair<int, int> PII;
LL target;
vector<PII> res;

int main () {
    cin >> target;

    LL sum = 0;
    for (int j = 1, i = 1; j <= target / j; ++ j) {
        sum += (LL)j * j;
        while (i < j && sum > target) {
            sum -= (LL)i * i;
            ++ i;
        }
        if (sum == target) res.push_back({ i, j });
    }

    sort(res.begin(), res.end());
    cout << res.size() << endl;
    for (int i = 0; i < res.size(); ++ i) {
        int l = res[i].first, r = res[i].second;
        cout << r - l + 1 << ' ';
        for (int j = l; j <= r; ++ j) cout << j << ' ';
        cout << endl;
    }
    return 0;
}
```
