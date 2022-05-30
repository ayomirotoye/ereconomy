import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css';
import styles from './phoneNumberInput.module.css'

export default function PhoneNumberInput({value, onChange}: any) {
    return (
        <PhoneInput
            inputProps={{
                name: 'phone',
                required: true,
                autoFocus: true
            }}
            value={value}
            onChange={onChange}
            inputClass={styles.reactTelInput}
        />);
}