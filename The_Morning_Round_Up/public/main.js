const fortuneButton = document.getElementById("fortuneButton");

const getFortune = () => {
  axios
    .get("http://localhost:4000/api/fortune/")
    .then((res) => {
      const data = res.data;
      alert(data);
    })
    .catch((e) => {
      console.log(e);
      alert("Error!");
    });
};

fortuneButton.addEventListener("click", getFortune);
