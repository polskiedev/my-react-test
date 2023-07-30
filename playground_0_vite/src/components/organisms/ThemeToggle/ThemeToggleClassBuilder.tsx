import ClassBuilder from '../../../helpers/ClassBuilder/ClassBuilder';

const ThemeToggleClassBuilder = () => {
  const classList = new ClassBuilder();
  classList.addClass('--ac-theme-toggle');

  return {
    _: classList,
  };
};


export default ThemeToggleClassBuilder;