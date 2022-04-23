const heading = document.querySelector(".heading").innerHTML;

const jumpText = () => {
  let content = "";
  let tmp = [...heading];

  for (let i of tmp) {
    content += `<span>${i}</span>`;
  }
  document.querySelector(".heading").innerHTML = content;
};

jumpText();
