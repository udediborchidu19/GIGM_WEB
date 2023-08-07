import Login from "../PageObject/GIGM_LoginPage";

describe('LoginT', ()=> {
    

    before('LoginTest', ()=> {
        cy.visit('https://gigm.com/');

        cy.fixture("GIGM_Resource").then((data)=> {
            const ln = new Login;
            ln.AcceptCookies();
            ln.ClickLogin_SignUp_Btn();
            ln.ClickLogin_SignUp_Btn2();
            ln.setUserName(data.username);
            ln.setPassword(data.password);
            ln.clickBtn();
            ln.Wait();
            ln.AccountAvata1()
            ln.AccountVerify()



        })
        
        

    })

    it("BookAseat", ()=>
    {
        // cy.viewport(375, 720)
        cy.visit('https://gigm.com/');

        cy.fixture("GIGM_Resource").then((data)=> {
            const pa = new Login;
            pa.EnterDeparture(); // select travelling from
            pa.EnterArrival(); // select arrival from
            pa.getDatePicker(); // get calender
            pa.getCalender();
           // pa.getCalenderDays(); //select days
            pa.getCalenderDay()
            pa.ProceedToBusSelection(); //should have bus name
            pa.SelectBusType(); // Select your bus
            pa.viewSeat(); //click to view seat position
            pa.selectSeatPosition(); // select a seat position
            pa.continueToPassengerDetailBtn(); //click to view passenger detail
            pa.inputNextofKinsName(data.nextofKins) //type into field next of kins name
            pa.inputNextofKinsNumber(data.phonenumber); //type into field next of kins number
            pa.PayTobeEnabled() //Pay button to be visible
            pa.PaySelected()
            pa.PaymentMethod();
            pa.EnterWalletPin();
            pa.ProcceWithWalletPayment();
            pa.SuccessMessage(); //should contain some text
            pa.HomeBtn();
            pa.BookingStatus();
            pa.EnterBookingStatus();
            pa.ProceedToStatusPage();
            pa.ConfirmationoFStatus();


            // pa.Wait();
            // pa.EnterDepartureItem();




        })

    })

})