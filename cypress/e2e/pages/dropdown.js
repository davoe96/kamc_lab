const dropdownPage = {
 loginRoleDropdown: '#loginRole',


 // Add more selectors for other elements on this page
  // dropdownName: 'uniqueSelector'
  selectRandomOwnerOption() {
    cy.get(this.loginRoleDropdown).then(($select) => {
      const options = $select.find('option');
      const randomIndex = Math.floor(Math.random() * (options.length - 1)) + 1; // Exclude the first empty option
      const randomOption = options[randomIndex];

      cy.wrap($select).select(randomOption.value).should('have.value', randomOption.value);
    });
  },
}
  export default dropdownPage;
