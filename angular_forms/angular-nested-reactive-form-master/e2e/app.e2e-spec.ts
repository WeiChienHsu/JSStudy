import { AngularNestedReactiveFormPage } from './app.po';

describe('angular-nested-reactive-form App', () => {
  let page: AngularNestedReactiveFormPage;

  beforeEach(() => {
    page = new AngularNestedReactiveFormPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
