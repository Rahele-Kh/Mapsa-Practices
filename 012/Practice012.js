const summary = (text, length) => {
  const a = text.substring(0, length);
  console.log(`${a}...`);
};

const secretCard = (num) => {
  const b = string(num).substring(0, 12);
  console.log(`${b}****`);
};

const censor = (text, word) => {
  const c = text.replaceall(word, "*".repeat(word.length));
  console.log(c);
};

const level = (exprience) => {
  if (exprience >= 2) {
    console.log(`Junior`);
  } else if (expriene >= 5) {
    console.log(`Mid Level`);
  } else {
    console.log(`Senior`);
  }
};
