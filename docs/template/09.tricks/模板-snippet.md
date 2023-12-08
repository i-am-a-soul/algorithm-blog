# `C++ snippet`

## 代码

```json
{
	"No_001": {
		"prefix": "start",
		"body": [
			"#include <iostream>",
			"using namespace std;",
			"",
			"$0",
			"",
			"int main () {",
			"\t",
			"\treturn 0;",
			"}",
		],
		"description": "",
	},
	"No_002": {
		"prefix": "redirect",
		"body": [
			"freopen(\"in.txt\", \"r\", stdin);",
		],
		"description": "",
	},
	"No_003": {
		"prefix": "f",
		"body": [
			"for (int i = 1; i <= n; ++ i)",
		],
		"description": "",
	},
	"No_004": {
		"prefix": "fm",
		"body": [
			"for (int i = 1, u, v$1; i <= m$2; ++ i) {",
			"\tscanf(\"%d%d$0",
		],
		"description": "",
	},
	"No_005": {
		"prefix": "fe",
		"body": [
			"for (int i = head[cur]; i != -1; i = e[i].next) {",
			"\tint to = e[i].to",
		],
		"description": "",
	},
	"No_006": {
		"prefix": "i3",
		"body": [
			"#define inf 0x3f3f3f3f",
		],
		"description": "",
	},
	"No_007": {
		"prefix": "i7",
		"body": [
			"#define inf 0x7fffffff",
		],
		"description": "最大的int",
	},
	"No_008": {
		"prefix": "dir",
		"body": [
			"int dirx[4] = { -1, 1, 0, 0 };",
			"int diry[4] = { 0, 0, -1, 1 };",
		],
		"description": "四连通",
	},
	"No_009": {
		"prefix": "ae",
		"body": [
			"void add_edge (int u, int v) {",
			"\te[idx].to = v;",
			"\te[idx].next = head[u];",
			"\thead[u] = idx ++;",
			"}"
		],
		"description": "边不带权",
	},
	"No_010": {
		"prefix": "aew",
		"body": [
			"void add_edge (int u, int v, int w) {",
			"\te[idx].w = w;",
			"\te[idx].to = v;",
			"\te[idx].next = head[u];",
			"\thead[u] = idx ++;",
			"}"
		],
		"description": "边带权",
	},
	"No_011": {
		"prefix": "mh",
		"body": [
			"memset(head, -1, sizeof(head));",
		],
		"description": "",
	},
}
```

