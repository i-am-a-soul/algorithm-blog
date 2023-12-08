# `C++ STL`

见《进阶指南》第`456`页。

## `string`

```cpp
// 1. C风格字符串
str.c_str();

// 2.
getline(cin, str);

// 3. find
int pos = str.find("cc");
if (pos != str.npos) // 成功
    cout << pos << endl;
str.find("cc", 3); // 在 [3, end) 中查找 cc

// 4. replace
string s1 = "abcdef", s2 = "xyz";
s1.replace(2, 2, s2, 0, 3); // "cd" -> "xyz"
cout << s1 << endl; // abxyzef
```

## `vector`

```cpp
// 1.
vector<vector<int>> a(N, vector<int>(M, 0)); // int a[N][M]

// 2.
a.insert(迭代器, val); // 在迭代器前插入 val
```

## `map/multimap`

```cpp
// 1. 遍历
for (auto i = h.begin(); i != h.end(); ++ i)
    printf("key: %d value: %d\n", i -> first, i -> second);

// 2.
multimap<int, int> h;
h.insert({ 1, 1 });
h.insert({ 1, 2 });
h.insert({ 1, 3 });
h.insert({ 1, 1 });
printf("%d\n", h.count(1));
auto beg = h.lower_bound(1), end = h.upper_bound(1);
for (auto i = beg; i != end; ++ i)
    printf("key: %d value: %d\n", i -> first, i -> second);
输出：
4
key: 1 value: 1
key: 1 value: 2
key: 1 value: 3
key: 1 value: 1
```

## `priority_queue`

```cpp
// 1. 小顶堆
priority_queue<int, vector<int>, greater<int>> pq;
```

## `algorithm`

```cpp
// 1.
fill(a + 1, a + n + 1, 233);

// 2.
int pos = lower_bound(a + 1, a + n + 1, val) - a; // 升序排序

// 3.
int cnt = upper_bound(a + 1, a + n + 1, val)
    - lower_bound(a + 1, a + n + 1, val);

// 4.
int atoi (const char* p);
```
