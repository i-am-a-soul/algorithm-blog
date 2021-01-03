# `floyd`

## 原理

见《进阶指南》第`358`页。

## 代码

```cpp
void floyd () {
    for (int k = 1; k <= n; ++ k)
        for (int i = 1; i <= n; ++ i)
            for (int j = 1; j <= n; ++ j)
                dis[i][j] = min(dis[i][j], dis[i][k] + dis[k][j]);
}
```

