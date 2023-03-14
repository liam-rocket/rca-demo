const apiCall = () => "<script>alert('hello');</script>";

const onClick = async () => {
  const apiResp = apiCall();
  const mainBody = document.getElementById('mainBody');
  mainBody.innerHTML = apiResp;
};

// const newOnClick = () => {
//   const targetElement = document.getElementById('mainBody');
//   const script = document.createElement('script');
//   script.textContent = "alert('hello');";
//   targetElement.appendChild(script);
// };
