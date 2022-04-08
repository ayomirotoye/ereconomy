import  { useEffect, useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { LoginIcon } from "../../assets/icons/LoginIcon";
import { validateLoginInput } from "../../utils/formUtils";
import FormGroup from "../formGroup";
import { callUserLoginApi } from "../../services/authService";
import { isSuccessful } from "../../utils/helpers";
import { toast } from 'react-toastify';
import { responseCodes } from "../../static/constants";
import { useNavigate } from "react-router";
import { appNavigationLinks } from "../../utils/appNavigationLinks";
import { useRecoilState } from "recoil";
import { atomLoginModalState } from "../../state/atoms/modalState";

const LoginModal = ({ header_value }: any) => {
  const [loginModalState, setLoginModalState] = useRecoilState(atomLoginModalState);

  const navigate  = useNavigate();

  const [values, setValues] = useState(Object.assign({}));

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
      title={header_value ?? "Login"}
      show={loginModalState.isOpen}
      destroyOnClose={true}
      confirmLoading={false}
      onCancel={closeAuthModal}
      footer={[
        <Button
          className="btn-primary"
          key="Login"
          disabled={isSubmitting}
          // icon={
          //   isSubmitting ? (
          //     <Spin size={"small"} className="ant-spin-dot-item-primary" />
          //   ) : (
          //     <LoginIcon iconClass="secondary" className="icons-svg" />
          //   )
          // }
          onClick={handleAuth}
        >
          Login
        </Button>,
      ]}
    >
      <div>
        <form>
          <div className="row">
            <div className="col-sm-12 col-md-12 mb-3">
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
        <div className="d-flex justify-content-center align-items-center">
          <Button
            // type="link"
            onClick={(e: any) => {

            }}
          >
            <p className="m-0">
              First timer? <b>Click here</b>
            </p>
          </Button>
        </div>
      </div>
    </Modal>
  );
};
export default LoginModal;
