function faq(ele) {
  const answer = ele.nextElementSibling;
  const icon = ele.querySelector('.icon');
 console.log(ele);
 console.log(answer);
  // Toggle visibility
  answer.classList.toggle('active');
  icon.classList.toggle('rotate');
}

