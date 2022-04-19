import { responseCodes } from "../static/constants";


export const isNumeric = (num: any) => (typeof (num) === 'number' ||
  (typeof (num) === "string" && num.trim() !== '')) && !isNaN(num as number);

export const isObject = (item: any) => {
  return typeof item === "object" && !Array.isArray(item) && item !== null;
};

export const getFieldFromObj = (field: string, ob: any) => {
  if (Object.keys(ob).filter(x => x === field).length === 1) {
    return ob[field];
  };

  return "";
}

export const rgbToRgba = (color: string, opacity=0.75)=>{
  return color.replace(/rgb/i, "rgba").replace(/\)/i,","+opacity+")");
}

export const skipObject = (arrOfVals: any, objVal: any) => {
  let newObj: any = {};
  if (arrOfVals.length === 0) {
    for (const [keys, values] of Object.entries(objVal)) {
      newObj = Object.assign({}, newObj, {
        [keys]: values,
      });
    }
    return newObj;
  } else {
    for (const [keys, values] of Object.entries(objVal)) {
      if (!arrOfVals.includes(keys)) {
        newObj = Object.assign({}, newObj, {
          [keys]: values,
        });
      }
    }
    return newObj;
  }
};

export const cherryPickObject = (arrOfVals: any, objVal: any) => {
  let newObj: any = {};
  for (const [keys, values] of Object.entries(objVal)) {
    if (arrOfVals.includes(keys)) {
      newObj = Object.assign({}, newObj, {
        [keys]: values,
      });
    }
  }
  return newObj;
};

export const hasKeys = (objVal: any): boolean => {
  return !isNullOrUndefined(objVal) && Object.entries(objVal).length > 0;
};

export const hasValues = (objVal: any, valueToCheck?: any[]): boolean => {
  let check = false;
  if (isNullOrUndefined(valueToCheck)) {
    check = !isNullOrUndefined(objVal) && Object.values(objVal).length > 0;
  } else {
    if (!isNullOrUndefined(objVal)) {
      check =
        Object.values(objVal).filter((val) => valueToCheck?.includes(val))
          .length > 0;
    }
  }
  return check;
};

export const isKeyPresent = (objVal: any, requiredKey: string) => {
  return !isNullOrUndefined(objVal) && objVal[requiredKey];
};

export const createUUID = (prefix: string) => {
  return (
    prefix +
    (new Date().getTime().toString(16) +
      Math.floor(1e7 * Math.random()).toString(16))
  );
};

export const checkValueOrElseUseDefinedVal = (
  val: any,
  definedString: string
) => {
  return val !== null && val !== undefined ? val : definedString;
};

export const isEmptyString = (val: any) => {
  return val === null || val === undefined || val.length === 0;
};

export const isANumber = (val: any) => {
  return val !== null && val !== undefined && !Number.isNaN(val);
};

export const valueIsLessThan = (val: any, operand: number) => {
  return isANumber(val) && val < operand;
};

export const valueIsGreaterThan = (val: any, operand: number) => {
  return isANumber(val) && val > operand;
};

export const isEmptyArray = (val: any) => {
  return val === null || val === undefined || val.length === 0;
};

export const isNullOrUndefined = (val: any) => {
  return val === null || val === undefined;
};

export const trueOrFalse = (val: any) => {
  return checkValueOrElseUseDefinedVal(val, "") !== "" &&
    val !== null &&
    val?.toString().toLowerCase() === "true"
    ? true
    : val.toString().toLowerCase() === "false"
      ? false
      : val;
};

export const isYesOrNo = (val: any) => {
  return checkValueOrElseUseDefinedVal(val, "") !== "" &&
    trueOrFalse(val) === false
    ? "No"
    : trueOrFalse(val) === true
      ? "Yes"
      : val;
};

export const parseResponse = (val: any, fallbackRes: string) => {
  if (checkValueOrElseUseDefinedVal(val, "") !== "") {
    let resMessage = checkValueOrElseUseDefinedVal(
      val?.actionResponse?.message,
      fallbackRes
    );

    return resMessage;
  } else {
    return fallbackRes;
  }
};

export const isSuccessful = (val: any) => {
  return (
    (val !== null && val !== undefined && val === "00") ||
    val === true ||
    String(val).toLowerCase() === "successful"
  );
};
export const isDeclined = (val: any) => {
  return (
    (val !== null && val !== undefined && val === "05") ||
    val === true ||
    String(val).toLowerCase() === "successful"
  );
};
export const isNotFound = (val: any) => {
  return (
    val !== null && val !== undefined && val === responseCodes.NO_RECORD_FOUND
  );
};
export const splitString = (val: string, regexp: string) => {
  let res = "";
  if (!isEmptyString(val)) {
    res = val.split(regexp).join(" ");
  }
  return res;
};
export const splitObject = (val: any) => {
  let res = "";
  for (const [, value] of Object.entries(val)) {
    res += String(value).concat("<br/>");
  }
  return res;
};

export const camelCaseToSentenceCase = (val: string) => {
  let res = "";
  try {
    if (!isEmptyString(val)) {
      res = val.replace(/([a-zA-Z])(?=[A-Z])/g, "$1 ");
    }
  } catch (error) {
    console.log("ERROR OCCURRED WHILE PARSING:::", error);
  }

  return capitaliseFirstLetter(res);
};

export const upperCaseCharAt = (val: string, loc: number) => {
  let res = val;
  if (!isEmptyString(val)) {
    res = val.length > 0 ? val.charAt(loc).toUpperCase() : val;
  }
  return res;
};
export const capitaliseFirstLetter = (val: string) => {
  let res = val;
  if (!isEmptyString(val)) {
    res = val.length > 0 ? val.charAt(0).toUpperCase() + val.slice(1) : val;
  }
  return res;
};

export const makeTitleCase = (stringInContext: string) => {
  let titleSentence = stringInContext.toLowerCase().split(" ");
  for (let i = 0; i < titleSentence.length; i++) {
    titleSentence[i] =
      titleSentence[i][0].toUpperCase() + titleSentence[i].slice(1) + " ";
  }
  return titleSentence;
};

export const makeSentenceCase = (val: string) => {
  let res = val;
  if (!isEmptyString(val)) {
    res = val.length > 0 ? val.charAt(0).toUpperCase() + val.slice(1) : val;
  }
  return res;
};

export const getSessionId = () => {
  return /SESS\w*ID=([^;]+)/i.test(document.cookie) ? RegExp.$1 : false;
};

export const useGoBack = () => { };

export const wait = (ms: any) =>
  new Promise((resolve) => setTimeout(resolve, ms));

export const grouper = (key: any) => (array: any[]) =>
  array.reduce((objectsByKeyValue, obj) => {
    const value = obj[key];
    objectsByKeyValue[value] = (objectsByKeyValue[value] || []).concat(obj);
    return objectsByKeyValue;
  }, {});

export const groupByHelper = grouper("parentMenuName");
export const stringStripper = ({
  stringInContext,
  replacer,
  replacee,
}: any) => {
  let stringAfterReplacement = "";
  try {
    stringAfterReplacement = stringInContext.replaceAll(
      replacee ?? "",
      replacer === "" ? "" : replacer
    );
  } catch (error) {
    stringAfterReplacement = stringInContext;
  }
  return stringAfterReplacement;
};

// export const toDateFormat = (
//   date: any,
//   dateFormat?: string,
//   shouldPad?: boolean
// ) => {
//   let d = isNullOrUndefined(date) ? new Date() : new Date(date);
//   let dtString = "";
//   switch (dateFormat) {
//     case "yyyy-MM-dd":
//       dtString = format(new Date(), dateFormat);
//       break;
//     default:
//       dtString = String(d.getDate()).concat(
//         String(d.getMonth() + 1),
//         String(d.getFullYear())
//       );
//       break;
//   }

//   return dtString;
// };

export const generateRandomNumber = (max: number = 10) => {
  return Math.floor(Math.random() * max) + 1;
};

export const generateNumericString = (length: number) => {
  let chars = "0123456789";
  let randomNumericString = "";
  for (let i = 0; i < length; i++) {
    let rnum = Math.floor(Math.random() * chars.length);
    randomNumericString += chars.substring(rnum, rnum + 1);
  }
  return randomNumericString;
};

// export const getValueFromUserDetail = (valueToGet: any) => {
//   let valueToReturn;
//   let userDetails = encryptStorage.getItem("basicUserDetails");
//   switch (valueToGet) {
//     case "username":
//       let username = !isNullOrUndefined(userDetails)
//         ? userDetails?.username
//         : "";
//       valueToReturn = username;
//       break;
//     case "firstName":
//       let firstName = !isNullOrUndefined(userDetails)
//         ? userDetails?.firstName
//         : "";
//       valueToReturn = firstName;
//       break;
//     case "tokenEnabled":
//       let tokenEnabled = !isNullOrUndefined(userDetails)
//         ? userDetails?.tokenEnabled
//         : "";
//       valueToReturn = tokenEnabled;
//       break;
//     case "isLoggedIn":
//       valueToReturn = !isNullOrUndefined(encryptStorage.getItem("isLoggedIn"))
//         ? encryptStorage.getItem("isLoggedIn")
//         : "false";
//       break;
//     case "userRole":
//       let userRole = !isNullOrUndefined(userDetails)
//         ? userDetails?.role_id
//         : "";
//       valueToReturn = userRole;
//       break;
//     case "corporateId":
//       let corporateId = !isNullOrUndefined(userDetails)
//         ? userDetails?.corporateId
//         : "";
//       valueToReturn = corporateId;
//       break;
//     case "companyName":
//       let companyName = !isNullOrUndefined(userDetails)
//         ? userDetails?.corporateDetails?.name
//         : "";
//       valueToReturn = companyName;
//       break;

//     default:
//       valueToReturn = "";
//       break;
//   }
//   return valueToReturn;
// };
export const useTimer = (initTime: number) => {
  var duration = initTime;

  var start = Date.now(),
    diff,
    minutes,
    seconds;

  function timer() {
    diff = duration - (((Date.now() - start) / 1000) | 0);

    minutes = (diff / 60) | 0;
    seconds = diff % 60 | 0;

    minutes = minutes < 10 ? "0" + minutes : minutes;

    seconds = seconds < 10 ? "0" + seconds : seconds;

    if (diff <= 0) {
      start = Date.now() + 1000;

      clearInterval(myCountdown);
    }
  }

  timer();

  var myCountdown = setInterval(timer, 1000);
  return { diff };
};

export const buildDateRangeString = (data: any) => {
  return data.startDate.concat(
    "/",
    data?.endDate,
    "/",
    data?.requestTypeId === "APPROVED" ? 1 : 0
  );
};

export const sanitizeUrl = (data: string) => {
  return data.startsWith("/") ? data.substr(1) : data;
};

export const getToday = () => {
  let myDate = new Date();
  let year: any = String(myDate.getFullYear());
  let month: any =
    myDate.getMonth() < 10 ? "0" + myDate.getMonth() : myDate.getMonth();
  let day: any = myDate.getDay() < 10 ? "0" + myDate.getDay() : myDate.getDay();

  let finalDate = String(month + day + year);
  return finalDate;
};

export const stringSplitter = (splitBy: string, stringToSplit: string) => {
  try {
    let splittedString = stringToSplit.trim().split(splitBy);
    let splittedStringArr = splittedString.join(" ");

    return splittedStringArr;
  } catch (error) {
    return stringToSplit;
  }
};
