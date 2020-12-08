const iconImage =
  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAMAAAC6V+0/AAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAABa1BMVEXNOTnOOjrOOjrOOjrOOjrOOTnOOzvNNjbMNTXMNTXNNTXOOzvOOjrMNDTMMzPMMzPMMzPOOjrOOjrMNDTMMjLMMTHMMTHMMjLMMTHLMTHLMTHMMTHMMzPOOjrOOjrNNzfRSUnSTEzSTEzRR0fMNTXSS0vWWlrWWVnSTEzMNDTOOjrNOTnRSUnyzMz44uL44+PvwMDPQEDrrq799/f88/Prr6/MNDTOOjrOOjrOOzvYZGTaa2vaa2vXYGDNNzfbb2/kkZHjkJDbb2/MNDTOOjrMNDTLMDDLMDDLMDDLMDDMMzPLMTHLMDDLMDDLMTHOOjrMNDTMMzPMMzPMMzPMMzPMMzPbb2/kkpLjkZHMNDTMMzPMNDTpqKj67Oz56enMNDTOOjrMMzPQQ0PSTEzSS0vMMzPOOjrOOjrMNDTMMzPMMzPMMjLMMTHMMTHOOjrOOzvMNTXMNDTMNDTOOzvOOjrOOjrOOjrOOjr///84x7M3AAAAAWJLR0R41tvkRgAAAAd0SU1FB+MJBg4VBTk+wbAAAADGSURBVBjTY2BgZGJGBSysDGzsHJyogIubgYeXjx8VCAgyCAmLiIqJ80lISkGApLSMLIOcvIKikrKKqpo6BKhpaGoxaOvo6ukbGBoZm0CAsamZOYOFpZW1ja2dvYMjBDg4OQsyuLi6uXt4enn7+EKAjx/QTLpZ5B8QGBQUFOyHKRgSGhYeAQHhYZGCEMGo6JjYOAiIjYlPgAgGJyYlp0BAclJqGkN6RmZgYGBWdk4uBORkh+Yx5BcUBqCComKGkvxSf1RQVg4AIvtYH73vCPwAAAAldEVYdGRhdGU6Y3JlYXRlADIwMTktMDktMDZUMTQ6MjE6MDUtMDQ6MDC42+vEAAAAJXRFWHRkYXRlOm1vZGlmeQAyMDE5LTA5LTA2VDE0OjIxOjA1LTA0OjAwyYZTeAAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAAASUVORK5CYII=";

const formInputImageIconClassName = "_form_input_generator_icon_";

const getDomElements = () => {
  return document.querySelectorAll("input, textarea");
};

const getUrlObject = () => {
  return window.location.href.split("?")[0].replace(/\/|:|\./gi, "_");
};

const setDataIntoLocalStorage = (key, data) => {
  window.localStorage.setItem(key, JSON.stringify(data));
};

const getInfoFromLocalStorage = key => {
  return JSON.parse(window.localStorage.getItem(key));
};

const saveDataInLocalStorage = (data = {}) => {
  setDataIntoLocalStorage(getUrlObject(), data);
};

const setToggleIconStatus = (isChecked = false) => {
  setDataIntoLocalStorage(`${getUrlObject()}__icon_show`, isChecked);
};

const getToggleIconStatus = () => {
  return getInfoFromLocalStorage(`${getUrlObject()}__icon_show`);
};

const getDataFromLocalStorage = () => {
  const data = getInfoFromLocalStorage(getUrlObject());
  const loadInputData =
    data && Object.keys(data).length > 0 ? data : generateBasicInputForm();
  return loadInputData;
};

const checkFormInputType = userInput => {
  if (
    userInput.type === "submit" ||
    userInput.type === "reset" ||
    userInput.type === "file" ||
    userInput.type === "image" ||
    userInput.type === "radio" ||
    userInput.type === "checkbox" ||
    userInput.type === "button" ||
    userInput.type === "hidden" ||
    userInput.type === "search"
  ) {
    return true;
  }

  if (userInput.disabled) return true;

  return false;
};

const smallCharacterList = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z"
];

const capitalCharacterList = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z"
];

const numberList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

const alphaNumericCharList = [
  ...smallCharacterList,
  ...capitalCharacterList,
  ...numberList
];

const specialCharList = [
  "!",
  "@",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  "-",
  "+",
  "=",
  "|",
  "{",
  "}",
  ":",
  ";",
  "/",
  "\\",
  "[",
  "]",
  ",",
  ".",
  "#",
  "`",
  "~",
  "_"
];

const domainList = [
  "com",
  "net",
  "org",
  "info",
  "me",
  "dev",
  "int",
  "edu",
  "gov",
  "io",
  "cc",
  "co",
  "app"
];

const emailDomainList = [
  "gmail.com",
  "yahoo.com",
  "outlook.com",
  "yopmail.com",
  "zoho.com"
];

const phoneAreaList = [
  205,
  251,
  256,
  907,
  479,
  501,
  870,
  479,
  209,
  310,
  323,
  747,
  760,
  805,
  203,
  302,
  239,
  305,
  321,
  352,
  229,
  404,
  470,
  478,
  212,
  315,
  704,
  743
];

const phoneAreaListLen = phoneAreaList.length - 1;
const emailDomainListLen = emailDomainList.length - 1;
const domainListLen = domainList.length - 1;
const alphaNumericCharLen = 25;
const specialCharLen = specialCharList.length - 1;

function setHtmlElement(htmlElement, obj) {
  for (let key in obj) {
    htmlElement.setAttribute(key, obj[key]);
  }
  return htmlElement;
}

const randomNumberGenerator = (max = 0, min = 0) => {
  return max
    ? Math.round(Math.random() * (+max - +min)) + min
    : Math.round(Math.random());
};

const numberInputGenerator = (maxLimit = 10, minLimit = 2) => {
  const len = randomNumberGenerator(maxLimit, minLimit);
  const result = [];
  for (let i = 0; i < len; i++) {
    result.push(numberList[randomNumberGenerator(9)]);
  }
  return parseInt(result.join(""), 10);
};

const smallNumberInputGenerator = (max = 100, min = 0) => {
  return randomNumberGenerator(max, min);
};

const mediumNumberInputGenerator = (max = 10000, min = 0) => {
  return randomNumberGenerator(max, min);
};

const numberWithRangeInputGenerator = (max = 100, min = 0) => {
  return randomNumberGenerator(max, min);
};

const phoneNumberInputGenerator = () => {
  return `${
    phoneAreaList[randomNumberGenerator(phoneAreaListLen)]
  }${randomNumberGenerator(999, 200)}${randomNumberGenerator(9999, 2000)}`;
};

const validZipCodeInputGenerator = () => {
  return `${randomNumberGenerator(99999, 10001)}`;
};

const invalidZipCodeInputGenerator = () => {
  return `${randomNumberGenerator(9999, 1000)}`;
};

const invalidPhoneNumberInputGenerator = () => {
  return randomNumberGenerator(1000000000);
};

const validNumberInputGenerator = (userInput = {}) => {
  let minValue = parseInt(userInput.min, 10) || 0;
  let maxValue = parseInt(userInput.max, 10) || 0;

  return maxValue
    ? numberWithRangeInputGenerator(maxValue, minValue)
    : numberInputGenerator() || 0;
};

const domainNameGenerator = () => {
  return `${domainList[randomNumberGenerator(domainListLen)]}`;
};

const emailNameGenerator = () => {
  return `${emailDomainList[randomNumberGenerator(emailDomainListLen)]}`;
};

const validTextInputGenerator = (maxLimit = 15, minLimit = 8) => {
  let result = [];
  const limit = randomNumberGenerator(maxLimit, minLimit);
  for (let i = 0; i < limit; i++) {
    result.push(
      alphaNumericCharList[randomNumberGenerator(alphaNumericCharLen)]
    );
  }
  return result.join("");
};

const validTextareaData = (maxLimit = 25, minLimit = 7, maxWordLen = 15) => {
  let result = [];
  const textareaLen = randomNumberGenerator(maxLimit, minLimit);
  for (let i = 0; i < textareaLen; i++) {
    result.push(validTextInputGenerator(randomNumberGenerator(maxWordLen)));
  }
  return result.join(" ");
};

const validSentenceInputGenerator = (
  maxLimit = 5,
  minLimit = 2,
  maxWordLen = 10
) => {
  return validTextareaData(maxLimit, minLimit, maxWordLen);
};

const invalidTextInputGenerator = (maxLimit = 15, minLimit = 8) => {
  let result = [];
  let limit = randomNumberGenerator(maxLimit, minLimit);
  for (let i = 0; i < limit; i++) {
    result.push(
      randomNumberGenerator()
        ? alphaNumericCharList[randomNumberGenerator(alphaNumericCharLen)]
        : specialCharList[randomNumberGenerator(specialCharLen)]
    );
  }
  return result.join("");
};

const invalidTextareaData = (maxLimit = 25, minLimit = 7, maxWordLen = 15) => {
  let result = [];
  const textareaLen = randomNumberGenerator(maxLimit, minLimit);
  for (let i = 0; i < textareaLen; i++) {
    result.push(invalidTextInputGenerator(maxWordLen));
  }
  return result.join(" ");
};

const invalidSentenceGenerator = (
  maxLimit = 5,
  minLimit = 2,
  maxWordLen = 10
) => {
  return invalidTextareaData(maxLimit, minLimit, maxWordLen);
};

const checkboxInputGenerator = () => {
  return randomNumberGenerator() ? true : false;
};

const validEmailInputGenerator = () => {
  return `${validTextInputGenerator()}@${emailNameGenerator()}`;
};

const invalidEmailInputGenerator = () => {
  return `${invalidTextInputGenerator()}@${emailNameGenerator()}`;
};

const validUrlInputGenerator = () => {
  return `${randomNumberGenerator() ? `https` : `http`}://${
    randomNumberGenerator() ? `www.` : ``
  }${validTextInputGenerator()}.${domainNameGenerator()}`;
};

const invalidUrlInputGenerator = () => {
  return `${randomNumberGenerator() ? `https` : `http`}://${
    randomNumberGenerator() ? `www.` : ``
  }${invalidTextInputGenerator()}.${domainNameGenerator()}`;
};

const validDateInputGenerator = () => {
  const year = new Date().getFullYear();
  const month = randomNumberGenerator(12, 1);
  const day = randomNumberGenerator(28, 1);
  return `${month > 9 ? month : `0${month}`}/${
    day > 9 ? day : `0${day}`
  }/${randomNumberGenerator(year, year - 25)}`;
};

const invalidDateInputGenerator = () => {
  const year = new Date().getFullYear();
  return `${randomNumberGenerator(20, 13)}/${randomNumberGenerator(
    100,
    32
  )}/${randomNumberGenerator(3000, 4000)}`;
};

const validTimeInputGenerator = () => {
  const hour = randomNumberGenerator(12, 1);
  const minute = randomNumberGenerator(59, 1);
  return `${hour > 9 ? hour : `0${hour}`}:${
    minute > 9 ? minute : `0${minute}`
  } ${randomNumberGenerator() ? "AM" : "PM"}`;
};

const invalidTimeInputGenerator = () => {
  return `${randomNumberGenerator(50, 25)}:${randomNumberGenerator(99, 61)} ${
    randomNumberGenerator() ? "AM" : "PM"
  }`;
};

const validDateTimeInputGenerator = () => {
  return `${validDateInputGenerator()} ${validTimeInputGenerator()}`;
};

const invalidDateTimeInputGenerator = () => {
  return `${invalidDateInputGenerator()} ${invalidTimeInputGenerator()}`;
};

const validSSNInputGenerator = () => {
  const gg = randomNumberGenerator(99, 1);
  return `${randomNumberGenerator(999, 100)}-${
    gg > 9 ? gg : `0${gg}`
  }-${randomNumberGenerator(9999, 1000)}`;
};

const invalidSSNInputGenerator = () => {
  return `${randomNumberGenerator(999, 1)}-${randomNumberGenerator(
    9,
    1
  )}-${randomNumberGenerator(9999, 1)}`;
};

const userInputText = {
  url: /url|website|domain|page/i,
  email: /mail/i,
  date: /date|day|dob/i,
  time: /time/i,
  phone: /phone/i,
  zipCode: /zip|postal/i,
  ssn: /ssn/i
};

const selectInputGenerator = userInput => {
  let len = userInput.options.length - 1;
  let optionPosition = randomNumberGenerator(len);
  inputValue = userInput.options[optionPosition].value;
  userInput.setAttribute("selectedIndex", optionPosition);
};

const inputFunctionGenerator = {
  valid: {
    text: validTextInputGenerator,
    sentence: validSentenceInputGenerator,
    textarea: validTextareaData,
    number: smallNumberInputGenerator,
    "medium-number": mediumNumberInputGenerator,
    "large-number": numberInputGenerator,
    range: numberWithRangeInputGenerator,
    zipCode: validZipCodeInputGenerator,
    phone: phoneNumberInputGenerator,
    date: validDateInputGenerator,
    time: validTimeInputGenerator,
    "date-time": validDateTimeInputGenerator,
    select: selectInputGenerator,
    url: validUrlInputGenerator,
    email: validEmailInputGenerator,
    ssn: validSSNInputGenerator
  },
  invalid: {
    text: invalidTextInputGenerator,
    sentence: validSentenceInputGenerator,
    textarea: invalidTextareaData,
    number: smallNumberInputGenerator,
    "medium-number": mediumNumberInputGenerator,
    "large-number": numberInputGenerator,
    range: numberInputGenerator,
    zipCode: invalidZipCodeInputGenerator,
    phone: invalidPhoneNumberInputGenerator,
    date: invalidDateInputGenerator,
    time: invalidTimeInputGenerator,
    "date-time": invalidDateTimeInputGenerator,
    select: selectInputGenerator,
    url: invalidUrlInputGenerator,
    email: invalidEmailInputGenerator,
    ssn: invalidSSNInputGenerator
  }
};

const inputTypeGenerator = (userInput = {}) => {
  let inputType = "text";

  if (userInputText.url.test(userInput.name) || userInput.type === "url") {
    inputType = "url";
  } else if (
    userInputText.email.test(userInput.name) ||
    userInput.type === "email"
  ) {
    inputType = "email";
  } else if (userInput.type === "number" || userInput.type === "range") {
    inputType = "number";
  } else if (
    userInputText.date.test(userInput.name) ||
    userInput.type === "date"
  ) {
    inputType = "date";
  } else if (userInput.type === "textarea") {
    inputType = "textarea";
  } else if (
    userInputText.time.test(userInput.name) ||
    userInput.type === "time"
  ) {
    inputType = "time";
  } else if (userInputText.phone.test(userInput.name)) {
    inputType = "phone";
  } else if (userInputText.zipCode.test(userInput.name)) {
    inputType = "zipCode";
  } else if (userInput.type === "checkbox" || userInput.type === "radio") {
    inputType = userInput.type;
  } else if (userInputText.ssn.test(userInput.name)) {
    inputType = "ssn";
  } else {
    inputType = "text";
  }

  return inputType;
};

const eventTrigger = (userInput = {}) => {
  let evObj = document.createEvent("Events");
  evObj.initEvent("change", true, false);
  userInput.dispatchEvent(evObj);
};

const removeSingleInput = (userInput = {}) => {
  userInput.setAttribute("value", "");
  // userInput.setAttribute('placeholder', '');
  userInput.value = "";
  eventTrigger(userInput);
  removeInputFocusClass(userInput);
};

const generateSingleInput = (
  { inputType = "valid", type = "text", defaultValue = "random" },
  value = null,
  userInput = {}
) => {
  const inputValue =
    (value === null || value === "") && defaultValue === "emptyValue"
      ? ""
      : defaultValue === "random" || value === null
      ? inputFunctionGenerator[inputType][`${type}`]()
      : value !== null && defaultValue === "fixed"
      ? value
      : inputFunctionGenerator[inputType][`${type}`]();

  if (inputValue && inputValue !== "") {
    userInput.setAttribute("value", inputValue);
    inputValue && inputValue !== "" && eventTrigger(userInput);
  }

  userInput.setAttribute("placeholder", "");
  userInput.value = inputValue;

  return inputValue;
};

const generateValidFormData = (localData = {}) => {
  let input = getDomElements();
  const response = {};
  const inputType = "valid";
  const totalStoredData = Object.keys(localData).length;
  const len = input.length;
  for (let i = 0; i < len; i++) {
    if (totalStoredData !== 0 && typeof localData[i] === "undefined") {
      continue;
    }

    let userInput = input[i];

    if (checkFormInputType(userInput)) continue;

    const { key = "", value = null } = localData[i] || {};
    let [
      localInputType,
      localName,
      localPosition,
      localType,
      defaultValue = "random"
    ] = key.split("#");

    defaultValue = defaultValue === "emptyValue" ? "random" : defaultValue;

    let outputName = [
      inputType,
      `${userInput.name || `default-input-${i}`}`,
      i
    ];
    const type = localType || inputTypeGenerator(userInput);
    const inputValue = generateSingleInput(
      { inputType, type, defaultValue },
      value,
      userInput
    );
    outputName.push(type);
    outputName.push(defaultValue);

    response[i] = {
      key: `${outputName.join("#")}`,
      value: inputValue
    };
  }

  saveDataInLocalStorage(response);

  return response;
};

const generateInputFromLocalStorage = (saveData = {}) => {
  let input = getDomElements();
  const response = {};
  for (let i in saveData) {
    const { key, value } = saveData[i];
    const [
      inputType,
      name,
      position,
      type,
      defaultValue = "random"
    ] = key.split("#");
    const userInput = input[position];
    const inputValue = generateSingleInput(
      { inputType, type, defaultValue },
      value,
      userInput
    );
    response[i] = { key, value: inputValue };
  }
  saveDataInLocalStorage(response);
  return response;
};

const generateInvalidFormData = (localData = {}) => {
  let input = getDomElements();
  const response = {};
  const totalStoredData = Object.keys(localData).length;
  const inputType = "invalid";
  const len = input.length;
  for (let i = 0; i < len; i++) {
    if (totalStoredData !== 0 && typeof localData[i] === "undefined") {
      continue;
    }

    let userInput = input[i];
    let outputName = [
      inputType,
      `${userInput.name || `default-input-${i}`}`,
      i
    ];

    const { key = "", value = null } = localData[i] || {};
    let [
      localInputType,
      localName,
      localPosition,
      localType,
      defaultValue = "random"
    ] = key.split("#");

    defaultValue = defaultValue === "emptyValue" ? "random" : defaultValue;

    const type = localType || inputTypeGenerator(userInput);
    const inputValue = generateSingleInput(
      { inputType, type, defaultValue },
      value,
      userInput
    );
    outputName.push(type);
    outputName.push(defaultValue);

    response[i] = {
      key: `${outputName.join("#")}`,
      value: inputValue
    };
  }
  saveDataInLocalStorage(response);
  return response;
};

const generateBasicInputForm = () => {
  const input = getDomElements();
  const inputType = "valid";
  const defaultValue = "emptyValue";

  const response = {};

  const len = input.length;
  for (let i = 0; i < len; i++) {
    let userInput = input[i];

    if (checkFormInputType(userInput)) continue;

    let outputName = [
      inputType,
      `${userInput.name || `default-input-${i}`}`,
      i
    ];
    const type = inputTypeGenerator(userInput);
    outputName.push(type);
    outputName.push(defaultValue);

    response[i] = {
      key: `${outputName.join("#")}`,
      value: ""
    };
  }

  saveDataInLocalStorage(response);

  return response;
};

const generateFormInputIcon = () => {
  if (!getToggleIconStatus()) {
    return removeFormInputIcon();
  }

  const inputType = "valid";
  let defaultValue = "emptyValue";
  const response = {};

  let input = getDomElements();
  const len = input.length;

  const imgIconList = document.getElementsByClassName(
    formInputImageIconClassName
  );

  if (imgIconList.length === 0 || len !== imgIconList.length) {
    for (let i = 0; i < len; i++) {
      let userInput = input[i];

      if (checkFormInputType(userInput)) continue;

      let outputName = [
        inputType,
        `${userInput.name || `default-input-${i}`}`,
        i
      ];

      const type = inputTypeGenerator(userInput);
      outputName.push(type);
      outputName.push(defaultValue);

      response[i] = {
        key: `${outputName.join("#")}`,
        value: ""
      };

      if (
        userInput.nextElementSibling &&
        userInput.nextElementSibling.className === formInputImageIconClassName
      )
        continue;

      userInput.parentNode.style.position = "relative";

      let topHeight = 0;
      if (userInput.parentNode.children.length === 1) {
        topHeight = 10;
      } else {
        if (
          userInput.parentNode.children[1].isSameNode(userInput) &&
          userInput.parentNode.children[0].tagName === "LABEL"
        ) {
          topHeight += 2 * userInput.parentNode.children[0].scrollHeight;
        } else {
          let parentNodeHeight = userInput.parentNode.scrollHeight;
          const userInputHeight = userInput.scrollHeight;
          topHeight = parentNodeHeight - userInputHeight;
          topHeight = topHeight > 0 ? topHeight : 0;
        }
      }

      let selectImgElement = document.createElement("img");
      selectImgElement.classList.add(formInputImageIconClassName);
      selectImgElement.src = iconImage;
      selectImgElement.dataset[`position`] = i;
      selectImgElement.style.top = `${topHeight}px`;
      selectImgElement.addEventListener("click", handleOnClick);

      userInput.insertAdjacentElement("afterend", selectImgElement);
    }

    saveDataInLocalStorage(response);
  }
};

const removeFormInputIcon = (position = -1) => {
  let input = getDomElements();

  if (position !== -1) {
    const userInput = input[position];
    userInput.nextElementSibling.remove();
  } else {
    for (const userInput of input) {
      if (checkFormInputType(userInput)) continue;

      if (
        userInput.nextElementSibling &&
        userInput.nextElementSibling.className === formInputImageIconClassName
      ) {
        userInput.nextElementSibling.remove();
      }
    }
  }
};

const handleOnClick = event => {
  let input = getDomElements();
  let resp = {};
  const localData = getDataFromLocalStorage() || {};
  const formInputImgElement = event.target;

  let { position: inputPosition } = formInputImgElement.dataset;
  const userInput = input[inputPosition];

  const { key } = localData[inputPosition];

  let [
    inputType,
    inputName,
    position,
    type,
    defaultValue = "random"
  ] = key.split("#");

  defaultValue = "random";
  const inputValue = generateSingleInput(
    { inputType, type, defaultValue },
    null,
    userInput
  );
  resp = localData;
  const newKey = `${inputType}#${inputName}#${position}#${type}#${defaultValue}`;
  resp[position] = { key: newKey, value: inputValue };
  saveDataInLocalStorage(resp);
};

const resetAllFormData = (saveData = {}) => {
  let input = getDomElements();
  for (let i in saveData) {
    const { key, value } = saveData[i];
    let [inputType, name, position, type, defaultValue] = key.split("#");
    const userInput = input[position];
    removeSingleInput(userInput);
  }

  const loadInputData = generateBasicInputForm();
  return loadInputData;
};

const handleOnfocus = userInput => {
  userInput.style.boxShadow = "0 0 3px rgba(81, 203, 238, 1)";
  userInput.style.padding = "3px 0px 3px 3px";
  userInput.style.margin = "5px 1px 3px 0px";
  userInput.style.border = "1px solid rgba(81, 203, 238, 1)";
};

const removeInputFocusClass = (userInput, event) => {
  userInput.style.removeProperty("box-shadow");
  userInput.style.removeProperty("padding");
  userInput.style.removeProperty("margin");
  userInput.style.removeProperty("border");
};

var styleEl = document.createElement("style");
styleEl.innerHTML = `
  .${formInputImageIconClassName} {
    height: 16px;
    z-index: 100000000;
    position: absolute;
    right: 7px;
  }

  .${formInputImageIconClassName}:hover {
    cursor: pointer;
  }
`;

document.head.appendChild(styleEl);

window.onload = function() {
  generateFormInputIcon();
};

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  let resp = {};
  const localData = getDataFromLocalStorage() || {};

  try {
    switch (request.data) {
      case "inputValidData": {
        resp = generateValidFormData(localData);
        break;
      }
      case "inputInvalidData": {
        resp = generateInvalidFormData(localData);
        break;
      }
      case "saveInputData": {
        saveDataInLocalStorage(request.formData || {});
        break;
      }
      case "loadInputData": {
        resp = generateInputFromLocalStorage(localData);
        break;
      }
      case "saveSingleInput": {
        let input = getDomElements();
        let { selectName, selectValue } = request.input;
        let [
          inputType,
          inputName,
          position,
          type,
          defaultValue = "random"
        ] = selectName.split("#");

        defaultValue = "random";
        const inputValue = generateSingleInput(
          { inputType, type: selectValue, defaultValue },
          null,
          input[position]
        );
        resp = localData;
        const newKey = `${inputType}#${inputName}#${position}#${selectValue}#${defaultValue}`;
        resp[position] = { key: newKey, value: inputValue };
        saveDataInLocalStorage(resp);

        break;
      }
      case "removeSingleInput": {
        let input = getDomElements();
        let { inputValueName } = request.input;
        let [val, inputType, inputName, position, type] = inputValueName.split(
          "#"
        );

        removeSingleInput(input[position]);
        resp = localData;
        delete resp[position];
        saveDataInLocalStorage(resp);
        removeFormInputIcon(position);
        break;
      }
      case "highLightUserInput": {
        let input = getDomElements();
        const { inputValueName } = request.input;
        let [val, inputType, inputName, position, type] = inputValueName.split(
          "#"
        );

        const userInput = input[position];
        handleOnfocus(userInput);
        break;
      }
      case "saveSingleInputValue": {
        let input = getDomElements();
        let {
          selectName,
          selectValue = null,
          isPinClick = false
        } = request.input;
        let [
          val,
          inputType,
          inputName,
          position,
          type,
          defaultValue = "random"
        ] = selectName.split("#");

        const userInput = input[position];
        if (
          !isPinClick &&
          selectValue !== null &&
          localData[position] &&
          localData[position].value === selectValue.trim()
        ) {
          resp = localData;
        } else {
          defaultValue = selectValue === null ? "random" : "fixed";
          const inputValue = generateSingleInput(
            { inputType, type, defaultValue },
            selectValue,
            userInput
          );
          resp = localData;
          const newKey = `${inputType}#${inputName}#${position}#${type}#${defaultValue}`;
          resp[position] = { key: newKey, value: inputValue };
          saveDataInLocalStorage(resp);
        }

        removeInputFocusClass(userInput);
        break;
      }
      case "resetInputData": {
        resp = resetAllFormData(localData);
        saveDataInLocalStorage(resp);
        generateFormInputIcon();
        break;
      }
      case "toggleIconShow": {
        const { isChecked } = request;
        setToggleIconStatus(isChecked);
        generateFormInputIcon();
        break;
      }
    }

    const toggleIconStatus = getToggleIconStatus();
    const response = getDataFromLocalStorage() || {};

    sendResponse({ response, toggleIconStatus });
  } catch (err) {
    sendResponse({ response: {}, toggleIconStatus: false });
  }

  return true;
});

chrome.runtime.onConnect.addListener(function(port) {});
