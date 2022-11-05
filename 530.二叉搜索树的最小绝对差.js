/*
 * @lc app=leetcode.cn id=530 lang=javascript
 *
 * [530] 二叉搜索树的最小绝对差
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var getMinimumDifference = function (root) {
  let pre = -Infinity;
  let min = Infinity;
  const dfs = (node) => {
    if (!node) return;
    dfs(node.left);
    min = Math.min(min, node.val - pre);
    pre = node.val;
    dfs(node.right);
  };
  dfs(root);
  return min;
  // 中序遍历秒杀
};
// @lc code=end
