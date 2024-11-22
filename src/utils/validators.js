const validateEmail = (email) => {
  const emailRegexPattern = /^[^\s@]+@[^\s@]+$/;
  if (email == "") {
    return { error: true, helperText: "O campo de e-mail é obrigatório" };
  } else if (!emailRegexPattern.test(email)) {
    return { error: true, helperText: "E-mail inválido" };
  } else {
    return { error: false, helperText: null };
  }
};

export { validateEmail };
