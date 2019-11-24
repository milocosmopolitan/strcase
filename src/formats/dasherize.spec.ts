import { expect } from 'chai';
import { dasherize } from './dasherize';

describe('Function: dasherize ', () => {
  describe('When input text is already camel case', () => {
    it('should return dashed separated case formatted text', () => {
      const result = dasherize('innerHTML');
      expect(result).to.equal('inner-html');
    });
  });

  describe('When input text is underscore case', () => {
    it('should return dashed separated case formatted text', () => {
      const result = dasherize('action_name');
      expect(result).to.equal('action-name');
    });
  });

  describe('When input text is dashed separated case', () => {
    it('should return dashed separated formatted text', () => {
      const result = dasherize('css-class-name');
      expect(result).to.equal('css-class-name');
    });
  });
  
  describe('When input text has spaces', () => {
    it('should return dashed separated formatted text', () => {
      const result = dasherize('my favorite items');
      expect(result).to.equal('my-favorite-items');
    });
  });
});

