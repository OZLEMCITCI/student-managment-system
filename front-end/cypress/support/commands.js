
Cypress.Commands.add('mockStudents', () => {
    cy.fixture('students').then(students => {
        cy.intercept('GET', '/api/v1/students', students).as('getStudents')
    })
})

Cypress.Commands.add('mockEmptyStudents', () => {
    cy.fixture('emptyStudents').then(students => {
        cy.intercept('GET', '/api/v1/students', students).as('getEmptyStudents')
    })
})

Cypress.Commands.add('mocklongerStudents', () => {
    cy.fixture('longStudentJson').then(students => {
        cy.intercept('GET', '/api/v1/students', students).as('getLongStudents')
    })
})

Cypress.Commands.add('mockAddStudentSuccess', () => {
    cy.fixture('addStudentSuccess.json').then((response) => {
        cy.intercept('POST', '/api/v1/students', response).as('addStudent')
    })
})

