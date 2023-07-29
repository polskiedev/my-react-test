const componentClass = '--ac-tabify';

function TabifyComponentBehaviour() {
  const tabBtns = document.querySelectorAll('.tab_btn');
  const contents = document.querySelectorAll('.content');

  tabBtns.forEach((btn, index) => {
    btn.addEventListener('click', (e) => {
      tabBtns.forEach((btn) => btn.classList.remove('active'));
      contents.forEach((content) => content.classList.remove('active'));

      btn.classList.add('active');
      contents[index].classList.add('active');

      const line = document.querySelector(`.${componentClass} .line`);
      line.style.width = e.target.offsetWidth + 'px';
      line.style.left = e.target.offsetLeft + 'px';
    });
  });
  
  if(tabBtns.length >= 1) tabBtns[0].click();
}

export default TabifyComponentBehaviour;
