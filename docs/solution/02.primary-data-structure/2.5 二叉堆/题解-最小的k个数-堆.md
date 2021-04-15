# 最小的`k`个数

[LeetCode-剑指 Offer 40-最小的k个数](https://leetcode-cn.com/problems/zui-xiao-de-kge-shu-lcof/)

## 分析

`Top K`问题。

## 实现

```cpp
class Solution {
public:
    vector<int> getLeastNumbers(vector<int>& arr, int k) {
        if (k == 0) return {};
        priority_queue<int> pq;
        for (int i = 0; i < k; ++ i) pq.push(arr[i]);

        for (int i = k; i < arr.size(); ++ i) {
            if (arr[i] < pq.top()) {
                pq.pop();
                pq.push(arr[i]);
            }
        }

        vector<int> res;
        while (!pq.empty()) {
            res.push_back(pq.top());
            pq.pop();
        }
        return res;
    }
};
```

