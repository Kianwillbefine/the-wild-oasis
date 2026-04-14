// 注册全局错误处理器
import {
  ErrorType,
  classifyResourceError,
  handleAppError,
  isChunkLoadError,
  normalizeError,
} from "./error-recovery.js";

export function registerGlobalErrorHandlers() {
  window.onerror = function (message, source, lineno, colno, error) {
    const payload = normalizeError({
      layer: "runtime",
      type: ErrorType.JS_ERROR,
      message: String(message),
      stack: error?.stack,
      resourceUrl: source || "",
      extra: { lineno, colno },
    });

    handleAppError(payload);
    return false;
  };

  window.onunhandledrejection = function (event) {
    const reason = event.reason;
    const message = reason?.message || String(reason || "Promise error");

    const isChunkError = isChunkLoadError(reason);

    const payload = normalizeError({
      layer: isChunkError ? "resource" : "runtime",
      type: isChunkError ? ErrorType.CHUNK_ERROR_PAGE : ErrorType.PROMISE_ERROR,
      message,
      stack: reason?.stack,
    });

    handleAppError(payload);
  };

  window.addEventListener(
    "error",
    (event) => {
      const target = event.target;
      const type = classifyResourceError(target);

      if (!type) return;

      const resourceUrl = target?.src || target?.href || "";

      const payload = normalizeError({
        layer: "resource",
        type,
        message: `资源加载失败: ${resourceUrl || "unknown"}`,
        resourceType: target?.tagName?.toLowerCase() || "",
        resourceUrl,
        extra: { target },
      });

      handleAppError(payload);
    },
    true,
  );
}
