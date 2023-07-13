import ClassBuilder from '../../../helpers/ClassBuilder/ClassBuilder';
import {default as config} from './GameTileConfig';

const GameTileClassBuilder = () => {
  const classList = new ClassBuilder();
  const linkClassList = new ClassBuilder();

  classList.addClass('--ac-game-tile');
  classList.addClass('block text-white text-sm relative');
  classList.addClass(`w-[${config.width}px] max-w-[${config.width}px]`);

  linkClassList.addClass('game-tile-link');
  linkClassList.addClass('block bg-center bg-cover pl-3 pr-4');
  
  linkClassList.addClass(`h-[${config.height}px] min-h-[${config.height}px]`);
  linkClassList.addClass(`w-[${config.width}px] min-w-[${config.width}px]`);
  
  return {
    _: classList,
    a: linkClassList
  };
};

export default GameTileClassBuilder;