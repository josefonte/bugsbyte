"use client";
import * as React from "react";

import { useParams, useRouter } from "next/navigation";

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
import { ArrowRight, Check, X } from "lucide-react";
import Link from "next/link";
import { Button } from "../ui/button";
import { Troca } from "@/app/my-proposals/page";
import { CounterPropCardProps } from "@/components/mine/counter-prop-card-edit";
export default function CounterPropCard(data: CounterPropCardProps) {
    return (
        <Card className="w-[600px] my-5 flex flex-col   ">
            <CardHeader className="flex flex-row justify-between">
                <div className="flex flex-row">
                    <Avatar>
                        <AvatarImage src="https://github.com/shadcn.png" />
                        <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                    <div className=" flex flex-col mx-2">
                        <div> {data.user}</div>
                        <div className=" text-xs text-gray-500 ">
                            {" "}
                            {data.data} - {data.hora}
                        </div>
                    </div>
                </div>
                <Badge
                    variant={
                        data.status === "Accepted" || data.status === "Pending"
                            ? "default"
                            : "destructive"
                    }
                    className={`w-fit h-fit ${
                        data.status === "Accepted" ? "bg-green-400" : ""
                    }
                    
                    ${data.status === "Pending" ? "bg-yellow-400" : ""}
                    
                   `}
                >
                    {data.status}
                </Badge>
            </CardHeader>

            <div className="flex flex-row">
                <div className="flex flex-col p-3 mx-5 w-full rounded-md border-solid border-[0.5px] border-gray-300">
                    <div className="flex flex-row gap-2 mb-2 ">
                        <CardTitle className="text-xl">Offer</CardTitle>
                        <Badge variant="default" className="w-fit h-fit">
                            {data.type}
                        </Badge>
                    </div>

                    <p> {data.offer}</p>

                    <CardDescription>{data.description_offer}</CardDescription>
                </div>
            </div>

            <CardFooter />
        </Card>
    );
}
