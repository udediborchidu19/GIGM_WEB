// import cypress from "cypress";

// import { random } from "cypress/types/lodash";

class Login {
    txtUsername = '//*[@id="root"]/div/div[4]/div[2]/div/div/div/div[2]/div[1]/input';
    txtPassword = "input[placeholder='Enter Your Password']";
    clickBn = "button[title='Sign In']";
    AcceptCookiess = "#rcc-confirm-button";
    ClickLogInBtn = ".blue-btn-nav";
    clickLoginBtn2 = 'div[class="signUp-handle"]>div[class="centered"]';
    AccountAvata = 'button[id="sub-active3"]';
    Avata = "ul[id='sub-menu3'] li a";
    ClickDaptureTer = 'div[class="basic-single select_default_sty css-2b097c-container"]>div[class="select__control css-yk16xz-control"]';
    ClickDept = "div[id='departure'] div[class='select__value-container css-g1d714-ValueContainer']";
    ClickArr = '//*[@id="content1"]/div[2]/div/div/div/div[2]/div';
    //>input[id="react-select-11-input"]
    //DepartureInput = 'div[class="select__control css-yk16xz-control"]>div[class="select__value-container css-g1d714-ValueContainer"]>div[class="css-b8ldur-Input"]>div[class="select__input"]';
    DepartureSelect = '#departure > .select__control > .select__value-container'
    DepartureInput = '#react-select-5-input';
    SelectDeparturee = "div[id='departure']>div[class='select__value-container select__value-container--has-value css-g1d714-ValueContainer']";
    Label1 = '//*[@id="content1"]/div[2]/div/label';

    //set arrival terminal
    ArrivalTer = '#arrival > .select__control > .select__value-container';
    ArrivalInput = '//*[@id="react-select-17-input"]';
    ArrivalTerminalList = '.select__menu-list';



    const = Math.random().toString().substring(2, 10)


    AcceptCookies() {
        cy.get(this.AcceptCookiess).click();
    }

    ClickLogin_SignUp_Btn() {
        cy.get(this.ClickLogInBtn).click();
    }

    ClickLogin_SignUp_Btn2() {
        cy.get(this.clickLoginBtn2).click();
    }


    setUserName(username) {
        cy.xpath(this.txtUsername).type(username);
    }

    setPassword(password) {
        cy.get(this.txtPassword).type(password);
    }

    clickBtn() {
        cy.get(this.clickBn).click();
    }

    AccountAvata1() {
        cy.get(this.AccountAvata)
    }

    AccountVerify() {
        cy.get(this.Avata).should("have.text", "My Account");
    }

    SelectDepture() {
        cy.get(this.ClickDept).first().click({ force: true });
    }

    Wait() {
        cy.wait(5000);
    }

    // cy.xpath(this.Label1).scrollIntoView()
    // cy.get(this.ClickDept)
    // .type('Lagos', {force:true}).type('{enter}');

    // .click({force: true}).wait(2000)
    // .type("Lagos").type('{enter}');
    //.contains('Departure Terminal') .scrollTo('bottom')
    //.scrollIntoView({ offset: { scroll-margin-top: 250, left: 0 } })
    // cy.get(this.ClickDept).scrollIntoView({ offset: { top: 0, left: 0 } })
    // .click({force: true})
    //.invoke('show')

    EnterDeparture() {
        // cy.get(this.ClickDept).eq(0).click({force: true})
        cy.get(this.DepartureSelect).click({ force: true })
        cy.wait(2000)
        cy.get(this.DepartureInput).invoke('show')
            .type('Lagos => Jibowu', { force: true }).type('{enter}')
        cy.wait(2000)

        // cy.get('.select__menu-list').each(($el, index, $list ) => {
        //     if($el.text() === 'Lagos => Jibowu'){

        //         cy.wrap($el).click({force: true}).should('contain.text', 'Lagos => Jibowu');
        //     }

        // })

    }



    EnterArrival() {
        // cy.get(this.ClickDept).eq(0).click({force: true})
        cy.get(this.ArrivalTer).click({ force: true })

        cy.wait(3000)
        cy.xpath(this.ArrivalInput).invoke('show').type('Nsukka').type('{enter}');
        cy.get(this.ArrivalTer).should('contain.text', 'Enugu==>Nsukka');


        // cy.get(this.ArrivalTerminalList).each(($el, index, $list ) => {
        //     if($el.text() === 'Enugu==>Nsukka'){
        //         cy.wrap($el).click({force: true}).should('contain.text', 'Enugu==>Nsukka');
        //     }

        // })

    }


    //Calender Selection
    getDatePicker() {
        cy.get('#content1 > .row-grid > :nth-child(1) > .react-datepicker-wrapper > .react-datepicker__input-container > input').click({ force: true });

    }

    getCalender() {
        cy.get('.react-datepicker__month-container').should('be.visible');
    }

    getForwardNavigation() {
        cy.get('.react-datepicker__navigation-icon react-datepicker__navigation-icon--next').click();
    }

    // getCalenderDays() {
    //     cy.get('.react-datepicker__day')
    //         .and('have.length', 35)
    //         .should('not.be.disabled')
    //         .then($items => {
    //             console.log(Cypress._.sampleSize($items.toArray(), 1), 'button One')
    //             cy.wrap(Object.entries(Cypress._.sampleSize($items))).each((date) => {
    //                 // console.log(date, 'button disabled')
    //                 if (!date[1].ariaDisabled == "true") {
    //                     console.log('button NOT DISABLED')
    //                     cy.wrap(date).click({ multiple: true, force: true })

    //                 }
    //                 if (date[1].ariaDisabled == "true") {
    //                     console.log('button DISABLED')

    //                     return date++ 
    //                     // cy.wrap(date).click({ multiple: true, force: true })

    //                 }
    //             })
           
    //         })

    // }

    getCalenderDay()
    {
        // cy.get('.react-datepicker__day').not('[disabled]').last()
         cy.xpath('//*[@id="content1"]/div[3]/div[1]/div[2]/div[2]/div/div/div[2]/div[2]/div[3]/div[4]')
        .click({force: true, multiple: true})
        //  cy.get('.react-datepicker__day').not('[disabled]')
        // .its('length')
        // .then(cy.log)
        // .then((n) => Cypress._.random(0, n - 1))
        // // console.log((n))
        
        // .then((k)=> {
        //     cy.get('.react-datepicker__day').not('[disabled]').eq(k).click({force: true, multiple: true})
        // })
        
    }


    selectDays() {
        cy.get('.react-datepicker__day--022').click({ force: true });
    }



    ProceedToBusSelection() {
        cy.get('#content1 > :nth-child(7) > .col-md-12 > .Button_Wrap').click({force: true })
        //   .should('have.text', 'Proceed');
    }

    SelectBusType() {
        cy.get('button[title="View Seats"]').click({ force: true });
    }


    viewSeat() {
        cy.get('button[title="View Seats"]').click({ force: true });
    }

    selectSeatPosition() {
        cy.get('.seat-numbers').not('[disabled]').click({force: true, multiple: true});
           
    }

    continueToPassengerDetailBtn()
    {
        cy.get('.rodal-fade-enter > .rodal-dialog > [style="overflow: hidden; height: 500px;"] > .modContainer > [style="margin-top: 10px;"] > .seats-select > :nth-child(3) > .col-sm-12 > :nth-child(11) > .col-md-12 > .Button_Wrap').click({force:true})
    }

    inputNextofKinsName(nextofKins)
    {
        cy.xpath('//*[@id="root"]/div/section/div/div[2]/div[1]/ol/li[3]/section/div[2]/div[1]/input').type(nextofKins, {force:true});
    }

    inputNextofKinsNumber(phonenumber)
    {
        cy.xpath('//*[@id="root"]/div/section/div/div[2]/div[1]/ol/li[3]/section/div[2]/div[2]/input').type(phonenumber, {force:true});
    }

    PayTobeEnabled()
    {
        cy.get('.trip-summary > .Button_Wrap').should('be.enabled');
    }

    PaySelected()
    {
        cy.get('.trip-summary > .Button_Wrap').click({force:true})
    }

    PaymentMethod()
    {
        cy.get('.pay-bg-wallet').click({force:true})
    }

    EnterWalletPin()
    {
        cy.get('input[class="pincode-input-text"]').first().type('2', {force:true});
        cy.xpath('//*[@id="root"]/div/div[4]/div[2]/div/div/div[3]/div/div[1]/div/div/input[2]').type('5');
        cy.xpath('//*[@id="root"]/div/div[4]/div[2]/div/div/div[3]/div/div[1]/div/div/input[3]').type('1');
        cy.get('input[class="pincode-input-text"]').last().type('4');

    }

    ProcceWithWalletPayment()
    {
       let Pay =  cy.xpath('//*[@id="root"]/div/div[4]/div[2]/div/div/div[3]/div/div[2]/div/div/button')
        if (Pay.not('[disabled]')){
            Pay.click({force:true})
            .wait(12000);
        }else {
            return
        }
            
        
    }

    SuccessMessage()
    {
        cy.xpath('//*[@id="root"]/div/section/div/div/div/div/h1/text()[1]').should('contains.text', 'Your Ticket (')
    }


    HomeBtn()
    {
        cy.get('.download-btn').click({force:true});
    }

    BookingStatus()
    {
        cy.get('.position-filters > :nth-child(3)').click({force:true});
    }

    EnterBookingStatus()
    {
        // cy.get('.route-card-h1').invoke('text')
        
        // .then((n) => {
        //     cy.get('.col-md-12 > .inputField_Wrap').type(n, {force: true});
        // })

        cy.get('.col-md-12 > .inputField_Wrap').type( 'OH-DE04B5BE96', {force: true});
        
        
    }

    ProceedToStatusPage()
    {
        cy.get(':nth-child(3) > .col-md-12 > .Button_Wrap').click({force: true});
    }

    ConfirmationoFStatus()
    {
        cy.get('strong > p').should('contains.text', 'Confirmed')
    }






    // cy.get('seat-numbers')
    // .and('have.length', 14)
    // .then($items => {
    //     return Cypress._.sampleSize($items.toArray(), 1)
    // })
    // .should('have.length', 1)
    // .click({ multiple: true, force: true })



    // EnterDepartureItem()
    // {
    // cy.get(this.ClickDept).scrollIntoView({ offset: { top: 0, left: 500} })
    // .click({force: true})
    // .type('Lagos').type('{enter}');

    // }

    

}

export default Login;