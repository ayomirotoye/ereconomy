import { useRouter } from "next/router";
import { useMemo, useState } from "react";
import { Modal } from "react-bootstrap";
import { toast } from "react-toastify";
import { CardIcon } from "../../assets/icons/CardIcon";
import { useLoggedInUserDetails } from "../../hooks/components";
import { useAppDispatch, useAppSelector } from "../../hooks/state";
import { callInitiateCardPayment } from "../../services/paymentService";
import { toggleCardFundingModal } from "../../state/reducers/fundingReducer";
import { responseMessages } from "../../static/constants";
import { ResponsiveWidthWrapper } from "../../styles/breakPointUtilities";
import { ApiResponse } from "../../types/interfaces";
import { isValid } from "../../utils/formUtils";
import { formatNumber, hasKeys, isSuccessful } from "../../utils/helpers";
import LoadingButton from "../buttons/loadingButton";
import CloseableContainer from "../containers/closeableContainer";
import CustomProgressBarWithBrand from "../customProgressBarWithBrand";
import Account from "../dropdowns/account";
import FormGroup from "../inputs/formGroup";


const validationSchema = {
    "amount": "required"
};

const formInit = {
    amount: "",
    destinationAccount: ""
}

export default function FundAccountModal() {

    const isfundAccountModalOpen = useAppSelector(
        (state: any) => state.fundingReducer?.isfundAccountModalOpen
    );

    const dispatch = useAppDispatch();
    const loggedInUser = useLoggedInUserDetails();

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [values, setValues] = useState(Object.assign(formInit));
    const [formErrors, setFormErrors] = useState(Object.assign({}));


    const closeModal = () => {
        setValues(formInit);
        dispatch(toggleCardFundingModal({ isfundAccountModalOpen: false }));
    };


    const doFundAccount = async () => {
      
        const requestData = {
            ...values,
            amount: parseFloat(String(values.amount).replaceAll(',', '')),
            email: loggedInUser.emailAddress
        }
        console.log("requestData::", requestData)
        setIsSubmitting(true);
        const apiCall = await callInitiateCardPayment(requestData);
        setIsSubmitting(false);
        console.log("respomse::", apiCall);

        if (isSuccessful(apiCall.responseCode)) {
            if (apiCall.responseCode === 200) {
                window.location.href = apiCall.data.authorizationUrl;
            }
        } else {
            toast(apiCall?.message ?? responseMessages.BAD_REQUEST);
        }
    }

    const handleNumberInputChange = (e: any) => {
        setValues({ ...values, [e.target.name]: formatNumber(e.target.value) });
    };

    const validateInput = () => {
        let validationResult = isValid(validationSchema, values);
        setFormErrors(validationResult);
    }

    useMemo(() => {
        validateInput();
    }, [values]);

    useMemo(() => {
        validateInput();
    }, [])

    return (
        <Modal
            centered
            keyboard={true}
            show={isfundAccountModalOpen}
            onHide={closeModal}
            fullscreen={true}
        >
            <CloseableContainer close={closeModal}>
                <ResponsiveWidthWrapper className="mx-auto">
                    <CustomProgressBarWithBrand className="px-1" now={100} title="Fund account" />
                    <Modal.Body>
                        <div>
                            <form>
                                <div className="row">
                                    <div className="col-sm-12 col-md-12 mb-1">
                                        <FormGroup
                                            input_name="amount"
                                            label_value="Amount"
                                            input_type="text"
                                            input_id="number"
                                            is_readonly={false}
                                            on_change={handleNumberInputChange}
                                            input_value={values?.amount ?? ""}
                                            error={{
                                                hasError: formErrors.amount,
                                                message: formErrors.amount,
                                            }}
                                        />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-sm-12 col-md-12 mb-1">
                                        <Account
                                            onChange={(e: any) => setValues({
                                                ...values,
                                                destinationAccount: e.target.value
                                            })}
                                            selectedValue={values?.destinationAccount}
                                        />
                                    </div>
                                </div>
                            </form>
                            <div className="d-flex justify-content-end align-items-center">
                                <LoadingButton
                                    width="25%"
                                    onClick={doFundAccount}
                                    buttonText="Submit"
                                    padding={"10px"}
                                    processing={isSubmitting}
                                    disabled={hasKeys(formErrors)}
                                    icon={<CardIcon />}
                                />
                            </div>
                        </div>
                    </Modal.Body>
                </ResponsiveWidthWrapper>
            </CloseableContainer>
        </Modal>
    )
}