import { AngularRoutingDemoAppPage } from './app.po';

describe('angular-routing-demo-app App', () => {
  let page: AngularRoutingDemoAppPage;

  beforeEach(() => {
    page = new AngularRoutingDemoAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
