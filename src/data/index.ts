import { Images } from "../Assets";
import ConnectionsActive from "../assets/icons/Followers_active.png";
import ConnectionsInActive from "../assets/icons/Followers_inactive.png";
import ConnectionsMobile from "../assets/icons/Followers_mobile.png";

import CommunitiesActive from "../assets/icons/Community_active.png";
import CommunitiesInActive from "../assets/icons/Community_inactive.png";
import CommunitiesMobile from "../assets/icons/Community_mobile.png";

import MarketPlaceActive from "../assets/icons/Marketplace_active.png";
import MarketPlaceInActive from "../assets/icons/Marketplace_inactive.png";
import MarketPlaceMobile from "../assets/icons/Marketplace_mobile.png";

import EventsActive from "../assets/icons/Events_active.png";
import EventsInActive from "../assets/icons/Events_inactive.png";
import EventsMobile from "../assets/icons/Events_mobile.png";

import ResourceCenterActive from "../assets/icons/Resource_center_active.png";
import ResourceCenterInActive from "../assets/icons/Resource_center_inactive.png";
import ResourceCenterMobile from "../assets/icons/Resource_center_mobile.png";

import BusinessDirectoryActive from "../assets/icons/Business_Directory_active.png";
import BusinessDirectoryInActive from "../assets/icons/Business_Directory_inactive.png";
import BusinessDirectoryMobile from "../assets/icons/Business_Directory_mobile.png";

import MessagesIcon from "../assets/icons/messages.png";
import NotificationIcon from "../assets/icons/notification2.png";
import SupportIcon from "../assets/icons/customer_service.png";

export const clientNavItems = [
  {
    label: "Dashboard",
    href: "/customer/dashboard",
  },
  {
    label: "Jobs & Services",
    href: "/customer/jobs&services",
  },
];

export const ClientCardDashboardItems = [
  {
    jobs: 8,
    newJobs: 3,
    title: "Jobs & Services",
    subTitle: "New jobs and services this week",
    cardImg: Images.jobs,
  },
  {
    jobs: 10,
    newJobs: 2,
    title: "My applications",
    subTitle: "Jobs applied this week",
    cardImg: Images.applications,
  },
];

export const JobsAndServicesData = [
  {
    image: Images.product,
    header: "Laptops",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: "$150",
  },
  {
    image: Images.product,
    header: "Laptops",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: "$150",
  },
  {
    image: Images.product,
    header: "Laptops",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: "$150",
  },
  {
    image: Images.product,
    header: "Laptops",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: "$150",
  },
  {
    image: Images.product,
    header: "Laptops",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: "$150",
  },
  {
    image: Images.product,
    header: "Laptops",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: "$150",
  },
  {
    image: Images.product,
    header: "Laptops",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: "$150",
  },
];

export const sidemenuIcons = [
  // {
  //   route: "",
  //   activeIcon: HomeActive,
  //   inactiveIcon: HomeInactive,
  //   label: "Home",
  // },
  {
    route: "/connections",
    activeIcon: ConnectionsActive,
    inactiveIcon: ConnectionsInActive,
    mobileIcon: ConnectionsMobile,
    label: "Connections",
  },
  {
    route: "/communities",
    activeIcon: CommunitiesActive,
    inactiveIcon: CommunitiesInActive,
    mobileIcon: CommunitiesMobile,
    label: "communities",
  },
  {
    route: "/marketplace",
    activeIcon: MarketPlaceActive,
    inactiveIcon: MarketPlaceInActive,
    mobileIcon: MarketPlaceMobile,
    label: "Marketplace",
  },
  {
    route: "/events",
    activeIcon: EventsActive,
    inactiveIcon: EventsInActive,
    mobileIcon: EventsMobile,
    label: "Events",
  },
  {
    route: "/resource-center",
    activeIcon: ResourceCenterActive,
    inactiveIcon: ResourceCenterInActive,
    mobileIcon: ResourceCenterMobile,
    label: "Resource Center",
  },
  {
    route: "/business-directory",
    activeIcon: BusinessDirectoryActive,
    inactiveIcon: BusinessDirectoryInActive,
    mobileIcon: BusinessDirectoryMobile,
    label: "Business Directory",
  },
];

export const profileMenuNavigation = [
  {
    label: "Notification",
    icon: NotificationIcon,
    href: "/notifications",
  },
  {
    label: "Messages",
    icon: MessagesIcon,
    href: "/messages",
  },
  {
    label: "Support",
    icon: SupportIcon,
    href: "/resource-center",
  },
];

export const categoryCards = [
  {
    title: "Restaurant",
    image: Images.restaurant,
  },
  {
    title: "Beauty & Spa",
    image: Images.spa,
  },
  {
    title: "Home Service",
    image: Images.homeService,
  },
  {
    title: "Automotive",
    image: Images.automotive,
  },
];

export const recentReviews = [
  {
    nameAvatar: "P",
    name: "Paul Smith",
    time: "10 mins ago",
    image: Images.rev1,
    title: "A Beauty Service",
    description: "A wigs and pedicure",
    stars: [Images.star, Images.star, Images.star],
    review: "I requested for a home service and it was amazing ",
  },
  {
    nameAvatar: "A",
    name: "Ama Black",
    time: "6 mins ago",
    image: Images.rev2,
    title: "Maama D Food Services",
    description: "All kinds of Foods",
    stars: [Images.star, Images.star],
    review:
      "We've been here many times and the quality of the food is always amazing! Highly recommend the sour cabbage and fish dish",
  },
  {
    nameAvatar: "K",
    name: "Kofi Menu",
    time: "10 mins ago",
    image: Images.rev3,
    title: "Titi Decor and More",
    description: "wedding , funeral ",
    stars: [Images.star, Images.star, Images.star, Images.star],
    review:
      "So happy I discovered this store, as I ended up finding my dream dress within my budget! I didn't even think I would have a this is the one moment...but I did, and it felt so ",
  },
  {
    nameAvatar: "M",
    name: "Mat Look",
    time: "10 mins ago",
    image: Images.rev4,
    title: "CVS Pharmacy",
    description: "Medicinal purposes",
    stars: [Images.star],
    review:
      "Great prices on beer and wonderful selections. Lagunitas, Pacifico, corona, Modelo, truly, white claw, coors, Miller high life, Pabst blue ribbon, Heineken, blue moon and more",
  },
];
