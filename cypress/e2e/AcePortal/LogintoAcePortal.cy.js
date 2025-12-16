import LoginPage from '../../support/pageObjects/loginPage';

describe('ACE Money Transfer Login to portal', () => {

  const loginPage = new LoginPage();

  it('Login with invalid or non-registered credentials', () => {
    loginPage.visit();
    loginPage.clickLoginMenu();

    loginPage.enterEmail('test@example.com');
    loginPage.enterPassword('Password123');
    loginPage.clickLoginButton();

    loginPage.verifyErrorMessage(
      'The provided email address is not registered. Please Sign Up'
    );
  });

  it('Login with valid credentials but unverified email', () => {
    loginPage.visit();
    loginPage.clickLoginMenu();

    loginPage.enterEmail('testing@gmail.com');
    loginPage.enterPassword('test123456');
    loginPage.clickLoginButton();

    loginPage.verifyErrorMessage(
      'Your account is not verified. We have sent you an email to confirm your registration.'
    );
  });

  it('Successful login with valid credentials', () => {
    loginPage.visit();
    loginPage.clickLoginMenu();

    loginPage.enterEmail('barracuda60671@mailshan.com');
    loginPage.enterPassword('test123456');
    loginPage.clickLoginButton();

    loginPage.verifySuccessfulLogin();
  });

});
