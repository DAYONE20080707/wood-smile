// components/ui/frame/TopPageHeadline.tsx
import classNames from "classnames";

interface TopPageHeadlineProps {
  mainTitle: React.ReactNode;
  subtitleTop?: React.ReactNode;
  subtitleBottom?: React.ReactNode;
  discription?: React.ReactNode;
  parentDirectoryName?: string;
  parentDirectoryLink?: string;
  className?: string; // 親要素のclassName
  titleClassName?: string; // h1用のclassName
  subtitleClassName?: string; // h2用のclassName
  discriptionClassName?: string; // p用のclassName
}

const TopPageHeadline: React.FC<TopPageHeadlineProps> = ({
  mainTitle,
  subtitleTop,
  subtitleBottom,
  discription,
  parentDirectoryName,
  parentDirectoryLink,
  className = "",
  titleClassName = "",
  subtitleClassName = "",
  discriptionClassName = "",
}) => {
  return (
    <section
      className={classNames(
        "md:md:max-w-[1240px] w-full px-4 md:px-5",
        className
      )}
    >
      {/* <Breadcrumb
        mainTitle={mainTitle}
        parentDirectoryName={parentDirectoryName}
        parentDirectoryLink={parentDirectoryLink}
      /> */}
      <h2
        className={classNames(
          "text-lg md:text-2xl font-bold mb-4 font-poppins leading-normal",
          subtitleClassName
        )}
      >
        {subtitleTop}
      </h2>
      <h1
        className={classNames(
          "text-[40px] font-semibold md:text-[80px] md:leading-[110%] font-en tracking-[0.03em] md:tracking-[4px]",
          titleClassName
        )}
      >
        {mainTitle}
      </h1>
      <h3 className={classNames("text-sm md:text-xl mt-4 tracking-[0.05em] font-medium md:leading-[160%]", subtitleClassName)}>
        {subtitleBottom}
      </h3>
      <p className={classNames("mt-4 md:text-lg ", discriptionClassName)}>
        {discription}
      </p>
    </section>
  );
};

export default TopPageHeadline;
