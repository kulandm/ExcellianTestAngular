import { ExcelianAngularWebPage } from './app.po';

describe('excelian-angular-web App', function() {
  let page: ExcelianAngularWebPage;

  beforeEach(() => {
    page = new ExcelianAngularWebPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
