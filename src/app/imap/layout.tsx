import { ReactNode } from "react";

export default function RapportLayout({ children }: { children: ReactNode }) {
  return (
    <section
      className=" w-full h-screen
  bg-[#fcfcfc]
  ">
      {children}
    </section>
  );
}
