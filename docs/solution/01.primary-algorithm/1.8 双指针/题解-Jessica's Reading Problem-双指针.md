# `Jessica's Reading Problem`

[POJ-3320-Jessica's Reading Problem](https://vjudge.net/problem/POJ-3320)

## 实现

```cpp
#include <iostream>
#include <algorithm>
#define inf 0x3f3f3f3f
using namespace std;

const int N = 1000010;
int n, a[N];
int m, nums[N];
int k, cnt[N];

void discrete () {
    for (int i = 1; i <= n; ++ i) nums[i] = a[i];
    sort(nums + 1, nums + n + 1);
    m = unique(nums + 1, nums + n + 1) - (nums + 1);
}
int query (int x) {
    return lower_bound(nums + 1, nums + m + 1, x) - nums;
}
void add (int x) {
    if (cnt[a[x]] ++ == 0) ++ k;
}
void del (int x) {
    if (-- cnt[a[x]] == 0) -- k;
}

int main () {
    cin >> n;
    for (int i = 1; i <= n; ++ i) cin >> a[i];

    discrete();
    for (int i = 1; i <= n; ++ i) a[i] = query(a[i]);

    int res = inf;
    for (int j = 1, i = 1; j <= n; ++ j) {
        add(j);
        while (i < j && cnt[a[i]] >= 2) {
            del(i);
            ++ i;
        }
        if (k == m) res = min(res, j - i + 1);
    }
    cout << res << endl;
    return 0;
}
```
