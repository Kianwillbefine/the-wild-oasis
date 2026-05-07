import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
// import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Toaster } from "react-hot-toast";
import { Suspense, lazy } from "react";

// 页面级错误边界控制
import ErrorBoundaryComponent from "./ui/ErrorBoundary";
import GlobalStyles from "./styles/GlobalStyles";
import AuthBootstrap from "./ui/AuthBootstrap";
import ProtectedRoute from "./ui/ProtectedRoute";
import PublicOnlyRoute from "./ui/PublicOnlyRoute";
import Dashboard from "./pages/Dashboard";
import AppLayout from "./ui/AppLayout";
import Spinner from "./ui/Spinner";

// 直接导入，打包后会分成多个 chunk，加载时会有多个请求，视觉上不够集中
const Bookings = lazy(() => import("./pages/Bookings"));
const Cabins = lazy(() => import("./pages/Cabins"));
const Users = lazy(() => import("./pages/Users"));
const Orders = lazy(() => import("./pages/Orders"));
const Settings = lazy(() => import("./pages/Settings"));
const Account = lazy(() => import("./pages/Account"));
const Login = lazy(() => import("./pages/Login"));
const PageNotFound = lazy(() => import("./pages/PageNotFound"));
const Checkin = lazy(() => import("./pages/Checkin"));
const Booking = lazy(() => import("./pages/Booking"));

function lazyRoute(element) {
  return <Suspense fallback={<Spinner />}>{element}</Suspense>;
}

// import Bookings from "./pages/Bookings";
// import Booking from "./pages/Booking";
// import Cabins from "./pages/Cabins";
// import Users from "./pages/Users";
// import Orders from "./pages/Orders";
// import Settings from "./pages/Settings";
// import Account from "./pages/Account";
// import Login from "./pages/Login";
// import PageNotFound from "./pages/PageNotFound";
// import Checkin from "./pages/Checkin";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 30 * 1000,
      // staleTime: 0,
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      {/* <ReactQueryDevtools initialIsOpen={false} /> */}

      <GlobalStyles />
      <AuthBootstrap>
        <BrowserRouter>
          <Routes>
            <Route
              element={
                <ProtectedRoute>
                  <AppLayout />
                </ProtectedRoute>
              }
            >
              <Route index element={<Navigate replace to="dashboard" />} />
              <Route
                path="dashboard"
                element={
                  <ErrorBoundaryComponent>
                    <Dashboard />
                  </ErrorBoundaryComponent>
                }
              />
              <Route path="bookings" element={lazyRoute(<Bookings />)} />
              <Route path="bookings/:bookingId" element={lazyRoute(<Booking />)} />
              <Route path="checkin/:bookingId" element={lazyRoute(<Checkin />)} />
              <Route path="cabins" element={lazyRoute(<Cabins />)} />
              <Route path="users" element={lazyRoute(<Users />)} />
              <Route path="orders" element={lazyRoute(<Orders />)} />
              <Route path="settings" element={lazyRoute(<Settings />)} />
              <Route path="account" element={lazyRoute(<Account />)} />
            </Route>

            <Route
              path="login"
              element={
                <PublicOnlyRoute>
                  {lazyRoute(<Login />)}
                </PublicOnlyRoute>
              }
            />
            <Route path="*" element={lazyRoute(<PageNotFound />)} />
          </Routes>
        </BrowserRouter>
      </AuthBootstrap>

      <Toaster
        position="top-center"
        gutter={12}
        containerStyle={{ margin: "8px" }}
        toastOptions={{
          success: {
            duration: 3000,
          },
          error: {
            duration: 5000,
          },
          style: {
            fontSize: "16px",
            maxWidth: "500px",
            padding: "16px 24px",
            backgroundColor: "var(--color-grey-0)",
            color: "var(--color-grey-700)",
          },
        }}
      />
    </QueryClientProvider>
  );
}

export default App;
