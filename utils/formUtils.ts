import {
  camelCaseToSentenceCase,
  hasKeys,
  hasValues,
  isEmptyString,
  isNullOrUndefined,
} from "../utils/helpers";
let isRequiredValidationFields: string | string[] = [];
// let isMinLengthFields: any = {};
// let isDependentFields: any = [];
// let isConfirmPasswordFields: any = [];
// let isDependentFieldsValue: any = {};
// let isFixedLengthFields: any = {};
// let isArrayValidationFields: any = [];
// let isNumberValidationFields: any = [];
// let isEmailFields: any = [];
// let isTINFields: any = [];
// let isAccountNumberFields: any = [];
// let isMinValueFields: any = [];
// let isBVNFields: any = [];
// let isAmountFields: any = [];
let errors = {};
let emailPattern = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

const validationBasis = ({ key, value }: any, validationParam: string) => {
  switch (validationParam) {
    case "required":
      return (isNullOrUndefined(value) || isEmptyString(value))
        ? camelCaseToSentenceCase(key).concat(" can not be empty") : "";
    case "email":
      return (isNullOrUndefined(value) || isEmptyString(value)) || !emailPattern.test(String(value))
        ? camelCaseToSentenceCase(key).concat(" must be a valid email") : "";
  }
  return "";
}

export const isValid = (validationSchema: any, validationContext: any) => {
  errors = {};
  try {
    let validationContextObj = Object.entries(validationContext);
    for (const [key, value] of validationContextObj) {
      let vaal: any = validationSchema[key];
      const validationRes = validationBasis({ key: key, value: value }, vaal);
      if(!isEmptyString(validationRes)){
        errors = Object.assign(errors, {
          [key]: validationBasis({ key: key, value: value }, vaal)
        });
      }
    }
  } catch (err: any) {
    console.log("ERR::", err);
  }
  return errors;
}
