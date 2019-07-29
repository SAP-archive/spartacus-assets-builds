export declare const myAccount: {
    orderDetails: {
        orderId: string;
        placed: string;
        status: string;
        shippedOn: string;
        inProcess: string;
        pending: string;
        deliveryStatus_READY_FOR_PICKUP: string;
        deliveryStatus_PICKUP_COMPLETE: string;
        deliveryStatus_SHIPPED: string;
        deliveryStatus_CANCELLED: string;
        statusDisplay_cancelled: string;
        statusDisplay_cancelling: string;
        statusDisplay_completed: string;
        statusDisplay_created: string;
        statusDisplay_error: string;
        statusDisplay_Error: string;
        statusDisplay_open: string;
        statusDisplay_processing: string;
    };
    orderHistory: {
        orderHistory: string;
        orderId: string;
        date: string;
        status: string;
        total: string;
        noOrders: string;
        startShopping: string;
        sortByMostRecent: string;
    };
    closeAccount: {
        confirmAccountClosure: string;
        confirmAccountClosureMessage: string;
        closeMyAccount: string;
        accountClosedSuccessfully: string;
    };
    updateEmailForm: {
        newEmailAddress: {
            label: string;
            placeholder: string;
        };
        confirmNewEmailAddress: {
            label: string;
            placeholder: string;
        };
        enterValidEmail: string;
        bothEmailMustMatch: string;
        password: {
            label: string;
            placeholder: string;
        };
        pleaseInputPassword: string;
        emailUpdateSuccess: string;
    };
    updatePasswordForm: {
        oldPassword: {
            label: string;
            placeholder: string;
        };
        oldPasswordIsRequired: string;
        newPassword: {
            label: string;
            placeholder: string;
        };
        passwordMinRequirements: string;
        confirmPassword: {
            label: string;
            placeholder: string;
        };
        bothPasswordMustMatch: string;
        passwordUpdateSuccess: string;
    };
    updateProfileForm: {
        title: string;
        none: string;
        firstName: {
            label: string;
            placeholder: string;
        };
        firstNameIsRequired: string;
        lastName: {
            label: string;
            placeholder: string;
        };
        lastNameIsRequired: string;
        profileUpdateSuccess: string;
    };
    consentManagementForm: {
        message: {
            success: {
                given: string;
                withdrawn: string;
            };
        };
    };
};
