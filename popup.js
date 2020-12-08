const setHtmlElement = (htmlElement, obj) => {
  for (const key in obj) {
    htmlElement.setAttribute(key, obj[key]);
  }
  return htmlElement;
};

const generateSelectData = inputName => {
  const allowedInputType = [
    "text",
    "sentence",
    "textarea",
    "number",
    "medium-number",
    "large-number",
    "zipCode",
    "phone",
    "date",
    "time",
    "date-time",
    "url",
    "email",
    "ssn"
  ];

  const selectInputElement = document.createElement("select");
  const len = allowedInputType.length;

  selectInputElement.addEventListener("change", handleOnChangeSelect);

  const inputValuePos = allowedInputType.findIndex(
    type => type === inputName.split("#")[3]
  );

  for (let i = 0; i < len; i++) {
    const optionElement = document.createElement("option");
    optionElement.value = allowedInputType[i];
    optionElement.text = allowedInputType[i];
    i === inputValuePos && (optionElement.selected = true);
    selectInputElement.add(optionElement, null);
  }

  setHtmlElement(selectInputElement, {
    class: "form-input margin-top-10",
    selectedIndex: inputValuePos,
    value: allowedInputType[inputValuePos],
    id: inputName,
    name: inputName
  });

  return selectInputElement;
};

const generateNameData = inputName => {
  const regex = /default-input/;
  if (regex.test(inputName)) {
    return "...";
  }
  const len = inputName.length;
  return len > 12 ? inputName.substring(0, 12) + "..." : inputName;
};

const generatePopUpForm = (fromData = {}) => {
  const { response = {}, toggleIconStatus = false } = fromData;
  const formDivElement = document.getElementById("show-form-data");
  while (formDivElement.hasChildNodes()) {
    formDivElement.removeChild(formDivElement.lastChild);
  }

  if (!response || Object.keys(response).length === 0) {
    return;
  }

  const resetBtnElement = document.getElementById("resetData");
  resetBtnElement.classList.remove("display-none");

  const inputClassName = "form-input";

  const inputHeader = document.createElement("h3");
  setHtmlElement(inputHeader, {
    class: "flex-container form-info"
  });

  const leftHeaderPart = document.createElement("span");
  const node = document.createTextNode("Input type");
  leftHeaderPart.appendChild(node);

  setHtmlElement(leftHeaderPart, {
    class: "flex input-title flex-left"
  });

  inputHeader.appendChild(leftHeaderPart);

  const middleHeaderPart = document.createElement("span");
  const middleNode = document.createTextNode("Input name");
  middleHeaderPart.appendChild(middleNode);

  inputHeader.appendChild(middleHeaderPart);
  setHtmlElement(middleHeaderPart, {
    class: "flex input-title flex-middle"
  });

  const rightHeaderPart = document.createElement("span");
  const rightNode = document.createTextNode("Input value");
  rightHeaderPart.appendChild(rightNode);

  setHtmlElement(rightHeaderPart, {
    class: "flex input-title flex-right"
  });

  inputHeader.appendChild(rightHeaderPart);

  setHtmlElement(inputHeader, {
    // style: "margin-right: 3px;"
  });

  formDivElement.appendChild(inputHeader);

  const formElement = document.createElement("ul");

  for (const i in response) {
    const { key, value } = response[i];

    let [
      localInputType,
      localName,
      localPosition,
      localType,
      defaultValue = "random"
    ] = key.split("#");

    const localDiv = document.createElement("li");
    setHtmlElement(localDiv, {
      class: "flex-container form-info"
    });

    const inputTypeDiv = document.createElement("div");
    setHtmlElement(inputTypeDiv, {
      class: "flex flex-left"
    });

    inputTypeDiv.appendChild(generateSelectData(key));
    localDiv.appendChild(inputTypeDiv);

    const inputNameDiv = document.createElement("div");
    setHtmlElement(inputNameDiv, {
      class: "flex input-name flex-middle middle-text"
    });

    const nameNode = document.createTextNode(generateNameData(localName));
    inputNameDiv.appendChild(nameNode);

    localDiv.appendChild(inputNameDiv);

    const inputValueParentDiv = document.createElement("div");
    setHtmlElement(inputValueParentDiv, {
      class: "flex flex-right"
    });

    const inputValueFlexDiv = document.createElement("div");
    setHtmlElement(inputValueFlexDiv, {
      class: "flex-container no-right-padding"
    });

    const inputPinDivElement = document.createElement("div");
    setHtmlElement(inputPinDivElement, {
      class: "pin-part flex"
    });

    const inputPinElement = document.createElement("img");
    inputPinElement.src = "images/pin-icon.png";
    inputPinElement.addEventListener("click", handlePinIconClick);

    inputPinDivElement.appendChild(
      setHtmlElement(inputPinElement, {
        class: `pin-icon ${defaultValue === "fixed" ? "pin-selected" : ""}`
      })
    );
    inputValueFlexDiv.appendChild(inputPinDivElement);

    const inputValueDiv = document.createElement("div");
    setHtmlElement(inputValueDiv, {
      class: "flex"
    });

    const inputValue = document.createElement("input");
    inputValue.addEventListener("focus", handleOnFocus);
    inputValue.addEventListener("blur", handleOnBlur);

    inputValueDiv.appendChild(
      setHtmlElement(inputValue, {
        type: "text",
        name: "value#" + key,
        class: `${inputClassName}`,
        value: value,
        placeholder: "leave empty for random",
        id: `value#${key}`
      })
    );
    inputValueFlexDiv.appendChild(inputValueDiv);
    // inputValueParentDiv.appendChild(inputValueFlexDiv);

    const inputDelDivElement = document.createElement("div");
    setHtmlElement(inputDelDivElement, {
      class: "delete-icon flex"
    });

    const inputDelElement = document.createElement("img");
    inputDelElement.src = "images/trash.png";
    inputDelElement.addEventListener("click", handleRemoveInputClick);

    inputDelDivElement.appendChild(
      setHtmlElement(inputDelElement, { class: "remove-icon" })
    );

    inputValueFlexDiv.appendChild(inputDelDivElement);
    inputValueParentDiv.appendChild(inputValueFlexDiv);
    localDiv.appendChild(inputValueParentDiv);

    formElement.appendChild(localDiv);
  }

  formDivElement.appendChild(formElement);

  const toggleIconCheckboxElement = document.getElementById("switchCheckbox");
  toggleIconCheckboxElement.checked = toggleIconStatus;
};

const handlePinIconClick = event => {
  const target = event.target.parentNode.nextSibling.children[0];
  let selectName = target.name;
  let selectValue = target.value.trim() || null;

  let [
    val,
    inputType,
    inputName,
    position,
    type,
    defaultValue = "random"
  ] = selectName.split("#");
  if (defaultValue === "random") {
    defaultValue = "fixed";
  } else {
    defaultValue = "random";
    selectValue = null;
  }
  selectName = `${val}#${inputType}#${inputName}#${position}#${type}#${defaultValue}`;
  chrome.tabs.query(params, tabs => {
    chrome.tabs.sendMessage(
      tabs[0].id,
      {
        data: "saveSingleInputValue",
        input: { selectName, selectValue, isPinClick: true }
      },
      generatePopUpForm
    );
  });
};

const handleRemoveInputClick = event => {
  const inputValueName =
    event.target.parentNode.parentNode.children[1].firstChild.name;
  chrome.tabs.query(params, tabs => {
    chrome.tabs.sendMessage(
      tabs[0].id,
      { data: "removeSingleInput", input: { inputValueName } },
      generatePopUpForm
    );
  });
};

const handleOnChangeSelect = (event, response) => {
  const selectName = event.target.name;
  const selectValue = event.target.value;
  chrome.tabs.query(params, tabs => {
    chrome.tabs.sendMessage(
      tabs[0].id,
      { data: "saveSingleInput", input: { selectName, selectValue } },
      generatePopUpForm
    );
  });
};

const handleOnFocus = event => {
  const inputValueName = event.target.name;

  chrome.tabs.query(params, tabs => {
    chrome.tabs.sendMessage(
      tabs[0].id,
      { data: "highLightUserInput", input: { inputValueName } },
      null
    );
  });
};

const handleOnBlur = event => {
  const selectName = event.target.name;
  const selectValue = event.target.value.trim() || null;

  if (selectValue && selectValue !== "") {
    chrome.tabs.query(params, tabs => {
      chrome.tabs.sendMessage(
        tabs[0].id,
        {
          data: "saveSingleInputValue",
          input: { selectName, selectValue, isPinClick: false }
        },
        generatePopUpForm
      );
    });
  }
};

const params = { active: true, currentWindow: true };

(() => {
  document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("invalidData").addEventListener("click", () => {
      chrome.tabs.query(params, tabs => {
        chrome.tabs.sendMessage(
          tabs[0].id,
          { data: "inputInvalidData" },
          generatePopUpForm
        );
      });
    });

    document.getElementById("validData").addEventListener("click", () => {
      chrome.tabs.query(params, tabs => {
        chrome.tabs.sendMessage(
          tabs[0].id,
          { data: "inputValidData" },
          generatePopUpForm
        );
      });
    });

    document.getElementById("resetBtn").addEventListener("click", () => {
      const resetBtnElement = document.getElementById("resetData");
      resetBtnElement.classList.add("display-none");
      chrome.tabs.query(params, tabs => {
        chrome.tabs.sendMessage(
          tabs[0].id,
          { data: "resetInputData" },
          generatePopUpForm
        );
      });
    });

    chrome.tabs.query(params, tabs => {
      chrome.tabs.sendMessage(
        tabs[0].id,
        { data: "loadInputData" },
        generatePopUpForm
      );
    });

    document
      .getElementById("switchCheckbox")
      .addEventListener("change", event => {
        chrome.tabs.query(params, tabs => {
          chrome.tabs.sendMessage(
            tabs[0].id,
            { data: "toggleIconShow", isChecked: event.target.checked },
            generatePopUpForm
          );
        });
      });
  });
})();
