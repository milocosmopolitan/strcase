import { expect } from 'chai';
import { capitalize } from './capitalize';

describe('Function: capitalize ', () => {
  describe('When input text is already camel case', () => {
    it('should return capitalized case formatted text', () => {
      const result = capitalize('innerHTML');
      expect(result).to.equal('InnerHTML');
    });
  });

  describe('When input text is underscore case', () => {
    it('should return capitalized case formatted text', () => {
      const result = capitalize('action_name');
      expect(result).to.equal('Action_name');
    });
  });

  describe('When input text is dashed case', () => {
    it('should return capitalized formatted text', () => {
      const result = capitalize('css-class-name');
      expect(result).to.equal('Css-class-name');
    });
  });
  
  describe('When input text has spaces', () => {
    it('should return capitalized formatted text', () => {
      const result = capitalize('my favorite items');
      expect(result).to.equal('My favorite items');
    });
  });
});

