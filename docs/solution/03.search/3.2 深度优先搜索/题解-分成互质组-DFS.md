# 分成互质组

[分成互质组](http://ybt.ssoier.cn:8088/problem_show.php?pid=1221)

## 实现

```cpp
#include <iostream>
#include <vector>
using namespace std;

const int N = 12;
int n, a[N], res;
bool mark[N];
vector<int> b[N];

int gcd (int a, int b) {
    return b == 0 ? a : gcd(b, a % b);
}
bool check (int k, int val) {
    for (int i = 0; i < b[k].size(); ++ i)
        if (gcd(b[k][i], val) != 1)
            return false;
    return true;
}
void dfs (int cur, int beg, int cnt) {
    if (cur >= res) return;
    if (cnt == n) {
        res = cur;
        return;
    }

    bool flag = true;
    for (int i = beg; i <= n; ++ i) {
        if (mark[i] == false && check(cur, a[i])) {
            mark[i] = true;
            b[cur].push_back(a[i]);
            dfs(cur, i + 1, cnt + 1);
            b[cur].pop_back();
            mark[i] = false;
            flag = false;
        }
    }
    if (flag == true) dfs(cur + 1, 1, cnt);
}

int main () {
    cin >> n;
    for (int i = 1; i <= n; ++ i) cin >> a[i];

    res = n;
    dfs(1, 0, 0);
    cout << res << endl;
    return 0;
}
```

