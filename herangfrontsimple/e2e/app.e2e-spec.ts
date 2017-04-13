import { HerangfrontsimplePage } from './app.po';

describe('herangfrontsimple App', () => {
  let page: HerangfrontsimplePage;

  beforeEach(() => {
    page = new HerangfrontsimplePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
