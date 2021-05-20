// palindrome

// init stack

const isPali = (word) => {
  const letters = [];
  let rword = "";

  for (i = 0; i < word.length; i++) {
    letters.push(word[i]);
  }

  for (let i = 0; i < word.length; i++) {
    rword += letters.pop();
  }
  console.log(rword);
};

var isPalindrome = function (s) {
  s = s.replace(/\W/g, "").toLowerCase();
  var letters = [];
  var rev = "";

  for (i = 0; i < s.length; i++) {
    letters.push(s[i]);
  }
  letters = letters.filter((item) => item != " ");
  var arrLen = letters.length;

  for (i = 0; i < arrLen; i++) {
    rev += letters.pop();
  }

  rev == s ? true : false;
};

isPalindrome("A man, a plan, a canal: Panama");
