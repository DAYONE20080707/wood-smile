"use client"

import Link from "next/link"
import Image from "next/image"
import Menu from "@/components/ui/navigation/Menu"
import Sns from "@/components/ui/button/SnsButton"
import FooterLinks from "@/components/ui/navigation/FooterLinks"
import CompanyInfo from "@/components/ui/navigation/CompanyInfo"
import ContactButton from "@/components/ui/button/ContactButton"
import RecruitButton from "../ui/button/RecruitButton"

// フッター
const Footer1 = () => {
  const { companyName, companyNameText, companyPostalCode, companyAddress } =
    CompanyInfo[0]
  return (
    <footer className="bg-[#333] text-white border-t py-10 md:py-[120px] px-4 md:px-0">
      <div className="md:max-w-[1240px] mx-auto md:px-5">
        <div className="md:flex justify-between items-end">
          <div className="space-y-3">
            <h4 className="w-[166px]">
              {CompanyInfo[0].companyName("primary")}
            </h4>
            <p>{companyNameText}</p>
            <p>
              {companyPostalCode}
              <br />
              {companyAddress}
            </p>
          </div>
          <div className="flex flex-col md:items-end mt-5 md:mt-0">
            <ul className="md:flex items-center md:space-x-10 font-light space-y-5 md:space-y-0">
              {Menu.map((item, index) => (
                <li key={index}>
                  <Link href={item.href}>
                    <div>{item.nameJa}</div>
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-7 flex flex-col md:flex-row gap-2">
              <ContactButton className="">お問い合わせ</ContactButton>
              <RecruitButton className="">採用情報</RecruitButton>
            </div>
          </div>
        </div>
        <div className="md:flex justify-between items-center !border-t border-white mt-6 pt-6">
          <ul className="flex items-center justify-start font-semibold  space-x-5 md:space-x-0">
            {Sns.map((item, index) => (
              <li
                key={index}
                className="w-5 h-5 md:w-[60px] md:h-[60px] flex items-center justify-center"
              >
                <Link href={item.href} className="">
                  <Image
                    src={item.src}
                    alt={item.name}
                    width={30}
                    height={30}
                  />
                </Link>
              </li>
            ))}
          </ul>
          <ul className="md:flex items-center md:space-x-10 font-light mt-5 md:mt-0 space-y-5 md:space-y-0">
            {FooterLinks.map((item, index) => (
              <li key={index}>
                <Link href={item.href}>
                  <div>{item.name}</div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <small className="mt-6 flex justify-start md:justify-end items-center md:text-base">
          ©合同会社WOOD-SMILE. ALL Rights Reserved.
        </small>
      </div>
    </footer>
  )
}

export default Footer1
