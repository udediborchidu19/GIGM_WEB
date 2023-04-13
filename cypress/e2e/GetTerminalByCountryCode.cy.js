/// <reference types="Cypress" />

describe('GetTerminalByCC', ()=>{


    let access_token = "k_4K_WCVSNhzd772SfFNrnMBJugn0HKsmjFGGqyAWbNYrslujhTAlqXcKRwdWZD7_GLBMrZFlJrVeBakbB68oKgPmGfiBhgFJkQsdxUICddKOJlZ8bsBgI_3YveuUiwfibZfYeKwr5Zw0EN7IguJRpwziaqRt0FA8jk5RkKJgl2ijit1VwQYxoFuaEZ51OJXym-1gvBFT5eu7kuQg_9TRGidV9plq4FTf9ojOQ0lMRzjv69ad41rG5xb53loBX-7wOA7wITZtKZk3dDC0LmcjimJKTo9tCMUl0juii8pQ-Bv2OtnQG8L7DxRMcM0qoOGl0Zj4wJXjlmdPTL9DFIroop7ereamUA6hDIqW8QHZH8KiO0xmUSNplWiILOiAwTBKaLGSBg4tcZhhxLXUlTQRP5sEuvUPccIzgI6hbAVyLuuP6TGU-2V6Ub3TUIrii1N0DZLvcW5CBOPDeA2MTKdgg"
    
    
        it('TerminalByCountryCode', ()=>{
    
            cy.fixture("GIGM_Resource").then((data)=> {
            cy.request({
                method : 'GET',
                url : data.base_url +'/api/terminals/terminalbycountrycode/NG',
                headers:{
                    // 'Authorization': 'Bearer' + access_token 
                    "Content-Type" : "application/x-www-form-urlencoded"
                }
                
                
            }).then((res)=>{
                expect(res.status).to.eq(200)
                expect(res.body.Object.Items[42].TerminalName).to.be.eq('Lagos => Jibowu')
                expect(res.body.Object.Items[42].Latitude).to.be.eq(6.518806)
                expect(res.body.Object.Items[42].Longitude).to.be.eq(3.367547)
                expect(res.body.Object.Items[42].TerminalId).to.be.eq(29)
                expect(res.body.Object.Items).to.be.eq(res.body.Object.Items)

                
        
        
            }).then((res) =>{
                const departureId = res.body.Object.Items[42].TerminalId;
                cy.log(departureId);
                cy.request({
                    method: 'GET',
                    url: data.base_url + '/api/routes/terminals/destinations/' + departureId,
                    headers:{
                        // 'Authorization': 'Bearer' + access_token 
                        "Content-Type" : "application/x-www-form-urlencoded"
                    }
                    
                }).then((res)=>{
                    expect(res.status).to.eq(200)
                    expect(res.body.Object[20].TerminalId).to.be.eq(72)
                    expect(res.body.Object[20].TerminalName).to.be.eq("Enugu==>Nsukka")

            }).then((res)=>{
                // const departureTerId = res.body.Object.Items[42].TerminalId;
                const destinationTerId = res.body.Object[20].TerminalId;

                

                cy.request({
                    method: 'POST',
                    url: data.base_url + '/api/bookings/search',
                    headers:{
                        // 'Authorization': 'Bearer' + access_token 
                        "Content-Type" : "application/x-www-form-urlencoded"
                    },
                    body:{
                        "TripType": 0,
                        "DepartureTerminalId": 29,
                        "DestinationTerminalId": destinationTerId,
                        "DepartureDate": "2023-04-14T10:28:30.844Z",
                        "ReturnDate": "2023-04-01T10:28:30.844Z",
                        "NumberOfAdults": 1,
                        "NumberOfChildren": 0,
                        "BookingType": 0
                    }

            }).then((res)=>{
                const AvaialableSeat = res.body.Object.Departures[0].AvailableSeats;
                console.log(AvaialableSeat)
                // const randomIndex = Math.floor(Math.random() * AvaialableSeat.length);
                // const randomNumber = AvaialableSeat[randomIndex];
                // const BookedSeats = res.body.Object.Departures[0].BookedSeats;
                // cy.log(BookedSeats)
                // BookedSeats.push(randomNumber);
                
                expect(res.status).to.eq(200)
                expect(res.body.ShortDescription, 'ShortDescription').to.be.eq("SUCCESS") 
                //  expect(randomNumber).to.be.eq(randomNumber);
                expect(res.body.Object.Departures[0].TripId, 'TripId').to.be.eq(res.body.Object.Departures[0].TripId)
                expect(res.body.Object.Departures[0].VehicleTripRegistrationId, 'Vehicle Registration ID').to.be.eq(res.body.Object.Departures[0].VehicleTripRegistrationId)
                
                

                
          })
        // .then((res) =>{
    
        
        //     cy.log(res.body)
        //      const tripId = res.body.Object.Departures[0].TripId;
        //      const vehicleregID = res.body.Object.Departures[0].VehicleTripRegistrationId;
        //     cy.log(tripId);
        //     cy.request({
        //         method: 'GET',
        //         url: data.base_url + '/api/pickup/points/tripPickupPoints/' + tripId,
        //         headers:{
        //              'Authorization': 'Bearer ' + access_token,
        //             "Content-Type" : "application/x-www-form-urlencoded"
        //         }
                
        //     }).then((res)=>{
        //         expect(res.status).to.eq(200)
        //         // expect(res.body.Object[20].TerminalId).to.be.eq(72)
        //         // expect(res.body.Object[20].TerminalName).to.be.eq("Enugu==>Nsukka")

        // })
        .then((res)=>{

        const vehicleregID = res.body.Object.Departures[0].VehicleTripRegistrationId;
        const seatReg = vehicleregID
        const AvaialableSeat = res.body.Object.Departures[0].AvailableSeats;
                console.log(AvaialableSeat)
        const randomIndex = Math.floor(Math.random() * AvaialableSeat.length);
        const randomNumber = AvaialableSeat[randomIndex];
        cy.request({
            method: 'POST',
            url: data.base_url + '/api/bookings/postsearch',

            headers:{
                 'Authorization': 'Bearer ' + access_token,
                "Content-Type" : "application/x-www-form-urlencoded",
                "Country-Code" : 'NG'
            },
            body:{
                "TripType": 0,
                "HasTransit": false,
                "PaymentMethod": 23,
                "PosReference": "",
                "BookingType": 2,
                "PassengerType": 0,
                "FirstName": "Udedibor",
                "LastName": "Favour",
                "Gender": 0,
                "RouteId": 16060,
                "isSub": false,
                "isSubReturn": false,
                "Amount": 1,
                "Email": "udediborchidu@gmail.com",
                "PhoneNumber": "07012907166",
                "NextOfKinName": "Femi",
                "NextOfKinPhone": "08139170223",
                "SeatRegistrations": seatReg + ':' + randomNumber,
                "BookingStatus": 1,
                "PickupStatus": 0,
                "Discount": 0,
                "LuggageType": 0,
                "ReturnPickupStatus": 0,
                "IsLoggedIn": false,
                "IsCrossCountryBooking": false,
                "TravelStatus": 0,
                "IsInternational": false,
                "hasCoupon": false,
                "IsCrossCountry": false,
                "VehicleTripRegistrationId": vehicleregID,
                 "Address": "ererereffdcd",
              }


        }).then((res)=>{
            expect(res.status).to.eq(200)
            expect(res.body.Object.BookingReferenceCode, 'Refrence Code should be').to.eq(res.body.Object.BookingReferenceCode)

        }).then((res)=>{
      
             const refcode = res.body.Object.BookingReferenceCode
            cy.request({
                method: 'POST',
                url: data.base_url + '/api/bookings/ProcessWalletPayment',
    
                headers:{
                     'Authorization': 'Bearer ' + access_token,
                    "Content-Type" : "application/x-www-form-urlencoded",
                },
                body:{
                    "Email": "udediborchidu@gmail.com",
                    "RefCode": refcode,
                    "Pin": "2514"
                   

                }

        })
    })
})
    
 })
        })
    })
})

})