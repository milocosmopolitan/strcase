import { expect } from 'chai';
import { classify } from './classify';

describe('Function: classify ', () => {
  describe('When input text is already camel case', () => {
    it('should return pascal case formatted text', () => {
      const result = classify('innerHTML');
      expect(result).to.equal('InnerHTML');
    });
  });

  describe('When input text is underscore case', () => {
    it('should return pascal case formatted text', () => {
      const result = classify('action_name');
      expect(result).to.equal('ActionName');
    });
  });

  describe('When input text is dashed case', () => {
    it('should return pascal formatted text', () => {
      const result = classify('css-class-name');
      expect(result).to.equal('CssClassName');
    });
  });
  
  describe('When input text has spaces', () => {
    it('should return pascal formatted text', () => {
      const result = classify('my favorite items');
      expect(result).to.equal('MyFavoriteItems');
    });
  });
});

