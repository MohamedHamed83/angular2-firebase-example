import { Angular2FirebaseExamplePage } from './app.po';

describe('angular2-firebase-example App', function() {
  let page: Angular2FirebaseExamplePage;

  beforeEach(() => {
    page = new Angular2FirebaseExamplePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
