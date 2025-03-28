import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import GlobalDetails from "./components/(home-page)/GlobalDetails";
import PressDetails from "./components/(home-page)/PressDetails";
import BannerLayout from "./components/layouts/BannerLayout";
import RootLayout from "./components/layouts/RootLayout";
import Loading from "./components/partials/Loading";
import EidAlFitrPage from "./pages/(banner-pages)/EidAlFitrPage";
import BannerPage from "./pages/BannerPage";
import HomePage from "./pages/HomePage";
import NotFoundPage from "./pages/NotFoundPage";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <Suspense fallback={<Loading />}>
                <RootLayout />
              </Suspense>
            }
          >
            <Route
              index
              element={
                <Suspense fallback={<Loading />}>
                  <HomePage />
                </Suspense>
              }
            />
            <Route
              path="/press-releases/:id"
              element={
                <Suspense fallback={<Loading />}>
                  <PressDetails />
                </Suspense>
              }
            />
            <Route
              path="/global-presence/:id"
              element={
                <Suspense fallback={<Loading />}>
                  <GlobalDetails />
                </Suspense>
              }
            />
            <Route
              path="/banner"
              element={
                <Suspense fallback={<Loading />}>
                  <BannerLayout />
                </Suspense>
              }
            >
              <Route
                index
                element={
                  <Suspense fallback={<Loading />}>
                    <BannerPage />
                  </Suspense>
                }
              />
              <Route
                path="eid-al-fitr"
                element={
                  <Suspense fallback={<Loading />}>
                    <EidAlFitrPage />
                  </Suspense>
                }
              />
            </Route>
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
