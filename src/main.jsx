import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import ErrorBoundary from "./ui/ErrorBoundary";
import ErrorFallback from "./ui/ErrorFallback";
import { registerGlobalErrorHandlers } from "./utils/register-global-errors.js";
window.__APP_BOOTSTRAPPED__ = true;
if (window.__APP_BOOT_TIMEOUT__) {
  clearTimeout(window.__APP_BOOT_TIMEOUT__);
}
// 全局错误监控
registerGlobalErrorHandlers();
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ErrorBoundary FallbackComponent={ErrorFallback} onReset={() => window.location.replace("/")}>
      <App />
    </ErrorBoundary>
  </React.StrictMode>,
);
