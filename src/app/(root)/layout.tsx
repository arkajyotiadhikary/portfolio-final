import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { ChakraProvider } from "@chakra-ui/react";
import React from "react";

const layout = ({ children }: { children: React.ReactNode }) => {
      return (
            <div className="flex min-h-screen flex-col justify-between bg-space_cadet">
                  <div className="container mx-auto">
                        <Header />
                        <div className="my-10">{children}</div>
                  </div>
                  <Footer />
            </div>
      );
};

export default layout;
