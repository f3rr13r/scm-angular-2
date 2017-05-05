import { ScmPage } from './app.po';

describe('scm App', () => {
  let page: ScmPage;

  beforeEach(() => {
    page = new ScmPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
