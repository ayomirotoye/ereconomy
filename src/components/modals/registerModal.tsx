import  { useState } from "react";

type RequiredMark = boolean | "optional";

const RegisterModal = function () {
  // const [form] = Form.useForm();
  const [requiredMark, setRequiredMarkType] = useState<RequiredMark>("optional");

  const closeAuthModal = () => {
  };

  const onRequiredTypeChange = ({
    requiredMarkValue,
  }: {
    requiredMarkValue: RequiredMark;
  }) => {
    setRequiredMarkType(requiredMarkValue);
  };

  const handleAuth = async () => { };

  return (
    <></>
    // <Modal
    //   centered
    //   title={header_value ?? "Register"}
    //   visible={false}
    //   onCancel={closeAuthModal}
    //   destroyOnClose={true}
    //   confirmLoading={false}
    //   footer={[
    //     <Button
    //       className="btn-primary"
    //       key="Register"
    //       onClick={handleAuth}
    //       icon={<UserIcon iconClass="secondary" className="icons-svg" />}
    //     >
    //       Register
    //     </Button>,
    //   ]}
    // >
    //   <div>
    //     <Form
    //       form={form}
    //       layout="vertical"
    //       initialValues={{ requiredMarkValue: requiredMark }}
    //       onValuesChange={onRequiredTypeChange}
    //       requiredMark={requiredMark}
    //       size={"small"}
    //     >
    //       <Form.Item label="Email" requiredMark={true}>
    //         <Input type="email" />
    //       </Form.Item>
    //       <div className="d-flex row justify-content-between">
    //         <div className="col">
    //           <Form.Item label="Firstname" requiredMark={true}>
    //             <Input type="text" />
    //           </Form.Item>
    //         </div>
    //         <div className="col">
    //           <Form.Item label="Lastname" requiredMark={true}>
    //             <Input type="text" />
    //           </Form.Item>
    //         </div>
    //       </div>
    //       <div className="d-flex row justify-content-between">
    //         <div className="col">
    //           <Form.Item label="Password" requiredMark={true}>
    //             <Input type="password" />
    //           </Form.Item>
    //         </div>
    //         <div className="col">
    //           <Form.Item label="Confirm password" requiredMark={true}>
    //             <Input type="password" />
    //           </Form.Item>
    //         </div>
    //       </div>
    //     </Form>
    //     <div className="d-flex justify-content-center align-items-center">
    //       <Button
    //         type="link"
    //         onClick={(e: any) => {
    //         }}
    //       >
    //         <p className="m-0">
    //           Have an account? <b>login</b>
    //         </p>
    //       </Button>
    //     </div>
    //   </div>
    // </Modal>
  );
};
export default RegisterModal;
