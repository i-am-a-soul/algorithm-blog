# `Trie`

## 原理

见《进阶指南》第`77`页。

## 模板题

[AcWing-142-前缀统计](https://www.acwing.com/problem/content/144/)

```cpp
#include <iostream>
#define null 0
using namespace std;

const int N = 100010;
int idx, trie[N][26], cnt[N], root = 0;

void insert (const string& str) {
    int ptr = root;
    for (int i = 0; i < str.size(); ++ i) {
        int ch = str[i] - 'a';
        if (trie[ptr][ch] == null) trie[ptr][ch] = ++ idx;
        ptr = trie[ptr][ch];
    }
    ++ cnt[ptr];
}
int query (const string& str) {
    int ptr = root, res = 0;
    for (int i = 0; i < str.size(); ++ i) {
        int ch = str[i] - 'a';
        if (trie[ptr][ch] == null) break;
        ptr = trie[ptr][ch];
        res += cnt[ptr];
    }
    return res;
}

int main () {
    int n, m;
    cin >> n >> m;
    for (int i = 1; i <= n; ++ i) {
        string str;
        cin >> str;
        insert(str);
    }

    while (m --) {
        string str;
        cin >> str;
        cout << query(str) << endl;
    }
    return 0;
}
```

