import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
// import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Toaster } from "react-hot-toast";

// 页面级错误边界控制
import ErrorBoundaryComponent from "./ui/ErrorBoundary";
import GlobalStyles from "./styles/GlobalStyles";
import AuthBootstrap from "./ui/AuthBootstrap";
import ProtectedRoute from "./ui/ProtectedRoute";
import PublicOnlyRoute from "./ui/PublicOnlyRoute";
// import LazyComponent from "./ui/LazyComponent";
// const Dashboard = () => <LazyComponent importComponent={() => import("./pages/Dashboard")} />;
import Dashboard from "./pages/Dashboard";
// const Bookings = () => <LazyComponent importComponent={() => import("./pages/Bookings")} />;
// const Cabins = () => <LazyComponent importComponent={() => import("./pages/Cabins")} />;
// const Users = () => <LazyComponent importComponent={() => import("./pages/Users")} />;
// const Orders = () => <LazyComponent importComponent={() => import("./pages/Orders")} />;
// const Settings = () => <LazyComponent importComponent={() => import("./pages/Settings")} />;
// const Account = () => <LazyComponent importComponent={() => import("./pages/Account")} />;
// const Login = () => <LazyComponent importComponent={() => import("./pages/Login")} />;
// const PageNotFound = () => <LazyComponent importComponent={() => import("./pages/PageNotFound")} />;
// const Booking = () => <LazyComponent importComponent={() => import("./pages/Booking")} />;
// const Checkin = () => <LazyComponent importComponent={() => import("./pages/Checkin")} />;
// const AppLayout = () => <LazyComponent importComponent={() => import("./ui/AppLayout")} />;
import Orders from "./pages/Orders";
import Bookings from "./pages/Bookings";
import Cabins from "./pages/Cabins";
import Users from "./pages/Users";
import Settings from "./pages/Settings";
import Account from "./pages/Account";
import Login from "./pages/Login";
import PageNotFound from "./pages/PageNotFound";
import AppLayout from "./ui/AppLayout";
import Booking from "./pages/Booking";
import Checkin from "./pages/Checkin";

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
              <Route path="bookings" element={<Bookings />} />
              <Route path="bookings/:bookingId" element={<Booking />} />
              <Route path="checkin/:bookingId" element={<Checkin />} />
              <Route path="cabins" element={<Cabins />} />
              <Route path="users" element={<Users />} />
              <Route path="orders" element={<Orders />} />
              <Route path="settings" element={<Settings />} />
              <Route path="account" element={<Account />} />
            </Route>

            <Route
              path="login"
              element={
                <PublicOnlyRoute>
                  <Login />
                </PublicOnlyRoute>
              }
            />
            <Route path="*" element={<PageNotFound />} />
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
