describe('Adding transaction', () => {
  it('passes', () => {
    cy.visit('http://localhost:3000/')
    cy.get('#email').type('testemail@gmail.com');
    cy.get('#password').type('password');
    cy.get('.btn').click();
    cy.wait(40000);
    cy.get(':nth-child(5) > .btn').click();
    cy.get('#amount').type('100');
    cy.get('#type').click();
    cy.get('.ant-select-item-option-active > .ant-select-item-option-content').click();
    cy.get('#category').click();
    cy.get('[title="Tip"] > .ant-select-item-option-content').click();
    cy.get('#date').type('2022-12-02');
    cy.get('#reference').type('test reference');
    cy.get('#description').type('test description');
    cy.get('.d-flex > .btn').click();
    cy.get('.d-flex > .btn').click();
    
  })
})