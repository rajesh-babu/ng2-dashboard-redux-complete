import { Ng2ReduxHelloworldPage } from './app.po';

describe('ng2-redux-helloworld App', function() {
  let page: Ng2ReduxHelloworldPage;

  beforeEach(() => {
    page = new Ng2ReduxHelloworldPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
