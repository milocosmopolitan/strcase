import { expect } from 'chai';
import { propertize } from './propertize';

describe('Function: propertize ', () => {
  describe('When input text is already camel case', () => {
    it('should return proper case formatted text', () => {
      const result = propertize('innerHTML');
      expect(result).to.equal('Inner Html');
    });
  });

  describe('When input text is underscore case', () => {
    it('should return proper case formatted text', () => {
      const result = propertize('action_name');
      expect(result).to.equal('Action Name');
    });
  });

  describe('When input text is dashed separated case', () => {
    it('should return proper formatted text', () => {
      const result = propertize('css-class-name');
      expect(result).to.equal('Css Class Name');
    });
  });
  
  describe('When input text has spaces', () => {
    it('should return proper formatted text', () => {
      const result = propertize('my favorite items');
      expect(result).to.equal('My Favorite Items');
    });
  });
});

