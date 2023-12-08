# 只出现一次的数字 `II`

[LeetCode-137-只出现一次的数字 II](https://leetcode-cn.com/problems/single-number-ii/)

## 实现

```cpp
class Solution {
    int cnt[32];
public:
    int singleNumber(vector<int>& nums) {
        for (int i = 0; i < nums.size(); ++ i)
            for (int j = 0; j < 32; ++ j)
                if ((nums[i] >> j) & 1)
                    ++ cnt[j];
        
        for (int i = 0; i < 32; ++ i) cnt[i] %= 3;
        int res = 0;
        for (int i = 0; i < 31; ++ i)
            res += cnt[i] * pow(2, i);
        res -= cnt[31] * pow(2, 31); // 符号位
        return res;
    }
};
```

