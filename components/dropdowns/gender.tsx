import { Form } from "react-bootstrap";

export default function Gender({ onChange, selectedValue }: any) {
    return (
        <Form.Select size="lg"
            onChange={onChange}
            value={selectedValue}>
            <option>-- choose --</option>
            {[
                {
                    label: "male",
                    value: "MALE"
                },
                {
                    label: "female",
                    value: "FEMALE"
                }
            ].map((items: any) => {
                return <option value={items.value}>{`${items.label}`}</option>
            })}
        </Form.Select>
    )
}