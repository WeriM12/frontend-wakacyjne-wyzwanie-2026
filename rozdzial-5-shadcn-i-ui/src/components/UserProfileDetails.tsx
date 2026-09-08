import { User } from "@/src/types/User";
import Image from "next/image";
import PizzaIcon from "@/src/components/PizzaIcon";
import { 
  Card,   
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle, } from "./ui/card";
  import { Badge } from "./ui/badge";
  import { cn } from "@/lib/utils";


interface UserProfileDetailsProps {
  user: User;
}

export function UserProfileDetails({ user }: UserProfileDetailsProps) {
  const { name, role, likesPizza, avatarUrl, description } = user;

  return (
    <Card className="@container p-0">
      <CardHeader className="relative w-full h-32 @lg:h-48 rounded-inherit">
        <div className="absolute inset-0 z-1 bg-blue-300" />

        <div className={cn("rounded-full size-16 @lg:size-24 absolute z-2 bottom-0 left-4 translate-y-1/2 border overflow-hidden shadow-md bg-background")}>
          <Image src={avatarUrl} alt="avatar" className="w-full h-full object-cover" fill loading="eager" />
        </div>
      </CardHeader>

      <CardContent className="py-8">
        


        <div className="flex items-center justify-between py-2">
          <div>
            <CardTitle>{name}</CardTitle>
            <CardDescription>{role}</CardDescription>
          </div>

          {likesPizza && <Badge className="size-fit bg-transparent p-0"> <PizzaIcon /> </Badge>}
        </div>

        <CardDescription className="w-full @sm:w-1/2">{description}</CardDescription>
      </CardContent>
    </Card>
  )
}