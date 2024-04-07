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
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Check, X } from "lucide-react";
import Link from "next/link";
import { Button } from "../ui/button";
import { Troca } from "@/app/my-proposals/page";
import { useRouter } from "next/navigation";
import { NextResponse } from "next/server";

export type CounterPropCardProps = {
    id: number;
    user: string;
    data: string;
    hora: string;
    status: "Accepted" | "Pending" | "Refused";
    type: string;
    offer: string;
    description_offer: string;
    id_counter_offer: number;
};

type userInfo = {
    id: string;
    nome: string;
    email: string;
    telemovel?: string;
};

export default function CounterPropCard(data: CounterPropCardProps) {
    const router = useRouter();
    const [userInfo, setUserInfo] = React.useState<userInfo | undefined>(
        undefined
    );
    const handleAccept = async () => {
        const response = await fetch(
            `http://localhost:7777/contra_proposta/${data.id}`,
            {
                method: "PATCH",
                body: JSON.stringify({ status: "Accepted" }),
            }
        );

        const responseProp = await fetch(
            `http://localhost:7777/trocas/${data.id_counter_offer}`,
            {
                method: "PATCH",
                body: JSON.stringify({ status: "Completed" }),
            }
        );
        console.log(responseProp);
        router.refresh();
    };
    const handleRefuse = async () => {
        const response = await fetch(
            `http://localhost:7777/contra_proposta/${data.id}`,
            {
                method: "PATCH",
                body: JSON.stringify({ status: "Refused" }),
            }
        );

        router.refresh();
    };
    const getUserInfo = async () => {
        const response = await fetch(
            `http://localhost:7777/users?nome=${data.user}`,
            {
                method: "get",
            }
        );
        console.log(response);
        const user = await response.json();

        setUserInfo(user[0]);
        router.refresh();
    };

    return (
        <Card className="w-[600px] my-5 flex flex-col">
            <CardHeader className="flex flex-row justify-between">
                <div className="flex flex-row">
                    <Dialog>
                        <DialogTrigger>
                            <Avatar onClick={getUserInfo}>
                                <AvatarImage src="https://github.com/shadcn.png" />
                                <AvatarFallback>CN</AvatarFallback>
                            </Avatar>
                        </DialogTrigger>
                        <DialogContent>
                            <DialogHeader>
                                <DialogTitle>Contact</DialogTitle>
                                <DialogDescription>
                                    Nome : {userInfo?.nome}
                                    <br />
                                    Email: {userInfo?.email}
                                    <br />
                                    Telemóvel :{" "}
                                    {userInfo?.telemovel
                                        ? userInfo.telemovel
                                        : "Não disponível"}
                                </DialogDescription>
                            </DialogHeader>
                        </DialogContent>
                    </Dialog>
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

            <CardFooter className="mt-4 flex flex-row justify-end  ">
                <Button
                    variant="outline"
                    size="icon"
                    className="mr-3"
                    onClick={handleRefuse}
                >
                    <X className="h-4 w-4" />
                </Button>
                <Button variant="outline" size="icon" onClick={handleAccept}>
                    <Check className="h-4 w-4" />
                </Button>
            </CardFooter>
        </Card>
    );
}
