import { CronQuartzWebPage } from './app.po';

describe('cron-quartz-web App', function() {
  let page: CronQuartzWebPage;

  beforeEach(() => {
    page = new CronQuartzWebPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
