const findConsult = (array, id) => {
  console.log(array);
  console.log(id);
  const moshaver = array.filter((moshaver) => {
    console.log(moshaver);
    if (moshaver.moshaver_id == id) return moshaver;
  });
  console.log(moshaver);
  return moshaver;
};

export default findConsult;
