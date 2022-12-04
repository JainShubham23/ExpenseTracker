describe('empty spec', () => {
  it('passes', () => {
    cy.visit('http://localhost:3000/')
    
    //cy.get(':nth-child(3) > .ant-row > .ant-form-item-label').click();
    cy.get('#email').type('testemail@gmail.com');
    cy.get('#password').type('password');
    cy.get('.btn').click();
    cy.wait(30000) // wait for 2 seconds

    cy.get(':nth-child(1) > :nth-child(7) > div > .anticon-edit > svg').click();
    cy.get('#amount').clear('1000');
    cy.get('#amount').type('1000');
    cy.get(':nth-child(2) > .ant-row > .ant-form-item-control > .ant-form-item-control-input > .ant-form-item-control-input-content > .ant-select > .ant-select-selector > .ant-select-selection-item').click();
    cy.get('#date').type('2022-11-01');
    cy.get(':nth-child(3) > .ant-row > .ant-form-item-control > .ant-form-item-control-input > .ant-form-item-control-input-content > .ant-select > .ant-select-selector > .ant-select-selection-item').click();
    cy.get(':nth-child(5) > :nth-child(1) > .ant-select-dropdown > :nth-child(1) > .rc-virtual-list > .rc-virtual-list-holder > :nth-child(1) > .rc-virtual-list-holder-inner > .ant-select-item-option-active > .ant-select-item-option-content').click();
    cy.get('.d-flex > .btn').click();
    cy.wait(30000) // wait for 2 seconds

    cy.get(':nth-child(1) > :nth-child(7) > div > .anticon-delete > svg').click();
    cy.get(':nth-child(1) > .ant-select > .ant-select-selector > .ant-select-selection-item').click();
    cy.get('.ant-select-item-option-active > .ant-select-item-option-content').click();
    cy.get(':nth-child(1) > .ant-select > .ant-select-selector > .ant-select-selection-item').click();
    cy.get('.ant-select-item-option-active > .ant-select-item-option-content').click();
    cy.get(':nth-child(2) > .ant-select > .ant-select-selector > .ant-select-selection-item').click();
    cy.get(':nth-child(4) > :nth-child(1) > .ant-select-dropdown > :nth-child(1) > .rc-virtual-list > .rc-virtual-list-holder > :nth-child(1) > .rc-virtual-list-holder-inner > .ant-select-item-option-active > .ant-select-item-option-content').click();
    cy.get(':nth-child(2) > .ant-select > .ant-select-selector > .ant-select-selection-item').click();
    cy.get(':nth-child(4) > :nth-child(1) > .ant-select-dropdown > :nth-child(1) > .rc-virtual-list > .rc-virtual-list-holder > :nth-child(1) > .rc-virtual-list-holder-inner > .ant-select-item-option-active > .ant-select-item-option-content').click();
    cy.get(':nth-child(2) > .ant-select > .ant-select-selector > .ant-select-selection-item').click();
    cy.get(':nth-child(4) > :nth-child(1) > .ant-select-dropdown > :nth-child(1) > .rc-virtual-list > .rc-virtual-list-holder > :nth-child(1) > .rc-virtual-list-holder-inner > .ant-select-item-option-active > .ant-select-item-option-content').click();
    cy.get(':nth-child(1) > .ant-select > .ant-select-selector > .ant-select-selection-item').click();
    cy.get(':nth-child(3) > :nth-child(1) > .ant-select-dropdown > :nth-child(1) > .rc-virtual-list > .rc-virtual-list-holder > :nth-child(1) > .rc-virtual-list-holder-inner > .ant-select-item-option-active > .ant-select-item-option-content').click();
    cy.get(':nth-child(1) > .ant-select > .ant-select-selector > .ant-select-selection-item').click();
    cy.get('[title="Last 1 Year"]').click();
    cy.get(':nth-child(2) > .ant-select > .ant-select-selector > .ant-select-selection-item').click();
    cy.get(':nth-child(4) > :nth-child(1) > .ant-select-dropdown > :nth-child(1) > .rc-virtual-list > .rc-virtual-list-holder > :nth-child(1) > .rc-virtual-list-holder-inner > .ant-select-item-option-active > .ant-select-item-option-content').click();
    cy.get(':nth-child(2) > .ant-select > .ant-select-selector > .ant-select-selection-item').click();
    cy.get(':nth-child(4) > :nth-child(1) > .ant-select-dropdown > :nth-child(1) > .rc-virtual-list > .rc-virtual-list-holder > :nth-child(1) > .rc-virtual-list-holder-inner > .ant-select-item-option-active > .ant-select-item-option-content').click();
    cy.get(':nth-child(1) > .ant-select > .ant-select-selector').click();
    cy.get(':nth-child(3) > :nth-child(1) > .ant-select-dropdown > :nth-child(1) > .rc-virtual-list > .rc-virtual-list-holder > :nth-child(1) > .rc-virtual-list-holder-inner > .ant-select-item-option-active > .ant-select-item-option-content').click();
    cy.get(':nth-child(2) > .ant-select > .ant-select-selector > .ant-select-selection-item').click();
    cy.get(':nth-child(4) > :nth-child(1) > .ant-select-dropdown > :nth-child(1) > .rc-virtual-list > .rc-virtual-list-holder > :nth-child(1) > .rc-virtual-list-holder-inner > .ant-select-item-option-active > .ant-select-item-option-content').click();
    cy.get(':nth-child(1) > .ant-select > .ant-select-selector > .ant-select-selection-item').click();
    cy.get(':nth-child(3) > :nth-child(1) > .ant-select-dropdown > :nth-child(1) > .rc-virtual-list > .rc-virtual-list-holder > :nth-child(1) > .rc-virtual-list-holder-inner > .ant-select-item-option-active > .ant-select-item-option-content').click();
    cy.get(':nth-child(2) > .ant-select > .ant-select-selector > .ant-select-selection-item').click();
    cy.get(':nth-child(4) > :nth-child(1) > .ant-select-dropdown > :nth-child(1) > .rc-virtual-list > .rc-virtual-list-holder > :nth-child(1) > .rc-virtual-list-holder-inner > .ant-select-item-option-active > .ant-select-item-option-content').click();
    cy.get(':nth-child(2) > .ant-select > .ant-select-selector > .ant-select-selection-item').click();
    cy.get(':nth-child(4) > :nth-child(1) > .ant-select-dropdown > :nth-child(1) > .rc-virtual-list > .rc-virtual-list-holder > :nth-child(1) > .rc-virtual-list-holder-inner > .ant-select-item-option-active > .ant-select-item-option-content').click();
    cy.get(':nth-child(1) > .ant-select > .ant-select-selector > .ant-select-selection-item').click();
    cy.get('.filters').click();
    cy.get(':nth-child(4) > .anticon > svg').click();
    cy.get(':nth-child(2) > .btn').click();
    
  })
})