# 最大异或对

[AcWing-143-最大异或对](https://www.acwing.com/problem/content/145/)

## 分析

见《进阶指南》第`79`页。

## 实现

```cpp
#include <iostream>
#define null 0
using namespace std;

const int N = 100010;
int idx, trie[N * 32][2], root = 0;

void insert (int val) {
    int ptr = root;
    for (int i = 30; i >= 0; -- i) {
        int k = (val >> i) & 1;
        if (trie[ptr][k] == null) trie[ptr][k] = ++ idx;
        ptr = trie[ptr][k];
    }
}
int query (int val) {
    int ptr = root, res = 0;
    for (int i = 30; i >= 0; -- i) {
        int k = (val >> i) & 1;
        if (trie[ptr][k ^ 1] == null) {
            ptr = trie[ptr][k];
        } else {
            res = res | (1 << i);
            ptr = trie[ptr][k ^ 1];
        }
    }
    return res;
}

int main () {
    int n, res = 0;
    scanf("%d", &n);
    for (int i = 1, val; i <= n; ++ i) {
        scanf("%d", &val);
        insert(val);
        res = max(res, query(val));
    }
    printf("%d", res);
    return 0;
}
```

