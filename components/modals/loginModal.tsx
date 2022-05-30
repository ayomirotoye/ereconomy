import { useRouter } from "next/router";
import { useMemo, useState } from "react";
import { Modal } from "react-bootstrap";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import { useAppDispatch } from "../../hooks/state";
import { callUserLoginApi } from "../../services/authService";
import { toggleLoginModal } from "../../state/reducers/authReducer";
import { ResponsiveWidthWrapper } from "../../styles/breakPointUtilities";
import { StyledLink } from "../../styles/styledUtilities";
import { appNavigationLinks } from "../../utils/appNavigationLinks";
import { isValid } from "../../utils/formUtils";
import { hasKeys, isSuccessful } from "../../utils/helpers";
import LoadingButton from "../buttons/loadingButton";
import CloseableContainer from "../containers/closeableContainer";
import CustomProgressBarWithBrand from "../customProgressBarWithBrand";
import FormGroup from "../inputs/formGroup";
import { PasswordInput } from "../inputs/passwordInput";

const validationSchema = {
  "password": "required",
  "username": "required"
};

const LoginModal = () => {

  const isLoginModalOpen = useSelector(
    (state: any) => state.authReducer?.isLoginModalOpen
  );

  const router = useRouter()
  const dispatch = useAppDispatch();

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [values, setValues] = useState(Object.assign({}));
  const [formErrors, setFormErrors] = useState(Object.assign({}));

  const closeAuthModal = () => {
    dispatch(toggleLoginModal({ isLoginModalOpen: false }));
  };

  const handleLogin = async () => {
    setIsSubmitting(true);
    let res = await callUserLoginApi(values);
    setIsSubmitting(false);
    console.log("RESSS::", res)
    if (isSuccessful(res?.responseCode)) {
      sessionStorage.setItem("userDetails", JSON.stringify({
        "username": res.data.username,
        "firstName": res.data.firstName,
        "lastName": res.data.lastName,
        "emailAddress": res.data.emailAddress,
        "fullName": res.data.firstName?.concat(" ", res.data.lastName),
        "accounts": res.data.accounts
      }));
      router.push(appNavigationLinks.dashboard);
      // closeAuthModal();
    } else {
      toast.error("error");
    }

  };

  const handleInputChange = (e: any) => {
    setValues({ ...values, [e.target.name]: e.target.value });
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
      show={isLoginModalOpen}
      onHide={closeAuthModal}
      fullscreen={true}
    >
      <CloseableContainer close={closeAuthModal}>
        <ResponsiveWidthWrapper className="mx-auto">
          <CustomProgressBarWithBrand className="px-1" now={100} title="Login" />
          <Modal.Body>
            <div>
              <form>
                <div className="row">
                  <div className="col-sm-12 col-md-12 mb-3">
                    <FormGroup
                      input_name="username"
                      label_value="Username"
                      input_type="text"
                      input_id="email"
                      is_readonly={false}
                      on_change={handleInputChange}
                      input_value={values?.username ?? ""}
                      error={{
                        hasError: formErrors.username,
                        message: formErrors.username,
                      }}
                    />
                  </div>
                </div>
                <PasswordInput
                  handleInputChange={handleInputChange}
                  value={values.password}
                  error={formErrors.password}
                />
              </form>
              <div className="d-flex justify-content-between align-items-center">
                <div className="">
                  <StyledLink href="/register">New here ? Register</StyledLink>
                </div>
                <LoadingButton
                  onClick={handleLogin}
                  buttonText="Submit"
                  padding={"10px"}
                  processing={isSubmitting}
                  disabled={hasKeys(formErrors)}
                />
              </div>
              <div className="d-flex justify-content-center align-items-center mt-2">
              </div>
            </div>
          </Modal.Body>
        </ResponsiveWidthWrapper>
      </CloseableContainer>
    </Modal>
  );
};
export default LoginModal;

