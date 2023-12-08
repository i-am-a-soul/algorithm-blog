# `AC`自动机

## 模板题

[HDOJ-2222-Keywords Search](https://vjudge.net/problem/HDU-2222)

```cpp
#include <iostream>
#include <cstring>
#include <queue>
#define null 0
using namespace std;

const int N = 1000010, M = 10010, S = 52;
int n;
char str[N];
int idx, trie[M * S][26], cnt[M * S], fail[M * S], root = 0;

void insert () {
    int ptr = root;
    for (int i = 1; str[i]; ++ i) {
        int ch = str[i] - 'a';
        if (trie[ptr][ch] == null) trie[ptr][ch] = ++ idx;
        ptr = trie[ptr][ch];
    }
    ++ cnt[ptr];
}
void build () {
    queue<int> q;
    for (int i = 0; i < 26; ++ i)
        if (trie[root][i] != null)
            q.push(trie[root][i]);
    while (!q.empty()) {
        int cur = q.front();
        q.pop();
        for (int i = 0; i < 26; ++ i) {
            int ptr = trie[cur][i];
            if (ptr == null) {
                trie[cur][i] = trie[fail[cur]][i];
            } else {
                fail[ptr] = trie[fail[cur]][i];
                q.push(ptr);
            }
        }
    }
}

int main () {
    int T;
    scanf("%d", &T);
    while (T --) {
        idx = 0;
        memset(trie, 0, sizeof(trie));
        memset(cnt, 0, sizeof(cnt));
        memset(fail, 0, sizeof(fail));

        scanf("%d", &n);
        for (int i = 1; i <= n; ++ i) {
            scanf("%s", str + 1);
            insert();
        }
        scanf("%s", str + 1);

        build();
        int res = 0;
        for (int i = 1, j = root; str[i]; ++ i) {
            int ch = str[i] - 'a';
            j = trie[j][ch];

            int ptr = j;
            while (ptr != null) {
                res += cnt[ptr];
                cnt[ptr] = 0;
                ptr = fail[ptr];
            }
        }
        printf("%d\n", res);
    }
    return 0;
}
```
