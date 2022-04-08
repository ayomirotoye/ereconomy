import {
  camelCaseToSentenceCase,
  hasKeys,
  hasValues,
  isEmptyString,
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

export const validateLoginInput = (data: any): any => {
  errors = {};
  isRequiredValidationFields = ["corporateCode", "username"];
  try {
    for (const [key, value] of Object.entries(data)) {
      if (isRequiredValidationFields.includes(key)) {
        if (isEmptyString(value)) {
          errors = Object.assign(errors, {
            [key]: camelCaseToSentenceCase(key).concat(" can not be empty"),
          });
        }
      }
    }
  } catch (err) {
    console.log("ERROR WHILE VALIDATING INPUT:::");
  }
  return errors;
};

export const validateSenderDetailsInput = (data: any): any => {
  errors = {};

  isRequiredValidationFields = [
    "senderLocation",
    "senderEmail",
    "senderPhoneNumber",
    "receiverLocation",
    "receiverEmail",
    "receiverPhoneNumber",
  ];
  try {
    if (isRequiredValidationFields.length > 0) {
      if (
        !hasKeys(data) ||
        Object.entries(data).length !== isRequiredValidationFields.length
      ) {
        return isRequiredValidationFields.reduce(
          (o, key) => ({ ...o, [key]: "Field is required" }),
          {}
        );
      } else if (hasValues(data, ["", undefined, null])) {
        return isRequiredValidationFields.reduce(
          (o, key) => ({ ...o, [key]: "Field is required and must not be empty" }),
          {}
        );
      }
    }
    for (const [key, value] of Object.entries(data)) {
      if (isRequiredValidationFields.includes(key)) {
        if (isEmptyString(value)) {
          errors = Object.assign(errors, {
            [key]: camelCaseToSentenceCase(key).concat(" can not be empty"),
          });
        }
      }
    }
  } catch (err) {
    console.log("ERROR WHILE VALIDATING INPUT:::");
  }
  return errors;
};
