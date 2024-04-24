import { FaGithub, FaLinkedin } from "react-icons/fa";
const SocialLinks = ({page}) => {
  return (
    // Created a terinary statement to apply different styling to both the Home and Contact Pages ? is the if part of the statement and the : is the else part of the statement. Make sure to apply the page names to the component on both pages
    <div className={page == "Contact" ? "flex justify-start w-full gap-3" : "flex justify-center items-center gap-3 pt-2"}>
      <a href="https://www.linkedin.com/in/underwoodjm" target="_blank">
        <FaLinkedin className="cursor-pointer" size={20} />
      </a>
      {/* Traget="_blank" allows the link to be opened to a seperate page */}
      <a href="https://github.com/underwoodjo" target="_blank">
        <FaGithub className="cursor-pointer" size={20} />
      </a>
    </div>
  );
};
export default SocialLinks;
