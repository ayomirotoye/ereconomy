import { useRouter } from "next/router";
import { useEffect, useMemo, useState } from "react";
import { Container } from "react-bootstrap";
import { toast } from "react-toastify";
import { SpinnerCircleIcon } from "../assets/icons/SpinnerCircleIcon";
import CustomProgressBarWithBrand from "../components/customProgressBarWithBrand";
import FormGroup from "../components/inputs/formGroup";
import PhoneNumberInput from "../components/inputs/phoneNumberInput";
import TokenizedInput from "../components/inputs/tokenizedInput";
import Label from "../components/texts/label";
import { useAppDispatch, useAppSelector } from "../hooks/state";
import { callRegisterApi } from "../services/authService";
import { callSendEmailVerificationOtpUrl } from "../services/utilService";
import { appendTokenInputData, deleteTokenInputData } from "../state/reducers/tokenizedInputReducer";
import { responseMessages } from "../static/constants";
import { ResponsiveWidthWrapper } from "../styles/breakPointUtilities";
import { StyledButton } from "../styles/common";
import { StyledLink } from "../styles/styledUtilities";
import { appNavigationLinks } from "../utils/appNavigationLinks";
import { containsAny } from "../utils/arrayUtils";
import { isValid } from "../utils/formUtils";
import { delayedNavigation, hasKeys, isEmptyString, isSuccessful } from "../utils/helpers";


const totalStage = 4;
const validationSchema = {
    "emailAddress": "email",
    "emailValidationToken": "required",
    "firstName": "required",
    "gender": "required",
    "lastName": "required",
    "password": "required",
    "phoneNumber": "required",
    "username": "required"
};

const Register = () => {
    const isVisible = useAppSelector(
        (state: any) => state.authReducer?.isTnxPinModalOpen
    );

    const tokenInputData = useAppSelector(
        (state: any) => state.tokenizedInputReducer?.tokenInputData
    );

    const router = useRouter()
    const dispatch = useAppDispatch();

    const [values, setValues] = useState(Object.assign({
        "emailAddress": "",
        "emailValidationToken": "",
        "firstName": "",
        "gender": "",
        "lastName": "",
        "password": "",
        "phoneNumber": "",
        "username": "",
        age: "",
    }));
    const [formErrors, setFormErrors] = useState(Object.assign({}));
    const [submitting, setIsSubmitting] = useState(false);
    const [stage, setStage] = useState(1);
    const [progress, setProgress] = useState(() => (stage / totalStage) * 100);

    const handleInputChange = (e: any) => {
        setValues({ ...values, [e.target.name]: e.target.value });
    };

    const handlePhoneInputChange = (value: any) => {
        setValues({ ...values, "phoneNumber": value });
    };

    const handleTokenChange = ({ val, index }: any) => {
        dispatch(appendTokenInputData({ val, index }));
    }

    const handleTokenDelete = (index: any) => {
        dispatch(deleteTokenInputData({ index }));
    }

    const handleNext = () => {
        let hasError = false;
        console.log("stage::", stage);

        switch (stage) {
            case 1:
                hasError = hasKeys(formErrors) &&
                    containsAny(Object.keys(formErrors), ["emailAddress", "password"]);
                break;
            case 2:
                hasError = hasKeys(formErrors) &&
                    containsAny(Object.keys(formErrors), ["firstName", "lastName", "username"]);
                break;
            case 3:
                hasError = hasKeys(formErrors) &&
                    containsAny(Object.keys(formErrors), ["phoneNumber", "gender"]);
                break;
        }
        console.log("hasError::", hasError);
        if (!hasError) {
            setStage(stage => stage + 1)
        }
    }

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

    const doSubmit = async () => {
        setIsSubmitting(true);
        let requestPayload = Object.assign({}, values,
            {
                emailValidationToken: tokenInputData.join("")
            });

        console.log("Request::", requestPayload);
        // return;
        const response = await callRegisterApi(requestPayload);
        setIsSubmitting(false);
        if (isSuccessful(response?.responseCode)) {
            toast(response?.message);
           delayedNavigation(appNavigationLinks.home[1]);
        } else {
            toast(response?.message || responseMessages.BAD_REQUEST);
        }
    };

    useEffect(() => {
        setProgress((stage / totalStage) * 100);
        if (stage === totalStage) {
            callSendEmailVerificationOtpUrl(values.emailAddress);
        }
    }, [stage]);

    return (
        <Container className="d-flex h-100">
            <ResponsiveWidthWrapper className="mx-auto my-auto">
                <CustomProgressBarWithBrand now={progress} title="Create your account" />
                <form>
                    {stage === 1 ? <><div className="row">
                        <div className="col-sm-12 col-md-12 mb-5">
                            <FormGroup
                                input_name="emailAddress"
                                label_value="Email"
                                input_type="email"
                                input_id="emailAddress"
                                is_readonly={false}
                                on_change={handleInputChange}
                                input_value={values?.emailAddress ?? ""}
                                error={{
                                    hasError: !isEmptyString(formErrors.emailAddress),
                                    message: formErrors.emailAddress,
                                }}
                            />
                        </div>
                    </div>
                        <div className="row">
                            <div className="col-sm-12 col-md-12">
                                <FormGroup
                                    input_name="password"
                                    label_value="Password"
                                    input_type="password"
                                    input_id="password"
                                    is_readonly={false}
                                    on_change={handleInputChange}
                                    input_value={values?.password ?? ""}
                                    error={{
                                        hasError: formErrors.password,
                                        message: formErrors.password,
                                    }}
                                />
                            </div>
                        </div></> : []}
                    {/* 2ND SECTION */}
                    {stage === 2 ? <>  <div className="row">
                        <div className="col-sm-12 col-md-12 mb-3">
                            <FormGroup
                                input_name="firstName"
                                label_value="Firstname"
                                input_type="firstName"
                                input_id="firstName"
                                is_readonly={false}
                                on_change={handleInputChange}
                                input_value={values?.firstName ?? ""}
                                error={{
                                    hasError: formErrors.firstName,
                                    message: formErrors.firstName,
                                }}
                            />
                        </div>
                    </div>
                        <div className="row">
                            <div className="col-sm-12 col-md-12 mb-3">
                                <FormGroup
                                    input_name="lastName"
                                    label_value="Lastname"
                                    input_type="lastName"
                                    input_id="lastName"
                                    is_readonly={false}
                                    on_change={handleInputChange}
                                    input_value={values?.lastName ?? ""}
                                    error={{
                                        hasError: formErrors.lastName,
                                        message: formErrors.lastName,
                                    }}
                                />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-sm-12 col-md-12">
                                <FormGroup
                                    input_name="username"
                                    label_value="Preferred Username"
                                    input_type="username"
                                    input_id="username"
                                    is_readonly={false}
                                    on_change={handleInputChange}
                                    input_value={values?.username ?? ""}
                                    error={{
                                        hasError: formErrors.username,
                                        message: formErrors.username,
                                    }}
                                />
                            </div>
                        </div> </> : []}
                    {/* 3RD SECTION */}
                    {stage === 3 ? <><div className="row">
                        <div className="col-sm-12 col-md-12 mb-3">
                            <PhoneNumberInput
                                value={values?.phoneNumber ?? ""}
                                onChange={handlePhoneInputChange}
                            />

                        </div>
                    </div>
                        <div className="row">
                            <div className="col-sm-12 col-md-12 mb-3">
                                <FormGroup
                                    input_name="gender"
                                    label_value="Gender"
                                    input_type="gender"
                                    input_id="gender"
                                    is_readonly={false}
                                    on_change={handleInputChange}
                                    input_value={values?.gender ?? ""}
                                    error={{
                                        hasError: formErrors.gender,
                                        message: formErrors.gender,
                                    }}
                                />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-sm-12 col-md-12">
                                <FormGroup
                                    input_name="referralCode"
                                    label_value="Referral code"
                                    input_type="referralCode"
                                    input_id="referralCode"
                                    is_readonly={false}
                                    on_change={handleInputChange}
                                    input_value={values?.referralCode ?? ""}
                                    error={{
                                        hasError: formErrors.referralCode,
                                        message: formErrors.referralCode,
                                    }}
                                />
                            </div>
                        </div></> : []}
                    {/* 3RD SECTION */}
                    {stage === totalStage ? <><div className="row">
                        <div>
                            <Label className="-ms-1 my-1" text="Token" />
                            <TokenizedInput
                                onType={(val: any) => handleTokenChange(val)}
                                value={tokenInputData}
                                name={"token"}
                                onDelete={(index: any) => handleTokenDelete(index)}
                                resendText="Resend token"
                                onResend={() => callSendEmailVerificationOtpUrl(values.emailAddress)}
                            />
                        </div>
                    </div></> : []}
                </form>
                <div className="d-flex justify-content-between align-items-center">
                    {stage === 1 ? <div className="">
                        <StyledLink className="text-sm" href="/">Have an account ? Login</StyledLink>
                    </div> : <StyledButton
                        buttonType="outlined"
                        width="25%"
                        onClick={(e: any) => setStage(stage => stage - 1)}
                    >
                        Previous
                    </StyledButton>}
                    {stage != totalStage ? <StyledButton
                        width="50%"
                        onClick={handleNext}
                    >
                        Next
                    </StyledButton> : <StyledButton
                        width="50%"
                        onClick={doSubmit}
                        disabled={submitting}
                    >
                        {!submitting ? "Submit" : <SpinnerCircleIcon width="15px" height="15px" />}
                    </StyledButton>}
                </div>
            </ResponsiveWidthWrapper >
        </Container >
    )
}

export default Register;