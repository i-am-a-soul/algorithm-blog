# 最长回文子串

[51Nod-1088-最长回文子串](https://vjudge.net/problem/51Nod-1088)

## 实现

```cpp
#include <iostream>
#include <cstring>
using namespace std;

const int N = 1010;
int n;
char str[N];
bool f[N][N];

int main () {
    scanf("%s", str + 1);
    
    n = strlen(str + 1);
    for (int i = 1; i <= n; ++ i) f[i][i] = true;
    for (int j = 1; j <= n; ++ j) {
        for (int i = 1; i < j; ++ i) {
            if (j == i + 1) {
                f[i][j] = (str[i] == str[j]);
            } else {
                f[i][j] = (str[i] == str[j]) && f[i + 1][j - 1];
            }
        }
    }

    int res = 0;
    for (int i = 1; i <= n; ++ i)
        for (int j = i; j <= n; ++ j)
            if (f[i][j] == true)
                res = max(res, j - i + 1);
    printf("%d", res);
    return 0;
}
```

