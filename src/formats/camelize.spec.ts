import { expect } from 'chai';
import { camelize } from './camelize';

describe('Function: camelize ', () => {
  describe('When input text is already camel case', () => {
    it('should return camel case formatted text', () => {
      const result = camelize('innerHTML');
      expect(result).to.equal('innerHTML');
    });
  });

  describe('When input text is underscore case', () => {
    it('should return camel case formatted text', () => {
      const result = camelize('action_name');
      expect(result).to.equal('actionName');
    });
  });

  describe('When input text is dashed case', () => {
    it('should return camel case formatted text', () => {
      const result = camelize('css-class-name');
      expect(result).to.equal('cssClassName');
    });
  });
  
  describe('When input text has spaces', () => {
    it('should return camel case formatted text', () => {
      const result = camelize('my favorite items');
      expect(result).to.equal('myFavoriteItems');
    });
  });

  describe('When input text is proper case', () => {
    it('should return camel case formatted text', () => {
      const result = camelize('My Favorite Items');
      expect(result).to.equal('myFavoriteItems');
    });
  });
});

