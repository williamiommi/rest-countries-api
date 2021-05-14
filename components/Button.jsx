import Link from "next/link";

const Button = ({ icon, anchorClass, linkName, linkUrl }) => {
  return (
    <Link href={linkUrl}>
      <a
        data-testid='button'
        className={`flex flex-row p-2 items-center justify-center rounded-md dark:bg-blue-dark ${anchorClass}`}
      >
        {icon}
        {linkName}
      </a>
    </Link>
  );
};

export default Button;
