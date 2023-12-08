# 编辑距离

[LeetCode-72-编辑距离](https://leetcode-cn.com/problems/edit-distance/)

## 实现

```cpp
class Solution {
    int f[1010][1010];
public:
    int minDistance(string word1, string word2) {
        int n = word1.size(), m = word2.size();
        word1 = '#' + word1, word2 = '#' + word2;

        for (int i = 0; i <= n; ++ i) f[i][0] = i;
        for (int j = 0; j <= m; ++ j) f[0][j] = j;

        for (int i = 1; i <= n; ++ i) {
            for (int j = 1; j <= m; ++ j) {
                int x = f[i - 1][j] + 1,
                    y = f[i][j - 1] + 1,
                    z = f[i - 1][j - 1] + (word1[i] != word2[j]);
                f[i][j] = min(x, min(y, z));
            }
        }
        return f[n][m];
    }
};
```

