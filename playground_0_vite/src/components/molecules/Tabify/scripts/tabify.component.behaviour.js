const componentClass = '--ac-tabify';
//Not optimized for component?
function TabifyComponentBehaviour() {
  const components = document.querySelectorAll(`.${componentClass}`);

  components.forEach((component) => {
    const tabBtns = component.querySelectorAll('.tab_btn');
    const contents = component.querySelectorAll('.content');
  
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
  });
}

export default TabifyComponentBehaviour;
