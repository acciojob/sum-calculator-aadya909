describe('testing sum calculator', () => {
    beforeEach(() => {
      cy.visit('http://localhost:8080'); // adjust port if different
    });
  
    it('testing tags', () => {
      cy.get('[data-testid="number-input"]').should('exist');
      cy.get('[data-testid="sum-output"]').should('exist');
    });
  
    it('testing initial render', () => {
      cy.get('[data-testid="sum-output"]').should('contain', 'Sum: 0');
    });
  
    it('testing with different input', () => {
      cy.get('[data-testid="number-input"]').type('1{enter}');
      cy.wait(100); // wait briefly for state update
      cy.get('[data-testid="number-input"]').type('2{enter}');
      cy.wait(100); // ensure both inputs are processed
  
      cy.get('[data-testid="sum-output"]', { timeout: 2000 }).should('contain', 'Sum: 3');
    });
  });
  