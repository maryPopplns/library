function header() {
  const HEADER = document.createElement("H1");
  const HORIZONTAL_RULE = document.createElement("hr");
  const BODY = document.querySelector("body");
  const APP = document.querySelector("#app");

  HEADER.setAttribute("id", "header");
  HORIZONTAL_RULE.setAttribute("id", "horizontal_rule");
  HEADER.textContent = "Reading List";

  BODY.insertBefore(HEADER, APP);
  BODY.insertBefore(HORIZONTAL_RULE, APP);
}

export { header };
