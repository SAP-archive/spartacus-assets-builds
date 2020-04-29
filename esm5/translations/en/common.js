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
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tbW9uLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9hc3NldHMvIiwic291cmNlcyI6WyJ0cmFuc2xhdGlvbnMvZW4vY29tbW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE1BQU0sQ0FBQyxJQUFNLE1BQU0sR0FBRztJQUNwQixNQUFNLEVBQUU7UUFDTixNQUFNLEVBQUUsUUFBUTtRQUNoQixNQUFNLEVBQUUsUUFBUTtRQUNoQixNQUFNLEVBQUUsUUFBUTtRQUNoQixJQUFJLEVBQUUsTUFBTTtRQUNaLElBQUksRUFBRSxNQUFNO1FBQ1osTUFBTSxFQUFFLFFBQVE7UUFDaEIsUUFBUSxFQUFFLFVBQVU7UUFDcEIsSUFBSSxFQUFFLE1BQU07UUFDWixJQUFJLEVBQUUsTUFBTTtRQUNaLElBQUksRUFBRSxNQUFNO0tBQ2I7SUFDRCxnQkFBZ0IsRUFBRTtRQUNoQixRQUFRLEVBQUU7WUFDUixLQUFLLEVBQUUsZ0NBQWdDO1lBQ3ZDLFlBQVksRUFBRSxpQ0FBaUM7U0FDaEQ7UUFDRCxRQUFRLEVBQUU7WUFDUixLQUFLLEVBQUUseUJBQXlCO1lBQ2hDLFlBQVksRUFBRSwwQkFBMEI7U0FDekM7UUFDRCxNQUFNLEVBQUU7WUFDTixLQUFLLEVBQUUsa0NBQWtDO1lBQ3pDLFlBQVksRUFBRSxtQ0FBbUM7WUFDakQsZ0JBQWdCLEVBQUUsMENBQTBDO1lBQzVELHVCQUF1QixFQUFFLDJDQUEyQztTQUNyRTtRQUNELE9BQU8sRUFBRTtZQUNQLFdBQVcsRUFBRSxpQkFBaUI7WUFDOUIsT0FBTyxFQUFFLGFBQWE7WUFDdEIsS0FBSyxFQUFFLFdBQVc7U0FDbkI7S0FDRjtJQUNELE9BQU8sRUFBRTtRQUNQLE9BQU8sRUFBRSxZQUFZO0tBQ3RCO0lBQ0QsVUFBVSxFQUFFO1FBQ1YsT0FBTyxFQUFFLHlCQUF5QjtLQUNuQztJQUNELFNBQVMsRUFBRTtRQUNULFdBQVcsRUFBRSxnQkFBZ0I7UUFDN0IsSUFBSSxFQUFFO1lBQ0osaUJBQWlCLEVBQUUsNkJBQTZCO1lBQ2hELE9BQU8sRUFBRSwrQkFBK0I7WUFDeEMsVUFBVSxFQUFFLFlBQVk7WUFDeEIsS0FBSyxFQUFFLGlCQUFpQjtTQUN6QjtLQUNGO0lBQ0QsT0FBTyxFQUFFO1FBQ1AsSUFBSSxFQUFFLE1BQU07UUFDWixXQUFXLEVBQUUsY0FBYztRQUMzQixHQUFHLEVBQUUsZUFBZTtLQUNyQjtJQUNELFlBQVksRUFBRTtRQUNaLFVBQVUsRUFBRSxrREFBa0Q7UUFDOUQsMEJBQTBCLEVBQUUseUNBQXlDO1FBQ3JFLDhCQUE4QixFQUFFLHlCQUF5QjtRQUN6RCxRQUFRLEVBQUUsZ0JBQWdCO1FBQzFCLFNBQVMsRUFBRSxnREFBZ0Q7UUFDM0QsY0FBYyxFQUFFLHFEQUFxRDtRQUNyRSxtQkFBbUIsRUFDakIsNERBQTREO1FBQzlELFlBQVksRUFBRSwyQkFBMkI7UUFDekMsWUFBWSxFQUFFO1lBQ1osTUFBTSxFQUFFLHdDQUF3QztZQUNoRCxjQUFjLEVBQUUsd0JBQXdCO1NBQ3pDO1FBQ0QsZ0JBQWdCLEVBQUU7WUFDaEIsT0FBTyxFQUFFO2dCQUNQLGFBQWEsRUFDWCxtRUFBbUU7Z0JBQ3JFLGtCQUFrQixFQUFFLDhDQUE4QztnQkFDbEUsYUFBYSxFQUFFLHlDQUF5QztnQkFDeEQsb0JBQW9CLEVBQ2xCLHVEQUF1RDtnQkFDekQsbUJBQW1CLEVBQ2pCLHVEQUF1RDtnQkFDekQsZ0JBQWdCLEVBQUUsc0NBQXNDO2dCQUN4RCxlQUFlLEVBQUUscUNBQXFDO2dCQUN0RCxjQUFjLEVBQUUsbUNBQW1DO2dCQUNuRCxjQUFjLEVBQUUsbUNBQW1DO2dCQUNuRCxXQUFXLEVBQUUscURBQXFEO2dCQUNsRSxZQUFZLEVBQ1YsK0RBQStEO2dCQUNqRSxjQUFjLEVBQ1osd0RBQXdEO2dCQUMxRCxpQkFBaUIsRUFDZix3REFBd0Q7Z0JBQzFELE9BQU8sRUFBRTtvQkFDUCxPQUFPLEVBQUUsaUJBQWlCO2lCQUMzQjthQUNGO1lBQ0QsT0FBTyxFQUFFO2dCQUNQLG9CQUFvQixFQUNsQix1REFBdUQ7Z0JBQ3pELFNBQVMsRUFBRSxrQ0FBa0M7Z0JBQzdDLFFBQVEsRUFBRSxpQ0FBaUM7Z0JBQzNDLFFBQVEsRUFBRSxnQ0FBZ0M7Z0JBQzFDLEdBQUcsRUFBRSxtQkFBbUI7YUFDekI7U0FDRjtRQUNELFlBQVksRUFBRSxpQkFBaUI7UUFDL0IsbUJBQW1CLEVBQUUsd0JBQXdCO0tBQzlDO0lBQ0QsUUFBUSxFQUFFO1FBQ1IsSUFBSSxFQUFFLHVDQUF1QztRQUM3QyxXQUFXLEVBQUUsd0NBQXdDO1FBQ3JELEtBQUssRUFBRSxXQUFXO1FBQ2xCLEtBQUssRUFBRSxXQUFXO0tBQ25CO0lBQ0QsU0FBUyxFQUFFO1FBQ1QsWUFBWSxFQUFFLGNBQWM7UUFDNUIsY0FBYyxFQUFFLG9CQUFvQjtLQUNyQztJQUNELFFBQVEsRUFBRTtRQUNSLE1BQU0sRUFBRSxTQUFTO1FBQ2pCLE1BQU0sRUFBRTtZQUNOLE1BQU0sRUFBRSxRQUFRO1lBQ2hCLElBQUksRUFBRSxjQUFjO1lBQ3BCLE1BQU0sRUFBRSxRQUFRO1lBQ2hCLGFBQWEsRUFBRSxnQkFBZ0I7WUFDL0IsV0FBVyxFQUFFLGNBQWM7U0FDNUI7S0FDRjtJQUNELFVBQVUsRUFBRTtRQUNWLGFBQWEsRUFBRSxvREFBb0Q7UUFDbkUsUUFBUSxFQUFFLHdCQUF3QjtRQUNsQyxjQUFjLEVBQUUsa0NBQWtDO1FBQ2xELGlCQUFpQixFQUFFLHFDQUFxQztRQUN4RCxvQkFBb0IsRUFBRSw0QkFBNEI7UUFDbEQsaUJBQWlCLEVBQUUseUJBQXlCO1FBQzVDLGlCQUFpQixFQUFFLDBCQUEwQjtRQUM3Qyx3QkFBd0IsRUFBRSxvQ0FBb0M7S0FDL0Q7Q0FDRixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IGNvbW1vbiA9IHtcbiAgY29tbW9uOiB7XG4gICAgY2FuY2VsOiAnQ2FuY2VsJyxcbiAgICBkZWxldGU6ICdEZWxldGUnLFxuICAgIHJlbW92ZTogJ1JlbW92ZScsXG4gICAgZWRpdDogJ0VkaXQnLFxuICAgIGJhY2s6ICdCYWNrJyxcbiAgICBzdWJtaXQ6ICdTdWJtaXQnLFxuICAgIGNvbnRpbnVlOiAnQ29udGludWUnLFxuICAgIHNhdmU6ICdTYXZlJyxcbiAgICBkb25lOiAnRG9uZScsXG4gICAgaG9tZTogJ0hvbWUnLFxuICB9LFxuICBwYWdlTWV0YVJlc29sdmVyOiB7XG4gICAgY2F0ZWdvcnk6IHtcbiAgICAgIHRpdGxlOiAne3tjb3VudH19IHJlc3VsdCBmb3Ige3txdWVyeX19JyxcbiAgICAgIHRpdGxlX3BsdXJhbDogJ3t7Y291bnR9fSByZXN1bHRzIGZvciB7e3F1ZXJ5fX0nLFxuICAgIH0sXG4gICAgY2hlY2tvdXQ6IHtcbiAgICAgIHRpdGxlOiAnQ2hlY2tvdXQge3tjb3VudH19IGl0ZW0nLFxuICAgICAgdGl0bGVfcGx1cmFsOiAnQ2hlY2tvdXQge3tjb3VudH19IGl0ZW1zJyxcbiAgICB9LFxuICAgIHNlYXJjaDoge1xuICAgICAgdGl0bGU6ICd7e2NvdW50fX0gcmVzdWx0IGZvciBcInt7cXVlcnl9fVwiJyxcbiAgICAgIHRpdGxlX3BsdXJhbDogJ3t7Y291bnR9fSByZXN1bHRzIGZvciBcInt7cXVlcnl9fVwiJyxcbiAgICAgIGZpbmRQcm9kdWN0VGl0bGU6ICd7e2NvdW50fX0gcmVzdWx0IGZvciBjb3Vwb24gXCJ7e2NvdXBvbn19XCInLFxuICAgICAgZmluZFByb2R1Y3RUaXRsZV9wbHVyYWw6ICd7e2NvdW50fX0gcmVzdWx0cyBmb3IgY291cG9uIFwie3tjb3Vwb259fVwiJyxcbiAgICB9LFxuICAgIHByb2R1Y3Q6IHtcbiAgICAgIGRlc2NyaXB0aW9uOiAne3tkZXNjcmlwdGlvbn19JyxcbiAgICAgIGhlYWRpbmc6ICd7e2hlYWRpbmd9fScsXG4gICAgICB0aXRsZTogJ3t7dGl0bGV9fScsXG4gICAgfSxcbiAgfSxcbiAgc3Bpbm5lcjoge1xuICAgIGxvYWRpbmc6ICdMb2FkaW5nLi4uJyxcbiAgfSxcbiAgbmF2aWdhdGlvbjoge1xuICAgIHNob3BBbGw6ICdTaG9wIGFsbCB7eyBuYXZOb2RlfX0gPicsXG4gIH0sXG4gIHNlYXJjaEJveDoge1xuICAgIHBsYWNlaG9sZGVyOiAnU2VhcmNoIGhlcmUuLi4nLFxuICAgIGhlbHA6IHtcbiAgICAgIGluc3VmZmljaWVudENoYXJzOiAnUGxlYXNlIHR5cGUgbW9yZSBjaGFyYWN0ZXJzJyxcbiAgICAgIG5vTWF0Y2g6ICdXZSBjb3VsZCBub3QgZmluZCBhbnkgcmVzdWx0cycsXG4gICAgICBleGFjdE1hdGNoOiAne3sgdGVybSB9fScsXG4gICAgICBlbXB0eTogJ0FzayB1cyBhbnl0aGluZycsXG4gICAgfSxcbiAgfSxcbiAgc29ydGluZzoge1xuICAgIGRhdGU6ICdEYXRlJyxcbiAgICBvcmRlck51bWJlcjogJ09yZGVyIE51bWJlcicsXG4gICAgcm1hOiAnUmV0dXJuIE51bWJlcicsXG4gIH0sXG4gIGh0dHBIYW5kbGVyczoge1xuICAgIGJhZEdhdGV3YXk6ICdBIHNlcnZlciBlcnJvciBvY2N1cnJlZC4gUGxlYXNlIHRyeSBhZ2FpbiBsYXRlci4nLFxuICAgIGJhZFJlcXVlc3RQbGVhc2VMb2dpbkFnYWluOiAne3sgZXJyb3JNZXNzYWdlIH19LiBQbGVhc2UgbG9naW4gYWdhaW4uJyxcbiAgICBiYWRSZXF1ZXN0T2xkUGFzc3dvcmRJbmNvcnJlY3Q6ICdPbGQgcGFzc3dvcmQgaW5jb3JyZWN0LicsXG4gICAgY29uZmxpY3Q6ICdBbHJlYWR5IGV4aXN0cycsXG4gICAgZm9yYmlkZGVuOiAnWW91IGFyZSBub3QgYXV0aG9yaXplZCB0byBwZXJmb3JtIHRoaXMgYWN0aW9uLicsXG4gICAgZ2F0ZXdheVRpbWVvdXQ6ICdUaGUgc2VydmVyIGRpZCBub3QgcmVzcG9uZCwgcGxlYXNlIHRyeSBhZ2FpbiBsYXRlci4nLFxuICAgIGludGVybmFsU2VydmVyRXJyb3I6XG4gICAgICAnQW4gSW50ZXJuYWwgU2VydmVyIEVycm9yIG9jY3VycmVkLiBQbGVhc2UgdHJ5IGFnYWluIGxhdGVyLicsXG4gICAgdW5rbm93bkVycm9yOiAnQW4gdW5rbm93biBlcnJvciBvY2N1cnJlZCcsXG4gICAgdW5hdXRob3JpemVkOiB7XG4gICAgICBjb21tb246ICdBbiB1bmtub3duIGF1dGhvcml6YXRpb24gZXJyb3Igb2NjdXJlZCcsXG4gICAgICBpbnZhbGlkX2NsaWVudDogJ0JhZCBjbGllbnQgY3JlZGVudGlhbHMnLFxuICAgIH0sXG4gICAgdmFsaWRhdGlvbkVycm9yczoge1xuICAgICAgbWlzc2luZzoge1xuICAgICAgICBjYXJkX2NhcmRUeXBlOlxuICAgICAgICAgICdUaGUgc2VsZWN0ZWQgY3JlZGl0IGNhcmQgaXMgbm90IHN1cHBvcnRlZC4gUGxlYXNlIHNlbGVjdCBhbm90aGVyLicsXG4gICAgICAgIGNhcmRfYWNjb3VudE51bWJlcjogJ1RoZSBjcmVkaXQgY2FyZCBudW1iZXIgZW50ZXJlZCBpcyBub3QgdmFsaWQuJyxcbiAgICAgICAgY2FyZF9jdk51bWJlcjogJ1RoZSBzZWN1cml0eSBjb2RlIGVudGVyZWQgaXMgbm90IHZhbGlkLicsXG4gICAgICAgIGNhcmRfZXhwaXJhdGlvbk1vbnRoOlxuICAgICAgICAgICdUaGUgY3JlZGl0IGNhcmQgZXhwaXJhdGlvbiBkYXRlIGVudGVyZWQgaXMgbm90IHZhbGlkLicsXG4gICAgICAgIGNhcmRfZXhwaXJhdGlvblllYXI6XG4gICAgICAgICAgJ1RoZSBjcmVkaXQgY2FyZCBleHBpcmF0aW9uIGRhdGUgZW50ZXJlZCBpcyBub3QgdmFsaWQuJyxcbiAgICAgICAgYmlsbFRvX2ZpcnN0TmFtZTogJ1RoZSBmaXJzdCBuYW1lIGVudGVyZWQgaXMgbm90IHZhbGlkLicsXG4gICAgICAgIGJpbGxUb19sYXN0TmFtZTogJ1RoZSBsYXN0IG5hbWUgZW50ZXJlZCBpcyBub3QgdmFsaWQuJyxcbiAgICAgICAgYmlsbFRvX3N0cmVldDE6ICdUaGUgYWRkcmVzcyBlbnRlcmVkIGlzIG5vdCB2YWxpZC4nLFxuICAgICAgICBiaWxsVG9fc3RyZWV0MjogJ1RoZSBhZGRyZXNzIGVudGVyZWQgaXMgbm90IHZhbGlkLicsXG4gICAgICAgIGJpbGxUb19jaXR5OiAnVGhlIGNpdHkgZW50ZXJlZCBpcyBub3QgdmFsaWQgZm9yIHRoaXMgY3JlZGl0IGNhcmQuJyxcbiAgICAgICAgYmlsbFRvX3N0YXRlOlxuICAgICAgICAgICdUaGUgc3RhdGUvcHJvdmluY2UgZW50ZXJlZCBpcyBub3QgdmFsaWQgZm9yIHRoaXMgY3JlZGl0IGNhcmQuJyxcbiAgICAgICAgYmlsbFRvX2NvdW50cnk6XG4gICAgICAgICAgJ1RoZSBjb3VudHJ5IGVudGVyZWQgaXMgbm90IHZhbGlkIGZvciB0aGlzIGNyZWRpdCBjYXJkLicsXG4gICAgICAgIGJpbGxUb19wb3N0YWxDb2RlOlxuICAgICAgICAgICdUaGUgemlwL3Bvc3RhbCBjb2RlIGlzIG5vdCB2YWxpZCBmb3IgdGhpcyBjcmVkaXQgY2FyZC4nLFxuICAgICAgICBjb3VudHJ5OiB7XG4gICAgICAgICAgaXNvY29kZTogJ01pc3NpbmcgY291bnRyeScsXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgICAgaW52YWxpZDoge1xuICAgICAgICBjYXJkX2V4cGlyYXRpb25Nb250aDpcbiAgICAgICAgICAnVGhlIGNyZWRpdCBjYXJkIGV4cGlyYXRpb24gZGF0ZSBlbnRlcmVkIGlzIG5vdCB2YWxpZC4nLFxuICAgICAgICBmaXJzdE5hbWU6ICdGaXJzdCBOYW1lIGVudGVyZWQgaXMgbm90IHZhbGlkLicsXG4gICAgICAgIGxhc3ROYW1lOiAnTGFzdCBOYW1lIGVudGVyZWQgaXMgbm90IHZhbGlkLicsXG4gICAgICAgIHBhc3N3b3JkOiAnUGFzc3dvcmQgZW50ZXJlZCBpcyBub3QgdmFsaWQuJyxcbiAgICAgICAgdWlkOiAnVUlEIGlzIG5vdCB2YWxpZC4nLFxuICAgICAgfSxcbiAgICB9LFxuICAgIGNhcnROb3RGb3VuZDogJ0NhcnQgbm90IGZvdW5kLicsXG4gICAgaW52YWxpZENvZGVQcm92aWRlZDogJ0ludmFsaWQgY29kZSBwcm92aWRlZC4nLFxuICB9LFxuICBtaW5pQ2FydDoge1xuICAgIGl0ZW06ICd7e2NvdW50fX0gaXRlbSBjdXJyZW50bHkgaW4geW91ciBjYXJ0JyxcbiAgICBpdGVtX3BsdXJhbDogJ3t7Y291bnR9fSBpdGVtcyBjdXJyZW50bHkgaW4geW91ciBjYXJ0JyxcbiAgICB0b3RhbDogJ3t7dG90YWx9fScsXG4gICAgY291bnQ6ICd7e2NvdW50fX0nLFxuICB9LFxuICBtaW5pTG9naW46IHtcbiAgICB1c2VyR3JlZXRpbmc6ICdIaSwge3tuYW1lfX0nLFxuICAgIHNpZ25JblJlZ2lzdGVyOiAnU2lnbiBJbiAvIFJlZ2lzdGVyJyxcbiAgfSxcbiAgc2tpcExpbms6IHtcbiAgICBza2lwVG86ICdTa2lwIHRvJyxcbiAgICBsYWJlbHM6IHtcbiAgICAgIGhlYWRlcjogJ0hlYWRlcicsXG4gICAgICBtYWluOiAnTWFpbiBDb250ZW50JyxcbiAgICAgIGZvb3RlcjogJ0Zvb3RlcicsXG4gICAgICBwcm9kdWN0RmFjZXRzOiAnUHJvZHVjdCBGYWNldHMnLFxuICAgICAgcHJvZHVjdExpc3Q6ICdQcm9kdWN0IExpc3QnLFxuICAgIH0sXG4gIH0sXG4gIGZvcm1FcnJvcnM6IHtcbiAgICBnbG9iYWxNZXNzYWdlOiAnVGhlIGZvcm0geW91IGFyZSB0cnlpbmcgdG8gc3VibWl0IGNvbnRhaW5zIGVycm9ycy4nLFxuICAgIHJlcXVpcmVkOiAnVGhpcyBmaWVsZCBpcyByZXF1aXJlZCcsXG4gICAgY3hJbnZhbGlkRW1haWw6ICdUaGlzIGlzIG5vdCBhIHZhbGlkIGVtYWlsIGZvcm1hdCcsXG4gICAgY3hJbnZhbGlkUGFzc3dvcmQ6ICdUaGlzIGlzIG5vdCBhIHZhbGlkIHBhc3N3b3JkIGZvcm1hdCcsXG4gICAgY3hQYXNzd29yZHNNdXN0TWF0Y2g6ICdQYXNzd29yZCBmaWVsZHMgbXVzdCBtYXRjaCcsXG4gICAgY3hFbWFpbHNNdXN0TWF0Y2g6ICdFbWFpbCBmaWVsZHMgbXVzdCBtYXRjaCcsXG4gICAgY3hTdGFyUmF0aW5nRW1wdHk6ICdSYXRpbmcgZmllbGQgaXMgcmVxdWlyZWQnLFxuICAgIGN4Tm9TZWxlY3RlZEl0ZW1Ub0NhbmNlbDogJ1NlbGVjdCBhdCBsZWFzdCBvbmUgaXRlbSB0byBjYW5jZWwnLFxuICB9LFxufTtcbiJdfQ==