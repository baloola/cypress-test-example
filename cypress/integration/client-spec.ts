const loadingText = "Select a parcel to load data";
const appSel ="div#app";
const parcelChartSel ="canvas#parcelChart";
const mapSel = ".ol-layer > canvas";


describe('VS App', () => {

    beforeEach(() => {
        cy.visit('/');
        // This is necessary because we want to click a canvas element
        // and cypress has no idea when it has been loaded.
        cy.wait(3000);
    });

     it('Testing zoom button', () => {
        // cy.get(appSel).debug()
        cy.get('.anno-content > :nth-child(1)').should("contain", "Welcome to the Catalog Client");
        cy.get('.anno-btn-low-importance').click();
        // cy.get('.ol-zoom-in')
        // cy.get('.ol-zoom-in').click()
    });
    it('Testing header', () => {
        cy.get('#header > h3').should("contain" , "View Server")
    });


})

