describe('Table Component',() => {
it('displays main content with background and padding styles', () => {
    cy.mockStudents()
    cy.visit('http://localhost:3000/')
    cy.wait('@getStudents')
    cy.get('.ant-table-row').should('have.length', 3);
    cy.get('.ant-table-fixed-header').contains('Number of students');
    cy.get('.ant-table').contains('3');
    cy.get('.ant-table').contains('Id');
    cy.get('.ant-table').contains('Name');
    cy.get('.ant-table').contains('Email');
    cy.get('.ant-table').contains('Gender');
});
it('should not display table when there are no students', () => {
    cy.mockEmptyStudents()
    cy.visit('http://localhost:3000/')
    cy.wait('@getEmptyStudents')
    cy.get('Spinner').should('not.exist')
    cy.get('student-table').should('not.exist')
});
it('should display the empty message when there are no students', () => {
    cy.mockEmptyStudents()
    cy.visit('http://localhost:3000/')
    cy.wait('@getEmptyStudents')
    cy.get('Spinner').should('not.exist')
    cy.get('student-table').should('not.exist')
    // Expect the empty message and student form to be displayed
    cy.get("mainDiv").contains("No data")
    cy.get('div.ant-spin').should('not.exist')
})
it('should display correct table inputs for over 15 student and pagination should work', () => {
    cy.mocklongerStudents()
    cy.visit('http://localhost:3000/')
    cy.wait('@getLongStudents')
    cy.get('.ant-table').contains('19');
    cy.get('.ant-table-row').should('have.length', 15);
    cy.get(".ant-pagination-item.ant-pagination-item-2").click();
    cy.get('.ant-table-row').should('have.length', 4);
})
});

