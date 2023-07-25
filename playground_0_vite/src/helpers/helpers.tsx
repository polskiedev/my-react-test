import { APP_ENV } from '../config/config';

export function asset(url: string) {
  return `./${APP_ENV == 'production' ? '' : 'src/'}assets/${url}`;
}

export function getThemeURL(theme: string) {
  return APP_ENV == 'production' 
    ? `./styles/theme/${theme}-theme.css`
    : `./src/css/theme/${theme}-theme.css`;
};

export function getWindowSize() {
  return {
    width: window.innerWidth,
    height: window.innerHeight
  }
}

export function generateSlug(input: string): string {
    return input
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-') // Replace non-alphanumeric characters with hyphens
      .replace(/^-+|-+$/g, ''); // Remove leading and trailing hyphens
}

export function shuffleArray<T>(array: T[]): T[] {
    const newArray = [...array];
    const length = newArray.length;
  
    for (let currentIndex = length - 1; currentIndex > 0; currentIndex--) {
      const randomIndex = Math.floor(Math.random() * (currentIndex + 1));
  
      // Swap current element with a random element
      const temporaryValue = newArray[currentIndex];
      newArray[currentIndex] = newArray[randomIndex];
      newArray[randomIndex] = temporaryValue;
    }
  
    return newArray;
}

const helpers = () => {
  return (
    <div>Helpers</div>
  )
}

export default helpers