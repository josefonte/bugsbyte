"use client";

import React from "react";

import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import { Badge } from "@/components/ui/badge";

import { Troca } from "@/app/my-proposals/page";

export default function ProposalCard(data: Troca) {
    return (
        <Card className="w-[800px] my-5 flex flex-col  ">
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

            <CardFooter />
        </Card>
    );
}
