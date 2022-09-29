const summary = (id) => {
  // console.log(id);
  const sum = id.reduce((p, c) => p + Number(c), 0);
  return sum;
};

const time = (id) => {
  console.log(id);
  localStorage.setItem('item',JSON.stringify(id));
};

export { summary, time };
