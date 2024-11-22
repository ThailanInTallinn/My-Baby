const handleChange = (data, setData, value, field) => {
  const d = data;
  d[field].value = value;
  setData((data) => ({
    ...data,
    ...d,
  }));
};

export { handleChange };
