export var myAccount = {
    orderDetails: {
        orderId: 'Order #',
        placed: 'Placed',
        status: 'Status',
        shippedOn: 'Shipped on',
        inProcess: 'In process...',
        pending: 'Pending',
        deliveryStatus_READY_FOR_PICKUP: 'Ready for pickup',
        deliveryStatus_PICKUP_COMPLETE: 'Picked up',
        deliveryStatus_SHIPPED: 'Shipped',
        deliveryStatus_CANCELLED: 'Cancelled',
        statusDisplay_cancelled: 'Cancelled',
        statusDisplay_cancelling: 'Cancel Pending',
        statusDisplay_completed: 'Completed',
        statusDisplay_created: 'Created',
        statusDisplay_error: 'Pending',
        statusDisplay_Error: 'Pending',
        statusDisplay_open: 'Open',
        statusDisplay_processing: 'In Process',
        consignmentTracking: {
            action: 'Track package',
            dialog: {
                header: 'Tracking Information',
                shipped: 'Shipped',
                estimate: 'Estimated Delivery',
                carrier: 'Delivery Service',
                trackingId: 'Tracking Number',
                noTracking: 'The package has not been dispatched from the warehouse. ' +
                    'The tracking information will be available after the package is shipped.',
                loadingHeader: 'Consignment Tracking',
            },
        },
        cancellationAndReturn: {
            returnAction: 'Request a Return',
            cancelAction: 'Cancel Items',
            item: 'Item',
            itemPrice: 'Item Price',
            quantity: 'Max Quantity',
            returnQty: 'Quantity to Return',
            cancelQty: 'Quantity to Cancel',
            setAll: 'Set all quantities to maximum',
            totalPrice: 'Total',
            submit: 'Submit Request',
            returnSuccess: 'Your return request ({{rma}}) was submitted',
            cancelSuccess: 'Your cancellation request was submitted (original order {{orderCode}} will be updated)',
        },
    },
    orderHistory: {
        orderHistory: 'Order history',
        orderId: 'Order #',
        date: 'Date',
        status: 'Status',
        total: 'Total',
        noOrders: 'We have no order records for this account.',
        startShopping: 'Start Shopping',
        sortByMostRecent: 'Sort by Most recent',
    },
    closeAccount: {
        confirmAccountClosure: 'Confirm Account Closure',
        confirmAccountClosureMessage: 'Are you sure you want to close your account?',
        closeMyAccount: 'CLOSE MY ACCOUNT',
        accountClosedSuccessfully: 'Account closed with success',
        accountClosedFailure: 'Failed to close account',
    },
    updateEmailForm: {
        newEmailAddress: {
            label: 'New email address',
            placeholder: 'Enter email',
        },
        confirmNewEmailAddress: {
            label: 'Confirm new email address',
            placeholder: 'Enter email',
        },
        enterValidEmail: 'Please enter a valid email.',
        bothEmailMustMatch: 'Both emails must match',
        password: {
            label: 'Password',
            placeholder: 'Enter password',
        },
        pleaseInputPassword: 'Please input password',
        emailUpdateSuccess: 'Success. Please sign in with {{ newUid }}',
    },
    updatePasswordForm: {
        oldPassword: {
            label: 'Old Password',
            placeholder: 'Old Password',
        },
        oldPasswordIsRequired: 'Old password is required.',
        newPassword: {
            label: 'New Password',
            placeholder: 'New Password',
        },
        passwordMinRequirements: 'Password must be six characters minimum, with one uppercase letter, one number, one symbol',
        confirmPassword: {
            label: 'Confirm New Password',
            placeholder: 'Confirm Password',
        },
        bothPasswordMustMatch: 'Both password must match',
        passwordUpdateSuccess: 'Password updated with success',
    },
    updateProfileForm: {
        title: '',
        none: '',
        firstName: {
            label: 'First name',
            placeholder: 'First name',
        },
        firstNameIsRequired: 'First name is required.',
        lastName: {
            label: 'Last name',
            placeholder: 'Last name',
        },
        lastNameIsRequired: 'Last name is required.',
        profileUpdateSuccess: 'Personal details successfully updated',
    },
    consentManagementForm: {
        clearAll: 'Clear all',
        selectAll: 'Select all',
        message: {
            success: {
                given: 'Consent successfully given.',
                withdrawn: 'Consent successfully withdrawn.',
            },
        },
    },
    notificationPreference: {
        message: 'Select your preferred notification channels',
        note: 'Note: ',
        noteMessage: 'If you deactivate all channels you will not be able to receive any further notifications.',
        EMAIL: 'Email:',
        SMS: 'SMS:',
        SITE_MESSAGE: 'SiteMessage',
    },
    myInterests: {
        header: 'My Interests',
        item: 'ITEM',
        price: 'PRICE',
        notifications: 'NOTIFICATIONS',
        noInterests: 'You have no registered interests yet.',
        inStock: 'In Stock',
        lowStock: 'Low Stock',
        outOfStock: 'Out of Stock',
        BACK_IN_STOCK: 'Back In Stock',
        sortByMostRecent: 'Sort by Most recent',
        expirationDate: ' - Till {{ expirationDate }}',
        productId: 'ID {{ code }}',
        remove: 'REMOVE',
        sorting: {
            byNameAsc: 'Name (ascending)',
            byNameDesc: 'Name (descending)',
        },
    },
    AccountOrderHistoryTabContainer: {
        tabs: {
            AccountOrderHistoryComponent: 'ALL ORDERS ({{param}})',
            OrderReturnRequestListComponent: 'RETURNS ({{param}})',
        },
    },
    returnRequestList: {
        returnRequestId: 'Return #',
        orderId: 'Order #',
        date: 'Date Created',
        status: 'Status',
        sortByMostRecent: 'Sort by Most recent',
        statusDisplay_APPROVAL_PENDING: 'Approval Pending',
        statusDisplay_CANCELED: 'Cancelled',
        statusDisplay_CANCELLING: 'Cancelling',
        statusDisplay_WAIT: 'Wait',
        statusDisplay_RECEIVED: 'Received',
        statusDisplay_RECEIVING: 'Receiving',
        statusDisplay_APPROVING: 'Approving',
        statusDisplay_REVERSING_PAYMENT: 'Reversing Payment',
        statusDisplay_PAYMENT_REVERSED: 'Payment Reversed',
        statusDisplay_PAYMENT_REVERSAL_FAILED: 'Payment Reversal Failed',
        statusDisplay_REVERSING_TAX: 'Reversing Tax',
        statusDisplay_TAX_REVERSED: 'Tax Reversed',
        statusDisplay_TAX_REVERSAL_FAILED: 'Tax Reversal Failed',
        statusDisplay_COMPLETED: 'Completed',
    },
    returnRequest: {
        returnRequestId: 'Return Request #',
        orderCode: 'For Order #',
        status: 'Return status',
        cancel: 'Cancel Return Request',
        item: 'Description',
        itemPrice: 'Item Price',
        returnQty: 'Return Quantity',
        total: 'Total',
        summary: 'Return Totals',
        subtotal: 'Subtotal',
        deliveryCode: 'Delivery cost',
        estimatedRefund: 'Estimated refund',
        note: 'The totals are estimated and may not include applicable taxes or other charges.',
        cancelSuccess: 'Your return request ({{rma}}) was cancelled',
    },
    wishlist: {
        empty: 'No products in your wish list yet',
    },
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibXktYWNjb3VudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvYXNzZXRzLyIsInNvdXJjZXMiOlsidHJhbnNsYXRpb25zL2VuL215LWFjY291bnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsTUFBTSxDQUFDLElBQU0sU0FBUyxHQUFHO0lBQ3ZCLFlBQVksRUFBRTtRQUNaLE9BQU8sRUFBRSxTQUFTO1FBQ2xCLE1BQU0sRUFBRSxRQUFRO1FBQ2hCLE1BQU0sRUFBRSxRQUFRO1FBQ2hCLFNBQVMsRUFBRSxZQUFZO1FBQ3ZCLFNBQVMsRUFBRSxlQUFlO1FBQzFCLE9BQU8sRUFBRSxTQUFTO1FBQ2xCLCtCQUErQixFQUFFLGtCQUFrQjtRQUNuRCw4QkFBOEIsRUFBRSxXQUFXO1FBQzNDLHNCQUFzQixFQUFFLFNBQVM7UUFDakMsd0JBQXdCLEVBQUUsV0FBVztRQUNyQyx1QkFBdUIsRUFBRSxXQUFXO1FBQ3BDLHdCQUF3QixFQUFFLGdCQUFnQjtRQUMxQyx1QkFBdUIsRUFBRSxXQUFXO1FBQ3BDLHFCQUFxQixFQUFFLFNBQVM7UUFDaEMsbUJBQW1CLEVBQUUsU0FBUztRQUM5QixtQkFBbUIsRUFBRSxTQUFTO1FBQzlCLGtCQUFrQixFQUFFLE1BQU07UUFDMUIsd0JBQXdCLEVBQUUsWUFBWTtRQUN0QyxtQkFBbUIsRUFBRTtZQUNuQixNQUFNLEVBQUUsZUFBZTtZQUN2QixNQUFNLEVBQUU7Z0JBQ04sTUFBTSxFQUFFLHNCQUFzQjtnQkFDOUIsT0FBTyxFQUFFLFNBQVM7Z0JBQ2xCLFFBQVEsRUFBRSxvQkFBb0I7Z0JBQzlCLE9BQU8sRUFBRSxrQkFBa0I7Z0JBQzNCLFVBQVUsRUFBRSxpQkFBaUI7Z0JBQzdCLFVBQVUsRUFDUiwwREFBMEQ7b0JBQzFELDBFQUEwRTtnQkFDNUUsYUFBYSxFQUFFLHNCQUFzQjthQUN0QztTQUNGO1FBQ0QscUJBQXFCLEVBQUU7WUFDckIsWUFBWSxFQUFFLGtCQUFrQjtZQUNoQyxZQUFZLEVBQUUsY0FBYztZ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Q2IsZUFBZSxFQUFFLGtCQUFrQjtRQUNuQyxTQUFTLEVBQUUsYUFBYTtRQUN4QixNQUFNLEVBQUUsZUFBZTtRQUN2QixNQUFNLEVBQUUsdUJBQXVCO1FBQy9CLElBQUksRUFBRSxhQUFhO1FBQ25CLFNBQVMsRUFBRSxZQUFZO1FBQ3ZCLFNBQVMsRUFBRSxpQkFBaUI7UUFDNUIsS0FBSyxFQUFFLE9BQU87UUFDZCxPQUFPLEVBQUUsZUFBZTtRQUN4QixRQUFRLEVBQUUsVUFBVTtRQUNwQixZQUFZLEVBQUUsZUFBZTtRQUM3QixlQUFlLEVBQUUsa0JBQWtCO1FBQ25DLElBQUksRUFDRixpRkFBaUY7UUFDbkYsYUFBYSxFQUFFLDZDQUE2QztLQUM3RDtJQUNELFFBQVEsRUFBRTtRQUNSLEtBQUssRUFBRSxtQ0FBbUM7S0FDM0M7Q0FDRixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IG15QWNjb3VudCA9IHtcbiAgb3JkZXJEZXRhaWxzOiB7XG4gICAgb3JkZXJJZDogJ09yZGVyICMnLFxuICAgIHBsYWNlZDogJ1BsYWNlZCcsXG4gICAgc3RhdHVzOiAnU3RhdHVzJyxcbiAgICBzaGlwcGVkT246ICdTaGlwcGVkIG9uJyxcbiAgICBpblByb2Nlc3M6ICdJbiBwcm9jZXNzLi4uJyxcbiAgICBwZW5kaW5nOiAnUGVuZGluZycsXG4gICAgZGVsaXZlcnlTdGF0dXNfUkVBRFlfRk9SX1BJQ0tVUDogJ1JlYWR5IGZvciBwaWNrdXAnLFxuICAgIGRlbGl2ZXJ5U3RhdHVzX1BJQ0tVUF9DT01QTEVURTogJ1BpY2tlZCB1cCcsXG4gICAgZGVsaXZlcnlTdGF0dXNfU0hJUFBFRDogJ1NoaXBwZWQnLFxuICAgIGRlbGl2ZXJ5U3RhdHVzX0NBTkNFTExFRDogJ0NhbmNlbGxlZCcsXG4gICAgc3RhdHVzRGlzcGxheV9jYW5jZWxsZWQ6ICdDYW5jZWxsZWQnLFxuICAgIHN0YXR1c0Rpc3BsYXlfY2FuY2VsbGluZzogJ0NhbmNlbCBQZW5kaW5nJyxcbiAgICBzdGF0dXNEaXNwbGF5X2NvbXBsZXRlZDogJ0NvbXBsZXRlZCcsXG4gICAgc3RhdHVzRGlzcGxheV9jcmVhdGVkOiAnQ3JlYXRlZCcsXG4gICAgc3RhdHVzRGlzcGxheV9lcnJvcjogJ1BlbmRpbmcnLFxuICAgIHN0YXR1c0Rpc3BsYXlfRXJyb3I6ICdQZW5kaW5nJyxcbiAgICBzdGF0dXNEaXNwbGF5X29wZW46ICdPcGVuJyxcbiAgICBzdGF0dXNEaXNwbGF5X3Byb2Nlc3Npbmc6ICdJbiBQcm9jZXNzJyxcbiAgICBjb25zaWdubWVudFRyYWNraW5nOiB7XG4gICAgICBhY3Rpb246ICdUcmFjayBwYWNrYWdlJyxcbiAgICAgIGRpYWxvZzoge1xuICAgICAgICBoZWFkZXI6ICdUcmFja2luZyBJbmZvcm1hdGlvbicsXG4gICAgICAgIHNoaXBwZWQ6ICdTaGlwcGVkJyxcbiAgICAgICAgZXN0aW1hdGU6ICdFc3RpbWF0ZWQgRGVsaXZlcnknLFxuICAgICAgICBjYXJyaWVyOiAnRGVsaXZlcnkgU2VydmljZScsXG4gICAgICAgIHRyYWNraW5nSWQ6ICdUcmFja2luZyBOdW1iZXInLFxuICAgICAgICBub1RyYWNraW5nOlxuICAgICAgICAgICdUaGUgcGFja2FnZSBoYXMgbm90IGJlZW4gZGlzcGF0Y2hlZCBmcm9tIHRoZSB3YXJlaG91c2UuICcgK1xuICAgICAgICAgICdUaGUgdHJhY2tpbmcgaW5mb3JtYXRpb24gd2lsbCBiZSBhdmFpbGFibGUgYWZ0ZXIgdGhlIHBhY2thZ2UgaXMgc2hpcHBlZC4nLFxuICAgICAgICBsb2FkaW5nSGVhZGVyOiAnQ29uc2lnbm1lbnQgVHJhY2tpbmcnLFxuICAgICAgfSxcbiAgICB9LFxuICAgIGNhbmNlbGxhdGlvbkFuZFJldHVybjoge1xuICAgICAgcmV0dXJuQWN0aW9uOiAnUmVxdWVzdCBhIFJldHVybicsXG4gICAgICBjYW5jZWxBY3Rpb246ICdDYW5jZWwgSXRlbXMnLFxuICAgICAgaXRlbTogJ0l0ZW0nLFxuICAgICAgaXRlbVByaWNlOiAnSXRlbSBQcmljZScsXG4gICAgICBxdWFudGl0eTogJ01heCBRdWFudGl0eScsXG4gICAgICByZXR1cm5RdHk6ICdRdWFudGl0eSB0byBSZXR1cm4nLFxuICAgICAgY2FuY2VsUXR5OiAnUXVhbnRpdHkgdG8gQ2FuY2VsJyxcbiAgICAgIHNldEFsbDogJ1NldCBhbGwgcXVhbnRpdGllcyB0byBtYXhpbXVtJyxcbiAgICAgIHRvdGFsUHJpY2U6ICdUb3RhbCcsXG4gICAgICBzdWJtaXQ6ICdTdWJtaXQgUmVxdWVzdCcsXG4gICAgICByZXR1cm5TdWNjZXNzOiAnWW91ciByZXR1cm4gcmVxdWVzdCAoe3tybWF9fSkgd2FzIHN1Ym1pdHRlZCcsXG4gICAgICBjYW5jZWxTdWNjZXNzOlxuICAgICAgICAnWW91ciBjYW5jZWxsYXRpb24gcmVxdWVzdCB3YXMgc3VibWl0dGVkIChvcmlnaW5hbCBvcmRlciB7e29yZGVyQ29kZX19IHdpbGwgYmUgdXBkYXRlZCknLFxuICAgIH0sXG4gIH0sXG4gIG9yZGVySGlzdG9yeToge1xuICAgIG9yZGVySGlzdG9yeTogJ09yZGVyIGhpc3RvcnknLFxuICAgIG9yZGVySWQ6ICdPcmRlciAjJyxcbiAgICBkYXRlOiAnRGF0ZScsXG4gICAgc3RhdHVzOiAnU3RhdHVzJyxcbiAgICB0b3RhbDogJ1RvdGFsJyxcbiAgICBub09yZGVyczogJ1dlIGhhdmUgbm8gb3JkZXIgcmVjb3JkcyBmb3IgdGhpcyBhY2NvdW50LicsXG4gICAgc3RhcnRTaG9wcGluZzogJ1N0YXJ0IFNob3BwaW5nJyxcbiAgICBzb3J0QnlNb3N0UmVjZW50OiAnU29ydCBieSBNb3N0IHJlY2VudCcsXG4gIH0sXG4gIGNsb3NlQWNjb3VudDoge1xuICAgIGNvbmZpcm1BY2NvdW50Q2xvc3VyZTogJ0NvbmZpcm0gQWNjb3VudCBDbG9zdXJlJyxcbiAgICBjb25maXJtQWNjb3VudENsb3N1cmVNZXNzYWdlOlxuICAgICAgJ0FyZSB5b3Ugc3VyZSB5b3Ugd2FudCB0byBjbG9zZSB5b3VyIGFjY291bnQ/JyxcbiAgICBjbG9zZU15QWNjb3VudDogJ0NMT1NFIE1ZIEFDQ09VTlQnLFxuICAgIGFjY291bnRDbG9zZWRTdWNjZXNzZnVsbHk6ICdBY2NvdW50IGNsb3NlZCB3aXRoIHN1Y2Nlc3MnLFxuICAgIGFjY291bnRDbG9zZWRGYWlsdXJlOiAnRmFpbGVkIHRvIGNsb3NlIGFjY291bnQnLFxuICB9LFxuICB1cGRhdGVFbWFpbEZvcm06IHtcbiAgICBuZXdFbWFpbEFkZHJlc3M6IHtcbiAgICAgIGxhYmVsOiAnTmV3IGVtYWlsIGFkZHJlc3MnLFxuICAgICAgcGxhY2Vob2xkZXI6ICdFbnRlciBlbWFpbCcsXG4gICAgfSxcbiAgICBjb25maXJtTmV3RW1haWxBZGRyZXNzOiB7XG4gICAgICBsYWJlbDogJ0NvbmZpcm0gbmV3IGVtYWlsIGFkZHJlc3MnLFxuICAgICAgcGxhY2Vob2xkZXI6ICdFbnRlciBlbWFpbCcsXG4gICAgfSxcbiAgICBlbnRlclZhbGlkRW1haWw6ICdQbGVhc2UgZW50ZXIgYSB2YWxpZCBlbWFpbC4nLFxuICAgIGJvdGhFbWFpbE11c3RNYXRjaDogJ0JvdGggZW1haWxzIG11c3QgbWF0Y2gnLFxuICAgIHBhc3N3b3JkOiB7XG4gICAgICBsYWJlbDogJ1Bhc3N3b3JkJyxcbiAgICAgIHBsYWNlaG9sZGVyOiAnRW50ZXIgcGFzc3dvcmQnLFxuICAgIH0sXG4gICAgcGxlYXNlSW5wdXRQYXNzd29yZDogJ1BsZWFzZSBpbnB1dCBwYXNzd29yZCcsXG4gICAgZW1haWxVcGRhdGVTdWNjZXNzOiAnU3VjY2Vzcy4gUGxlYXNlIHNpZ24gaW4gd2l0aCB7eyBuZXdVaWQgfX0nLFxuICB9LFxuICB1cGRhdGVQYXNzd29yZEZvcm06IHtcbiAgICBvbGRQYXNzd29yZDoge1xuICAgICAgbGFiZWw6ICdPbGQgUGFzc3dvcmQnLFxuICAgICAgcGxhY2Vob2xkZXI6ICdPbGQgUGFzc3dvcmQnLFxuICAgIH0sXG4gICAgb2xkUGFzc3dvcmRJc1JlcXVpcmVkOiAnT2xkIHBhc3N3b3JkIGlzIHJlcXVpcmVkLicsXG4gICAgbmV3UGFzc3dvcmQ6IHtcbiAgICAgIGxhYmVsOiAnTmV3IFBhc3N3b3JkJyxcbiAgICAgIHBsYWNlaG9sZGVyOiAnTmV3IFBhc3N3b3JkJyxcbiAgICB9LFxuICAgIHBhc3N3b3JkTWluUmVxdWlyZW1lbnRzOlxuICAgICAgJ1Bhc3N3b3JkIG11c3QgYmUgc2l4IGNoYXJhY3RlcnMgbWluaW11bSwgd2l0aCBvbmUgdXBwZXJjYXNlIGxldHRlciwgb25lIG51bWJlciwgb25lIHN5bWJvbCcsXG4gICAgY29uZmlybVBhc3N3b3JkOiB7XG4gICAgICBsYWJlbDogJ0NvbmZpcm0gTmV3IFBhc3N3b3JkJyxcbiAgICAgIHBsYWNlaG9sZGVyOiAnQ29uZmlybSBQYXNzd29yZCcsXG4gICAgfSxcbiAgICBib3RoUGFzc3dvcmRNdXN0TWF0Y2g6ICdCb3RoIHBhc3N3b3JkIG11c3QgbWF0Y2gnLFxuICAgIHBhc3N3b3JkVXBkYXRlU3VjY2VzczogJ1Bhc3N3b3JkIHVwZGF0ZWQgd2l0aCBzdWNjZXNzJyxcbiAgfSxcbiAgdXBkYXRlUHJvZmlsZUZvcm06IHtcbiAgICB0aXRsZTogJycsXG4gICAgbm9uZTogJycsXG4gICAgZmlyc3ROYW1lOiB7XG4gICAgICBsYWJlbDogJ0ZpcnN0IG5hbWUnLFxuICAgICAgcGxhY2Vob2xkZXI6ICdGaXJzdCBuYW1lJyxcbiAgICB9LFxuICAgIGZpcnN0TmFtZUlzUmVxdWlyZWQ6ICdGaXJzdCBuYW1lIGlzIHJlcXVpcmVkLicsXG4gICAgbGFzdE5hbWU6IHtcbiAgICAgIGxhYmVsOiAnTGFzdCBuYW1lJyxcbiAgICAgIHBsYWNlaG9sZGVyOiAnTGFzdCBuYW1lJyxcbiAgICB9LFxuICAgIGxhc3ROYW1lSXNSZXF1aXJlZDogJ0xhc3QgbmFtZSBpcyByZXF1aXJlZC4nLFxuICAgIHByb2ZpbGVVcGRhdGVTdWNjZXNzOiAnUGVyc29uYWwgZGV0YWlscyBzdWNjZXNzZnVsbHkgdXBkYXRlZCcsXG4gIH0sXG4gIGNvbnNlbnRNYW5hZ2VtZW50Rm9ybToge1xuICAgIGNsZWFyQWxsOiAnQ2xlYXIgYWxsJyxcbiAgICBzZWxlY3RBbGw6ICdTZWxlY3QgYWxsJyxcbiAgICBtZXNzYWdlOiB7XG4gICAgICBzdWNjZXNzOiB7XG4gICAgICAgIGdpdmVuOiAnQ29uc2VudCBzdWNjZXNzZnVsbHkgZ2l2ZW4uJyxcbiAgICAgICAgd2l0aGRyYXduOiAnQ29uc2VudCBzdWNjZXNzZnVsbHkgd2l0aGRyYXduLicsXG4gICAgICB9LFxuICAgIH0sXG4gIH0sXG4gIG5vdGlmaWNhdGlvblByZWZlcmVuY2U6IHtcbiAgICBtZXNzYWdlOiAnU2VsZWN0IHlvdXIgcHJlZmVycmVkIG5vdGlmaWNhdGlvbiBjaGFubmVscycsXG4gICAgbm90ZTogJ05vdGU6ICcsXG4gICAgbm90ZU1lc3NhZ2U6XG4gICAgICAnSWYgeW91IGRlYWN0aXZhdGUgYWxsIGNoYW5uZWxzIHlvdSB3aWxsIG5vdCBiZSBhYmxlIHRvIHJlY2VpdmUgYW55IGZ1cnRoZXIgbm90aWZpY2F0aW9ucy4nLFxuICAgIEVNQUlMOiAnRW1haWw6JyxcbiAgICBTTVM6ICdTTVM6JyxcbiAgICBTSVRFX01FU1NBR0U6ICdTaXRlTWVzc2FnZScsXG4gIH0sXG4gIG15SW50ZXJlc3RzOiB7XG4gICAgaGVhZGVyOiAnTXkgSW50ZXJlc3RzJyxcbiAgICBpdGVtOiAnSVRFTScsXG4gICAgcHJpY2U6ICdQUklDRScsXG4gICAgbm90aWZpY2F0aW9uczogJ05PVElGSUNBVElPTlMnLFxuICAgIG5vSW50ZXJlc3RzOiAnWW91IGhhdmUgbm8gcmVnaXN0ZXJlZCBpbnRlcmVzdHMgeWV0LicsXG4gICAgaW5TdG9jazogJ0luIFN0b2NrJyxcbiAgICBsb3dTdG9jazogJ0xvdyBTdG9jaycsXG4gICAgb3V0T2ZTdG9jazogJ091dCBvZiBTdG9jaycsXG4gICAgQkFDS19JTl9TVE9DSzogJ0JhY2sgSW4gU3RvY2snLFxuICAgIHNvcnRCeU1vc3RSZWNlbnQ6ICdTb3J0IGJ5IE1vc3QgcmVjZW50JyxcbiAgICBleHBpcmF0aW9uRGF0ZTogJyAtIFRpbGwge3sgZXhwaXJhdGlvbkRhdGUgfX0nLFxuICAgIHByb2R1Y3RJZDogJ0lEIHt7IGNvZGUgfX0nLFxuICAgIHJlbW92ZTogJ1JFTU9WRScsXG4gICAgc29ydGluZzoge1xuICAgICAgYnlOYW1lQXNjOiAnTmFtZSAoYXNjZW5kaW5nKScsXG4gICAgICBieU5hbWVEZXNjOiAnTmFtZSAoZGVzY2VuZGluZyknLFxuICAgIH0sXG4gIH0sXG4gIEFjY291bnRPcmRlckhpc3RvcnlUYWJDb250YWluZXI6IHtcbiAgICB0YWJzOiB7XG4gICAgICBBY2NvdW50T3JkZXJIaXN0b3J5Q29tcG9uZW50OiAnQUxMIE9SREVSUyAoe3twYXJhbX19KScsXG4gICAgICBPcmRlclJldHVyblJlcXVlc3RMaXN0Q29tcG9uZW50OiAnUkVUVVJOUyAoe3twYXJhbX19KScsXG4gICAgfSxcbiAgfSxcbiAgcmV0dXJuUmVxdWVzdExpc3Q6IHtcbiAgICByZXR1cm5SZXF1ZXN0SWQ6ICdSZXR1cm4gIycsXG4gICAgb3JkZXJJZDogJ09yZGVyICMnLFxuICAgIGRhdGU6ICdEYXRlIENyZWF0ZWQnLFxuICAgIHN0YXR1czogJ1N0YXR1cycsXG4gICAgc29ydEJ5TW9zdFJlY2VudDogJ1NvcnQgYnkgTW9zdCByZWNlbnQnLFxuICAgIHN0YXR1c0Rpc3BsYXlfQVBQUk9WQUxfUEVORElORzogJ0FwcHJvdmFsIFBlbmRpbmcnLFxuICAgIHN0YXR1c0Rpc3BsYXlfQ0FOQ0VMRUQ6ICdDYW5jZWxsZWQnLFxuICAgIHN0YXR1c0Rpc3BsYXlfQ0FOQ0VMTElORzogJ0NhbmNlbGxpbmcnLFxuICAgIHN0YXR1c0Rpc3BsYXlfV0FJVDogJ1dhaXQnLFxuICAgIHN0YXR1c0Rpc3BsYXlfUkVDRUlWRUQ6ICdSZWNlaXZlZCcsXG4gICAgc3RhdHVzRGlzcGxheV9SRUNFSVZJTkc6ICdSZWNlaXZpbmcnLFxuICAgIHN0YXR1c0Rpc3BsYXlfQVBQUk9WSU5HOiAnQXBwcm92aW5nJyxcbiAgICBzdGF0dXNEaXNwbGF5X1JFVkVSU0lOR19QQVlNRU5UOiAnUmV2ZXJzaW5nIFBheW1lbnQnLFxuICAgIHN0YXR1c0Rpc3BsYXlfUEFZTUVOVF9SRVZFUlNFRDogJ1BheW1lbnQgUmV2ZXJzZWQnLFxuICAgIHN0YXR1c0Rpc3BsYXlfUEFZTUVOVF9SRVZFUlNBTF9GQUlMRUQ6ICdQYXltZW50IFJldmVyc2FsIEZhaWxlZCcsXG4gICAgc3RhdHVzRGlzcGxheV9SRVZFUlNJTkdfVEFYOiAnUmV2ZXJzaW5nIFRheCcsXG4gICAgc3RhdHVzRGlzcGxheV9UQVhfUkVWRVJTRUQ6ICdUYXggUmV2ZXJzZWQnLFxuICAgIHN0YXR1c0Rpc3BsYXlfVEFYX1JFVkVSU0FMX0ZBSUxFRDogJ1RheCBSZXZlcnNhbCBGYWlsZWQnLFxuICAgIHN0YXR1c0Rpc3BsYXlfQ09NUExFVEVEOiAnQ29tcGxldGVkJyxcbiAgfSxcbiAgcmV0dXJuUmVxdWVzdDoge1xuICAgIHJldHVyblJlcXVlc3RJZDogJ1JldHVybiBSZXF1ZXN0ICMnLFxuICAgIG9yZGVyQ29kZTogJ0ZvciBPcmRlciAjJyxcbiAgICBzdGF0dXM6ICdSZXR1cm4gc3RhdHVzJyxcbiAgICBjYW5jZWw6ICdDYW5jZWwgUmV0dXJuIFJlcXVlc3QnLFxuICAgIGl0ZW06ICdEZXNjcmlwdGlvbicsXG4gICAgaXRlbVByaWNlOiAnSXRlbSBQcmljZScsXG4gICAgcmV0dXJuUXR5OiAnUmV0dXJuIFF1YW50aXR5JyxcbiAgICB0b3RhbDogJ1RvdGFsJyxcbiAgICBzdW1tYXJ5OiAnUmV0dXJuIFRvdGFscycsXG4gICAgc3VidG90YWw6ICdTdWJ0b3RhbCcsXG4gICAgZGVsaXZlcnlDb2RlOiAnRGVsaXZlcnkgY29zdCcsXG4gICAgZXN0aW1hdGVkUmVmdW5kOiAnRXN0aW1hdGVkIHJlZnVuZCcsXG4gICAgbm90ZTpcbiAgICAgICdUaGUgdG90YWxzIGFyZSBlc3RpbWF0ZWQgYW5kIG1heSBub3QgaW5jbHVkZSBhcHBsaWNhYmxlIHRheGVzIG9yIG90aGVyIGNoYXJnZXMuJyxcbiAgICBjYW5jZWxTdWNjZXNzOiAnWW91ciByZXR1cm4gcmVxdWVzdCAoe3tybWF9fSkgd2FzIGNhbmNlbGxlZCcsXG4gIH0sXG4gIHdpc2hsaXN0OiB7XG4gICAgZW1wdHk6ICdObyBwcm9kdWN0cyBpbiB5b3VyIHdpc2ggbGlzdCB5ZXQnLFxuICB9LFxufTtcbiJdfQ==