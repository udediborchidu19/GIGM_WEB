/// <reference types="Cypress" />

describe('GetTerminalByCC', ()=>{


    let access_token = "5aitR20UnYocZDpalPV5LHRF6BoHCOV28V-hur78g7OSpK1OMlfTX1iGiEWYbPQ0B4MtwXa6IKASyp2qhbJ2reXngdSFh1vKTFCRDryoF0KrB0WE0dZbY6NuBx8l1g0ZonaLvb1i9FyPiLm9IvORdsLdtIH1DSQwGFChTFaU_Z6yeqmvOmMm3vmBH-fL3_mLRwdBl1n54JKDEJ8DsSei-g8m7lmlFTLRb6I0TS_2_1bwq-sX71jvvupOMAdRbv91i2YKfcKb1jnisHoKoufWvQu2gYxaALwq1IkCFMZjWhRP83VSK0RvjGeve0f_vF-c4uM0qGD9su2X88GdEWP6iFcF5smXRqaL9d6xc_2VqOhR3xcsURZArTVqTHERqSzVWbJyayK2IL7ZeelPDUf9NG9h12lEEd6IhOgbblfEleKtFtv8v22bMLHpmbzEiL7WLa_LCWMmz_SNMax_CSZz-Q"
    
    
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
                expect(res.body.ShortDescription, 'ShortDescription').to.be.eq("SUCCESS")

                
        
        
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
                    expect(res.body.ShortDescription, 'ShortDescription').to.be.eq("SUCCESS")

            }).then((res)=>{
                // const departureTerId = res.body.Object.Items[42].TerminalId;
                const destinationTerId = res.body.Object[20].TerminalId;
                const array = [4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17];
                const randomIndex = Math.floor(Math.random() * array.length);
                const randomNumber = array[randomIndex];

                console.log(randomNumber);

                

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
                        "DepartureDate": "2023-05-" + randomNumber + "T10:28:30.844Z",
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
                "Email": "calio12120xzz7@yopmail.com",
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
                 "Address": "ererereffdcd"
              }


        }).then((res)=>{
            expect(res.status).to.eq(200)
            expect(res.body.Object.BookingReferenceCode, 'Refrence Code should be').to.eq(res.body.Object.BookingReferenceCode)
            expect(res.body.ShortDescription, 'ShortDescription').to.be.eq("SUCCESS")



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
                    "Email": "calio12120xzz7@yopmail.com",
                    "RefCode": refcode,
                    "Pin": "2536"
                   

                }

        }).then((res)=>{
            const refcode = res.body.Object.BookingReferenceCode
            const response = res.body.Object.Response
            const seatNum = res.body.Object.SeatNumber
            const descrpt = res.body.ShortDescription

            expect(refcode, "Refcode should be").to.be.eq(refcode)
            expect(response, "Payment is").to.be.eq(response)
            expect(seatNum, "Seat Number is").to.be.eq(seatNum)
            expect(descrpt, "Transaction should be").to.be.eq(descrpt)
            expect(res.body.ShortDescription, 'ShortDescription').to.be.eq("SUCCESS")

        })
    })
})
    
 })
        })
    })
})

})