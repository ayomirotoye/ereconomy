import { Form } from "react-bootstrap";
import { useLoggedInUserDetails } from "../../hooks/components";

export default function Account({ onChange, selectedValue = "" }: any) {
    const loggedInUser = useLoggedInUserDetails();
    return (
        <>
            <Form.Select size="lg"
                onChange={onChange}
                value={selectedValue}>
                <option value="">--- Choose ---</option>
                {loggedInUser?.accounts?.map((items: any) => {
                    return <option value={items.accountNumber}>{`${items.accountNumber} - ${items.balance}`}</option>
                })}
            </Form.Select>
        </>
    )
}