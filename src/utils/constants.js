/**
 * Internal Dependencies
 */
import SavingsImage1 from "../assets/images/image-1.png";
import SavingsImage2 from "../assets/images/image-2.png";
import SavingsImage3 from "../assets/images/image-3.png";

import InvestementsImage1 from "../assets/images/image-4.png";
import InvestementsImage2 from "../assets/images/image-5.png";

import SecurityImage from "../assets/images/image-6.png";

import { ReactComponent as UserCheck } from "../assets/svgs/user-check.svg";
import { ReactComponent as Layers } from "../assets/svgs/layers.svg";
import { ReactComponent as Activity } from "../assets/svgs/activity.svg";

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

// customerInfo

export const customerInfo = [
  {
    id: 1,
    Image: UserCheck,
    title: "Easy to use",
    description:
      "Verify your customer identity in real-time from bank verified data.",
  },
  {
    id: 2,
    Image: Layers,
    title: "All in one app",
    description:
      "Get a full view of your customers credit risk insights in real time.",
  },
  {
    id: 3,
    Image: Activity,
    title: "Diversified Investing",
    description: "Use the power of globally accepted & trusted credit scores",
  },
];

// ******************
// ** Type
// ******************

// Button
export const btnType = {
  primary: "from-green-600 to-lime-600",
  secondary: "from-stone-600 to-zinc-600",
  tertiary: "from-white to-white",
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

export const gradientGridType = {
  default: "",
  "primary-gradient":
    "bg-gradient-to-b sm:bg-gradient-to-r from-lime-500 via-lime-400 to-lime-500",
  "secondary-gradient":
    "bg-gradient-to-r from-zinc-800 via-gray-800 to-zinc-900",
};

// ******************
// ** Grid Sections
// ******************

// Savings

export const savingsCards = [
  {
    id: 1,
    title: "Smash Your Saving Goals",
    description: "Save for your goal and achieve them with minimal effort.",
    btnText: "Start Saving",
    image: SavingsImage1,
    className: "w-full sm:w-[49%]",
  },
  {
    id: 2,
    title: "Save for the rainy day.",
    description:
      "Never be caught unfresh, Build a safety net for unexpected expenses.",
    btnText: "Start Saving",
    image: SavingsImage2,
    className: "w-full sm:w-[49%]",
  },
  {
    id: 3,
    title: "Shared Saving Plans",
    description:
      "Want to save together with your partner or friends? Create shared saving goals and contribute together.",
    btnText: "Start Saving",
    image: SavingsImage3,
    className: "w-full",
  },
];

// Investements

export const investementsCards = [
  {
    id: 1,
    title: "Start Growing your Portfolio",
    description:
      "Invest in Stocks options and ETFs at your pace and commission free.",
    btnText: "Start Investing",
    image: InvestementsImage1,
    className: "w-full sm:w-[49%]",
  },
  {
    id: 2,
    title: "Buy and Sell Crypto",
    description:
      "Easily buy and sell cryptocurrencies at your pace, commission free.",
    btnText: "Explore Crypto",
    image: InvestementsImage2,
    className: "w-full sm:w-[49%]",
  },
];

// Security

export const securityCard = {
  id: 1,
  title: "Your Money is Safe with us",
  description:
    "We use the sate-of-the-art encryption to keep your money and data safe.",
  btnText: "",
  image: SecurityImage,
  className: "w-full",
};
