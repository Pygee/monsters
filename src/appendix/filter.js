const myArrayFilter = () => {
  const myArr = [1, 3, 5, 7, 9];
  const myText = ["Pizza", "Pie", "Burger"];

  const test = myText.filter(el => el.toLowerCase(el) === "pizza");

  const test2 = myArr.filter(el => el > 8);
  return { test, test2 };
};

export default myArrayFilter;
