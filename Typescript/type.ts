type FontSize = 'h1' | 'h2' | 'h3' | 'h4' | 'h5';

const font: FontSize = 'h5';

interface Paragraph {
  font: FontSize;
  numberOfWords: number;
}

const paragraph: any = {
  font: 'h1',
  numberOfWords: 100,
};
