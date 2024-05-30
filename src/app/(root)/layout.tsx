import Footer from "@/components/Footer";
import Header from "@/components/Header";
import React from "react";
import ThemeProviderWrapper from "../themeProvider";
const layout = ({ children }: { children: React.ReactNode }) => {
      return (
            <ThemeProviderWrapper>
                  <div className="flex min-h-screen flex-col justify-between bg-light-background dark:bg-dark-background">
                        <div className=" container mx-auto">
                              <Header />
                              <div className="my-10">{children}</div>
                        </div>
                        <Footer />
                  </div>
            </ThemeProviderWrapper>
      );
};

export default layout;
