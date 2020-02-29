const includesArray = () => {
  const ob1 = { id: 1 };
  const ob2 = { id: 2 };
  const ob3 = { id: 3 };

  const ob = makeObject();
  const id = makeID();

  const newestArray = [ob1, ob2, ob3];
  return newestArray.includes(ob1);
};

const makeObject = ob => {
  const ob = ob;
  return;
};

const makeID = ({ id }) => {
  const id = id;
  return;
};

export default includesArray;
