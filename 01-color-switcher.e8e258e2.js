!function(){var t={startBtnEl:document.querySelector("[data-start]"),stopBtnEl:document.querySelector("[data-stop]")},e=null;t.startBtnEl.addEventListener("click",(function(){t.startBtnEl.setAttribute("disabled","disabled"),e=setInterval((function(){document.body.style.backgroundColor="#".concat(Math.floor(16777215*Math.random()).toString(16))}),1e3)})),t.stopBtnEl.addEventListener("click",(function(){clearInterval(e),t.startBtnEl.removeAttribute("disabled")}))}();
//# sourceMappingURL=01-color-switcher.e8e258e2.js.map
