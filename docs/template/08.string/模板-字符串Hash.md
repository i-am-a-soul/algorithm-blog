# 字符串`Hash`

## 原理

见《进阶指南》第`67`页。

## 代码

```cpp
typedef unsigned long long ULL;
const int N = 1000010;
ULL p[N], h[N];

ULL get_substr_hash_value (int l, int r) {
    return h[r] - p[r - l + 1] * h[l - 1];
}

p[0] = 1;
for (int i = 1; i <= 1000000; ++ i)
    p[i] = 131 * p[i - 1]; // 或 13331
for (int i = 1; i <= n; ++ i)
    h[i] = 131 * h[i - 1] + str[i];
```

