function readSolution(dp, firstWord, secondWord, i, j) {
  if (i === 0 || j === 0) return '';

  if (firstWord.charAt(i - 1) === secondWord.charAt(j - 1)) {
    return readSolution(dp, secondWord, firstWord, i - 1, j - 1) + firstWord[i - 1];
  }

  if (dp[i][j - 1] > dp[i - 1][j]) {
    return readSolution(dp, secondWord, firstWord, i, j - 1);
  }
  return readSolution(dp, secondWord, firstWord, i - 1, j);
}

/**
 * Calculates GCD of two numbers
 * @param  {String} firstWord First string
 * @param  {String} secondWord Second String
 * @return {String} One of the possbile longest common subsequence for given inputs
 *
 * References: https://en.wikipedia.org/wiki/Longest_common_subsequence_problem
 */

function longestcommonsubsequence(firstWord = '', secondWord = '') {
  const firstWordSize = firstWord.length;
  const secondWordSize = secondWord.length;
  if (secondWordSize === 0) {
    return '';
  }

  if (firstWordSize === 0) {
    return '';
  }
  const dp = [...Array(firstWordSize + 1)].map(() => Array(secondWordSize + 1));

  for (let i = 0; i <= firstWordSize; i += 1) {
    dp[i][0] = 0;
  }

  for (let i = 0; i <= secondWordSize; i += 1) {
    dp[0][i] = 0;
  }

  for (let i = 1; i <= firstWordSize; i += 1) {
    for (let j = 1; j <= secondWordSize; j += 1) {
      if (firstWord.charAt(i - 1) === secondWord.charAt(j - 1)) {
        dp[i][j] = dp[i - 1][j - 1] + 1;
      } else {
        dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
      }
    }
  }
  return readSolution(dp, firstWord, secondWord, firstWordSize, secondWordSize);
}

module.exports = longestcommonsubsequence;
