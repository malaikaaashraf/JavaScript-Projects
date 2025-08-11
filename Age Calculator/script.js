let calculateBtn = document.querySelector(".calculateBtn");
let displayAge = document.querySelector(".displayAge");
const dateInput = document.getElementById("enterDate");
dateInput.max = new Date().toISOString().split("T")[0];

calculateBtn.addEventListener("click", getDateParts);
function getDateParts() {
  const dateInput = document.getElementById("enterDate").value; // Format: yyyy-mm-dd
  if (!dateInput) {
    alert("No date selected.");
    return;
  }

  const dateObj = new Date(dateInput);

  const date = dateObj.getDate(); // dd
  const month = dateObj.getMonth() + 1; // mm (0-indexed, so add 1)
  const year = dateObj.getFullYear(); // yyyy
  let today = new Date();
  let allMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  let tdate = today.getDate();
  let tmonth = today.getMonth() + 1;
  let tyear = today.getFullYear();
  let displayYear, displayMonth, displayDate;
  if (date > tdate) {
    tdate = tdate + allMonth[tmonth - 1];
    tmonth = tmonth - 1;
  }
  if (month > tmonth) {
    tmonth = tmonth + 12;
    tyear = tyear - 1;
  }
  displayYear = tyear - year;
  displayMonth = tmonth - month;
  displayDate = tdate - date;
  displayAge.innerHTML = `You are ${displayYear} year, ${displayMonth} month and ${displayDate} days old!`;

  // console.log(`Day: ${day}`);
  // console.log(`Month: ${month}`);
  // console.log(`Year: ${year}`);
}
