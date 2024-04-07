"use client";
import * as React from "react";
import FeedCard from "@/components/mine/feed-card";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ChevronDown, FileText, Plus } from "lucide-react";
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

import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

import {
    Collapsible,
    CollapsibleContent,
    CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { off } from "process";

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
};

export default function Home() {
    const [trocas, setTrocas] = React.useState<Troca[]>([]);
    const [contraPropostas, setContraPropostas] = React.useState<
        {
            id: string;
            num: number;
        }[]
    >([]);
    React.useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(`http://localhost:7777/trocas`, {
                method: "GET",
            });
            const data = await response.json();
            setTrocas(data);

            const conProps: {
                id: string;
                num: number;
            }[] = [];

            data.map(async (tr: Troca) => {
                conProps.push({
                    id: tr.id,
                    num: await getContraPropostasById(tr.id),
                });
            });

            setContraPropostas(conProps);
            console.log(conProps);
        };
        fetchData();
    }, []);
    const [offer_title, setOfferTitle] = React.useState("");
    const [offer_description, setOfferDescription] = React.useState("");
    const [ask_title, setAskTitle] = React.useState("");
    const [ask_description, setAskDescription] = React.useState("");

    const handleCreate = async () => {
        const response = await fetch(`http://localhost:7777/trocas/`, {
            method: "POST",
            body: JSON.stringify({
                id: trocas.length + 1,
                user: "shadcn",
                data: "2021-10-10",
                hora: "10:10",
                offer_tome: ask_title,
                offer_toyou: offer_title,
                description_offer: offer_description,
                description_receive: ask_description,
                title: offer_title,
                description: offer_description,
                type: ["Service", "Service"],
                status: "Ongoing",
            }),
        });

        const data = await response.json();
        console.log(data);
    };

    const getContraPropostasById = async (id: string) => {
        const response = await fetch(
            `http://localhost:7777/contra_proposta?id_counter_offer=${id}`,
            {
                method: "GET",
            }
        );
        const data = await response.json();

        return data.length;
    };

    return (
        <>
            <div className="flex flex-row items-center justify-between w-[800px] self-center mb-2 align-baseline">
                <Link href="/">
                    {" "}
                    <h1 className="text-2xl font-medium	my-2">Feed</h1>
                </Link>

                <div className="flex flex-row gap-2">
                    {" "}
                    <Link href="/my-proposals">
                        <Button variant="outline">
                            My Proposals{" "}
                            <FileText
                                size={14}
                                strokeWidth={2.5}
                                className="ml-1"
                            />
                        </Button>
                    </Link>
                    <Dialog>
                        <DialogTrigger asChild>
                            <Button variant="default">
                                Create{" "}
                                <Plus
                                    size={14}
                                    strokeWidth={2.5}
                                    className="ml-1"
                                />
                            </Button>
                        </DialogTrigger>
                        <DialogContent>
                            <DialogHeader>
                                <DialogTitle>Create New Proposal</DialogTitle>
                            </DialogHeader>

                            <div>
                                <div className="flex flex-col gap-3">
                                    <p>
                                        What service or product are you looking
                                        for?
                                    </p>
                                    <Label className="ml-1">Title</Label>
                                    <Input
                                        placeholder="Title"
                                        onChange={(e) =>
                                            setOfferTitle(e.target.value)
                                        }
                                    />
                                    <Label className="ml-1">Description</Label>
                                    <Textarea
                                        placeholder="Description"
                                        onChange={(e) =>
                                            setOfferDescription(e.target.value)
                                        }
                                    />
                                </div>
                            </div>

                            <Collapsible>
                                <CollapsibleTrigger className="flex flex-row justify-between w-full">
                                    Do you want to offer a service or a product?{" "}
                                    <ChevronDown
                                        size={14}
                                        strokeWidth={2.5}
                                        className="self-center mr-2"
                                    />
                                </CollapsibleTrigger>
                                <CollapsibleContent>
                                    <div className="bg-background">
                                        <div className="flex flex-col gap-3 mt-3">
                                            <Label className="ml-1">
                                                Title
                                            </Label>
                                            <Input
                                                placeholder="Title"
                                                onChange={(e) =>
                                                    setAskTitle(e.target.value)
                                                }
                                            />
                                            <Label className="ml-1">
                                                Description
                                            </Label>
                                            <Textarea
                                                placeholder="Description"
                                                onChange={(e) =>
                                                    setAskDescription(
                                                        e.target.value
                                                    )
                                                }
                                            />
                                        </div>
                                    </div>
                                </CollapsibleContent>
                            </Collapsible>
                            <DialogFooter>
                                <DialogClose>
                                    {" "}
                                    <Button variant="outline">Cancel</Button>
                                </DialogClose>
                                <DialogClose>
                                    <Button
                                        variant="default"
                                        onClick={handleCreate}
                                    >
                                        Create
                                    </Button>
                                </DialogClose>
                            </DialogFooter>
                        </DialogContent>
                    </Dialog>
                </div>
            </div>

            <Separator orientation="horizontal" />

            <div className="flex flex-col items-center justify-between w-full">
                {trocas.map((tr, index) => (
                    <Link key={index} href={`/proposals/${tr.id}`}>
                        <FeedCard
                            key={index}
                            id={tr.id}
                            user={tr.user}
                            data={tr.data}
                            hora={tr.hora}
                            offer_tome={tr.offer_tome}
                            offer_toyou={tr.offer_toyou}
                            description_offer={tr.description_offer}
                            description_receive={tr.description_receive}
                            status={tr.status}
                            type={tr.type}
                            numContraPropostas={
                                contraPropostas.filter(
                                    (obj) => obj.id === tr.id
                                )[0]?.num || 0
                            }
                        />
                    </Link>
                ))}
            </div>
        </>
    );
}
