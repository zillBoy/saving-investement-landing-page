/**
 * Internal Dependencies
 */
import SavingsImage1 from "../assets/images/image-1.png";
import SavingsImage2 from "../assets/images/image-2.png";
import SavingsImage3 from "../assets/images/image-4.png";

// ******************
// Components
// ******************

// Navbar

export const navbarItems = [
  {
    name: "Savings",
    link: "#",
  },
  {
    name: "Investment",
    link: "#",
  },
  {
    name: "Learn",
    link: "#",
  },
  {
    name: "About Us",
    link: "#",
  },
];

export const mobileNavbarItem = {
  name: "Menu",
  link: "#",
};

// HeroHeader

export const heroHeadings = [
  { text: "Save", color: "primary-gradient", className: "inline pr-2 sm:pr-4" },
  { text: "and", className: "inline pr-2 sm:pr-4" },
  {
    text: "Invest",
    color: "secondary-gradient",
    className: "inline pr-2 sm:pr-4",
  },
  {
    text: "your Money all in one place.",
    className: "inline pr-2 sm:pr-4",
  },
];

// FeedbackReview

export const feedbackReviews = [
  { id: 1, number: "140M", text: "Customers" },
  { id: 2, number: "140M", text: "Total downloads" },
  { id: 3, number: "140M", text: "Five Star Review" },
];

// ******************
// ** Type
// ******************

// Button
export const btnType = {
  primary: "from-green-600 to-lime-600",
  secondary: "from-stone-600 to-zinc-600",
};

// Navbar
export const navbarItemType = {
  desktop: "text-lg",
  mobile: "text-4xl italic font-bold my-2",
};

// Heading

export const headerTextColorType = {
  "primary-gradient":
    "text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-lime-600",
  "secondary-gradient":
    "text-transparent bg-clip-text bg-gradient-to-r from-lime-600 to-lime-300",
};

// ******************
// ** Image
// ******************

export const savingsCards = [
  {
    title: "Smash Your Saving Goals",
    description: "Save for your goal and achieve them with minimal effort.",
    btnText: "Start Saving",
    image: SavingsImage1,
    className: "w-full sm:w-[49%]",
  },
  {
    title: "Save for the rainy day.",
    description:
      "Never be caught unfresh, Build a safety net for unexpected expenses.",
    btnText: "Start Saving",
    image: SavingsImage2,
    className: "w-full sm:w-[49%]",
  },
  {
    title: "Shared Saving Plans",
    description:
      "Want to save together with your partner or friends? Create shared saving goals and contribute together.",
    btnText: "Start Saving",
    image: SavingsImage3,
    className: "w-full",
  },
];
