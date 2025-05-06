describe('testing sum calculator', () => {
    beforeEach(() => {
      cy.visit('http://localhost:8080'); // or your local dev port
    });
  
    it('testing tags', () => {
      cy.get('[data-testid="number-input"]').should('exist');
      cy.get('[data-testid="sum-output"]').should('exist');
    });
  
    it('testing initial render', () => {
      cy.get('[data-testid="sum-output"]').should('contain', 'Sum: 0');
    });
  
    it('testing with different input', () => {
      cy.get('[data-testid="number-input"]').type('1');
      cy.get('[data-testid="submit-btn"]').click();
      cy.get('[data-testid="number-input"]').type('2');
      cy.get('[data-testid="submit-btn"]').click();
  
      cy.get('[data-testid="sum-output"]').should('contain', 'Sum: 3');
    });
  });
  