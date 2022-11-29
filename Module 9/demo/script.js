const apiCall = async () => {
  return "<script>alert('hello');</script>";
};

const setInnerHTML = (elm, html) => {
  elm.innerHTML = html;
  Array.from(elm.querySelectorAll('script')).forEach((oldScript) => {
    const newScript = document.createElement('script');
    Array.from(oldScript.attributes).forEach((attr) =>
      newScript.setAttribute(attr.name, attr.value)
    );
    newScript.appendChild(document.createTextNode(oldScript.innerHTML));
    oldScript.parentNode.replaceChild(newScript, oldScript);
  });
};

const onClick = async () => {
  const apiResp = await apiCall();

  const mainBody = document.getElementById('mainBody');

  setInnerHTML(mainBody, apiResp);
};
