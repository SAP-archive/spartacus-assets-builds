(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
    typeof define === 'function' && define.amd ? define('@spartacus/assets', ['exports'], factory) :
    (global = global || self, factory((global.spartacus = global.spartacus || {}, global.spartacus.assets = {})));
}(this, (function (exports) { 'use strict';

    var translationChunksConfig = {
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
            'skipLink',
            'formErrors',
        ],
        cart: [
            'cartDetails',
            'cartItems',
            'orderCost',
            'voucher',
            'wishList',
            'saveForLaterItems',
        ],
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
            'myCoupons',
            'wishlist',
            'notificationPreference',
            'myInterests',
            'AccountOrderHistoryTabContainer',
            'returnRequestList',
            'returnRequest',
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
            'addToWishList',
            'CMSTabParagraphContainer',
            'variant',
            'stockNotification',
            'TabPanelContainer',
        ],
        user: [
            'anonymousConsents',
            'forgottenPassword',
            'loginForm',
            'register',
            'checkoutLogin',
        ],
    };

    var address = {
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

    var asm = {
        asm: {
            mainLogoLabel: 'SAP',
            mainTitle: 'Assisted Service Mode',
            logout: 'Sign Out',
            hideUi: 'Close ASM',
            toggleUi: { collapse: 'Hide ASM', expand: 'Show ASM' },
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
            agentSessionTimer: {
                label: 'Session Timeout',
                minutes: 'min',
                reset: 'Reset',
            },
            standardSessionInProgress: 'Standard customer session in progress.',
        },
    };

    var cart = {
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
            availableCoupons: 'Available coupons',
            availableCouponsLabel: 'You can add these coupons to this order.',
        },
        saveForLaterItems: {
            itemTotal: 'Saved for later ({{count}} item)',
            itemTotal_plural: 'Saved for later ({{count}} items)',
            cartTitle: 'Cart',
            saveForLater: 'Save For Later',
            moveToCart: 'Move To Cart',
            stock: 'Stock',
            forceInStock: 'In Stock',
        },
    };

    var checkout = {
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

    var common = {
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

    var myAccount = {
        orderDetails: {
            orderId: 'Order #',
            placed: 'Placed',
            status: 'Status',
            shippedOn: 'Shipped on',
            deliveryStatus_IN_TRANSIT: 'In Transit',
            deliveryStatus_READY_FOR_PICKUP: 'Ready for Pickup',
            deliveryStatus_READY_FOR_SHIPPING: 'Ready for Shipping',
            deliveryStatus_WAITING: 'Waiting',
            deliveryStatus_DELIVERING: 'Delivering',
            deliveryStatus_PICKPACK: 'Preparing for Shipment',
            deliveryStatus_PICKUP_COMPLETE: 'Pickup Complete',
            deliveryStatus_DELIVERY_COMPLETED: 'Delivery Complete',
            deliveryStatus_PAYMENT_NOT_CAPTURED: 'Payment Issue',
            deliveryStatus_READY: 'In Process',
            deliveryStatus_DELIVERY_REJECTED: 'Delivery Rejected',
            deliveryStatus_SHIPPED: 'Shipped',
            deliveryStatus_TAX_NOT_COMMITTED: 'Tax Issue',
            deliveryStatus_CANCELLED: 'Cancelled',
            statusDisplay_cancelled: 'Cancelled',
            statusDisplay_cancelling: 'Cancel Pending',
            statusDisplay_completed: 'Completed',
            statusDisplay_created: 'Created',
            statusDisplay_error: 'Pending',
            statusDisplay_Error: 'Pending',
            statusDisplay_processing: 'Pending',
            statusDisplay_open: 'Open',
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
        myCoupons: {
            noCouponsMessage: 'You have no coupons available.',
            effectiveTitle: 'Effective:',
            Effective: 'EFFECTIVE',
            PreSession: 'EFFECTIVE SOON',
            ExpireSoon: 'EXPIRING SOON',
            readMore: 'Read more',
            notification: 'Notification',
            findProducts: 'Find Products',
            status: 'Status:',
            dialogTitle: 'Coupon',
            claimCustomerCoupon: 'You have successfully claimed this coupon.',
            myCoupons: 'My coupons',
            startDateAsc: 'Start Date (ascending)',
            startDateDesc: 'Start Date (descending)',
            endDateAsc: 'End Date (ascending)',
            endDateDesc: 'End Date (descending)',
            sortByMostRecent: 'Sort by Most recent',
            notesPreffix: 'You can set your preferred channels for receiving coupon notifications on the ',
            notesLink: 'Notification Channels',
            notesSuffix: ' page.',
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

    var payment = {
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

    var product = {
        productDetails: {
            id: 'ID',
            quantity: 'Qty',
            productDetails: 'Product Details',
            specification: 'Specs',
            reviews: 'Reviews',
            shipping: 'Shipping',
            share: 'Share',
            showReviews: 'Show reviews',
            noReviews: 'No reviews yet',
        },
        productList: {
            filterBy: {
                label: 'Filter by',
                action: 'Filter by',
            },
            appliedFilter: 'Applied filter:',
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
            appliedFilter: 'Applied filter:',
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
            selectStyleAndSize: 'Select style and size to check stock',
        },
        TabPanelContainer: {
            tabs: {
                ProductDetailsTabComponent: 'Product Details',
                ProductSpecsTabComponent: 'Specs',
                ProductReviewsTabComponent: 'Reviews',
                deliveryTab: 'Shipping',
            },
        },
        variant: {
            style: 'Style',
            selectedStyle: 'Selected style',
            size: 'Size',
            color: 'Color',
            sizeGuideLabel: 'Style guide',
        },
        addToWishList: {
            add: 'Add to Wish List',
            remove: 'Remove from Wish List',
            anonymous: 'Sign in to add to wish list',
        },
        stockNotification: {
            notifyMe: 'NOTIFY ME',
            stopNotify: 'STOP NOTIFICATION',
            getNotify: 'Get notified when this product is available.',
            getNotifySuffix: 'to get notified when this product is available.',
            activateChannelsPrefix: 'To be notified you need to activate the ',
            channelsLink: 'Notification Channels',
            activateChannelsSuffix: '.',
            notified: 'You will be notified when this product is back in stock.',
            getNotified: 'Get notified when this product is back in stock.',
            unsubscribeSuccess: 'You will not receive back-in-stock notification for this product.',
            subscriptionDialog: {
                header: 'Out of stock subscription',
                notifiedPrefix: 'You will be notified on:',
                notifiedSuffix: 'as soons as this product is back in stock.',
                manageChannelsPrefix: 'Manage your prefered notification channels at the ',
                manageChannelsLink: 'Notification Preference',
                manageChannelsSuffix: ' page.',
                manageSubscriptionsPrefix: 'You can manage your subscriptions at ',
                manageSubscriptionsLink: 'My Interests',
                manageSubscriptionsSuffix: ' page.',
                okBtn: 'OK',
                subscribing: 'Subscribing you to Out of Stock notifications for this product',
            },
        },
    };

    var pwa = {
        pwa: {
            addToHomeScreenDescription: 'Add SAP storefront to your device homescreen for a faster return visit',
            noInstallationNeeded: 'No installation needed',
            fastAccessToApplication: 'Fast access to application',
            addToHomeScreen: 'Add to home screen',
            addedToHomeScreen: 'SAP Storefront was added to your home screen',
        },
    };

    var storeFinder = {
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

    var user = {
        anonymousConsents: {
            preferences: 'Consent Preferences',
            dialog: {
                title: 'Consent Management',
                legalDescription: "We use cookies/browser's storage to personalize the content and improve user experience. We also might share the data about your site usage with our social media. For more, please review our privacy policy.",
                selectAll: 'Select all',
                clearAll: 'Clear all',
            },
            banner: {
                title: 'This website uses cookies',
                description: "We use cookies/browser's storage to personalize the content and improve user experience.",
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
            dontHaveAccount: 'Don’t have an account?',
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

    var en = {
        address: address,
        asm: asm,
        cart: cart,
        checkout: checkout,
        common: common,
        myAccount: myAccount,
        payment: payment,
        product: product,
        pwa: pwa,
        storeFinder: storeFinder,
        user: user,
    };

    var translations = {
        en: en,
    };

    exports.translationChunksConfig = translationChunksConfig;
    exports.translations = translations;
    exports.ɵa = en;
    exports.ɵb = address;
    exports.ɵc = asm;
    exports.ɵd = cart;
    exports.ɵe = checkout;
    exports.ɵf = common;
    exports.ɵg = myAccount;
    exports.ɵh = payment;
    exports.ɵi = product;
    exports.ɵj = pwa;
    exports.ɵk = storeFinder;
    exports.ɵl = user;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=spartacus-assets.umd.js.map
