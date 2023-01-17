// 1-1
// filter by only color
export const FilterColor = (data, color) => {
  let filterColor;
  color.forEach((el) => {
    let c = data?.filter((clr) => clr.color === el);
    filterColor = [...c];
  });

  return filterColor;
};

//filter by only gender
export const FilterGender = (data, gender) => {
  let filterGender;
  gender.forEach((el) => {
    let g = data?.filter((clr) => clr.gender === el);
    filterGender = [...g];
  });

  return filterGender;
};

//filter only price
export const FilterPrice = (data, price) => {
  let filterPrice = data?.filter(
    (el) =>
      Number(el.price) >= Number(price[0]) &&
      Number(el.price) <= Number(price[1])
  );
  return filterPrice;
};

// filter by only type
export const FilterType = (data, type) => {
  let filterType;
  type.forEach((el) => {
    let t = data?.filter((clr) => clr.type === el);
    filterType = [...t];
  });

  return filterType;
};
// 1-2
// filter by color and gender
export const FilterColorAndGender = (data, color, gender) => {
  let newData;
  color.forEach((el) => {
    let c = data?.filter((clr) => clr.color === el);
    newData = [...c];
  });

  gender.forEach((el) => {
    let g = data?.filter((clr) => clr.gender === el);
    newData = [...g];
  });

  return newData;
};

// filter by gender and price;
export const FilterGenderAndPrice = (data, gender, price) => {
  let filterPrice = data?.filter(
    (el) =>
      Number(el.price) >= Number(price[0]) &&
      Number(el.price) <= Number(price[1])
  );
  let newData;
  gender.forEach((el) => {
    let g = filterPrice?.filter((clr) => clr.gender === el);
    newData = [...g];
  });

  return newData;
};

// filter by price and type
export const FilterPriceAndType = (data, price, type) => {
  let filterPrice = data?.filter(
    (el) =>
      Number(el.price) >= Number(price[0]) &&
      Number(el.price) <= Number(price[1])
  );
  let newData;

  type.forEach((el) => {
    let t = filterPrice?.filter((clr) => clr.type === el);
    newData = [...t];
  });

  return newData;
};

//filter by price and color
export const FilterPriceAndColor = (data, price, color) => {
  let filterPrice = data?.filter(
    (el) =>
      Number(el.price) >= Number(price[0]) &&
      Number(el.price) <= Number(price[1])
  );
  let newData;
  color.forEach((el) => {
    let c = filterPrice?.filter((clr) => clr.color === el);
    newData = [...c];
  });

  return newData;
};

// filter by color and type
export const FilterColorAndType = (data, color, type) => {
  let newData;
  color.forEach((el) => {
    let c = data?.filter((clr) => clr.color === el);
    newData = [...c];
  });

  type.forEach((el) => {
    let t = data?.filter((clr) => clr.type === el);
    newData = [...t];
  });
  return newData;
};

// filter by gender and type
export const FilterGenderAndType = (data, gender, type) => {
  let newData;
  gender.forEach((el) => {
    let g = data?.filter((clr) => clr.gender === el);
    newData = [...g];
  });

  type.forEach((el) => {
    let t = data?.filter((clr) => clr.type === el);
    newData = [...t];
  });

  return newData;
};

// 1-2-3
// filter by color , gender and price;
export const FilterColorGenderAndPrice = (data, color, gender, price) => {
  let newData;
  let filterPrice = data?.filter(
    (el) =>
      Number(el.price) >= Number(price[0]) &&
      Number(el.price) <= Number(price[1])
  );
  let filterColor;
  color.forEach((el) => {
    let c = filterPrice?.filter((clr) => clr.color === el);
    filterColor = [...c];
  });
  gender.forEach((el) => {
    let g = filterColor?.filter((clr) => clr.gender === el);
    newData = [...g];
  });

  return newData;
};

// filter by color , price and type;
export const FilterColorPriceAndType = (data, color, price, type) => {
  let newData;
  let filterPrice = data?.filter(
    (el) =>
      Number(el.price) >= Number(price[0]) &&
      Number(el.price) <= Number(price[1])
  );
  let filterColor;
  color.forEach((el) => {
    let c = filterPrice?.filter((clr) => clr.color === el);
    filterColor = [...c];
  });
  type.forEach((el) => {
    let t = filterColor?.filter((clr) => clr.type === el);
    newData = [...t];
  });
  return newData;
};

// filter by price , gender and type;
export const FilterPriceGenderAndType = (data, price, gender, type) => {
  let newData;
  let filterPrice = data?.filter(
    (el) =>
      Number(el.price) >= Number(price[0]) &&
      Number(el.price) <= Number(price[1])
  );
  let filterGender;
  gender.forEach((el) => {
    let g = filterPrice?.filter((clr) => clr.gender === el);
    filterGender = [...g];
  });
  type.forEach((el) => {
    let t = filterGender?.filter((clr) => clr.type === el);
    newData = [...t];
  });
  return newData;
};

// filter by gender ,color and type;

export const FilterGenderColorAndType = (data, gender, color, type) => {
  let newData;
  let filterGender;
  gender.forEach((el) => {
    let g = data?.filter((clr) => clr.gender === el);
    filterGender = [...g];
  });

  let filterColor;
  color.forEach((el) => {
    let c = filterGender?.filter((clr) => clr.color === el);
    filterColor = [...c];
  });

  type.forEach((el) => {
    let t = filterColor?.filter((clr) => clr.type === el);
    newData = [...t];
  });
  return newData;
};

// 1 2 3 4
// filter by price , color , gender and type ;
export const FilterByAll = (data, price, color, gender, type) => {
  let newData;
  let filterPrice = data?.filter(
    (el) =>
      Number(el.price) >= Number(price[0]) &&
      Number(el.price) <= Number(price[1])
  );
  let filterColor;
  color.forEach((el) => {
    let c = filterPrice?.filter((clr) => clr.color === el);
    filterColor = [...c];
  });
  let filterGender;
  gender.forEach((el) => {
    let g = filterColor?.filter((clr) => clr.gender === el);
    filterGender = [...g];
  });

  type.forEach((el) => {
    let t = filterGender?.filter((clr) => clr.type === el);
    newData = [...t];
  });
  return newData;
};
