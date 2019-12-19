export var common = {
    common: {
        cancel: 'Cancel',
        delete: 'Delete',
        remove: 'Remove',
        edit: 'Edit',
        back: 'Back',
        submit: 'Submit',
        continue: 'Continue',
        save: 'Save',
        done: 'Done',
        home: 'Home',
    },
    pageMetaResolver: {
        category: {
            title: '{{count}} result for {{query}}',
            title_plural: '{{count}} results for {{query}}',
        },
        checkout: {
            title: 'Checkout {{count}} item',
            title_plural: 'Checkout {{count}} items',
        },
        search: {
            title: '{{count}} result for "{{query}}"',
            title_plural: '{{count}} results for "{{query}}"',
        },
        product: {
            description: '{{description}}',
            heading: '{{heading}}',
            title: '{{title}}',
        },
    },
    spinner: {
        loading: 'Loading...',
    },
    navigation: {
        shopAll: 'Shop all {{ navNode}} >',
    },
    searchBox: {
        placeholder: 'Search here...',
        help: {
            insufficientChars: 'Please type more characters',
            noMatch: 'We could not find any results',
            exactMatch: '{{ term }}',
            empty: 'Ask us anything',
        },
    },
    sorting: {
        date: 'Date',
        orderNumber: 'Order Number',
        rma: 'Return Number',
    },
    httpHandlers: {
        badGateway: 'A server error occurred. Please try again later.',
        badRequestPleaseLoginAgain: '{{ errorMessage }}. Please login again.',
        badRequestOldPasswordIncorrect: 'Old password incorrect.',
        conflict: 'Already exists',
        forbidden: 'You are not authorized to perform this action.',
        gatewayTimeout: 'The server did not respond, please try again later.',
        internalServerError: 'An Internal Server Error occurred. Please try again later.',
        unknownError: 'An unknown error occurred',
        validationErrors: {
            missing: {
                card_cardType: 'The selected credit card is not supported. Please select another.',
                card_accountNumber: 'The credit card number entered is not valid.',
                card_cvNumber: 'The security code entered is not valid.',
                card_expirationMonth: 'The credit card expiration date entered is not valid.',
                card_expirationYear: 'The credit card expiration date entered is not valid.',
                billTo_firstName: 'The first name entered is not valid.',
                billTo_lastName: 'The last name entered is not valid.',
                billTo_street1: 'The address entered is not valid.',
                billTo_street2: 'The address entered is not valid.',
                billTo_city: 'The city entered is not valid for this credit card.',
                billTo_state: 'The state/province entered is not valid for this credit card.',
                billTo_country: 'The country entered is not valid for this credit card.',
                billTo_postalCode: 'The zip/postal code is not valid for this credit card.',
                country: {
                    isocode: 'Missing country',
                },
            },
            invalid: {
                card_expirationMonth: 'The credit card expiration date entered is not valid.',
            },
        },
        cartNotFound: 'Cart not found.',
    },
    miniCart: {
        item: '{{count}} item currently in your cart',
        item_plural: '{{count}} items currently in your cart',
    },
    miniLogin: {
        userGreeting: 'Hi, {{name}}',
        signInRegister: 'Sign In / Register',
    },
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tbW9uLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9hc3NldHMvIiwic291cmNlcyI6WyJ0cmFuc2xhdGlvbnMvZW4vY29tbW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE1BQU0sQ0FBQyxJQUFNLE1BQU0sR0FBRztJQUNwQixNQUFNLEVBQUU7UUFDTixNQUFNLEVBQUUsUUFBUTtRQUNoQixNQUFNLEVBQUUsUUFBUTtRQUNoQixNQUFNLEVBQUUsUUFBUTtRQUNoQixJQUFJLEVBQUUsTUFBTTtRQUNaLElBQUksRUFBRSxNQUFNO1FBQ1osTUFBTSxFQUFFLFFBQVE7UUFDaEIsUUFBUSxFQUFFLFVBQVU7UUFDcEIsSUFBSSxFQUFFLE1BQU07UUFDWixJQUFJLEVBQUUsTUFBTTtRQUNaLElBQUksRUFBRSxNQUFNO0tBQ2I7SUFDRCxnQkFBZ0IsRUFBRTtRQUNoQixRQUFRLEVBQUU7WUFDUixLQUFLLEVBQUUsZ0NBQWdDO1lBQ3ZDLFlBQVksRUFBRSxpQ0FBaUM7U0FDaEQ7UUFDRCxRQUFRLEVBQUU7WUFDUixLQUFLLEVBQUUseUJBQXlCO1lBQ2hDLFlBQVksRUFBRSwwQkFBMEI7U0FDekM7UUFDRCxNQUFNLEVBQUU7WUFDTixLQUFLLEVBQUUsa0NBQWtDO1lBQ3pDLFlBQVksRUFBRSxtQ0FBbUM7U0FDbEQ7UUFDRCxPQUFPLEVBQUU7WUFDUCxXQUFXLEVBQUUsaUJBQWlCO1lBQzlCLE9BQU8sRUFBRSxhQUFhO1lBQ3RCLEtBQUssRUFBRSxXQUFXO1NBQ25CO0tBQ0Y7SUFDRCxPQUFPLEVBQUU7UUFDUCxPQUFPLEVBQUUsWUFBWTtLQUN0QjtJQUNELFVBQVUsRUFBRTtRQUNWLE9BQU8sRUFBRSx5QkFBeUI7S0FDbkM7SUFDRCxTQUFTLEVBQUU7UUFDVCxXQUFXLEVBQUUsZ0JBQWdCO1FBQzdCLElBQUksRUFBRTtZQUNKLGlCQUFpQixFQUFFLDZCQUE2QjtZQUNoRCxPQUFPLEVBQUUsK0JBQStCO1lBQ3hDLFVBQVUsRUFBRSxZQUFZO1lBQ3hCLEtBQUssRUFBRSxpQkFBaUI7U0FDekI7S0FDRjtJQUNELE9BQU8sRUFBRTtRQUNQLElBQUksRUFBRSxNQUFNO1FBQ1osV0FBVyxFQUFFLGNBQWM7UUFDM0IsR0FBRyxFQUFFLGVBQWU7S0FDckI7SUFDRCxZQUFZLEVBQUU7UUFDWixVQUFVLEVBQUUsa0RBQWtEO1FBQzlELDBCQUEwQixFQUFFLHlDQUF5QztRQUNyRSw4QkFBOEIsRUFBRSx5QkFBeUI7UUFDekQsUUFBUSxFQUFFLGdCQUFnQjtRQUMxQixTQUFTLEVBQUUsZ0RBQWdEO1FBQzNELGNBQWMsRUFBRSxxREFBcUQ7UUFDckUsbUJBQW1CLEVBQ2pCLDREQUE0RDtRQUM5RCxZQUFZLEVBQUUsMkJBQTJCO1FBQ3pDLGdCQUFnQixFQUFFO1lBQ2hCLE9BQU8sRUFBRTtnQkFDUCxhQUFhLEVBQ1gsbUVBQW1FO2dCQUNyRSxrQkFBa0IsRUFBRSw4Q0FBOEM7Z0JBQ2xFLGFBQWEsRUFBRSx5Q0FBeUM7Z0JBQ3hELG9CQUFvQixFQUNsQix1REFBdUQ7Z0JBQ3pELG1CQUFtQixFQUNqQix1REFBdUQ7Z0JBQ3pELGdCQUFnQixFQUFFLHNDQUFzQztnQkFDeEQsZUFBZSxFQUFFLHFDQUFxQztnQkFDdEQsY0FBYyxFQUFFLG1DQUFtQztnQkFDbkQsY0FBYyxFQUFFLG1DQUFtQztnQkFDbkQsV0FBVyxFQUFFLHFEQUFxRDtnQkFDbEUsWUFBWSxFQUNWLCtEQUErRDtnQkFDakUsY0FBYyxFQUNaLHdEQUF3RDtnQkFDMUQsaUJBQWlCLEVBQ2Ysd0RBQXdEO2dCQUMxRCxPQUFPLEVBQUU7b0JBQ1AsT0FBTyxFQUFFLGlCQUFpQjtpQkFDM0I7YUFDRjtZQUNELE9BQU8sRUFBRTtnQkFDUCxvQkFBb0IsRUFDbEIsdURBQXVEO2FBQzFEO1NBQ0Y7UUFDRCxZQUFZLEVBQUUsaUJBQWlCO0tBQ2hDO0lBQ0QsUUFBUSxFQUFFO1FBQ1IsSUFBSSxFQUFFLHVDQUF1QztRQUM3QyxXQUFXLEVBQUUsd0NBQXdDO0tBQ3REO0lBQ0QsU0FBUyxFQUFFO1FBQ1QsWUFBWSxFQUFFLGNBQWM7UUFDNUIsY0FBYyxFQUFFLG9CQUFvQjtLQUNyQztDQUNGLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3QgY29tbW9uID0ge1xuICBjb21tb246IHtcbiAgICBjYW5jZWw6ICdDYW5jZWwnLFxuICAgIGRlbGV0ZTogJ0RlbGV0ZScsXG4gICAgcmVtb3ZlOiAnUmVtb3ZlJyxcbiAgICBlZGl0OiAnRWRpdCcsXG4gICAgYmFjazogJ0JhY2snLFxuICAgIHN1Ym1pdDogJ1N1Ym1pdCcsXG4gICAgY29udGludWU6ICdDb250aW51ZScsXG4gICAgc2F2ZTogJ1NhdmUnLFxuICAgIGRvbmU6ICdEb25lJyxcbiAgICBob21lOiAnSG9tZScsXG4gIH0sXG4gIHBhZ2VNZXRhUmVzb2x2ZXI6IHtcbiAgICBjYXRlZ29yeToge1xuICAgICAgdGl0bGU6ICd7e2NvdW50fX0gcmVzdWx0IGZvciB7e3F1ZXJ5fX0nLFxuICAgICAgdGl0bGVfcGx1cmFsOiAne3tjb3VudH19IHJlc3VsdHMgZm9yIHt7cXVlcnl9fScsXG4gICAgfSxcbiAgICBjaGVja291dDoge1xuICAgICAgdGl0bGU6ICdDaGVja291dCB7e2NvdW50fX0gaXRlbScsXG4gICAgICB0aXRsZV9wbHVyYWw6ICdDaGVja291dCB7e2NvdW50fX0gaXRlbXMnLFxuICAgIH0sXG4gICAgc2VhcmNoOiB7XG4gICAgICB0aXRsZTogJ3t7Y291bnR9fSByZXN1bHQgZm9yIFwie3txdWVyeX19XCInLFxuICAgICAgdGl0bGVfcGx1cmFsOiAne3tjb3VudH19IHJlc3VsdHMgZm9yIFwie3txdWVyeX19XCInLFxuICAgIH0sXG4gICAgcHJvZHVjdDoge1xuICAgICAgZGVzY3JpcHRpb246ICd7e2Rlc2NyaXB0aW9ufX0nLFxuICAgICAgaGVhZGluZzogJ3t7aGVhZGluZ319JyxcbiAgICAgIHRpdGxlOiAne3t0aXRsZX19JyxcbiAgICB9LFxuICB9LFxuICBzcGlubmVyOiB7XG4gICAgbG9hZGluZzogJ0xvYWRpbmcuLi4nLFxuICB9LFxuICBuYXZpZ2F0aW9uOiB7XG4gICAgc2hvcEFsbDogJ1Nob3AgYWxsIHt7IG5hdk5vZGV9fSA+JyxcbiAgfSxcbiAgc2VhcmNoQm94OiB7XG4gICAgcGxhY2Vob2xkZXI6ICdTZWFyY2ggaGVyZS4uLicsXG4gICAgaGVscDoge1xuICAgICAgaW5zdWZmaWNpZW50Q2hhcnM6ICdQbGVhc2UgdHlwZSBtb3JlIGNoYXJhY3RlcnMnLFxuICAgICAgbm9NYXRjaDogJ1dlIGNvdWxkIG5vdCBmaW5kIGFueSByZXN1bHRzJyxcbiAgICAgIGV4YWN0TWF0Y2g6ICd7eyB0ZXJtIH19JyxcbiAgICAgIGVtcHR5OiAnQXNrIHVzIGFueXRoaW5nJyxcbiAgICB9LFxuICB9LFxuICBzb3J0aW5nOiB7XG4gICAgZGF0ZTogJ0RhdGUnLFxuICAgIG9yZGVyTnVtYmVyOiAnT3JkZXIgTnVtYmVyJyxcbiAgICBybWE6ICdSZXR1cm4gTnVtYmVyJyxcbiAgfSxcbiAgaHR0cEhhbmRsZXJzOiB7XG4gICAgYmFkR2F0ZXdheTogJ0Egc2VydmVyIGVycm9yIG9jY3VycmVkLiBQbGVhc2UgdHJ5IGFnYWluIGxhdGVyLicsXG4gICAgYmFkUmVxdWVzdFBsZWFzZUxvZ2luQWdhaW46ICd7eyBlcnJvck1lc3NhZ2UgfX0uIFBsZWFzZSBsb2dpbiBhZ2Fpbi4nLFxuICAgIGJhZFJlcXVlc3RPbGRQYXNzd29yZEluY29ycmVjdDogJ09sZCBwYXNzd29yZCBpbmNvcnJlY3QuJyxcbiAgICBjb25mbGljdDogJ0FscmVhZHkgZXhpc3RzJyxcbiAgICBmb3JiaWRkZW46ICdZb3UgYXJlIG5vdCBhdXRob3JpemVkIHRvIHBlcmZvcm0gdGhpcyBhY3Rpb24uJyxcbiAgICBnYXRld2F5VGltZW91dDogJ1RoZSBzZXJ2ZXIgZGlkIG5vdCByZXNwb25kLCBwbGVhc2UgdHJ5IGFnYWluIGxhdGVyLicsXG4gICAgaW50ZXJuYWxTZXJ2ZXJFcnJvcjpcbiAgICAgICdBbiBJbnRlcm5hbCBTZXJ2ZXIgRXJyb3Igb2NjdXJyZWQuIFBsZWFzZSB0cnkgYWdhaW4gbGF0ZXIuJyxcbiAgICB1bmtub3duRXJyb3I6ICdBbiB1bmtub3duIGVycm9yIG9jY3VycmVkJyxcbiAgICB2YWxpZGF0aW9uRXJyb3JzOiB7XG4gICAgICBtaXNzaW5nOiB7XG4gICAgICAgIGNhcmRfY2FyZFR5cGU6XG4gICAgICAgICAgJ1RoZSBzZWxlY3RlZCBjcmVkaXQgY2FyZCBpcyBub3Qgc3VwcG9ydGVkLiBQbGVhc2Ugc2VsZWN0IGFub3RoZXIuJyxcbiAgICAgICAgY2FyZF9hY2NvdW50TnVtYmVyOiAnVGhlIGNyZWRpdCBjYXJkIG51bWJlciBlbnRlcmVkIGlzIG5vdCB2YWxpZC4nLFxuICAgICAgICBjYXJkX2N2TnVtYmVyOiAnVGhlIHNlY3VyaXR5IGNvZGUgZW50ZXJlZCBpcyBub3QgdmFsaWQuJyxcbiAgICAgICAgY2FyZF9leHBpcmF0aW9uTW9udGg6XG4gICAgICAgICAgJ1RoZSBjcmVkaXQgY2FyZCBleHBpcmF0aW9uIGRhdGUgZW50ZXJlZCBpcyBub3QgdmFsaWQuJyxcbiAgICAgICAgY2FyZF9leHBpcmF0aW9uWWVhcjpcbiAgICAgICAgICAnVGhlIGNyZWRpdCBjYXJkIGV4cGlyYXRpb24gZGF0ZSBlbnRlcmVkIGlzIG5vdCB2YWxpZC4nLFxuICAgICAgICBiaWxsVG9fZmlyc3ROYW1lOiAnVGhlIGZpcnN0IG5hbWUgZW50ZXJlZCBpcyBub3QgdmFsaWQuJyxcbiAgICAgICAgYmlsbFRvX2xhc3ROYW1lOiAnVGhlIGxhc3QgbmFtZSBlbnRlcmVkIGlzIG5vdCB2YWxpZC4nLFxuICAgICAgICBiaWxsVG9fc3RyZWV0MTogJ1RoZSBhZGRyZXNzIGVudGVyZWQgaXMgbm90IHZhbGlkLicsXG4gICAgICAgIGJpbGxUb19zdHJlZXQyOiAnVGhlIGFkZHJlc3MgZW50ZXJlZCBpcyBub3QgdmFsaWQuJyxcbiAgICAgICAgYmlsbFRvX2NpdHk6ICdUaGUgY2l0eSBlbnRlcmVkIGlzIG5vdCB2YWxpZCBmb3IgdGhpcyBjcmVkaXQgY2FyZC4nLFxuICAgICAgICBiaWxsVG9fc3RhdGU6XG4gICAgICAgICAgJ1RoZSBzdGF0ZS9wcm92aW5jZSBlbnRlcmVkIGlzIG5vdCB2YWxpZCBmb3IgdGhpcyBjcmVkaXQgY2FyZC4nLFxuICAgICAgICBiaWxsVG9fY291bnRyeTpcbiAgICAgICAgICAnVGhlIGNvdW50cnkgZW50ZXJlZCBpcyBub3QgdmFsaWQgZm9yIHRoaXMgY3JlZGl0IGNhcmQuJyxcbiAgICAgICAgYmlsbFRvX3Bvc3RhbENvZGU6XG4gICAgICAgICAgJ1RoZSB6aXAvcG9zdGFsIGNvZGUgaXMgbm90IHZhbGlkIGZvciB0aGlzIGNyZWRpdCBjYXJkLicsXG4gICAgICAgIGNvdW50cnk6IHtcbiAgICAgICAgICBpc29jb2RlOiAnTWlzc2luZyBjb3VudHJ5JyxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgICBpbnZhbGlkOiB7XG4gICAgICAgIGNhcmRfZXhwaXJhdGlvbk1vbnRoOlxuICAgICAgICAgICdUaGUgY3JlZGl0IGNhcmQgZXhwaXJhdGlvbiBkYXRlIGVudGVyZWQgaXMgbm90IHZhbGlkLicsXG4gICAgICB9LFxuICAgIH0sXG4gICAgY2FydE5vdEZvdW5kOiAnQ2FydCBub3QgZm91bmQuJyxcbiAgfSxcbiAgbWluaUNhcnQ6IHtcbiAgICBpdGVtOiAne3tjb3VudH19IGl0ZW0gY3VycmVudGx5IGluIHlvdXIgY2FydCcsXG4gICAgaXRlbV9wbHVyYWw6ICd7e2NvdW50fX0gaXRlbXMgY3VycmVudGx5IGluIHlvdXIgY2FydCcsXG4gIH0sXG4gIG1pbmlMb2dpbjoge1xuICAgIHVzZXJHcmVldGluZzogJ0hpLCB7e25hbWV9fScsXG4gICAgc2lnbkluUmVnaXN0ZXI6ICdTaWduIEluIC8gUmVnaXN0ZXInLFxuICB9LFxufTtcbiJdfQ==