import { ClicktocallUiPage } from './app.po';

describe('clicktocall-ui App', () => {
  let page: ClicktocallUiPage;

  beforeEach(() => {
    page = new ClicktocallUiPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
