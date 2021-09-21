const mathematics = (type, value1, value2) => {
  const types = type || "undefined";
  const values1 = value1 || 0;
  const values2 = value2 || 0;
  let message;

  if (types === "undefined") {
    message = `the first parameter was not passed and was changed to ${types}.`;
  } else if (values1 === 0) {
    message = `the second parameter was not passed and its value was changed to ${values1}.`;
  } else if (values2 === 0) {
    message = `the third parameter was not passed and its value was changed to ${values2}.`;
  } else {
    switch (types) {
      case "add":
        return `Result: ${value1 + value2}`;
      case "mult":
        return `Result: ${value1 * value2}`;
      case "div":
        return `Result: ${value1 / value2}`;
      case "sub":
        return `Result: ${value1 - value2}`;
      default:
        break;
    }
  }

  return message;
};

const arg = process.argv[2];
const arg1 = Number(process.argv[3]);
const arg2 = Number(process.argv[4]);

console.log(mathematics(arg, arg1, arg2));
