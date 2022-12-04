describe('Login', () => {
  it('check URL', () => {
    cy.visit('http://localhost:3000/')
  })

  it('signs up a user with password', () => {
    cy.get('#email').type('jains01@pfw.edu');
    cy.get('#password').type('root');
    cy.get('.btn').click();

  })

  it('check if the user is logged in', () =>{
    cy.url().should('include', 'localhost:3000/')
  })


  it('should be able register and login', () => {
    cy.visit('http://localhost:3000/')
    cy.get('a').click();
    cy.url().should('include', 'localhost:3000/register');
    cy.get('#name').type('testname');
    cy.get('#email').type('testemail@gmail.com');
    cy.get('#password').type('password');
    cy.get('.btn').click();
    cy.visit('http://localhost:3000/');
    cy.get('#email').type('testemail@gmail.com');
    cy.get('#password').type('password');
    cy.get('.btn').click();
  })

  it('should be able to login and log out', () => {
    cy.visit('http://localhost:3000/');
    cy.get('#email').type('testemail@gmail.com');
    cy.get('#password').type('password');
    cy.get('.btn').click();
    
    cy.wait(30000) // wait for 2 seconds
    cy.on('window:alert',(t)=>{
      //assertions
      expect(t).to.contains('login successful');
   })
    cy.get(':nth-child(2) > .btn').click();

    cy.on('window:alert',(t)=>{
      //assertions
      expect(t).to.contains('logged out');
   })
  })

})