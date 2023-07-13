import ClassCollector from '../../../helpers/ClassManager/ClassCollector';

const TopNavigationClassBuilder = () => {
  const classList = new ClassCollector();
  const ulClassList = new ClassCollector();
  const liClassList = new ClassCollector();
  const linkClassList = new ClassCollector();

  classList.addClass('--ac-topnavigation');
  classList.addClassGroup('flex-center');
  classList.addClass('h-14');

  ulClassList.addClassGroup('flex-row');
  ulClassList.addClass('h-full');

  liClassList.addClassGroup('flex-center');
  liClassList.addClass('h-full list-group-item');
  
  linkClassList.addClass('pl-3 pr-4');

  return {
    _: classList,
    ul: ulClassList,
    li: liClassList,
    a: linkClassList
  };
};

export default TopNavigationClassBuilder;