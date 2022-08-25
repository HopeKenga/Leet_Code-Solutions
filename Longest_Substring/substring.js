//Given a string s, find the length of the longest substring without repeating characters.
var lengthOfLongestSubstring = function (s) {

    let longestStringLength = 0;
        startofWindow = 0;
        currentPosition = 0;

        let characterSet = new Set();

        while (currentPosition < s.length) {

            if (characterSet.has(s[currentPosition])) {
                characterSet.delete(s[startofWindow]);
        } else {
            characterSet.add(s[currentPosition++]);
            longestStringLength = Math.max(
                longesrStringLength,
                characterSet.size
            );
        }
    }
    return longestStringLength;

}