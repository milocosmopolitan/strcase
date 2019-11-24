import { expect } from 'chai';
import { constantize } from './constantize';

describe('Function: constantize ', () => {
  describe('When input text is already camel case', () => {
    it('should return constant case formatted text', () => {
      const result = constantize('innerHTML');
      expect(result).to.equal('INNER_HTML');
    });
  });

  describe('When input text is underscore case', () => {
    it('should return constant case formatted text', () => {
      const result = constantize('action_name');
      expect(result).to.equal('ACTION_NAME');
    });
  });

  describe('When input text is dashed case', () => {
    it('should return constant formatted text', () => {
      const result = constantize('css-class-name');
      expect(result).to.equal('CSS_CLASS_NAME');
    });
  });
  
  describe('When input text has spaces', () => {
    it('should return constant formatted text', () => {
      const result = constantize('my favorite items');
      expect(result).to.equal('MY_FAVORITE_ITEMS');
    });
  });
});

