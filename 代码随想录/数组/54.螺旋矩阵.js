/*
 * @lc app=leetcode.cn id=54 lang=javascript
 *
 * [54] 螺旋矩阵
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function (matrix) {
  if (matrix[0].length === 1) return matrix.flat();
  let res = [];
  let [left, right, top, bottom] = [
    0,
    matrix[0].length - 1,
    0,
    matrix.length - 1,
  ]; //边界

  while (left <= right && top <= bottom) {
    for (let i = left; i <= right; i++) {
      res.push(matrix[top][i]);
    }
    for (let i = top + 1; i <= bottom; i++) {
      res.push(matrix[i][right]);
    }
    if (top + 1 > bottom || left >= right) return res;
    for (let i = right - 1; i >= left; i--) {
      res.push(matrix[bottom][i]);
    }
    for (let i = bottom - 1; i > top; i--) {
      res.push(matrix[i][left]);
    }
    left++;
    top++;
    right--;
    bottom--;
  }
  return res;
};
// @lc code=end
