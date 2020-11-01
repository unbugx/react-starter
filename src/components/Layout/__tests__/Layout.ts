import { Layout } from '../Layout';

jest.unmock('../Layout');

describe('Layout tests: ', () => {
  it('to be defined', () => {
    expect(Layout).toBeDefined();
  });
});
