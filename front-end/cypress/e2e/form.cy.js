describe('Form Components', () => {
    beforeEach(()=>{
        cy.mockStudents()
        cy.visit('http://localhost:3000/')
        cy.wait('@getStudents')
        cy.get('.ant-btn-primary')
            .contains('Add New Student')
            .click({force: true});

    })
    it('submits a new student', () => {

        cy.get('.ant-btn-primary')
            .contains('Add New Student')
            .click()

        cy.get('input[placeholder="Please enter student name"]')
            .type('John Doe')
            .should('have.value', 'John Doe');
        cy.get('ant-input[name="name"]').type('John Doe')
        cy.get('ant-input[name="email"]').type('johndoe@example.com')
        cy.get('select[name="gender"]').select('MALE')
        cy.get('button[type="submit"]').click()
        cy.wait('@addStudent')
        cy.get('.ant-notification-notice-message')
            .contains('Student successfully added')
            .should('be.visible')
    });

})

