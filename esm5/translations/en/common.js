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
            findProductTitle: '{{count}} result for coupon "{{coupon}}"',
            findProductTitle_plural: '{{count}} results for coupon "{{coupon}}"',
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
        unauthorized: {
            common: 'An unknown authorization error occured',
            invalid_client: 'Bad client credentials',
        },
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
                firstName: 'First Name entered is not valid.',
                lastName: 'Last Name entered is not valid.',
                password: 'Password entered is not valid.',
                uid: 'UID is not valid.',
            },
        },
        cartNotFound: 'Cart not found.',
        invalidCodeProvided: 'Invalid code provided.',
    },
    miniCart: {
        item: '{{count}} item currently in your cart',
        item_plural: '{{count}} items currently in your cart',
        total: '{{total}}',
        count: '{{count}}',
    },
    miniLogin: {
        userGreeting: 'Hi, {{name}}',
        signInRegister: 'Sign In / Register',
    },
    skipLink: {
        skipTo: 'Skip to',
        labels: {
            header: 'Header',
            main: 'Main Content',
            footer: 'Footer',
            productFacets: 'Product Facets',
            productList: 'Product List',
        },
    },
    formErrors: {
        globalMessage: 'The form you are trying to submit contains errors.',
        required: 'This field is required',
        cxInvalidEmail: 'This is not a valid email format',
        cxInvalidPassword: 'This is not a valid password format',
        cxPasswordsMustMatch: 'Password fields must match',
        cxEmailsMustMatch: 'Email fields must match',
        cxStarRatingEmpty: 'Rating field is required',
        cxNoSelectedItemToCancel: 'Select at least one item to cancel',
    },
    errorHandlers: {
        scriptFailedToLoad: 'Failed to load the script.',
        refreshThePage: 'Please refresh the page.',
    },
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tbW9uLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9hc3NldHMvIiwic291cmNlcyI6WyJ0cmFuc2xhdGlvbnMvZW4vY29tbW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE1BQU0sQ0FBQyxJQUFNLE1BQU0sR0FBRztJQUNwQixNQUFNLEVBQUU7UUFDTixNQUFNLEVBQUUsUUFBUTtRQUNoQixNQUFNLEVBQUUsUUFBUTtRQUNoQixNQUFNLEVBQUUsUUFBUTtRQUNoQixJQUFJLEVBQUUsTUFBTTtRQUNaLElBQUksRUFBRSxNQUFNO1FBQ1osTUFBTSxFQUFFLFFBQVE7UUFDaEIsUUFBUSxFQUFFLFVBQVU7UUFDcEIsSUFBSSxFQUFFLE1BQU07UUFDWixJQUFJLEVBQUUsTUFBTTtRQUNaLElBQUksRUFBRSxNQUFNO0tBQ2I7SUFDRCxnQkFBZ0IsRUFBRTtRQUNoQixRQUFRLEVBQUU7WUFDUixLQUFLLEVBQUUsZ0NBQWdDO1lBQ3ZDLFlBQVksRUFBRSxpQ0FBaUM7U0FDaEQ7UUFDRCxRQUFRLEVBQUU7WUFDUixLQUFLLEVBQUUseUJBQXlCO1lBQ2hDLFlBQVksRUFBRSwwQkFBMEI7U0FDekM7UUFDRCxNQUFNLEVBQUU7WUFDTixLQUFLLEVBQUUsa0NBQWtDO1lBQ3pDLFlBQVksRUFBRSxtQ0FBbUM7WUFDakQsZ0JBQWdCLEVBQUUsMENBQTBDO1lBQzVELHVCQUF1QixFQUFFLDJDQUEyQztTQUNyRTtRQUNELE9BQU8sRUFBRTtZQUNQLFdBQVcsRUFBRSxpQkFBaUI7WUFDOUIsT0FBTyxFQUFFLGFBQWE7WUFDdEIsS0FBSyxFQUFFLFdBQVc7U0FDbkI7S0FDRjtJQUNELE9BQU8sRUFBRTtRQUNQLE9BQU8sRUFBRSxZQUFZO0tBQ3RCO0lBQ0QsVUFBVSxFQUFFO1FBQ1YsT0FBTyxFQUFFLHlCQUF5QjtLQUNuQztJQUNELFNBQVMsRUFBRTtRQUNULFdBQVcsRUFBRSxnQkFBZ0I7UUFDN0IsSUFBSSxFQUFFO1lBQ0osaUJBQWlCLEVBQUUsNkJBQTZCO1lBQ2hELE9BQU8sRUFBRSwrQkFBK0I7WUFDeEMsVUFBVSxFQUFFLFlBQVk7WUFDeEIsS0FBSyxFQUFFLGlCQUFpQjtTQUN6QjtLQUNGO0lBQ0QsT0FBTyxFQUFFO1FBQ1AsSUFBSSxFQUFFLE1BQU07UUFDWixXQUFXLEVBQUUsY0FBYztRQUMzQixHQUFHLEVBQUUsZUFBZTtLQUNyQjtJQUNELFlBQVksRUFBRTtRQUNaLFVBQVUsRUFBRSxrREFBa0Q7UUFDOUQsMEJBQTBCLEVBQUUseUNBQXlDO1FBQ3JFLDhCQUE4QixFQUFFLHlCQUF5QjtRQUN6RCxRQUFRLEVBQUUsZ0JBQWdCO1FBQzFCLFNBQVMsRUFBRSxnREFBZ0Q7UUFDM0QsY0FBYyxFQUFFLHFEQUFxRDtRQUNyRSxtQkFBbUIsRUFDakIsNERBQTREO1FBQzlELFlBQVksRUFBRSwyQkFBMkI7UUFDekMsWUFBWSxFQUFFO1lBQ1osTUFBTSxFQUFFLHdDQUF3QztZQUNoRCxjQUFjLEVBQUUsd0JBQXdCO1NBQ3pDO1FBQ0QsZ0JBQWdCLEVBQUU7WUFDaEIsT0FBTyxFQUFFO2dCQUNQLGFBQWEsRUFDWCxtRUFBbUU7Z0JBQ3JFLGtCQUFrQixFQUFFLDhDQUE4QztnQkFDbEUsYUFBYSxFQUFFLHlDQUF5QztnQkFDeEQsb0JBQW9CLEVBQ2xCLHVEQUF1RDtnQkFDekQsbUJBQW1CLEVBQ2pCLHVEQUF1RDtnQkFDekQsZ0JBQWdCLEVBQUUsc0NBQXNDO2dCQUN4RCxlQUFlLEVBQUUscUNBQXFDO2dCQUN0RCxjQUFjLEVBQUUsbUNBQW1DO2dCQUNuRCxjQUFjLEVBQUUsbUNBQW1DO2dCQUNuRCxXQUFXLEVBQUUscURBQXFEO2dCQUNsRSxZQUFZLEVBQ1YsK0RBQStEO2dCQUNqRSxjQUFjLEVBQ1osd0RBQXdEO2dCQUMxRCxpQkFBaUIsRUFDZix3REFBd0Q7Z0JBQzFELE9BQU8sRUFBRTtvQkFDUCxPQUFPLEVBQUUsaUJBQWlCO2lCQUMzQjthQUNGO1lBQ0QsT0FBTyxFQUFFO2dCQUNQLG9CQUFvQixFQUNsQix1REFBdUQ7Z0JBQ3pELFNBQVMsRUFBRSxrQ0FBa0M7Z0JBQzdDLFFBQVEsRUFBRSxpQ0FBaUM7Z0JBQzNDLFFBQVEsRUFBRSxnQ0FBZ0M7Z0JBQzFDLEdBQUcsRUFBRSxtQkFBbUI7YUFDekI7U0FDRjtRQUNELFlBQVksRUFBRSxpQkFBaUI7UUFDL0IsbUJBQW1CLEVBQUUsd0JBQXdCO0tBQzlDO0lBQ0QsUUFBUSxFQUFFO1FBQ1IsSUFBSSxFQUFFLHVDQUF1QztRQUM3QyxXQUFXLEVBQUUsd0NBQXdDO1FBQ3JELEtBQUssRUFBRSxXQUFXO1FBQ2xCLEtBQUssRUFBRSxXQUFXO0tBQ25CO0lBQ0QsU0FBUyxFQUFFO1FBQ1QsWUFBWSxFQUFFLGNBQWM7UUFDNUIsY0FBYyxFQUFFLG9CQUFvQjtLQUNyQztJQUNELFFBQVEsRUFBRTtRQUNSLE1BQU0sRUFBRSxTQUFTO1FBQ2pCLE1BQU0sRUFBRTtZQUNOLE1BQU0sRUFBRSxRQUFRO1lBQ2hCLElBQUksRUFBRSxjQUFjO1lBQ3BCLE1BQU0sRUFBRSxRQUFRO1lBQ2hCLGFBQWEsRUFBRSxnQkFBZ0I7WUFDL0IsV0FBVyxFQUFFLGNBQWM7U0FDNUI7S0FDRjtJQUNELFVBQVUsRUFBRTtRQUNWLGFBQWEsRUFBRSxvREFBb0Q7UUFDbkUsUUFBUSxFQUFFLHdCQUF3QjtRQUNsQyxjQUFjLEVBQUUsa0NBQWtDO1FBQ2xELGlCQUFpQixFQUFFLHFDQUFxQztRQUN4RCxvQkFBb0IsRUFBRSw0QkFBNEI7UUFDbEQsaUJBQWlCLEVBQUUseUJBQXlCO1FBQzVDLGlCQUFpQixFQUFFLDBCQUEwQjtRQUM3Qyx3QkFBd0IsRUFBRSxvQ0FBb0M7S0FDL0Q7SUFDRCxhQUFhLEVBQUU7UUFDYixrQkFBa0IsRUFBRSw0QkFBNEI7UUFDaEQsY0FBYyxFQUFFLDBCQUEwQjtLQUMzQztDQUNGLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3QgY29tbW9uID0ge1xuICBjb21tb246IHtcbiAgICBjYW5jZWw6ICdDYW5jZWwnLFxuICAgIGRlbGV0ZTogJ0RlbGV0ZScsXG4gICAgcmVtb3ZlOiAnUmVtb3ZlJyxcbiAgICBlZGl0OiAnRWRpdCcsXG4gICAgYmFjazogJ0JhY2snLFxuICAgIHN1Ym1pdDogJ1N1Ym1pdCcsXG4gICAgY29udGludWU6ICdDb250aW51ZScsXG4gICAgc2F2ZTogJ1NhdmUnLFxuICAgIGRvbmU6ICdEb25lJyxcbiAgICBob21lOiAnSG9tZScsXG4gIH0sXG4gIHBhZ2VNZXRhUmVzb2x2ZXI6IHtcbiAgICBjYXRlZ29yeToge1xuICAgICAgdGl0bGU6ICd7e2NvdW50fX0gcmVzdWx0IGZvciB7e3F1ZXJ5fX0nLFxuICAgICAgdGl0bGVfcGx1cmFsOiAne3tjb3VudH19IHJlc3VsdHMgZm9yIHt7cXVlcnl9fScsXG4gICAgfSxcbiAgICBjaGVja291dDoge1xuICAgICAgdGl0bGU6ICdDaGVja291dCB7e2NvdW50fX0gaXRlbScsXG4gICAgICB0aXRsZV9wbHVyYWw6ICdDaGVja291dCB7e2NvdW50fX0gaXRlbXMnLFxuICAgIH0sXG4gICAgc2VhcmNoOiB7XG4gICAgICB0aXRsZTogJ3t7Y291bnR9fSByZXN1bHQgZm9yIFwie3txdWVyeX19XCInLFxuICAgICAgdGl0bGVfcGx1cmFsOiAne3tjb3VudH19IHJlc3VsdHMgZm9yIFwie3txdWVyeX19XCInLFxuICAgICAgZmluZFByb2R1Y3RUaXRsZTogJ3t7Y291bnR9fSByZXN1bHQgZm9yIGNvdXBvbiBcInt7Y291cG9ufX1cIicsXG4gICAgICBmaW5kUHJvZHVjdFRpdGxlX3BsdXJhbDogJ3t7Y291bnR9fSByZXN1bHRzIGZvciBjb3Vwb24gXCJ7e2NvdXBvbn19XCInLFxuICAgIH0sXG4gICAgcHJvZHVjdDoge1xuICAgICAgZGVzY3JpcHRpb246ICd7e2Rlc2NyaXB0aW9ufX0nLFxuICAgICAgaGVhZGluZzogJ3t7aGVhZGluZ319JyxcbiAgICAgIHRpdGxlOiAne3t0aXRsZX19JyxcbiAgICB9LFxuICB9LFxuICBzcGlubmVyOiB7XG4gICAgbG9hZGluZzogJ0xvYWRpbmcuLi4nLFxuICB9LFxuICBuYXZpZ2F0aW9uOiB7XG4gICAgc2hvcEFsbDogJ1Nob3AgYWxsIHt7IG5hdk5vZGV9fSA+JyxcbiAgfSxcbiAgc2VhcmNoQm94OiB7XG4gICAgcGxhY2Vob2xkZXI6ICdTZWFyY2ggaGVyZS4uLicsXG4gICAgaGVscDoge1xuICAgICAgaW5zdWZmaWNpZW50Q2hhcnM6ICdQbGVhc2UgdHlwZSBtb3JlIGNoYXJhY3RlcnMnLFxuICAgICAgbm9NYXRjaDogJ1dlIGNvdWxkIG5vdCBmaW5kIGFueSByZXN1bHRzJyxcbiAgICAgIGV4YWN0TWF0Y2g6ICd7eyB0ZXJtIH19JyxcbiAgICAgIGVtcHR5OiAnQXNrIHVzIGFueXRoaW5nJyxcbiAgICB9LFxuICB9LFxuICBzb3J0aW5nOiB7XG4gICAgZGF0ZTogJ0RhdGUnLFxuICAgIG9yZGVyTnVtYmVyOiAnT3JkZXIgTnVtYmVyJyxcbiAgICBybWE6ICdSZXR1cm4gTnVtYmVyJyxcbiAgfSxcbiAgaHR0cEhhbmRsZXJzOiB7XG4gICAgYmFkR2F0ZXdheTogJ0Egc2VydmVyIGVycm9yIG9jY3VycmVkLiBQbGVhc2UgdHJ5IGFnYWluIGxhdGVyLicsXG4gICAgYmFkUmVxdWVzdFBsZWFzZUxvZ2luQWdhaW46ICd7eyBlcnJvck1lc3NhZ2UgfX0uIFBsZWFzZSBsb2dpbiBhZ2Fpbi4nLFxuICAgIGJhZFJlcXVlc3RPbGRQYXNzd29yZEluY29ycmVjdDogJ09sZCBwYXNzd29yZCBpbmNvcnJlY3QuJyxcbiAgICBjb25mbGljdDogJ0FscmVhZHkgZXhpc3RzJyxcbiAgICBmb3JiaWRkZW46ICdZb3UgYXJlIG5vdCBhdXRob3JpemVkIHRvIHBlcmZvcm0gdGhpcyBhY3Rpb24uJyxcbiAgICBnYXRld2F5VGltZW91dDogJ1RoZSBzZXJ2ZXIgZGlkIG5vdCByZXNwb25kLCBwbGVhc2UgdHJ5IGFnYWluIGxhdGVyLicsXG4gICAgaW50ZXJuYWxTZXJ2ZXJFcnJvcjpcbiAgICAgICdBbiBJbnRlcm5hbCBTZXJ2ZXIgRXJyb3Igb2NjdXJyZWQuIFBsZWFzZSB0cnkgYWdhaW4gbGF0ZXIuJyxcbiAgICB1bmtub3duRXJyb3I6ICdBbiB1bmtub3duIGVycm9yIG9jY3VycmVkJyxcbiAgICB1bmF1dGhvcml6ZWQ6IHtcbiAgICAgIGNvbW1vbjogJ0FuIHVua25vd24gYXV0aG9yaXphdGlvbiBlcnJvciBvY2N1cmVkJyxcbiAgICAgIGludmFsaWRfY2xpZW50OiAnQmFkIGNsaWVudCBjcmVkZW50aWFscycsXG4gICAgfSxcbiAgICB2YWxpZGF0aW9uRXJyb3JzOiB7XG4gICAgICBtaXNzaW5nOiB7XG4gICAgICAgIGNhcmRfY2FyZFR5cGU6XG4gICAgICAgICAgJ1RoZSBzZWxlY3RlZCBjcmVkaXQgY2FyZCBpcyBub3Qgc3VwcG9ydGVkLiBQbGVhc2Ugc2VsZWN0IGFub3RoZXIuJyxcbiAgICAgICAgY2FyZF9hY2NvdW50TnVtYmVyOiAnVGhlIGNyZWRpdCBjYXJkIG51bWJlciBlbnRlcmVkIGlzIG5vdCB2YWxpZC4nLFxuICAgICAgICBjYXJkX2N2TnVtYmVyOiAnVGhlIHNlY3VyaXR5IGNvZGUgZW50ZXJlZCBpcyBub3QgdmFsaWQuJyxcbiAgICAgICAgY2FyZF9leHBpcmF0aW9uTW9udGg6XG4gICAgICAgICAgJ1RoZSBjcmVkaXQgY2FyZCBleHBpcmF0aW9uIGRhdGUgZW50ZXJlZCBpcyBub3QgdmFsaWQuJyxcbiAgICAgICAgY2FyZF9leHBpcmF0aW9uWWVhcjpcbiAgICAgICAgICAnVGhlIGNyZWRpdCBjYXJkIGV4cGlyYXRpb24gZGF0ZSBlbnRlcmVkIGlzIG5vdCB2YWxpZC4nLFxuICAgICAgICBiaWxsVG9fZmlyc3ROYW1lOiAnVGhlIGZpcnN0IG5hbWUgZW50ZXJlZCBpcyBub3QgdmFsaWQuJyxcbiAgICAgICAgYmlsbFRvX2xhc3ROYW1lOiAnVGhlIGxhc3QgbmFtZSBlbnRlcmVkIGlzIG5vdCB2YWxpZC4nLFxuICAgICAgICBiaWxsVG9fc3RyZWV0MTogJ1RoZSBhZGRyZXNzIGVudGVyZWQgaXMgbm90IHZhbGlkLicsXG4gICAgICAgIGJpbGxUb19zdHJlZXQyOiAnVGhlIGFkZHJlc3MgZW50ZXJlZCBpcyBub3QgdmFsaWQuJyxcbiAgICAgICAgYmlsbFRvX2NpdHk6ICdUaGUgY2l0eSBlbnRlcmVkIGlzIG5vdCB2YWxpZCBmb3IgdGhpcyBjcmVkaXQgY2FyZC4nLFxuICAgICAgICBiaWxsVG9fc3RhdGU6XG4gICAgICAgICAgJ1RoZSBzdGF0ZS9wcm92aW5jZSBlbnRlcmVkIGlzIG5vdCB2YWxpZCBmb3IgdGhpcyBjcmVkaXQgY2FyZC4nLFxuICAgICAgICBiaWxsVG9fY291bnRyeTpcbiAgICAgICAgICAnVGhlIGNvdW50cnkgZW50ZXJlZCBpcyBub3QgdmFsaWQgZm9yIHRoaXMgY3JlZGl0IGNhcmQuJyxcbiAgICAgICAgYmlsbFRvX3Bvc3RhbENvZGU6XG4gICAgICAgICAgJ1RoZSB6aXAvcG9zdGFsIGNvZGUgaXMgbm90IHZhbGlkIGZvciB0aGlzIGNyZWRpdCBjYXJkLicsXG4gICAgICAgIGNvdW50cnk6IHtcbiAgICAgICAgICBpc29jb2RlOiAnTWlzc2luZyBjb3VudHJ5JyxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgICBpbnZhbGlkOiB7XG4gICAgICAgIGNhcmRfZXhwaXJhdGlvbk1vbnRoOlxuICAgICAgICAgICdUaGUgY3JlZGl0IGNhcmQgZXhwaXJhdGlvbiBkYXRlIGVudGVyZWQgaXMgbm90IHZhbGlkLicsXG4gICAgICAgIGZpcnN0TmFtZTogJ0ZpcnN0IE5hbWUgZW50ZXJlZCBpcyBub3QgdmFsaWQuJyxcbiAgICAgICAgbGFzdE5hbWU6ICdMYXN0IE5hbWUgZW50ZXJlZCBpcyBub3QgdmFsaWQuJyxcbiAgICAgICAgcGFzc3dvcmQ6ICdQYXNzd29yZCBlbnRlcmVkIGlzIG5vdCB2YWxpZC4nLFxuICAgICAgICB1aWQ6ICdVSUQgaXMgbm90IHZhbGlkLicsXG4gICAgICB9LFxuICAgIH0sXG4gICAgY2FydE5vdEZvdW5kOiAnQ2FydCBub3QgZm91bmQuJyxcbiAgICBpbnZhbGlkQ29kZVByb3ZpZGVkOiAnSW52YWxpZCBjb2RlIHByb3ZpZGVkLicsXG4gIH0sXG4gIG1pbmlDYXJ0OiB7XG4gICAgaXRlbTogJ3t7Y291bnR9fSBpdGVtIGN1cnJlbnRseSBpbiB5b3VyIGNhcnQnLFxuICAgIGl0ZW1fcGx1cmFsOiAne3tjb3VudH19IGl0ZW1zIGN1cnJlbnRseSBpbiB5b3VyIGNhcnQnLFxuICAgIHRvdGFsOiAne3t0b3RhbH19JyxcbiAgICBjb3VudDogJ3t7Y291bnR9fScsXG4gIH0sXG4gIG1pbmlMb2dpbjoge1xuICAgIHVzZXJHcmVldGluZzogJ0hpLCB7e25hbWV9fScsXG4gICAgc2lnbkluUmVnaXN0ZXI6ICdTaWduIEluIC8gUmVnaXN0ZXInLFxuICB9LFxuICBza2lwTGluazoge1xuICAgIHNraXBUbzogJ1NraXAgdG8nLFxuICAgIGxhYmVsczoge1xuICAgICAgaGVhZGVyOiAnSGVhZGVyJyxcbiAgICAgIG1haW46ICdNYWluIENvbnRlbnQnLFxuICAgICAgZm9vdGVyOiAnRm9vdGVyJyxcbiAgICAgIHByb2R1Y3RGYWNldHM6ICdQcm9kdWN0IEZhY2V0cycsXG4gICAgICBwcm9kdWN0TGlzdDogJ1Byb2R1Y3QgTGlzdCcsXG4gICAgfSxcbiAgfSxcbiAgZm9ybUVycm9yczoge1xuICAgIGdsb2JhbE1lc3NhZ2U6ICdUaGUgZm9ybSB5b3UgYXJlIHRyeWluZyB0byBzdWJtaXQgY29udGFpbnMgZXJyb3JzLicsXG4gICAgcmVxdWlyZWQ6ICdUaGlzIGZpZWxkIGlzIHJlcXVpcmVkJyxcbiAgICBjeEludmFsaWRFbWFpbDogJ1RoaXMgaXMgbm90IGEgdmFsaWQgZW1haWwgZm9ybWF0JyxcbiAgICBjeEludmFsaWRQYXNzd29yZDogJ1RoaXMgaXMgbm90IGEgdmFsaWQgcGFzc3dvcmQgZm9ybWF0JyxcbiAgICBjeFBhc3N3b3Jkc011c3RNYXRjaDogJ1Bhc3N3b3JkIGZpZWxkcyBtdXN0IG1hdGNoJyxcbiAgICBjeEVtYWlsc011c3RNYXRjaDogJ0VtYWlsIGZpZWxkcyBtdXN0IG1hdGNoJyxcbiAgICBjeFN0YXJSYXRpbmdFbXB0eTogJ1JhdGluZyBmaWVsZCBpcyByZXF1aXJlZCcsXG4gICAgY3hOb1NlbGVjdGVkSXRlbVRvQ2FuY2VsOiAnU2VsZWN0IGF0IGxlYXN0IG9uZSBpdGVtIHRvIGNhbmNlbCcsXG4gIH0sXG4gIGVycm9ySGFuZGxlcnM6IHtcbiAgICBzY3JpcHRGYWlsZWRUb0xvYWQ6ICdGYWlsZWQgdG8gbG9hZCB0aGUgc2NyaXB0LicsXG4gICAgcmVmcmVzaFRoZVBhZ2U6ICdQbGVhc2UgcmVmcmVzaCB0aGUgcGFnZS4nLFxuICB9LFxufTtcbiJdfQ==