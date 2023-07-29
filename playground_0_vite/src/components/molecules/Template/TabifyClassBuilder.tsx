import ClassBuilder from '../../../helpers/ClassBuilder/ClassBuilder';

const TabifyClassBuilder = () => {
  const classList = new ClassBuilder();
  classList.addClass('--ac-tabify');

  return {
    _: classList,
  };
};


export default TabifyClassBuilder;