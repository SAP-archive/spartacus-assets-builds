const translationChunksConfig = {
    common: [
        'common',
        'spinner',
        'searchBox',
        'navigation',
        'sorting',
        'httpHandlers',
        'pageMetaResolver',
        'miniCart',
        'miniLogin',
    ],
    cart: ['cartDetails', 'cartItems', 'orderCost', 'voucher'],
    address: ['addressForm', 'addressBook', 'addressCard'],
    payment: ['paymentForm', 'paymentMethods', 'paymentCard'],
    myAccount: [
        'orderDetails',
        'orderHistory',
        'closeAccount',
        'updateEmailForm',
        'updatePasswordForm',
        'updateProfileForm',
        'consentManagementForm',
    ],
    storeFinder: ['storeFinder'],
    pwa: ['pwa'],
    checkout: [
        'checkout',
        'checkoutAddress',
        'checkoutOrderConfirmation',
        'checkoutReview',
        'checkoutShipping',
        'checkoutProgress',
    ],
    product: [
        'productDetails',
        'productList',
        'productFacetNavigation',
        'productSummary',
        'productReview',
        'addToCart',
        'CMSTabParagraphContainer',
    ],
    user: [
        'anonymousConsents',
        'forgottenPassword',
        'loginForm',
        'register',
        'checkoutLogin',
    ],
};

const address = {
    addressForm: {
        title: 'Title',
        firstName: {
            label: 'First name',
            placeholder: 'First Name',
        },
        lastName: {
            label: 'Last name',
            placeholder: 'Last Name',
        },
        address1: 'Address 1',
        address2: 'Address 2 (optional)',
        country: 'Country',
        city: {
            label: 'City',
            placeholder: 'City',
        },
        state: 'State',
        zipCode: {
            label: 'Zip code',
            placeholder: 'Postal Code/Zip',
        },
        phoneNumber: {
            label: 'Phone number (optional)',
            placeholder: '(555) 555 - 0123',
        },
        saveAsDefault: 'Save as default',
        chooseAddress: 'Choose address',
        streetAddress: 'Street Address',
        aptSuite: 'Apt, Suite',
        selectOne: 'Select One...',
        setAsDefault: 'Set as default',
        titleRequired: 'Title is required.',
        userAddressAddSuccess: 'New address was added successfully!',
        userAddressUpdateSuccess: 'Address updated successfully!',
        userAddressDeleteSuccess: 'Address deleted successfully!',
        invalidAddress: 'Invalid Address',
    },
    addressBook: {
        addNewShippingAddress: 'Add a new shipping address',
        editShippingAddress: 'Edit shipping address',
        areYouSureToDeleteAddress: 'Are you sure you want to delete this address?',
        addNewAddress: 'Add new address',
        addAddress: 'Add address',
        updateAddress: 'Update address',
        backToAddressList: 'Back to address list',
    },
    addressCard: {
        default: 'DEFAULT',
        selected: 'Selected',
        setAsDefault: 'Set as default',
        shipTo: 'Ship To',
        billTo: 'Bill To',
    },
};

const asm = {
    asm: {
        mainLogoLabel: 'SAP',
        mainTitle: 'Assisted Service Mode',
        logout: 'Sign Out',
        hideUi: 'Close ASM',
        loginForm: {
            submit: 'Sign In',
            userId: {
                label: 'Agent ID',
                required: 'Agent ID is required',
            },
            password: {
                label: 'Password',
                required: 'Password is required',
            },
        },
        customerSearch: {
            searchTerm: {
                label: 'Customer Name/Email Address',
            },
            submit: 'Start Session',
            noMatch: 'No customer found.',
        },
        csagentTokenExpired: 'Your customer support agent session is expired.',
        endSession: 'End Session',
    },
};

const cart = {
    cartDetails: {
        id: 'ID',
        proceedToCheckout: 'Proceed to Checkout',
        cartName: 'Cart #{{code}}',
    },
    cartItems: {
        id: 'ID',
        description: 'Description',
        item: 'Item',
        itemPrice: 'Item price',
        quantity: 'Qty',
        quantityTitle: 'The quantity represents the total number of this item in your cart.',
        total: 'Total',
        cartTotal: 'Cart total ({{count}} item)',
        cartTotal_plural: 'Cart total ({{count}} items)',
    },
    orderCost: {
        orderSummary: 'Order Summary',
        subtotal: 'Subtotal after discounts:',
        estimatedShipping: 'Estimated shipping:',
        discount: 'You saved:',
        salesTax: 'Sales Tax:',
        grossTax: 'The order total does not include tax of',
        total: 'Total:',
    },
    voucher: {
        coupon: 'Have a coupon?',
        coupon_plural: 'Coupon codes',
        apply: 'Apply',
        placeholder: 'Promo code',
        applyVoucherSuccess: '{{voucherCode}} has been applied.',
        removeVoucherSuccess: '{{voucherCode}} has been removed.',
        anchorLabel: 'Enter or remove your coupon code',
        vouchersApplied: 'Applied coupons',
    },
};

const checkout = {
    checkoutAddress: {
        shippingAddress: 'Shipping Address',
        selectYourShippingAddress: 'Select your Shipping Address',
        defaultShippingAddress: 'Default Shipping Address',
        verifyYourAddress: 'Verify your address',
        ensureAccuracySuggestChange: 'To ensure delivery accuracy, we suggest the change selected below.',
        chooseAddressToUse: 'Please choose which address you would like to use:',
        suggestedAddress: 'Suggested address',
        enteredAddress: 'Entered address',
        addNewAddress: 'Add New Address',
        shipToThisAddress: 'Ship to this address',
        editAddress: 'Edit address',
        saveAddress: 'Save address',
    },
    checkoutOrderConfirmation: {
        confirmationOfOrder: 'Confirmation of Order:',
        thankYou: 'Thank you for your order!',
        invoiceHasBeenSentByEmail: 'An invoice has been sent by email. You should receive it soon.',
        orderItems: 'Order Items',
        orderPlacedSuccessfully: 'Order placed successfully',
        createAccount: 'Create an account?',
        createAccountForNext: 'Create an account for <{{email}}> for a faster checkout on your next visit.',
    },
    checkoutReview: {
        review: 'Review',
        orderItems: 'Order Items',
        confirmThatRead: 'I am confirming that I have read and agreed with the',
        placeOrder: 'Place Order',
        termsAndConditions: 'Terms & Conditions',
        editShippingAddress: 'Edit shipping address',
        editShippingMethod: 'Edit shipping method',
        editPaymentMethod: 'Edit payment method',
    },
    checkoutShipping: {
        shippingMethod: 'Shipping Method',
        standardDelivery: 'Standard Delivery',
        premiumDelivery: 'Premium Delivery',
    },
    checkout: {
        backToCart: 'Back to cart',
    },
    checkoutProgress: {
        shippingAddress: 'Shipping Address',
        deliveryMode: 'Delivery mode',
        paymentDetails: 'Payment details',
        reviewOrder: 'Review order',
    },
};

const common = {
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

const myAccount = {
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
};

const payment = {
    paymentForm: {
        payment: 'Payment',
        choosePaymentMethod: 'Choose a payment method',
        paymentType: 'Payment Type',
        accountHolderName: {
            label: 'Account Holder Name',
            placeholder: 'Account Holder Name',
        },
        cardNumber: 'Card Number',
        expirationDate: 'Expiration Date',
        securityCode: 'Security code (CVV)',
        securityCodeTitle: 'Card Verification Value',
        saveAsDefault: 'Save as default',
        setAsDefault: 'Set as default',
        billingAddress: 'Billing address',
        sameAsShippingAddress: 'Same as shipping address',
        selectOne: 'Select One...',
        monthMask: 'MM',
        yearMask: 'YYYY',
        useThisPayment: 'Use this payment',
        addNewPayment: 'Add New Payment',
        changePayment: 'Change Payment',
    },
    paymentMethods: {
        paymentMethods: 'Payment methods',
        newPaymentMethodsAreAddedDuringCheckout: 'New payment methods are added during checkout.',
        invalidField: 'InvalidField: {{ field }}',
    },
    paymentCard: {
        deleteConfirmation: 'Are you sure you want to delete this payment method?',
        setAsDefault: 'Set as default',
        expires: 'Expires: {{ month }}/{{ year }}',
        defaultPaymentMethod: 'Default Payment Method',
        selected: 'Selected',
    },
};

const product = {
    productDetails: {
        id: 'ID',
        quantity: 'Qty',
        productDetails: 'Product Details',
        specification: 'Specs',
        reviews: 'Reviews',
        shipping: 'Shipping',
        share: 'Share',
        showReviews: 'Show reviews',
    },
    productList: {
        filterBy: {
            label: 'Filter by',
            action: 'Filter by',
        },
        appliedFilter: 'Applied Filter:',
        showLess: 'Show less...',
        showMore: 'Show more...',
        sortByRelevance: 'Sort by Relevance',
        backToTopBtn: 'BACK TO TOP',
        showMoreBtn: 'SHOW MORE',
    },
    productFacetNavigation: {
        filterBy: {
            label: 'Filter by',
            action: 'Filter by',
        },
        appliedFilter: 'Applied Filter:',
        showLess: 'Show less...',
        showMore: 'Show more...',
        sortByRelevance: 'Sort by Relevance',
    },
    productSummary: {
        id: 'ID',
        showReviews: 'Show reviews',
        share: 'Share',
    },
    productReview: {
        overallRating: 'Overall Rating',
        reviewTitle: 'Review Title',
        writeYourComments: 'Write your comments',
        rating: 'Rating',
        reviewerName: 'Reviewer name (optional)',
        writeReview: 'Write a Review',
        more: 'More',
        less: 'Less',
        thankYouForReview: 'Thank you for the review! Note that reviews may require review before appearing here.',
    },
    addToCart: {
        itemsAddedToYourCart: 'Item(s) added to your cart',
        itemsIncrementedInYourCart: 'This item was already in your cart. The quantity was updated.',
        items: 'items',
        updatingCart: 'Updating cart...',
        addToCart: 'Add to cart',
        viewCart: 'view cart',
        proceedToCheckout: 'proceed to checkout',
        quantity: 'Qty',
        outOfStock: 'Out of stock',
        inStock: 'In stock',
    },
    CMSTabParagraphContainer: {
        tabs: {
            ProductDetailsTabComponent: 'Product Details',
            ProductSpecsTabComponent: 'Specs',
            ProductReviewsTabComponent: 'Reviews',
            deliveryTab: 'Shipping',
        },
    },
};

const pwa = {
    pwa: {
        addToHomeScreenDescription: 'Add SAP storefront to your device homescreen for a faster return visit',
        noInstallationNeeded: 'No installation needed',
        fastAccessToApplication: 'Fast access to application',
        addToHomeScreen: 'Add to home screen',
        addedToHomeScreen: 'SAP Storefront was added to your home screen',
    },
};

const storeFinder = {
    storeFinder: {
        openUntil: 'Open until',
        closed: 'Closed',
        call: 'Call',
        getDirections: 'Get Directions',
        listView: 'List View',
        mapView: 'Map View',
        noStoresFound: 'No Stores Found.',
        storeHours: 'Store hours',
        storeFeatures: 'Store features',
        fromStoresFound: 'from {{ count }} store found',
        fromStoresFound_plural: 'from {{ count }} stores found',
        findStore: 'Find store',
        useMyLocation: 'Use my location',
        viewAllStores: 'View all stores',
        contactUs: 'Contact us',
        searchBox: 'Enter postal code, town or address',
        backToList: 'Back to list',
        noStoresMessage: 'No stores found in database...',
        geolocationNotEnabled: 'Cannot locate nearby stores. Geolocation consent has not been enabled',
    },
};

const user = {
    anonymousConsents: {
        preferences: 'Consent Preferences',
        dialog: {
            title: 'Consent Management',
            legalDescription: `We use cookies/browser's storage to personalize the content and improve user experience. We also might share the data about your site usage with our social media. For more, please review our privacy policy.`,
            selectAll: 'Select all',
            clearAll: 'Clear all',
        },
        banner: {
            title: 'This website uses cookies',
            description: `We use cookies/browser's storage to personalize the content and improve user experience.`,
            allowAll: 'Allow All',
            viewDetails: 'View Details',
        },
    },
    forgottenPassword: {
        resetPassword: 'Reset password',
        enterEmailAddressAssociatedWithYourAccount: 'Enter the email address associated with your account',
        emailAddress: {
            label: 'Email address',
            placeholder: 'Enter email',
        },
        enterValidEmail: 'Please enter a valid email.',
        passwordResetEmailSent: 'An email has been sent to you with information on how to reset your password.',
        passwordResetSuccess: 'Success! You can now login using your new password.',
    },
    loginForm: {
        forgotPassword: 'Forgot password?',
        signIn: 'Sign In',
        register: 'Register',
        dontHaveAccount: 'Don’t have an account',
        emailAddress: {
            label: 'Email address',
            placeholder: 'Enter email',
        },
        password: {
            label: 'Password',
            placeholder: 'Password',
        },
        wrongEmailFormat: 'This is not a valid email format.',
        guestCheckout: 'Guest Checkout',
    },
    register: {
        confirmPassword: {
            action: 'Confirm password',
            label: 'Confirm password',
            placeholder: 'Confirm Password',
        },
        managmentInMyAccount: 'Management in My Account.',
        termsAndConditions: 'Terms & Conditions',
        signIn: 'I already have an account. Sign In',
        register: 'Register',
        confirmNewPassword: 'Confirm New Password',
        resetPassword: 'Reset Password',
        createAccount: 'Create an account',
        title: 'Title',
        firstName: {
            label: 'First name',
            placeholder: 'First name',
        },
        lastName: {
            label: 'Last name',
            placeholder: 'Last name',
        },
        emailAddress: {
            label: 'Email address',
            placeholder: 'Email address',
        },
        password: {
            label: 'Password',
            placeholder: 'Password',
        },
        newPassword: 'New Password',
        /* tslint:disable:max-line-length */
        emailMarketing: 'Use my personal data to receive e-mail newsletters for marketing campaigns. To change your settings, go to Consent Management in My Account.',
        confirmThatRead: 'I am confirming that I have read and agreed with the',
        selectTitle: 'Select Title',
        passwordMinRequirements: 'Password must be six characters minimum, with one uppercase letter, one number, one symbol',
        bothPasswordMustMatch: 'Both password must match',
        titleRequired: 'Title is required.',
        postRegisterMessage: 'Please log in with provided credentials.',
    },
    checkoutLogin: {
        emailAddress: {
            label: 'Email address',
            placeholder: 'Enter email',
        },
        confirmEmail: {
            label: 'Confirm email',
            placeholder: 'Confirm email',
        },
        continue: 'Continue',
        emailIsRequired: 'Invalid email format',
        emailsMustMatch: 'Email does not match',
    },
};

const en = {
    address,
    asm,
    cart,
    checkout,
    common,
    myAccount,
    payment,
    product,
    pwa,
    storeFinder,
    user,
};

const translations = {
    en,
};

/*
 * Public API Surface of assets
 */

/**
 * Generated bundle index. Do not edit.
 */

export { translationChunksConfig, translations, en as ɵa, address as ɵb, asm as ɵc, cart as ɵd, checkout as ɵe, common as ɵf, myAccount as ɵg, payment as ɵh, product as ɵi, pwa as ɵj, storeFinder as ɵk, user as ɵl };
//# sourceMappingURL=spartacus-assets.js.map
