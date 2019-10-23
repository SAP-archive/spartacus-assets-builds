export declare const en: {
    address: {
        addressForm: {
            title: string;
            firstName: {
                label: string;
                placeholder: string;
            };
            lastName: {
                label: string;
                placeholder: string;
            };
            address1: string;
            address2: string;
            country: string;
            city: {
                label: string;
                placeholder: string;
            };
            state: string;
            zipCode: {
                label: string;
                placeholder: string;
            };
            phoneNumber: {
                label: string;
                placeholder: string;
            };
            saveAsDefault: string;
            chooseAddress: string;
            streetAddress: string;
            aptSuite: string;
            selectOne: string;
            setAsDefault: string;
            titleRequired: string;
            userAddressAddSuccess: string;
            userAddressUpdateSuccess: string;
            userAddressDeleteSuccess: string;
            invalidAddress: string;
        };
        addressBook: {
            addNewShippingAddress: string;
            editShippingAddress: string;
            areYouSureToDeleteAddress: string;
            addNewAddress: string;
            addAddress: string;
            updateAddress: string;
            backToAddressList: string;
        };
        addressCard: {
            default: string;
            selected: string;
            setAsDefault: string;
            shipTo: string;
            billTo: string;
        };
    };
    asm: {
        asm: {
            mainLogoLabel: string;
            mainTitle: string;
            logout: string;
            hideUi: string;
            loginForm: {
                submit: string;
                userId: {
                    label: string;
                    required: string;
                };
                password: {
                    label: string;
                    required: string;
                };
            };
            customerSearch: {
                searchTerm: {
                    label: string;
                    required: string;
                };
                submit: string;
                noMatch: string;
            };
            csagentTokenExpired: string;
        };
    };
    cart: {
        cartDetails: {
            id: string;
            proceedToCheckout: string;
            cartName: string;
        };
        cartItems: {
            id: string;
            description: string;
            item: string;
            itemPrice: string;
            quantity: string;
            quantityTitle: string;
            total: string;
            cartTotal: string;
            cartTotal_plural: string;
        };
        orderCost: {
            orderSummary: string;
            subtotal: string;
            estimatedShipping: string;
            discount: string;
            salesTax: string;
            grossTax: string;
            total: string;
        };
    };
    checkout: {
        checkoutAddress: {
            shippingAddress: string;
            selectYourShippingAddress: string;
            defaultShippingAddress: string;
            verifyYourAddress: string;
            ensureAccuracySuggestChange: string;
            chooseAddressToUse: string;
            suggestedAddress: string;
            enteredAddress: string;
            addNewAddress: string;
            shipToThisAddress: string;
            editAddress: string;
            saveAddress: string;
        };
        checkoutOrderConfirmation: {
            confirmationOfOrder: string;
            thankYou: string;
            invoiceHasBeenSentByEmail: string;
            orderItems: string;
            orderPlacedSuccessfully: string;
            createAccount: string;
            createAccountForNext: string;
        };
        checkoutReview: {
            review: string;
            orderItems: string;
            confirmThatRead: string;
            placeOrder: string;
            termsAndConditions: string;
            editShippingAddress: string;
            editShippingMethod: string;
            editPaymentMethod: string;
        };
        checkoutShipping: {
            shippingMethod: string;
            standardDelivery: string;
            premiumDelivery: string;
        };
        checkout: {
            backToCart: string;
        };
        checkoutProgress: {
            shippingAddress: string;
            deliveryMode: string;
            paymentDetails: string;
            reviewOrder: string;
        };
    };
    common: {
        common: {
            cancel: string;
            delete: string;
            remove: string;
            edit: string;
            back: string;
            submit: string;
            continue: string;
            save: string;
            done: string;
            home: string;
        };
        pageMetaResolver: {
            category: {
                title: string;
                title_plural: string;
            };
            checkout: {
                title: string;
                title_plural: string;
            };
            search: {
                title: string;
                title_plural: string;
            };
            product: {
                description: string;
                heading: string;
                title: string;
            };
        };
        spinner: {
            loading: string;
        };
        navigation: {
            shopAll: string;
        };
        searchBox: {
            placeholder: string;
            help: {
                insufficientChars: string;
                noMatch: string;
                exactMatch: string;
                empty: string;
            };
        };
        sorting: {
            date: string;
            orderNumber: string;
        };
        httpHandlers: {
            badGateway: string;
            badRequestPleaseLoginAgain: string;
            badRequestOldPasswordIncorrect: string;
            conflict: string;
            forbidden: string;
            gatewayTimeout: string;
            internalServerError: string;
            unknownError: string;
            validationErrors: {
                missing: {
                    card_cardType: string;
                    card_accountNumber: string;
                    card_cvNumber: string;
                    card_expirationMonth: string;
                    card_expirationYear: string;
                    billTo_firstName: string;
                    billTo_lastName: string;
                    billTo_street1: string;
                    billTo_street2: string;
                    billTo_city: string;
                    billTo_state: string;
                    billTo_country: string;
                    billTo_postalCode: string;
                    country: {
                        isocode: string;
                    };
                };
                invalid: {
                    card_expirationMonth: string;
                };
            };
            cartNotFound: string;
        };
        miniCart: {
            item: string;
            item_plural: string;
        };
        miniLogin: {
            userGreeting: string;
            signInRegister: string;
        };
    };
    myAccount: {
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
            consignmentTracking: {
                action: string;
                dialog: {
                    header: string;
                    shipped: string;
                    estimate: string;
                    carrier: string;
                    trackingId: string;
                    noTracking: string;
                    loadingHeader: string;
                };
            };
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
            accountClosedFailure: string;
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
            clearAll: string;
            selectAll: string;
            message: {
                success: {
                    given: string;
                    withdrawn: string;
                };
            };
        };
    };
    payment: {
        paymentForm: {
            payment: string;
            choosePaymentMethod: string;
            paymentType: string;
            accountHolderName: {
                label: string;
                placeholder: string;
            };
            cardNumber: string;
            expirationDate: string;
            securityCode: string;
            securityCodeTitle: string;
            saveAsDefault: string;
            setAsDefault: string;
            billingAddress: string;
            sameAsShippingAddress: string;
            selectOne: string;
            monthMask: string;
            yearMask: string;
            useThisPayment: string;
            addNewPayment: string;
            changePayment: string;
        };
        paymentMethods: {
            paymentMethods: string;
            newPaymentMethodsAreAddedDuringCheckout: string;
            invalidField: string;
        };
        paymentCard: {
            deleteConfirmation: string;
            setAsDefault: string;
            expires: string;
            defaultPaymentMethod: string;
            selected: string;
        };
    };
    product: {
        productDetails: {
            id: string;
            quantity: string;
            productDetails: string;
            specification: string;
            reviews: string;
            shipping: string;
            share: string;
            showReviews: string;
        };
        productList: {
            filterBy: {
                label: string;
                action: string;
            };
            appliedFilter: string;
            showLess: string;
            showMore: string;
            sortByRelevance: string;
            backToTopBtn: string;
            showMoreBtn: string;
        };
        productFacetNavigation: {
            filterBy: {
                label: string;
                action: string;
            };
            appliedFilter: string;
            showLess: string;
            showMore: string;
            sortByRelevance: string;
        };
        productSummary: {
            id: string;
            showReviews: string;
            share: string;
        };
        productReview: {
            overallRating: string;
            reviewTitle: string;
            writeYourComments: string;
            rating: string;
            reviewerName: string;
            writeReview: string;
            more: string;
            less: string;
            thankYouForReview: string;
        };
        addToCart: {
            itemsAddedToYourCart: string;
            itemsIncrementedInYourCart: string;
            items: string;
            updatingCart: string;
            addToCart: string;
            viewCart: string;
            proceedToCheckout: string;
            quantity: string;
            outOfStock: string;
            inStock: string;
        };
        CMSTabParagraphContainer: {
            tabs: {
                ProductDetailsTabComponent: string;
                ProductSpecsTabComponent: string;
                ProductReviewsTabComponent: string;
                deliveryTab: string;
            };
        };
    };
    pwa: {
        pwa: {
            addToHomeScreenDescription: string;
            noInstallationNeeded: string;
            fastAccessToApplication: string;
            addToHomeScreen: string;
            addedToHomeScreen: string;
        };
    };
    storeFinder: {
        storeFinder: {
            openUntil: string;
            closed: string;
            call: string;
            getDirections: string;
            listView: string;
            mapView: string;
            noStoresFound: string;
            storeHours: string;
            storeFeatures: string;
            fromStoresFound: string;
            fromStoresFound_plural: string;
            findStore: string;
            useMyLocation: string;
            viewAllStores: string;
            contactUs: string;
            searchBox: string;
            backToList: string;
            noStoresMessage: string;
            geolocationNotEnabled: string;
        };
    };
    user: {
        anonymousConsents: {
            preferences: string;
            dialog: {
                title: string;
                legalDescription: string;
                selectAll: string;
                clearAll: string;
            };
            banner: {
                title: string;
                description: string;
                allowAll: string;
                viewDetails: string;
            };
        };
        forgottenPassword: {
            resetPassword: string;
            enterEmailAddressAssociatedWithYourAccount: string;
            emailAddress: {
                label: string;
                placeholder: string;
            };
            enterValidEmail: string;
            passwordResetEmailSent: string;
            passwordResetSuccess: string;
        };
        loginForm: {
            forgotPassword: string;
            signIn: string;
            register: string;
            dontHaveAccount: string;
            emailAddress: {
                label: string;
                placeholder: string;
            };
            password: {
                label: string;
                placeholder: string;
            };
            wrongEmailFormat: string;
            guestCheckout: string;
        };
        register: {
            confirmPassword: {
                action: string;
                label: string;
                placeholder: string;
            };
            managmentInMyAccount: string;
            termsAndConditions: string;
            signIn: string;
            register: string;
            confirmNewPassword: string;
            resetPassword: string;
            createAccount: string;
            title: string;
            firstName: {
                label: string;
                placeholder: string;
            };
            lastName: {
                label: string;
                placeholder: string;
            };
            emailAddress: {
                label: string;
                placeholder: string;
            };
            password: {
                label: string;
                placeholder: string;
            };
            newPassword: string;
            emailMarketing: string;
            confirmThatRead: string;
            selectTitle: string;
            passwordMinRequirements: string;
            bothPasswordMustMatch: string;
            titleRequired: string;
            postRegisterMessage: string;
        };
        checkoutLogin: {
            emailAddress: {
                label: string;
                placeholder: string;
            };
            confirmEmail: {
                label: string;
                placeholder: string;
            };
            continue: string;
            emailIsRequired: string;
            emailsMustMatch: string;
        };
    };
};
