/// <reference types="cypress" />

describe('envelope', () => {
  beforeEach(() => cy.visit('localhost:3000/'));

  it('Login and Logout Successfully', () => {
    // // Custom command example, see `../support/commands.ts` file
    // cy.login('my-email@something.com', 'myPassword');
    cy.get('.headerOneRight').contains('Welcome back');
    
    cy.get('#email-input').type("default@mail.com");
    cy.get('#password-input').type("123456");
    cy.get('#signInButton').click();
    cy.wait(5000);
    
    cy.get('#authenticatedHeader').contains('Congratulations');
    cy.get('#logOutButton').click();
    
    cy.get('.headerOneRight').contains('Welcome back');
  });

  it('Create New User Account', () => {
    // // Custom command example, see `../support/commands.ts` file
    // cy.login('my-email@something.com', 'myPassword');
    cy.get('.headerOneRight').contains('Welcome back');
    cy.get('#signUpLink').click();
    
    cy.get('#email-input').type(`${Math.floor(Math.random() * 1000)}@${Math.floor(Math.random() * 1000)}.com`);
    cy.get('#password-input').type("123456");
    cy.get('#confirm-password-input').type("123456");
    cy.get('#signUpButton').click();
    cy.wait(5000);
    
    cy.get('#authenticatedHeader').contains('Congratulations');
    cy.get('#logOutButton').click();
    
    cy.get('.headerOneRight').contains('Welcome back');
  });

  it('Reset Password Successfully', () => {
    // // Custom command example, see `../support/commands.ts` file
    // cy.login('my-email@something.com', 'myPassword');
    cy.get('.headerOneRight').contains('Welcome back');
    cy.get('#forgetPasswordLink').click();
    
    cy.get('#email-input').type("default@mail.com");
    cy.get('#resetPasswordButton').click();
    cy.wait(5000);
    
    cy.get("body").then($body => {
      if ($body.find("#successCard").length > 0) {   
        //evaluates as true if button exists at all
        cy.get("#successCard").then($header => {
          if ($header.is(':visible')){
            cy.get('#successText').contains('Password reset request has been sent!');
          } else {
            assert.isNotOk('Failed','Password reset card fails to occur');
            //you get here only if button EXISTS but is INVISIBLE
            }
          });
      } else {
         //you get here if the button DOESN'T EXIST
         assert.isNotOk('Error','Success card failed to exist');
      }
    });
  });

  it('Fails to Login (Wrong Password)', () => {
    // // Custom command example, see `../support/commands.ts` file
    // cy.login('my-email@something.com', 'myPassword');
    cy.get('.headerOneRight').contains('Welcome back');
    
    cy.get('#email-input').type("default@mail.com");
    cy.get('#password-input').type("123455");
    cy.get('#signInButton').click();
    cy.wait(5000);
    
    cy.get("body").then($body => {
      if ($body.find("#errorCard").length > 0) {   
        //evaluates as true if button exists at all
        cy.get("#errorCard").then($header => {
          if ($header.is(':visible')){
            cy.get('#errorText').contains('The data provided is invalid');
          } else {
            assert.isNotOk('Failed','Error failed to occurr');
            //you get here only if button EXISTS but is INVISIBLE
            }
          });
      } else {
         //you get here if the button DOESN'T EXIST
         assert.isNotOk('Error','Error card failed to exist');
      }
    });
  });
  
  it('Fails to Login (Invalid Email)', () => {
    // // Custom command example, see `../support/commands.ts` file
    // cy.login('my-email@something.com', 'myPassword');
    cy.get('.headerOneRight').contains('Welcome back');
    
    cy.get('#email-input').type("custom@email.com");
    cy.get('#password-input').type("123456");
    cy.get('#signInButton').click();
    cy.wait(5000);
    
    cy.get("body").then($body => {
      if ($body.find("#errorCard").length > 0) {   
        //evaluates as true if button exists at all
        cy.get("#errorCard").then($header => {
          if ($header.is(':visible')){
            cy.get('#errorText').contains('The data provided is invalid');
          } else {
            assert.isNotOk('Failed','Error card failed to occur');
            //you get here only if button EXISTS but is INVISIBLE
            }
          });
      } else {
         //you get here if the button DOESN'T EXIST
         assert.isNotOk('Error','Error card failed to exist');
      }
    });
  });

});