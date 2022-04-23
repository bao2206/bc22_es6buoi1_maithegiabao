const avgCal = (...score) => {
  let avg = 0;

  for (let i in score) {
    avg += score[i];
  }
  return avg / score.length;
};

getEle("btnKhoi1").onclick = () => {
  let math = getEle("inpToan").value * 1;
  let physical = getEle("inpLy").value * 1;
  let chemistry = getEle("inpHoa").value * 1;

  getEle("tbKhoi1").innerHTML = avgCal(math, physical, chemistry);
  //   avgCal(math, physical, chemistry);
};

getEle("btnKhoi2").onclick = () => {
  let literal = getEle("inpVan").value * 1;
  let history = getEle("inpSu").value * 1;
  let geography = getEle("inpDia").value * 1;
  let english = getEle("inpEnglish").value * 1;

  getEle("tbKhoi2").innerHTML = avgCal(literal, history, geography, english);
};
function getEle(id) {
  return document.getElementById(id);
}
