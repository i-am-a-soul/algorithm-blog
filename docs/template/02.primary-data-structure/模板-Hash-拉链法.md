# `Hash`（拉链法）

## 原理

见《进阶指南》第`64`页。

## 代码

```cpp
const int M = 100003; // 质数
vector<int> h[M];

int get_index (int hash_value) {
    return (hash_value % M + M) % M;
}
void insert (node a) {
    int idx = get_index(get_hash_value(a));
    h[idx].push_back(a);
}
bool find (node a) {
    int idx = get_index(get_hash_value(a));
    for (int i = 0; i < h[idx].size(); ++ i)
        if (h[idx][i] == a)
            return true;
    return false;
}
```

