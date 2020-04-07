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
    },
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tbW9uLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9hc3NldHMvIiwic291cmNlcyI6WyJ0cmFuc2xhdGlvbnMvZW4vY29tbW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE1BQU0sQ0FBQyxJQUFNLE1BQU0sR0FBRztJQUNwQixNQUFNLEVBQUU7UUFDTixNQUFNLEVBQUUsUUFBUTtRQUNoQixNQUFNLEVBQUUsUUFBUTtRQUNoQixNQUFNLEVBQUUsUUFBUTtRQUNoQixJQUFJLEVBQUUsTUFBTTtRQUNaLElBQUksRUFBRSxNQUFNO1FBQ1osTUFBTSxFQUFFLFFBQVE7UUFDaEIsUUFBUSxFQUFFLFVBQVU7UUFDcEIsSUFBSSxFQUFFLE1BQU07UUFDWixJQUFJLEVBQUUsTUFBTTtRQUNaLElBQUksRUFBRSxNQUFNO0tBQ2I7SUFDRCxnQkFBZ0IsRUFBRTtRQUNoQixRQUFRLEVBQUU7WUFDUixLQUFLLEVBQUUsZ0NBQWdDO1lBQ3ZDLFlBQVksRUFBRSxpQ0FBaUM7U0FDaEQ7UUFDRCxRQUFRLEVBQUU7WUFDUixLQUFLLEVBQUUseUJBQXlCO1lBQ2hDLFlBQVksRUFBRSwwQkFBMEI7U0FDekM7UUFDRCxNQUFNLEVBQUU7WUFDTixLQUFLLEVBQUUsa0NBQWtDO1lBQ3pDLFlBQVksRUFBRSxtQ0FBbUM7WUFDakQsZ0JBQWdCLEVBQUUsMENBQTBDO1lBQzVELHVCQUF1QixFQUFFLDJDQUEyQztTQUNyRTtRQUNELE9BQU8sRUFBRTtZQUNQLFdBQVcsRUFBRSxpQkFBaUI7WUFDOUIsT0FBTyxFQUFFLGFBQWE7WUFDdEIsS0FBSyxFQUFFLFdBQVc7U0FDbkI7S0FDRjtJQUNELE9BQU8sRUFBRTtRQUNQLE9BQU8sRUFBRSxZQUFZO0tBQ3RCO0lBQ0QsVUFBVSxFQUFFO1FBQ1YsT0FBTyxFQUFFLHlCQUF5QjtLQUNuQztJQUNELFNBQVMsRUFBRTtRQUNULFdBQVcsRUFBRSxnQkFBZ0I7UUFDN0IsSUFBSSxFQUFFO1lBQ0osaUJBQWlCLEVBQUUsNkJBQTZCO1lBQ2hELE9BQU8sRUFBRSwrQkFBK0I7WUFDeEMsVUFBVSxFQUFFLFlBQVk7WUFDeEIsS0FBSyxFQUFFLGlCQUFpQjtTQUN6QjtLQUNGO0lBQ0QsT0FBTyxFQUFFO1FBQ1AsSUFBSSxFQUFFLE1BQU07UUFDWixXQUFXLEVBQUUsY0FBYztRQUMzQixHQUFHLEVBQUUsZUFBZTtLQUNyQjtJQUNELFlBQVksRUFBRTtRQUNaLFVBQVUsRUFBRSxrREFBa0Q7UUFDOUQsMEJBQTBCLEVBQUUseUNBQXlDO1FBQ3JFLDhCQUE4QixFQUFFLHlCQUF5QjtRQUN6RCxRQUFRLEVBQUUsZ0JBQWdCO1FBQzFCLFNBQVMsRUFBRSxnREFBZ0Q7UUFDM0QsY0FBYyxFQUFFLHFEQUFxRDtRQUNyRSxtQkFBbUIsRUFDakIsNERBQTREO1FBQzlELFlBQVksRUFBRSwyQkFBMkI7UUFDekMsWUFBWSxFQUFFO1lBQ1osTUFBTSxFQUFFLHdDQUF3QztZQUNoRCxjQUFjLEVBQUUsd0JBQXdCO1NBQ3pDO1FBQ0QsZ0JBQWdCLEVBQUU7WUFDaEIsT0FBTyxFQUFFO2dCQUNQLGFBQWEsRUFDWCxtRUFBbUU7Z0JBQ3JFLGtCQUFrQixFQUFFLDhDQUE4QztnQkFDbEUsYUFBYSxFQUFFLHlDQUF5QztnQkFDeEQsb0JBQW9CLEVBQ2xCLHVEQUF1RDtnQkFDekQsbUJBQW1CLEVBQ2pCLHVEQUF1RDtnQkFDekQsZ0JBQWdCLEVBQUUsc0NBQXNDO2dCQUN4RCxlQUFlLEVBQUUscUNBQXFDO2dCQUN0RCxjQUFjLEVBQUUsbUNBQW1DO2dCQUNuRCxjQUFjLEVBQUUsbUNBQW1DO2dCQUNuRCxXQUFXLEVBQUUscURBQXFEO2dCQUNsRSxZQUFZLEVBQ1YsK0RBQStEO2dCQUNqRSxjQUFjLEVBQ1osd0RBQXdEO2dCQUMxRCxpQkFBaUIsRUFDZix3REFBd0Q7Z0JBQzFELE9BQU8sRUFBRTtvQkFDUCxPQUFPLEVBQUUsaUJBQWlCO2lCQUMzQjthQUNGO1lBQ0QsT0FBTyxFQUFFO2dCQUNQLG9CQUFvQixFQUNsQix1REFBdUQ7Z0JBQ3pELFNBQVMsRUFBRSxrQ0FBa0M7Z0JBQzdDLFFBQVEsRUFBRSxpQ0FBaUM7Z0JBQzNDLFFBQVEsRUFBRSxnQ0FBZ0M7Z0JBQzFDLEdBQUcsRUFBRSxtQkFBbUI7YUFDekI7U0FDRjtRQUNELFlBQVksRUFBRSxpQkFBaUI7S0FDaEM7SUFDRCxRQUFRLEVBQUU7UUFDUixJQUFJLEVBQUUsdUNBQXVDO1FBQzdDLFdBQVcsRUFBRSx3Q0FBd0M7UUFDckQsS0FBSyxFQUFFLFdBQVc7UUFDbEIsS0FBSyxFQUFFLFdBQVc7S0FDbkI7SUFDRCxTQUFTLEVBQUU7UUFDVCxZQUFZLEVBQUUsY0FBYztRQUM1QixjQUFjLEVBQUUsb0JBQW9CO0tBQ3JDO0lBQ0QsUUFBUSxFQUFFO1FBQ1IsTUFBTSxFQUFFLFNBQVM7UUFDakIsTUFBTSxFQUFFO1lBQ04sTUFBTSxFQUFFLFFBQVE7WUFDaEIsSUFBSSxFQUFFLGNBQWM7WUFDcEIsTUFBTSxFQUFFLFFBQVE7WUFDaEIsYUFBYSxFQUFFLGdCQUFnQjtZQUMvQixXQUFXLEVBQUUsY0FBYztTQUM1QjtLQUNGO0lBQ0QsVUFBVSxFQUFFO1FBQ1YsYUFBYSxFQUFFLG9EQUFvRDtRQUNuRSxRQUFRLEVBQUUsd0JBQXdCO1FBQ2xDLGNBQWMsRUFBRSxrQ0FBa0M7UUFDbEQsaUJBQWlCLEVBQUUscUNBQXFDO1FBQ3hELG9CQUFvQixFQUFFLDRCQUE0QjtRQUNsRCxpQkFBaUIsRUFBRSx5QkFBeUI7UUFDNUMsaUJBQWlCLEVBQUUsMEJBQTBCO0tBQzlDO0NBQ0YsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBjb21tb24gPSB7XG4gIGNvbW1vbjoge1xuICAgIGNhbmNlbDogJ0NhbmNlbCcsXG4gICAgZGVsZXRlOiAnRGVsZXRlJyxcbiAgICByZW1vdmU6ICdSZW1vdmUnLFxuICAgIGVkaXQ6ICdFZGl0JyxcbiAgICBiYWNrOiAnQmFjaycsXG4gICAgc3VibWl0OiAnU3VibWl0JyxcbiAgICBjb250aW51ZTogJ0NvbnRpbnVlJyxcbiAgICBzYXZlOiAnU2F2ZScsXG4gICAgZG9uZTogJ0RvbmUnLFxuICAgIGhvbWU6ICdIb21lJyxcbiAgfSxcbiAgcGFnZU1ldGFSZXNvbHZlcjoge1xuICAgIGNhdGVnb3J5OiB7XG4gICAgICB0aXRsZTogJ3t7Y291bnR9fSByZXN1bHQgZm9yIHt7cXVlcnl9fScsXG4gICAgICB0aXRsZV9wbHVyYWw6ICd7e2NvdW50fX0gcmVzdWx0cyBmb3Ige3txdWVyeX19JyxcbiAgICB9LFxuICAgIGNoZWNrb3V0OiB7XG4gICAgICB0aXRsZTogJ0NoZWNrb3V0IHt7Y291bnR9fSBpdGVtJyxcbiAgICAgIHRpdGxlX3BsdXJhbDogJ0NoZWNrb3V0IHt7Y291bnR9fSBpdGVtcycsXG4gICAgfSxcbiAgICBzZWFyY2g6IHtcbiAgICAgIHRpdGxlOiAne3tjb3VudH19IHJlc3VsdCBmb3IgXCJ7e3F1ZXJ5fX1cIicsXG4gICAgICB0aXRsZV9wbHVyYWw6ICd7e2NvdW50fX0gcmVzdWx0cyBmb3IgXCJ7e3F1ZXJ5fX1cIicsXG4gICAgICBmaW5kUHJvZHVjdFRpdGxlOiAne3tjb3VudH19IHJlc3VsdCBmb3IgY291cG9uIFwie3tjb3Vwb259fVwiJyxcbiAgICAgIGZpbmRQcm9kdWN0VGl0bGVfcGx1cmFsOiAne3tjb3VudH19IHJlc3VsdHMgZm9yIGNvdXBvbiBcInt7Y291cG9ufX1cIicsXG4gICAgfSxcbiAgICBwcm9kdWN0OiB7XG4gICAgICBkZXNjcmlwdGlvbjogJ3t7ZGVzY3JpcHRpb259fScsXG4gICAgICBoZWFkaW5nOiAne3toZWFkaW5nfX0nLFxuICAgICAgdGl0bGU6ICd7e3RpdGxlfX0nLFxuICAgIH0sXG4gIH0sXG4gIHNwaW5uZXI6IHtcbiAgICBsb2FkaW5nOiAnTG9hZGluZy4uLicsXG4gIH0sXG4gIG5hdmlnYXRpb246IHtcbiAgICBzaG9wQWxsOiAnU2hvcCBhbGwge3sgbmF2Tm9kZX19ID4nLFxuICB9LFxuICBzZWFyY2hCb3g6IHtcbiAgICBwbGFjZWhvbGRlcjogJ1NlYXJjaCBoZXJlLi4uJyxcbiAgICBoZWxwOiB7XG4gICAgICBpbnN1ZmZpY2llbnRDaGFyczogJ1BsZWFzZSB0eXBlIG1vcmUgY2hhcmFjdGVycycsXG4gICAgICBub01hdGNoOiAnV2UgY291bGQgbm90IGZpbmQgYW55IHJlc3VsdHMnLFxuICAgICAgZXhhY3RNYXRjaDogJ3t7IHRlcm0gfX0nLFxuICAgICAgZW1wdHk6ICdBc2sgdXMgYW55dGhpbmcnLFxuICAgIH0sXG4gIH0sXG4gIHNvcnRpbmc6IHtcbiAgICBkYXRlOiAnRGF0ZScsXG4gICAgb3JkZXJOdW1iZXI6ICdPcmRlciBOdW1iZXInLFxuICAgIHJtYTogJ1JldHVybiBOdW1iZXInLFxuICB9LFxuICBodHRwSGFuZGxlcnM6IHtcbiAgICBiYWRHYXRld2F5OiAnQSBzZXJ2ZXIgZXJyb3Igb2NjdXJyZWQuIFBsZWFzZSB0cnkgYWdhaW4gbGF0ZXIuJyxcbiAgICBiYWRSZXF1ZXN0UGxlYXNlTG9naW5BZ2FpbjogJ3t7IGVycm9yTWVzc2FnZSB9fS4gUGxlYXNlIGxvZ2luIGFnYWluLicsXG4gICAgYmFkUmVxdWVzdE9sZFBhc3N3b3JkSW5jb3JyZWN0OiAnT2xkIHBhc3N3b3JkIGluY29ycmVjdC4nLFxuICAgIGNvbmZsaWN0OiAnQWxyZWFkeSBleGlzdHMnLFxuICAgIGZvcmJpZGRlbjogJ1lvdSBhcmUgbm90IGF1dGhvcml6ZWQgdG8gcGVyZm9ybSB0aGlzIGFjdGlvbi4nLFxuICAgIGdhdGV3YXlUaW1lb3V0OiAnVGhlIHNlcnZlciBkaWQgbm90IHJlc3BvbmQsIHBsZWFzZSB0cnkgYWdhaW4gbGF0ZXIuJyxcbiAgICBpbnRlcm5hbFNlcnZlckVycm9yOlxuICAgICAgJ0FuIEludGVybmFsIFNlcnZlciBFcnJvciBvY2N1cnJlZC4gUGxlYXNlIHRyeSBhZ2FpbiBsYXRlci4nLFxuICAgIHVua25vd25FcnJvcjogJ0FuIHVua25vd24gZXJyb3Igb2NjdXJyZWQnLFxuICAgIHVuYXV0aG9yaXplZDoge1xuICAgICAgY29tbW9uOiAnQW4gdW5rbm93biBhdXRob3JpemF0aW9uIGVycm9yIG9jY3VyZWQnLFxuICAgICAgaW52YWxpZF9jbGllbnQ6ICdCYWQgY2xpZW50IGNyZWRlbnRpYWxzJyxcbiAgICB9LFxuICAgIHZhbGlkYXRpb25FcnJvcnM6IHtcbiAgICAgIG1pc3Npbmc6IHtcbiAgICAgICAgY2FyZF9jYXJkVHlwZTpcbiAgICAgICAgICAnVGhlIHNlbGVjdGVkIGNyZWRpdCBjYXJkIGlzIG5vdCBzdXBwb3J0ZWQuIFBsZWFzZSBzZWxlY3QgYW5vdGhlci4nLFxuICAgICAgICBjYXJkX2FjY291bnROdW1iZXI6ICdUaGUgY3JlZGl0IGNhcmQgbnVtYmVyIGVudGVyZWQgaXMgbm90IHZhbGlkLicsXG4gICAgICAgIGNhcmRfY3ZOdW1iZXI6ICdUaGUgc2VjdXJpdHkgY29kZSBlbnRlcmVkIGlzIG5vdCB2YWxpZC4nLFxuICAgICAgICBjYXJkX2V4cGlyYXRpb25Nb250aDpcbiAgICAgICAgICAnVGhlIGNyZWRpdCBjYXJkIGV4cGlyYXRpb24gZGF0ZSBlbnRlcmVkIGlzIG5vdCB2YWxpZC4nLFxuICAgICAgICBjYXJkX2V4cGlyYXRpb25ZZWFyOlxuICAgICAgICAgICdUaGUgY3JlZGl0IGNhcmQgZXhwaXJhdGlvbiBkYXRlIGVudGVyZWQgaXMgbm90IHZhbGlkLicsXG4gICAgICAgIGJpbGxUb19maXJzdE5hbWU6ICdUaGUgZmlyc3QgbmFtZSBlbnRlcmVkIGlzIG5vdCB2YWxpZC4nLFxuICAgICAgICBiaWxsVG9fbGFzdE5hbWU6ICdUaGUgbGFzdCBuYW1lIGVudGVyZWQgaXMgbm90IHZhbGlkLicsXG4gICAgICAgIGJpbGxUb19zdHJlZXQxOiAnVGhlIGFkZHJlc3MgZW50ZXJlZCBpcyBub3QgdmFsaWQuJyxcbiAgICAgICAgYmlsbFRvX3N0cmVldDI6ICdUaGUgYWRkcmVzcyBlbnRlcmVkIGlzIG5vdCB2YWxpZC4nLFxuICAgICAgICBiaWxsVG9fY2l0eTogJ1RoZSBjaXR5IGVudGVyZWQgaXMgbm90IHZhbGlkIGZvciB0aGlzIGNyZWRpdCBjYXJkLicsXG4gICAgICAgIGJpbGxUb19zdGF0ZTpcbiAgICAgICAgICAnVGhlIHN0YXRlL3Byb3ZpbmNlIGVudGVyZWQgaXMgbm90IHZhbGlkIGZvciB0aGlzIGNyZWRpdCBjYXJkLicsXG4gICAgICAgIGJpbGxUb19jb3VudHJ5OlxuICAgICAgICAgICdUaGUgY291bnRyeSBlbnRlcmVkIGlzIG5vdCB2YWxpZCBmb3IgdGhpcyBjcmVkaXQgY2FyZC4nLFxuICAgICAgICBiaWxsVG9fcG9zdGFsQ29kZTpcbiAgICAgICAgICAnVGhlIHppcC9wb3N0YWwgY29kZSBpcyBub3QgdmFsaWQgZm9yIHRoaXMgY3JlZGl0IGNhcmQuJyxcbiAgICAgICAgY291bnRyeToge1xuICAgICAgICAgIGlzb2NvZGU6ICdNaXNzaW5nIGNvdW50cnknLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICAgIGludmFsaWQ6IHtcbiAgICAgICAgY2FyZF9leHBpcmF0aW9uTW9udGg6XG4gICAgICAgICAgJ1RoZSBjcmVkaXQgY2FyZCBleHBpcmF0aW9uIGRhdGUgZW50ZXJlZCBpcyBub3QgdmFsaWQuJyxcbiAgICAgICAgZmlyc3ROYW1lOiAnRmlyc3QgTmFtZSBlbnRlcmVkIGlzIG5vdCB2YWxpZC4nLFxuICAgICAgICBsYXN0TmFtZTogJ0xhc3QgTmFtZSBlbnRlcmVkIGlzIG5vdCB2YWxpZC4nLFxuICAgICAgICBwYXNzd29yZDogJ1Bhc3N3b3JkIGVudGVyZWQgaXMgbm90IHZhbGlkLicsXG4gICAgICAgIHVpZDogJ1VJRCBpcyBub3QgdmFsaWQuJyxcbiAgICAgIH0sXG4gICAgfSxcbiAgICBjYXJ0Tm90Rm91bmQ6ICdDYXJ0IG5vdCBmb3VuZC4nLFxuICB9LFxuICBtaW5pQ2FydDoge1xuICAgIGl0ZW06ICd7e2NvdW50fX0gaXRlbSBjdXJyZW50bHkgaW4geW91ciBjYXJ0JyxcbiAgICBpdGVtX3BsdXJhbDogJ3t7Y291bnR9fSBpdGVtcyBjdXJyZW50bHkgaW4geW91ciBjYXJ0JyxcbiAgICB0b3RhbDogJ3t7dG90YWx9fScsXG4gICAgY291bnQ6ICd7e2NvdW50fX0nLFxuICB9LFxuICBtaW5pTG9naW46IHtcbiAgICB1c2VyR3JlZXRpbmc6ICdIaSwge3tuYW1lfX0nLFxuICAgIHNpZ25JblJlZ2lzdGVyOiAnU2lnbiBJbiAvIFJlZ2lzdGVyJyxcbiAgfSxcbiAgc2tpcExpbms6IHtcbiAgICBza2lwVG86ICdTa2lwIHRvJyxcbiAgICBsYWJlbHM6IHtcbiAgICAgIGhlYWRlcjogJ0hlYWRlcicsXG4gICAgICBtYWluOiAnTWFpbiBDb250ZW50JyxcbiAgICAgIGZvb3RlcjogJ0Zvb3RlcicsXG4gICAgICBwcm9kdWN0RmFjZXRzOiAnUHJvZHVjdCBGYWNldHMnLFxuICAgICAgcHJvZHVjdExpc3Q6ICdQcm9kdWN0IExpc3QnLFxuICAgIH0sXG4gIH0sXG4gIGZvcm1FcnJvcnM6IHtcbiAgICBnbG9iYWxNZXNzYWdlOiAnVGhlIGZvcm0geW91IGFyZSB0cnlpbmcgdG8gc3VibWl0IGNvbnRhaW5zIGVycm9ycy4nLFxuICAgIHJlcXVpcmVkOiAnVGhpcyBmaWVsZCBpcyByZXF1aXJlZCcsXG4gICAgY3hJbnZhbGlkRW1haWw6ICdUaGlzIGlzIG5vdCBhIHZhbGlkIGVtYWlsIGZvcm1hdCcsXG4gICAgY3hJbnZhbGlkUGFzc3dvcmQ6ICdUaGlzIGlzIG5vdCBhIHZhbGlkIHBhc3N3b3JkIGZvcm1hdCcsXG4gICAgY3hQYXNzd29yZHNNdXN0TWF0Y2g6ICdQYXNzd29yZCBmaWVsZHMgbXVzdCBtYXRjaCcsXG4gICAgY3hFbWFpbHNNdXN0TWF0Y2g6ICdFbWFpbCBmaWVsZHMgbXVzdCBtYXRjaCcsXG4gICAgY3hTdGFyUmF0aW5nRW1wdHk6ICdSYXRpbmcgZmllbGQgaXMgcmVxdWlyZWQnLFxuICB9LFxufTtcbiJdfQ==