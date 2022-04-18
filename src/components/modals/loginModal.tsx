import { useEffect, useState } from "react";
import { Modal } from "react-bootstrap";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import { toast } from 'react-toastify';
import { useRecoilState } from "recoil";
import { ResponsiveWidthWrapper } from "../../assets/styles/breakPointUtilities";
import { StyledButton } from "../../assets/styles/common";
import { Content } from "../../assets/styles/contentBlock";
import { StyledLink } from "../../assets/styles/styledUtilities";
import { callUserLoginApi } from "../../services/authService";
import { atomLoginModalState } from "../../state/atoms/modalState";
import { responseCodes } from "../../static/constants";
import { appNavigationLinks } from "../../utils/appNavigationLinks";
import { validateLoginInput } from "../../utils/formUtils";
import { isSuccessful } from "../../utils/helpers";
import Brand from "../brand";
import FormGroup from "../formGroup";

const LoginModal = ({ header_value }: any) => {
  const [loginModalState, setLoginModalState] = useRecoilState(atomLoginModalState);

  const navigate = useNavigate();

  const [values, setValues] = useState(Object.assign({}));
  const [fullscreen] = useState<boolean>(true);

  const closeAuthModal = () => {
    setLoginModalState({ isOpen: false });
  };

  const [myErrors, setMyErrors] = useState(Object.assign({}));
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleAuth = async () => {
    setIsSubmitting(true);
    try {
      let res = await callUserLoginApi(values);
      if (isSuccessful(res?.responseCode)) {
        toast("Wow so easy !");
      } else if (res?.responseCode === responseCodes.INACTIVE_USER) {
        navigate(appNavigationLinks.dashboard);
      }
      else {
        toast("Failed");
        closeAuthModal();
        navigate(appNavigationLinks.dashboard);
      }
    } catch (err) {
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (e: any) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    validateInput();
  }, [values]);

  function validateInput() {
    let validationRes = validateLoginInput({
      email: values?.email,
      password: values?.password,
    });

    if (Object.keys(validationRes).length > 0) {
      setMyErrors(validationRes);
    } else {
      setMyErrors({});
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }

  return (
    <Modal
      centered
      keyboard={true}
      show={loginModalState.isOpen}
      onHide={closeAuthModal}
      fullscreen={true}
    >
      <ResponsiveWidthWrapper className="mx-auto">
        <div className="d-flex justify-content-end">
          <Brand />
        </div>
        <Modal.Header closeButton>
          <Modal.Title >
            {header_value ?? "Login"}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="">
            <form>
              <div className="row">
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
              </div>
            </form>
            <div className="d-flex justify-content-between align-items-center">
              <div className="">
                <StyledLink to="/register">New here ? Register</StyledLink>
              </div>
              <StyledButton
                width="50%"
                onClick={(e: any) => {

                }}
              >
                Login
              </StyledButton>
            </div>
            <div className="d-flex justify-content-center align-items-center">
              <Content>Forgot password ?</Content>
            </div>
          </div>
        </Modal.Body>
      </ResponsiveWidthWrapper>
    </Modal>
  );
};
export default LoginModal;
