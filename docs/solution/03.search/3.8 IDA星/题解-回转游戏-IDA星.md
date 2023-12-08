# 回转游戏

[AcWing-181-回转游戏](https://www.acwing.com/problem/content/183/)

## 分析

见《进阶指南》第`129`页。

## 实现

```cpp
#include <iostream>
#include <cstring>
#include <vector>
using namespace std;

const int N = 9;
int a[N][N];
int max_dep;
vector<char> res;

int ch2i (char ch) {
    return ch - 'A' + 1;
};
char i2ch (int x) {
    return x + 'A' - 1;
}
int move (int k) {
    if (k == 1) {
        for (int i = 1; i <= 7; ++ i) a[i - 1][3] = a[i][3];
        a[7][3] = a[0][3];
    } else if (k == 2) {
        for (int i = 1; i <= 7; ++ i) a[i - 1][5] = a[i][5];
        a[7][5] = a[0][5];
    } else if (k == 3) {
        for (int i = 7; i >= 1; -- i) a[3][i + 1] = a[3][i];
        a[3][1] = a[3][8];
    } else if (k == 4) {
        for (int i = 7; i >= 1; -- i) a[5][i + 1] = a[5][i];
        a[5][1] = a[5][8];
    } else if (k == 5) {
        for (int i = 7; i >= 1; -- i) a[i + 1][5] = a[i][5];
        a[1][5] = a[8][5];
    } else if (k == 6) {
        for (int i = 7; i >= 1; -- i) a[i + 1][3] = a[i][3];
        a[1][3] = a[8][3];
    } else if (k == 7) {
        for (int i = 1; i <= 7; ++ i) a[5][i - 1] = a[5][i];
        a[5][7] = a[5][0];
    } else {
        for (int i = 1; i <= 7; ++ i) a[3][i - 1] = a[3][i];
        a[3][7] = a[3][0];
    }
}
int f () {
    int cnt[4] = { 0, 0, 0, 0 };
    for (int i = 3; i <= 5; ++ i)
        for (int j = 3; j <= 5; ++ j)
            if (!(i == 4 && j == 4))
                ++ cnt[a[i][j]];
    return 8 - max(cnt[1], max(cnt[2], cnt[3]));
}
bool dfs (int dep) {
    if (f() == 0) return true;
    if (dep + f() > max_dep) return false;

    int copy_a[N][N];
    memcpy(copy_a, a, sizeof(copy_a));
    for (int i = 1; i <= 8; ++ i) {
        if (res.size() > 0) {
            int prev = ch2i(res.back());
            if ((prev == 1 && i == 6)
                || (prev == 2 && i == 5)
                || (prev == 3 && i == 8)
                || (prev == 4 && i == 7)
                || (prev == 5 && i == 2)
                || (prev == 6 && i == 1)
                || (prev == 7 && i == 4)
                || (prev == 8 && i == 3)
            ) {
                continue;
            }
        }

        move(i);
        res.push_back(i2ch(i));
        if (dfs(dep + 1) == true) return true;
        res.pop_back();
        memcpy(a, copy_a, sizeof(copy_a));
    }
    return false;
}

int main () {
    while (cin >> a[1][3] && a[1][3]) {
        res.clear();

        cin >> a[1][5] >> a[2][3] >> a[2][5];
        for (int i = 1; i <= 7; ++ i) cin >> a[3][i];
        cin >> a[4][3] >> a[4][5];
        for (int i = 1; i <= 7; ++ i) cin >> a[5][i];
        cin >> a[6][3] >> a[6][5] >> a[7][3] >> a[7][5];

        max_dep = 0;
        while (dfs(0) == false) ++ max_dep;

        if (max_dep == 0) {
            cout << "No moves needed" << endl;
        } else {
            for (int i = 0; i < res.size(); ++ i)
                cout << res[i];
            cout << endl;
        }
        cout << a[3][3] << endl;
    }
    return 0;
}
```

