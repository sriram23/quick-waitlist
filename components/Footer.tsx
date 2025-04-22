import Link from "next/link";
import FaXTwitterIcon from "@/public/FaXTwitterIcon";

const LinkedinLink =
  process.env.NEXT_PUBLIC_LINKEDIN || "https://www.linkedin.com/";
const TwitterLink = process.env.NEXT_PUBLIC_TWITTER || "https://www.x.com/";
const GithubLink = process.env.NEXT_PUBLIC_GITHUB || "https://www.github.com/";

const CardFooter = () => {
  return (
    <div className="pt-4 space-y-2">
      <div className="text-[#B1ACA4] text-[12px]">
        We care about your data in our{" "}
        <Link
          href="/privacy-policy"
          className="underline transition-all duration-200 hover:text-black/70"
        >
          privacy policy
        </Link>
      </div>
      {/* Social Media */}
      <div className="flex items-center gap-2">
        <Link
          href={TwitterLink}
          target="_blank"
          className="flex h-8 w-8 items-center justify-center rounded-lg bg-gray-50 text-gray-600 shadow transition duration-200 ease-linear hover:bg-gray-100 hover:text-gray-500 hover:shadow-none"
        >
          <FaXTwitterIcon />
        </Link>
      </div>
    </div>
  );
};

export default CardFooter;
