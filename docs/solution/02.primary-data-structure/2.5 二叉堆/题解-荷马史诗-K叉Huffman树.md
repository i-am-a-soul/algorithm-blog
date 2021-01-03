# 荷马史诗

[AcWing-149-荷马史诗](https://www.acwing.com/problem/content/151/)

## 分析

见《进阶指南》第`88`页。

## 实现

```cpp
#include <iostream>
#include <queue>
#define inf 0x3f3f3f3f
using namespace std;

typedef long long LL;
struct node {
    LL w; // 第一关键字
    int h; // 第二关键字，以其为根结点的子树的高度
    bool operator < (const node& o) const {
        if (w == o.w)
            return h > o.h;
        return w > o.w;
    }
};
priority_queue<node> pq;

int main () {
    int n, k;
    cin >> n >> k;
    for (int i = 1; i <= n; ++ i) {
        LL w;
        cin >> w;
        pq.push({ w, 0 });
    }

    while ((n - 1) % (k - 1) != 0) { // 添加权值为0的结点
        ++ n;
        pq.push({ 0, 0 });
    }
    LL min_length = 0;
    while (pq.size() != 1) {
        LL sum_w = 0;
        int max_height = -inf;
        for (int i = 1; i <= k; ++ i) {
            sum_w += pq.top().w;
            max_height = max(max_height, pq.top().h);
            pq.pop();
        }
        min_length += sum_w;
        pq.push({ sum_w, max_height + 1 });
    }
    cout << min_length << endl << pq.top().h << endl;
    return 0;
}
```

