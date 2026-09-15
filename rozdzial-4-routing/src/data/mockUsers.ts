import { User } from "../types/User";

export const MOCK_USERS: User[] = [
  {
    id: "1",
    name: "Alex Rivera",
    role: "Frontend Developer",
    avatarUrl: "https://robohash.org/alex",
    likesPizza: true,
  },
  {
    id: "2",
    name: "Sam Chen",
    role: "UI/UX Designer",
    avatarUrl: "https://robohash.org/sam",
    likesPizza: true,
  },
  {
    id: "3",
    name: "Jordan Taylor",
    role: "Backend Engineer",
    avatarUrl: "https://robohash.org/jordan",
    likesPizza: false,
  },
  {
    id: "4",
    name: "Samuel Pierce",
    role: "Technical Recruiter",
    avatarUrl: "https://robohash.org/4",
    likesPizza: false,
  },
  {
    id: "5",
    name: "Clara Bennett",
    role: "Product Manager",
    avatarUrl: "https://robohash.org/5",
    likesPizza: true,
  },
  {
    id: "6",
    name: "Thomas Richter",
    role: "Systems Administrator",
    avatarUrl: "https://robohash.org/6",
    likesPizza: false,
  },
  {
    id: "7",
    name: "Maya Fischer",
    role: "IT Support Specialist",
    avatarUrl: "https://robohash.org/7",
    likesPizza: true,
  },
];

export function getUser(id: string): User | null {
    return MOCK_USERS.find((user) => user.id == id) ?? null;
}