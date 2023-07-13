import ClassBuilder from '../../../helpers/ClassBuilder/ClassBuilder';

const GameTileClassBuilder = () => {
  const classList = new ClassBuilder();
  const linkClassList = new ClassBuilder();

  classList.addClass('--ac-game-tile');
  classList.addClass('block text-white text-sm relative');
  classList.addClassGroup('game-tile-wrapper');
  
  linkClassList.addClass('block bg-center bg-cover duration-500 pl-3 pr-4');
  linkClassList.addClassGroup('game-tile');

  return {
    _: classList,
    a: linkClassList
  };
};

export default GameTileClassBuilder;