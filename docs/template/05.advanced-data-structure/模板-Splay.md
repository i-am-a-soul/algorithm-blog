# `Splay`

## 原理

右旋（`zig`）：

![](/img/0036.gif)

左旋（`zag`）：

![](/img/0035.gif)

## 模板题

[洛谷-P3369-【模板】普通平衡树](https://www.luogu.com.cn/problem/P3369)

```cpp {116}
#include <iostream>
#define null 0
#define data_key data
#define delete DeLeTe
using namespace std;

typedef int data_type;
const int N = 100010;
struct SplayNode {
    int ls, rs;
    data_type data;
    int cnt;
    int size;
    #define ls(x) t[x].ls
    #define rs(x) t[x].rs
    #define data(x) t[x].data
    #define key(x) t[x].data // 关键码
    #define cnt(x) t[x].cnt
    #define size(x) t[x].size
};
SplayNode t[N];
int tot, root_ptr;

int new_node (data_type data) {
    const int node = ++ tot;
    data(node) = data;
    cnt(node) = size(node) = 1;
    return node;
}
void update (const int rt) {
    size(rt) = cnt(rt) + size(ls(rt)) + size(rs(rt));
}
int zig (const int rt) {
    const int new_root = ls(rt);
    ls(rt) = rs(new_root);
    rs(new_root) = rt;
    update(rt);
    update(new_root);
    return new_root;
}
int zag (const int rt) {
    const int new_root = rs(rt);
    rs(rt) = ls(new_root);
    ls(new_root) = rt;
    update(rt);
    update(new_root);
    return new_root;
}
void splay (const int node, int& ptr) { // ptr -> node
    int &lsp = ls(ptr), &rsp = rs(ptr);
    // ---------- 边界条件 ----------
    if (ptr == node) return;
    if (lsp == node) {
        ptr = zig(ptr);
        return;
    }
    if (rsp == node) {
        ptr = zag(ptr);
        return;
    }

    // ---------- 双旋（四选一） ----------
    if (key(node) < key(ptr)) {
        if (key(node) < key(lsp)) {
            splay(node, ls(lsp));
            ptr = zig(ptr);
            ptr = zig(ptr);
        } else {
            splay(node, rs(lsp));
            lsp = zag(lsp);
            ptr = zig(ptr);
        }
    } else {
        if (key(node) > key(rsp)) {
            splay(node, rs(rsp));
            ptr = zag(ptr);
            ptr = zag(ptr);
        } else {
            splay(node, ls(rsp));
            rsp = zig(rsp);
            ptr = zag(ptr);
        }
    }
}
void insert (int& ptr, data_type data) {
    if (ptr == null) {
        ptr = new_node(data);
        splay(ptr, root_ptr);
        return;
    }
    if (data_key == key(ptr)) {
        ++ cnt(ptr);
        update(ptr);
        splay(ptr, root_ptr);
        return;
    }

    insert(data_key < key(ptr) ? ls(ptr) : rs(ptr), data);
}
void delete (int ptr, int key) {
    if (key(ptr) == key) {
        splay(ptr, root_ptr);
        if (cnt(ptr) >= 2) {
            -- cnt(ptr);
            update(ptr);
        } else if (rs(root_ptr) != null) {
            int p = rs(root_ptr);
            while (ls(p) != null) p = ls(p);
            splay(p, rs(root_ptr));
            ls(rs(root_ptr)) = ls(root_ptr);
            root_ptr = rs(root_ptr);
            update(root_ptr);
        } else {
            root_ptr = ls(root_ptr);
        }
        return;
    }

    delete(key < key(ptr) ? ls(ptr) : rs(ptr), key);
}
int rank_of (int key) {
    int ptr = root_ptr, rank = 1;
    while (ptr != null) {
        if (key(ptr) == key) {
            rank += size(ls(ptr));
            splay(ptr, root_ptr);
            break;
        }

        if (key(ptr) > key) {
            ptr = ls(ptr);
        } else {
            rank += cnt(ptr) + size(ls(ptr));
            ptr = rs(ptr);
        }
    }
    return rank;
}
int key_of (int rank) {
    int ptr = root_ptr;
    while (ptr != null) {
        int lss = size(ls(ptr));
        if (lss + 1 <= rank && rank <= lss + cnt(ptr)) {
            splay(ptr, root_ptr);
            break;
        }

        if (rank <= lss) {
            ptr = ls(ptr);
        } else {
            rank -= cnt(ptr) + lss;
            ptr = rs(ptr);
        }
    }
    return key(ptr);
}

int main () {
    int m;
    scanf("%d", &m);
    while (m --) {
        int opt, x;
        scanf("%d%d", &opt, &x);
        if (opt == 1) insert(root_ptr, x);
        else if (opt == 2) delete(root_ptr, x);
        else if (opt == 3) printf("%d\n", rank_of(x));
        else if (opt == 4) printf("%d\n", key_of(x));
        else if (opt == 5) printf("%d\n", key_of(rank_of(x) - 1));
        else printf("%d\n", key_of(rank_of(x + 1)));
    }
    return 0;
}
```
