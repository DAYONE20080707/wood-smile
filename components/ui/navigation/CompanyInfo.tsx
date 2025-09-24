//components/ui/navigation/CompanyInfo.tsx
import Image from "next/image"
export const CompanyInfo = [
  {
    companyName: (type: "primary" | "secondary" | "tertiary") => (
      <Image
        src={
          type === "primary"
            ? "/common/logo_header.png" // 1つ目のロゴパス（白色ロゴ）
            : type === "secondary"
            ? "/common/logo_bk.svg" // 2つ目のロゴパス（黒色ロゴ）
            : "/common/logo.svg" // 3つ目のロゴパス（テキストなし）
        }
        alt="logo"
        width={200} // 適切な幅を指定
        height={40} // 適切な高さを指定
        className="w-full h-full object-contain"
      />
    ),
    companyPostalCode: "107-0062",
    companyAddress: "東京都葛飾区青戸7-30-1-305号",
    companyTel: "03-6455-5380",
    companyTelHref: "tel:0364555380",
    companyEmail: "info@company.co.jp",
  },
]

export default CompanyInfo
