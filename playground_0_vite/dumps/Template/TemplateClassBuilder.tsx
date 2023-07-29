import ClassBuilder from '../../src/helpers/ClassBuilder/ClassBuilder';

const TemplateClassBuilder = () => {
  const classList = new ClassBuilder();
  classList.addClass('--ac-tabify');

  return {
    _: classList,
  };
};


export default TemplateClassBuilder;