export const ErrorAction = {
  LOG: "log",
  RELOAD: "reload",
  GO_HOME: "go_home",
  GLOBAL_FALLBACK: "global_fallback",
  MODULE_FALLBACK: "module_fallback",
  REPLACE_IMAGE: "replace_image",
};

export const ErrorType = {
  BOOT_TIMEOUT: "boot_timeout",
  REACT_RENDER_ERROR: "react_render_error",
  JS_ERROR: "js_error",
  PROMISE_ERROR: "promise_error",
  CHUNK_ERROR_PAGE: "chunk_error_page",
  CHUNK_ERROR_MODULE: "chunk_error_module",
  SCRIPT_ERROR: "script_error",
  STYLE_ERROR: "style_error",
  IMG_ERROR: "img_error",
};

const recoveryMap = {
  [ErrorType.BOOT_TIMEOUT]: ErrorAction.RELOAD,
  [ErrorType.REACT_RENDER_ERROR]: ErrorAction.GLOBAL_FALLBACK,
  [ErrorType.JS_ERROR]: ErrorAction.LOG,
  [ErrorType.PROMISE_ERROR]: ErrorAction.LOG,
  [ErrorType.CHUNK_ERROR_PAGE]: ErrorAction.RELOAD,
  [ErrorType.CHUNK_ERROR_MODULE]: ErrorAction.MODULE_FALLBACK,
  [ErrorType.SCRIPT_ERROR]: ErrorAction.LOG,
  [ErrorType.STYLE_ERROR]: ErrorAction.LOG,
  [ErrorType.IMG_ERROR]: ErrorAction.REPLACE_IMAGE,
};

export function normalizeError({ layer, type, message, stack, resourceType = "", resourceUrl = "", extra = {} }) {
  return {
    layer,
    type,
    message: message || "未知错误",
    stack: stack || "",
    resourceType,
    resourceUrl,
    pageUrl: window.location.href,
    timestamp: Date.now(),
    userAgent: navigator.userAgent,
    extra,
  };
}

export function isChunkLoadError(input) {
  const text = input?.message || input?.reason?.message || (typeof input === "string" ? input : String(input || ""));

  return (
    text.includes("Failed to fetch dynamically imported module") || text.includes("Importing a module script failed")
  );
}

export function classifyResourceError(target) {
  if (target instanceof HTMLScriptElement) return ErrorType.SCRIPT_ERROR;
  if (target instanceof HTMLLinkElement) return ErrorType.STYLE_ERROR;
  if (target instanceof HTMLImageElement) return ErrorType.IMG_ERROR;
  return null;
}

export function handleAppError(payload) {
  const action = recoveryMap[payload.type];

  console.error("[app-error]", payload);

  switch (action) {
    case ErrorAction.RELOAD:
      window.location.reload();
      return;

    case ErrorAction.GO_HOME:
      window.location.assign("/");
      return;

    case ErrorAction.REPLACE_IMAGE:
      if (payload.extra?.target instanceof HTMLImageElement) {
        payload.extra.target.src = "public/placeholder-image.png.png";
      }
      return;

    case ErrorAction.MODULE_FALLBACK:
      window.dispatchEvent(
        new CustomEvent("app:module-error", {
          detail: payload,
        }),
      );
      return;

    case ErrorAction.GLOBAL_FALLBACK:
    case ErrorAction.LOG:
    default:
      return;
  }
}
