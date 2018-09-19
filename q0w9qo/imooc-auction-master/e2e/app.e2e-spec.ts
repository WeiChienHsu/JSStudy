import { ImoocAuctionPage } from './app.po';

describe('imooc-auction App', () => {
  let page: ImoocAuctionPage;

  beforeEach(() => {
    page = new ImoocAuctionPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
