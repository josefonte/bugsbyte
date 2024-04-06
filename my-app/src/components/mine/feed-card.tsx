import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import { Badge } from "@/components/ui/badge";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const mockData = [];

export default function FeedCard() {
    return (
        <Card className="w-[800px] my-5 flex flex-col hover:cursor-pointer group hover:border-primary/20 hover:shadow-md backdrop-blur-sm">
            <CardHeader>
                <div className="flex flex-row">
                    <Avatar>
                        <AvatarImage src="https://github.com/shadcn.png" />
                        <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                    <div className=" flex flex-col mx-2">
                        <div> Nome do User</div>
                        <div className=" text-xs text-gray-500   ">
                            {" "}
                            12/03/2022
                        </div>
                    </div>
                </div>
            </CardHeader>

            <div className="flex flex-row">
                <div className="flex flex-col p-3 mx-5 basis-1/2 rounded-md border-solid border-[0.5px] border-green-300">
                    <div className="flex flex-row gap-2 mb-2 ">
                        <CardTitle className="text-xl">Offer</CardTitle>
                        <Badge variant="default" className="w-fit">
                            Service
                        </Badge>
                    </div>

                    <p>Titulo da Oferta</p>

                    <CardDescription>
                        Offer Description ahsbdhasbdhb dsajbdhasbdhbas
                        nsadbasjbdb
                    </CardDescription>
                </div>
                <div className="flex flex-col p-3 mx-5 basis-1/2 rounded-md border-solid border-[1px] border-orange-300">
                    <div className="flex flex-row gap-2 mb-2">
                        <CardTitle className="text-xl">Ask</CardTitle>
                        <Badge variant="default" className="w-fit">
                            Service
                        </Badge>
                    </div>

                    <p>Titulo da Oferta</p>

                    <CardDescription>
                        Offer Description ahsbdhasbdhb dsajbdhasbdhbas
                        nsadbasjbdb
                    </CardDescription>
                </div>
            </div>

            <CardFooter className="mt-4 flex flex-row justify-between pb-3">
                <div>X Counter Offers</div>
                <div className="group relative inline-flex h-8 w-10 items-center justify-center overflow-hidden font-medium text-primary transition-all duration-800 group-hover:w-32">
                    <div className="inline-flex whitespace-nowrap opacity-0 transition-all duration-800 group-hover:opacity-100">
                        <span className="flex flex-row gap-1 items-center text-sm group-hover:underline">
                            View More
                        </span>
                    </div>
                    <div className="absolute right-0 bg-background">
                        <ArrowRight className="w-4 h-4" />
                    </div>
                </div>
            </CardFooter>
        </Card>
    );
}
