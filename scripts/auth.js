const login = (name, password) => {
  fetch('./../bd/auth.json')
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    data.forEach(item => {
      if (name == item.name && password == item.password){
        localStorage.setItem('user', JSON.stringify(item));
        formLogin.style.display = "none";
        authName.textContent = item.name;
        authName.style.display = "flex";
        authLogout.style.display = "flex";
        authLogin.style.display = "none";
        incorrectAuth.style.display = 'none';
      }
      else{
        inputPassword.value = "";
        incorrectAuth.style.display = 'block';
      }
    });
  })
}


if(localStorage.getItem('user') == null){
  authName.style.display = "none";
  authLogout.style.display = "none";
  authLogin.style.display = "flex";
} else{
  authName.style.display = "flex";
  authName.textContent = JSON.parse(localStorage.getItem("user")).name
  authLogout.style.display = "flex";
  authLogin.style.display = "none";
}
  authLogin.addEventListener('click', () => {
    formLogin.style.display = "block";
  })
  loginExit.addEventListener('click', () => {
    formLogin.style.display = "none";
  })
  authLogout.addEventListener('click', () => {
    localStorage.removeItem("user");
    authName.style.display = "none";
    authLogout.style.display = "none";
    authLogin.style.display = "flex";
  })

  butLogin.addEventListener("click", (e) => {
    e.preventDefault();

    console.log(inputLogin.value);
    console.log(inputPassword.value);
    login(inputLogin.value, inputPassword.value);
  })
