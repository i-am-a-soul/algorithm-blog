# 八数码

[AcWing-179-八数码](https://www.acwing.com/problem/content/description/181/)

## 分析

见《进阶指南》第`127`页。

## 实现

```cpp
#include <iostream>
#include <unordered_map>
#include <queue>
#include <algorithm>
using namespace std;

typedef pair<char, string> PCS;
int dirx[4] = { -1, 1, 0, 0 };
int diry[4] = { 0, 0, -1, 1 };
char opt[4] = { 'u', 'd', 'l', 'r' };
struct node {
    string str;
    int val;
    bool operator < (const node& o) const {
        return val > o.val;
    }
};

bool check (const string& str) {
    int cnt = 0;
    for (int i = 0; i < str.size(); ++ i) {
        if (str[i] == 'x') continue;
        for (int j = 0; j < i; ++ j) {
            if (str[j] == 'x') continue;
            if (str[j] > str[i]) ++ cnt;
        }
    }
    return cnt % 2 == 0;
}
int f (const string& str) {
    int res = 0;
    for (int i = 0; i < str.size(); ++ i) {
        if (str[i] == 'x') continue;
        int target = str[i] - '1';
        res += abs(i / 3 - target / 3) + abs(i % 3 - target % 3);
    }
    return res;
}
string A_star (const string& beg) {
    string end = "12345678x";
    unordered_map<string, int> dis;
    unordered_map<string, PCS> prev;
    priority_queue<node> pq;

    dis[beg] = 0;
    pq.push({ beg, dis[beg] + f(beg) });
    while (!pq.empty()) {
        node cur = pq.top();
        pq.pop();
        if (cur.str == end) break;

        int z = cur.str.find('x'), x = z / 3, y = z % 3;
        for (int i = 0; i < 4; ++ i) {
            int nx = x + dirx[i], ny = y + diry[i];
            if (nx < 0 || nx > 2 || ny < 0 || ny > 2) continue;
            string next = cur.str;
            swap(next[x * 3 + y], next[nx * 3 + ny]);
            if (dis.find(next) == dis.end() || dis[next] > dis[cur.str] + 1) {
                dis[next] = dis[cur.str] + 1;
                prev[next] = { opt[i], cur.str };
                pq.push({ next, dis[next] + f(next) });
            }
        }
    }
    string res, ptr = end;
    while (ptr != beg) {
        res += prev[ptr].first;
        ptr = prev[ptr].second;
    }
    reverse(res.begin(), res.end());
    return res;
}

int main () {
    string str;
    char ch;
    while (cin >> ch) str += ch;

    cout << (check(str) == true ? A_star(str) : "unsolvable") << endl;
    return 0;
}
```

