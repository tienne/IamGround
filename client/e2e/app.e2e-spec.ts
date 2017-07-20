import { IamgroundPage } from './app.po';

describe('iamground App', () => {
  let page: IamgroundPage;

  beforeEach(() => {
    page = new IamgroundPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
