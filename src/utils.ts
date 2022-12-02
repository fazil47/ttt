/**
 * Returns the `numItems` most common words from text in descending order of frequency.
 * @param {string} text - The text to analyze.
 * @param {number} numItems - The number of items to return.
 */
export function getCommonWordMap(
  text: string,
  numItems: number
): Map<string, number> {
  const wordCounts = new Map<string, number>();

  // Store the count of each word in the map
  text.split(" ").forEach((word) => {
    const currentCount = wordCounts.get(word) || 0;
    wordCounts.set(word, currentCount + 1);
  });

  console.log(wordCounts);

  // Sort wordCounts in descending order of count
  const sortedWordCounts = new Map(
    Array.from(wordCounts.entries())
      .sort((a, b) => b[1] - a[1])
      .slice(0, numItems)
  );

  console.log(sortedWordCounts);

  return sortedWordCounts;
}
