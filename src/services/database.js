const save = (data) => {
  const totalData = list();

  const d = {
    ...data,
    id: generateUid(),
  };

  totalData.push(d);
  localStorage.setItem("items", JSON.stringify(totalData));
};

const update = (data, id) => {
  const totalData = list();
  const index = totalData.findIndex((item) => item.id == id);
  totalData[index] = data;

  localStorage.setItem("items", JSON.stringify(totalData));
};

const remove = (id) => {
  const totalData = list();
  const index = totalData.findIndex((item) => item.id == id);
  delete totalData[index];

  localStorage.setItem("items", JSON.stringify(totalData));
};

const get = (id) => {
  const totalData = list();

  return totalData.find((item) => item.id == id);
};

const list = () => {
  const data = localStorage.getItem("items");
  if (data) {
    return JSON.parse(data);
  } else {
    return [];
  }
};

const generateUid = () => {
  return "uid-" + Math.random().toString(36).substr(2, 18);
};

export { save, update, remove, get, list };
