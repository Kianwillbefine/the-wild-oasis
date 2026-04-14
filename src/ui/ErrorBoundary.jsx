import React from "react";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
      error: null,
    };
  }

  static getDerivedStateFromError(error) {
    return {
      hasError: true,
      error,
    };
  }

  componentDidCatch(error, errorInfo) {
    console.error("[render-error]", error, errorInfo);
  }

  handleReload = () => {
    window.location.reload();
  };

  handleGoHome = () => {
    window.location.assign("/");
  };

  render() {
    if (this.state.hasError) {
      return (
        <div style={{ padding: 24 }}>
          <h1>页面渲染失败</h1>
          <p>{this.state.error?.message || "未知错误"}</p>
          {import.meta.env.DEV && this.state.error?.stack && (
            <pre style={{ whiteSpace: "pre-wrap" }}>
              <code>{this.state.error.stack}</code>
            </pre>
          )}
          <button onClick={this.handleReload}>刷新页面</button>
          <button onClick={this.handleGoHome}>返回首页</button>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
