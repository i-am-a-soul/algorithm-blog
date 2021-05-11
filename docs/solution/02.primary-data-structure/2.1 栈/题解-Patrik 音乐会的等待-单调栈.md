# `Patrik` 音乐会的等待

[洛谷-P1823-Patrik 音乐会的等待](https://www.luogu.com.cn/problem/P1823)

## 分析

![](/algorithm-blog/img/0062.bmp)

## 实现

```cpp
#include <iostream>
#include <stack>
using namespace std;

typedef long long LL;
struct node {
    int val, cnt;
};
int n;
LL res;
stack<node> s;

int main () {
    cin >> n;
    for (int i = 1; i <= n; ++ i) {
        int val, cnt = 1;
        cin >> val;

        while (!s.empty() && s.top().val <= val) {
            res += s.top().cnt;
            if (s.top().val == val) cnt += s.top().cnt;
            s.pop();
        }
        if (!s.empty()) ++ res;
        s.push({ val, cnt });
    }
    cout << res << endl;
    return 0;
}
```

