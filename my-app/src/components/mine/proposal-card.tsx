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
import { Separator } from "@/components/ui/separator";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import { Badge } from "@/components/ui/badge";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const mockData = [];

export default function ProposalCard() {
    const [status, setStatus] = React.useState("CONFIRMED");
    return (
        <Card className="w-[800px] my-5 flex flex-col  ">
            <CardHeader className="flex flex-row justify-between">
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
                <Badge
                    variant={
                        status === "PENDING" || status === "CONFIRMED"
                            ? "default"
                            : "destructive"
                    }
                    className={`w-fit h-fit ${
                        status === "CONFIRMED" ? "bg-green-400" : ""
                    }
                    
                    ${status === "PENDING" ? "bg-yellow-400" : ""}
                    
                   `}
                >
                    Closed
                </Badge>
            </CardHeader>

            <div className="flex flex-row">
                <div className="flex flex-col p-3 mx-5 basis-1/2 rounded-md border-solid border-[0.5px] border-green-300">
                    <div className="flex flex-row gap-2 mb-2 ">
                        <CardTitle className="text-xl">Offer</CardTitle>
                        <Badge variant="default" className="w-fit h-fit">
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
                        <Badge variant="default" className="w-fit h-fit">
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
            
            <CardFooter />
        </Card>
    );
}
