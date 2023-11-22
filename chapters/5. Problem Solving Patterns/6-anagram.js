function isAnagram(word1, word2) {
  const frequencyCounter1 = {};
  const frequencyCounter2 = {};

  // minimize work
  // return false if words are not the same length
  if (word1.length !== word2.length) return false;

  // create frequency counters
  for (let char of word1) {
    frequencyCounter1[char] = (frequencyCounter1[char] ?? 0) + 1;
  }

  for (let char of word2) {
    frequencyCounter2[char] = (frequencyCounter2[char] ?? 0) + 1;
  }

  // run through one the frequency counters and check
  for (let key in frequencyCounter1) {
    // that the key also exist in the other frequency counter
    // and that the value for each key is the same in each counter
    if (
      !frequencyCounter2[key] ||
      frequencyCounter1[key] !== frequencyCounter2[key]
    )
      return false;
  }

  return true;
}

console.log("1", isAnagram("", ""));
console.log("2", isAnagram("aaz", "zza"));
console.log("3", isAnagram("anagram", "nagaram"));
console.log("4", isAnagram("rat", "car"));
console.log("5", isAnagram("cesar", "cesar"));
console.log("6", isAnagram("awesome", "awesom"));
console.log("7", isAnagram("qwerty", "qeywrt"));
console.log("8", isAnagram("texttwisttime", "timetwisttext"));
