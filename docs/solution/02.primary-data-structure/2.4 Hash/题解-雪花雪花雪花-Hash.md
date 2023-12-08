# 雪花雪花雪花

[AcWing-137-雪花雪花雪花](https://www.acwing.com/problem/content/description/139/)

## 分析

见《进阶指南》第`65`页。

## 实现

```cpp
#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;

const int N = 100010, M = 100003;
struct Snowflake {
    vector<int> a;
    bool compare (vector<int>& a, vector<int>& b) {
        for (int i = 0; i < 6; ++ i) {
            bool flag = true;
            for (int j = 0; j < 6; ++ j) {
                if (a[(i + j) % 6] != b[j]) {
                    flag = false;
                    break;
                }
            }
            if (flag == true) return true;
        }
        return false;
    }
    bool operator == (Snowflake o) {
        if (compare(a, o.a) == true) return true;
        reverse(o.a.begin(), o.a.end());
        if (compare(a, o.a) == true) return true;
        return false;
    }
};
Snowflake snowflake[N];
vector<Snowflake> h[M];

int get_hash_value (Snowflake s) {
    int res = 1;
    for (int i = 0; i < 6; ++ i) res *= s.a[i];
    for (int i = 0; i < 6; ++ i) res += s.a[i];
    return res;
}
int get_index (int hash_value) {
    return (hash_value % M + M) % M;
}
void insert (Snowflake s) {
    h[get_index(get_hash_value(s))].push_back(s);
}
bool find (Snowflake s) {
    int idx = get_index(get_hash_value(s));
    for (int i = 0; i < h[idx].size(); ++ i)
        if (h[idx][i] == s)
            return true;
    return false;
}

int main () {
    int n;
    scanf("%d", &n);
    for (int i = 1; i <= n; ++ i) {
        for (int j = 0, val; j < 6; ++ j) {
            scanf("%d", &val);
            snowflake[i].a.push_back(val);
        }
    }

    for (int i = 1; i <= n; ++ i) {
        if (find(snowflake[i]) == true) {
            printf("Twin snowflakes found.\n");
            return 0;
        } else {
            insert(snowflake[i]);
        }
    }
    printf("No two snowflakes are alike.\n");
    return 0;
}
```

