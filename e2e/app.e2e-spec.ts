import { WebaudioPage } from './app.po';

describe('webaudio App', () => {
  let page: WebaudioPage;

  beforeEach(() => {
    page = new WebaudioPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
