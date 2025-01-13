import {Layout} from "@/components/layout";
import {TransparentWrapper} from "@/components/layout/transparentWrapper";
import React from "react";
import {Details} from "@/app/components/Details";
import {Links} from "@/app/components/LInks";

export default function Home() {
  return (
      <Layout>
        <TransparentWrapper>
          <div className="container-row bg-white flex">
            <div className="container">
              <div className="xl:flex gap-8 items-center justify-center w-full">
                <div className="min-h-full w-full">
                  <Details />
                  <Links />
                </div>
              </div>
            </div>
          </div>
        </TransparentWrapper>
      </Layout>
  );
}
