const HandleInputChange = (field, value, data, setData) => {
  setData({ ...data, [field]: value });
};

const selectType = (type, data, setData) => {
  setData({ ...data, type });
};

export { HandleInputChange, selectType };
