const HandleInputChange = (field, value, data, setData) => {
  setData({ ...data, [field]: value });
};

export { HandleInputChange };
