import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { selector, useRecoilValue, useSetRecoilState } from "recoil";
import { ResponsiveWidthWrapper } from "../../assets/styles/breakPointUtilities";
import { OutlinedButton, StyledButton } from "../../assets/styles/common";
import { StyledLink } from "../../assets/styles/styledUtilities";
import CustomProgressBarWithBrand from "../../components/customProgressBarWithBrand";
import FormGroup from "../../components/formGroup";
import Label from "../../components/label";
import TokenizedInput from "../../components/tokenizedInput";
import { atomTokenInputState } from "../../state/atoms/formState/tokenInput";
import { appendDataToTokenInput, removeFromInputData } from "../../state/selectors/tokenInputSelector";

const totalStage = 4;
const Register = () => {
    const setTokenInputData = useSetRecoilState(appendDataToTokenInput);
    const removeTokenInputData = useSetRecoilState(removeFromInputData);
    const tokenInputValue = useRecoilValue(atomTokenInputState);

    const [values, setValues] = useState(Object.assign({}));
    const [myErrors] = useState(Object.assign({}));
    const [stage, setStage] = useState(1);
    const [progress, setProgress] = useState(() => (stage / totalStage) * 100);

    const handleInputChange = (e: any) => {
        setValues({ ...values, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: any) => {
        setValues({ ...values, [e.target.name]: e.target.value });
    };

    useEffect(() => {
        setProgress((stage / totalStage) * 100);
    }, [stage]);

    return (
        <Container className="d-flex h-100">
            <ResponsiveWidthWrapper className="mx-auto my-auto">
                <CustomProgressBarWithBrand now={progress} title="Create your account" />
                <form>
                    {stage === 1 ? <><div className="row">
                        <div className="col-sm-12 col-md-12 mb-5">
                            <FormGroup
                                input_name="email"
                                label_value="Email"
                                input_type="email"
                                input_id="email"
                                is_readonly={false}
                                on_change={handleInputChange}
                                input_value={values?.email ?? ""}
                                error={{
                                    hasError: myErrors.email,
                                    message: myErrors.email,
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
                                        hasError: myErrors.password,
                                        message: myErrors.password,
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
                                    hasError: myErrors.firstName,
                                    message: myErrors.firstName,
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
                                        hasError: myErrors.lastName,
                                        message: myErrors.lastName,
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
                                        hasError: myErrors.username,
                                        message: myErrors.username,
                                    }}
                                />
                            </div>
                        </div> </> : []}
                    {/* 3RD SECTION */}
                    {stage === 3 ? <><div className="row">
                        <div className="col-sm-12 col-md-12 mb-3">
                            <FormGroup
                                input_name="phoneNumber"
                                label_value="Phone number"
                                input_type="phoneNumber"
                                input_id="phoneNumber"
                                is_readonly={false}
                                on_change={handleInputChange}
                                input_value={values?.phoneNumber ?? ""}
                                error={{
                                    hasError: myErrors.phoneNumber,
                                    message: myErrors.phoneNumber,
                                }}
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
                                        hasError: myErrors.gender,
                                        message: myErrors.gender,
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
                                        hasError: myErrors.referralCode,
                                        message: myErrors.referralCode,
                                    }}
                                />
                            </div>
                        </div></> : []}
                    {/* 3RD SECTION */}
                    {stage === totalStage ? <><div className="row">
                        <div>
                            <Label className="mx-3 my-3" text="Token"/>
                            <TokenizedInput
                                onType={(val: any) => setTokenInputData(val)}
                                value={tokenInputValue}
                                name={"token"}
                                onDelete={(index: any) => removeTokenInputData(index)}
                            />
                        </div>
                    </div></> : []}


                </form>
                <div className="d-flex justify-content-between align-items-center">
                    {stage === 1 ? <div className="">
                        <StyledLink to="/">Have an account ? Login</StyledLink>
                    </div> : <OutlinedButton
                        width="25%"
                        onClick={(e: any) => setStage(stage => stage - 1)}
                    >
                        Previous
                    </OutlinedButton>}
                    {stage != totalStage ? <StyledButton
                        width="50%"
                        onClick={(e: any) => setStage(stage => stage + 1)}
                    >
                        Next
                    </StyledButton> : <StyledButton
                        width="50%"
                        onClick={handleSubmit}
                    >
                        Submit
                    </StyledButton>}
                </div>
            </ResponsiveWidthWrapper >
        </Container >
    )
}

export default Register;