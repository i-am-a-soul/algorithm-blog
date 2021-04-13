const prefix = '/solution/01.primary-algorithm/'

module.exports = {
    getPrimaryAlgorithmSidebar: () => [{
        title: '位运算',
        children: [
            prefix + '1.1 位运算/题解-起床困难综合症-位运算.md',
            prefix + '1.1 位运算/题解-只出现一次的数字-位运算.md',
        ],
    }, {
        title: '递推与递归',
        children: [
			prefix + '1.2 递推与递归/题解-费解的开关-枚举.md',
			prefix + '1.2 递推与递归/题解-汉诺塔问题-递归.md',
			prefix + '1.2 递推与递归/题解-约数之和-分治.md',
			prefix + '1.2 递推与递归/题解-分形之城-分形.md',
            prefix + '1.2 递推与递归/题解-Fractal-分形.md', 
        ],
    }, {
        title: '前缀和与差分',
        children: [
            prefix + '1.3 前缀和与差分/题解-增减序列-差分.md',
            prefix + '1.3 前缀和与差分/题解-最高的牛-差分.md',
        ],
    }, {
        title: '二分',
        children: [
            prefix + '1.4 二分/题解-最佳牛围栏-最大化平均值.md',
			prefix + '1.4 二分/题解-防线-二分答案.md',
			prefix + '1.4 二分/题解-4 Values whose Sum is 0-中途相遇法.md',
        ],
    }, {
        title: '排序',
        children: [
			prefix + '1.5 排序/题解-货仓选址-中位数.md',
			prefix + '1.5 排序/题解-数组中的第K个最大元素-快排思想.md',
			prefix + '1.5 排序/题解-逆序对的数量-归并排序.md',
			prefix + '1.5 排序/题解-区间合并-排序.md',
        ],
    }, {
        title: '倍增',
        children: [
			prefix + '1.6 倍增/题解-谜一样的牛-树状数组+倍增.md',
        ],
    }, {
        title: '贪心',
        children: [
			prefix + '1.7 贪心/题解-防晒-贪心.md',
			prefix + '1.7 贪心/题解-畜栏预定-贪心.md',
            prefix + '1.7 贪心/题解-雷达设备-贪心.md',
			prefix + '1.7 贪心/题解-超市-贪心.md',
			prefix + '1.7 贪心/题解-最长上升子序列-贪心.md',
        ],
    }, {
        title: '双指针',
        children: [
            prefix + '1.8 双指针/题解-两数之和-双指针.md',
            prefix + '1.8 双指针/题解-数组元素的目标和-双指针.md',
            prefix + '1.8 双指针/题解-最长连续不重复子序列-双指针.md',
        ],
    }],
}