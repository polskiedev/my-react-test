import ClassBuilder from '../../../helpers/ClassBuilder/ClassBuilder';

const TopNavigationClassBuilder = () => {
  const classList = new ClassBuilder();
  const ulClassList = new ClassBuilder();
  const liClassList = new ClassBuilder();
  const linkClassList = new ClassBuilder();

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