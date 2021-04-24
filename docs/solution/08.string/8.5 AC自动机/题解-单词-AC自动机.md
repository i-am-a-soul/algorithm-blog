# 单词

[洛谷-P3966-单词](https://www.luogu.com.cn/problem/P3966)

## 实现

```cpp
#include <iostream>
#define null 0
using namespace std;

const int N = 210, M = 1000010;
int n;
char str[M];
int idx, trie[M][26], f[M], fail[M], root = 0;
int rec[N];
int h = 1, t, q[M];

void insert (int k) {
    int ptr = root;
    for (int i = 1; str[i]; ++ i) {
        int ch = str[i] - 'a';
        if (trie[ptr][ch] == null) trie[ptr][ch] = ++ idx;
        ptr = trie[ptr][ch];
        ++ f[ptr];
    }
    rec[k] = ptr;
}
void build () {
    for (int i = 0; i < 26; ++ i)
        if (trie[root][i] != null)
            q[++ t] = trie[root][i];
    while (h <= t) {
        int cur = q[h ++];
        for (int i = 0; i < 26; ++ i) {
            int ptr = trie[cur][i];
            if (ptr == null) {
                trie[cur][i] = trie[fail[cur]][i];
            } else {
                fail[ptr] = trie[fail[cur]][i];
                q[++ t] = ptr;
            }
        }
    }
}

int main () {
    scanf("%d", &n);
    for (int i = 1; i <= n; ++ i) {
        scanf("%s", str + 1);
        insert(i);
    }

    build();
    for (int i = idx; i >= 2; -- i)
        f[fail[q[i]]] += f[q[i]];
    for (int i = 1; i <= n; ++ i)
        printf("%d\n", f[rec[i]]);
    return 0;
}
```

