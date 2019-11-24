import { expect } from 'chai';
import { underscore } from './underscore';

describe('Function: underscore ', () => {
  describe('When input text is already camel case', () => {
    it('should return underscore separated case formatted text', () => {
      const result = underscore('innerHTML');
      expect(result).to.equal('inner_html');
    });
  });

  describe('When input text is underscore case', () => {
    it('should return underscore separated case formatted text', () => {
      const result = underscore('action_name');
      expect(result).to.equal('action_name');
    });
  });

  describe('When input text is dashed separated case', () => {
    it('should return underscore separated formatted text', () => {
      const result = underscore('css-class-name');
      expect(result).to.equal('css_class_name');
    });
  });
  
  describe('When input text has spaces', () => {
    it('should return underscore separated formatted text', () => {
      const result = underscore('my favorite items');
      expect(result).to.equal('my_favorite_items');
    });
  });
});

