# 普通平衡树

[洛谷-P3369-【模板】普通平衡树](https://www.luogu.com.cn/problem/P3369)

## 实现

```cpp
#include <iostream>
#include <vector>
#include <algorithm>
#define delete DeLeTe
using namespace std;

vector<int> a;

void insert (int val) {
    a.insert(upper_bound(a.begin(), a.end(), val), val);
}
void delete (int val) {
    a.erase(lower_bound(a.begin(), a.end(), val));
}
int rank_of (int val) {
    return lower_bound(a.begin(), a.end(), val) - a.begin() + 1;
}
int key_of (int rank) {
    return a[rank - 1];
}
int prev_of (int val) {
    return *(lower_bound(a.begin(), a.end(), val) - 1);
}
int next_of (int val) {
    return *upper_bound(a.begin(), a.end(), val);
}

int main () {
    int m;
    scanf("%d", &m);
    while (m --) {
        int opt, x;
        scanf("%d%d", &opt, &x);
        if (opt == 1) insert(x);
        else if (opt == 2) delete(x);
        else if (opt == 3) printf("%d\n", rank_of(x));
        else if (opt == 4) printf("%d\n", key_of(x));
        else if (opt == 5) printf("%d\n", prev_of(x));
        else printf("%d\n", next_of(x));
    }
    return 0;
}
```

