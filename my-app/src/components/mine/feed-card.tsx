"use client";
import * as React from "react";
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

type Troca = {
    id: string;
    user: string;
    data: string;
    hora: string;
    offer_tome: string | undefined;
    offer_toyou: string | undefined;
    description_offer: string;
    description_receive: string;
    status: "Ongoing" | "Completed";
    type: "service" | "product";
    numContraPropostas: number;
};

export default function FeedCard(data: Troca) {
    return (
        <Card className="w-[800px] my-5 flex flex-col hover:cursor-pointer group hover:border-primary/20 hover:shadow-md backdrop-blur-sm">
            <CardHeader className="flex flex-row justify-between">
                <div className="flex flex-row">
                    <Avatar>
                        <AvatarImage src="https://github.com/shadcn.png" />
                        <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                    <div className=" flex flex-col mx-2">
                        <div> {data.user}</div>
                        <div className=" text-xs text-gray-500   ">
                            {" "}
                            {data.data} - {data.hora}
                        </div>
                    </div>
                </div>
                <Badge
                    variant={
                        data.status === "Ongoing" || data.status === "Completed"
                            ? "default"
                            : "destructive"
                    }
                    className={`w-fit h-fit ${
                        data.status === "Completed" ? "bg-green-400" : ""
                    }
                    
                    ${data.status === "Ongoing" ? "bg-yellow-400" : ""}
                    
                   `}
                >
                    {data.status}
                </Badge>
            </CardHeader>

            <div className="flex flex-row">
                {data.offer_toyou && (
                    <div
                        className={`flex flex-col p-3 mx-5  rounded-md border-solid border-[0.5px] border-green-300 ${
                            data.offer_tome ? "basis-1/2" : "w-full"
                        } `}
                    >
                        <div className="flex flex-row gap-2 mb-2 ">
                            <CardTitle className="text-xl">Offer</CardTitle>
                            <Badge variant="default" className="w-fit h-fit">
                                {data.type[0]}
                            </Badge>
                        </div>

                        <p>{data.offer_toyou}</p>

                        <CardDescription>
                            {data.description_offer}
                        </CardDescription>
                    </div>
                )}
                {data.offer_tome && (
                    <div
                        className={`flex flex-col p-3 mx-5 rounded-md border-solid border-[1px] border-orange-300 ${
                            data.offer_toyou ? "basis-1/2" : "w-full"
                        } `}
                    >
                        <div className="flex flex-row gap-2 mb-2">
                            <CardTitle className="text-xl">Ask</CardTitle>
                            <Badge variant="default" className="w-fit h-fit">
                                {data.type[1]}
                            </Badge>
                        </div>

                        <p>{data.offer_tome}</p>

                        <CardDescription>
                            {data.description_receive}
                        </CardDescription>
                    </div>
                )}
            </div>

            <CardFooter className="mt-4 flex flex-row justify-between pb-3">
                <div>{data.numContraPropostas} Counter Offers</div>
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
