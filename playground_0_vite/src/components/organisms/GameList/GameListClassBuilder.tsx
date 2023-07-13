import ClassBuilder from '../../../helpers/ClassBuilder/ClassBuilder';
import {default as config} from './GameListConfig';

const GameListClassBuilder = (className = '') => {
    const classList = new ClassBuilder();
    const navClassList = new ClassBuilder();
    const navLeftClassList = new ClassBuilder();
    const navRightClassList = new ClassBuilder();
    const navSpanClassList = new ClassBuilder();

    classList.addClass('--ac-game-list');
    classList.addClass('text-white');
    classList.addClass(className);

    navClassList.addClass("carousel-nav");
    // navClassList.addClass("lg:hidden");
    navClassList.addClass(`group-hover:block absolute`);

    const navTop = (config.imgHeight - config.navHeight)/2;
    const navAdjust = config.navWidth/2;

    navClassList.addClass(`top-[${navTop}px]`);

    navLeftClassList.addClass(navClassList.build());
    navRightClassList.addClass(navClassList.build());
    
    navLeftClassList.addClass(`carousel-nav-left left-[-${navAdjust}px]`);
    navRightClassList.addClass(`carousel-nav-right right-[-${navAdjust}px]`);

    navSpanClassList.addClass('block h-[36px] w-[36px]');

    return {
        _: classList,
        nl: navLeftClassList,
        nr: navRightClassList,
        nspan: navSpanClassList
    };
};

export default GameListClassBuilder;