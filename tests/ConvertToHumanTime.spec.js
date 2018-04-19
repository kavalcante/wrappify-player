/* global describe it */

import { expect } from 'chai';
import ConvertToHumanTime from '../src/ConvertToHumanTime';

describe('ConvertToHumanTime', () => {
  // 0ms --> 0:00
  it('should receive 0ms and convert to 0:00', () => {
    expect(ConvertToHumanTime(0)).to.be.equal('0:00');
  });

  // 1000ms --> 0:01
  it('should receive 1000ms and convert to 0:01', () => {
    expect(ConvertToHumanTime(1000)).to.be.equal('0:01');
  });

  // 11000ms --> 0:11
  it('should receive 11000ms and convert to 0:11', () => {
    expect(ConvertToHumanTime(11000)).to.be.equal('0:11');
  });

  // 60000ms --> 1:00
  it('should receive 60000 and convert to 1:00', () => {
    expect(ConvertToHumanTime(60000)).to.be.equal('1:00');
  });
});
