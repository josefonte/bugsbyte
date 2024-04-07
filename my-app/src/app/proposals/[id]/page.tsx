"use client";

import CounterPropCard from "@/components/mine/counter-prop-card";
import ProposalCard from "@/components/mine/proposal-card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import { Home } from "lucide-react";

import { ChevronDown, Plus } from "lucide-react";
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
import React from "react";
import { Troca } from "@/app/my-proposals/page";
import { CounterPropCardProps } from "@/components/mine/counter-prop-card-edit";
import { useParams } from "next/navigation";

export default function Page() {
    const [offer, setOffer] = React.useState<Troca | undefined>(undefined);
    const [counterProposals, setCounterProposals] = React.useState<
        CounterPropCardProps[]
    >([]);
    const [loading, setLoading] = React.useState(true);
    const { id } = useParams();

    const [title, setTitle] = React.useState("");
    const [description, setDescription] = React.useState("");
    React.useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            const response = await fetch(
                `http://localhost:7777/trocas?id=${id}`,
                {
                    method: "GET",
                }
            );
            const data = await response.json();

            setOffer(data[0]);

            const responseCounter = await fetch(
                `http://localhost:7777/contra_proposta?id_counter_offer=${id}`,
                {
                    method: "GET",
                    cache: "no-store",
                }
            );
            const dataCounter = await responseCounter.json();
            setCounterProposals(dataCounter);
            setLoading(false);
        };
        fetchData();
    }, []);

    const handleCreateCounter = async () => {
        console.log(title, description);
        /*
        const response = await fetch(`http://localhost:7777/contra_proposta`, {
            method: "POST",
            body: JSON.stringify(),
        });

        const data = await response.json();*/
    };

    return (
        <>
            <div className="flex flex-row justify-between w-[800px] self-center h-fit">
                {" "}
                <Link href="/">
                    <Button variant="default">
                        {" "}
                        <Home size={14} className="mr-1" /> Home{" "}
                    </Button>
                </Link>
                <Separator orientation="vertical" />
                <h1 className="text-2xl font-medium	my-2"> Proposal Page</h1>
            </div>

            <Separator orientation="horizontal" />
            {!loading && offer && counterProposals && (
                <div className="flex flex-col items-center justify-between w-full">
                    <ProposalCard
                        id={offer.id}
                        user={offer.user}
                        data={offer.data}
                        hora={offer.hora}
                        offer_tome={offer.offer_tome}
                        offer_toyou={offer.offer_toyou}
                        description_offer={offer.description_offer}
                        description_receive={offer.description_receive}
                        status={offer.status}
                        type={offer.type}
                    />
                    <Dialog>
                        <DialogTrigger asChild>
                            <Button variant="default">
                                New Counter Proposal
                                <Plus
                                    size={14}
                                    strokeWidth={2.5}
                                    className="ml-1"
                                />
                            </Button>
                        </DialogTrigger>
                        <DialogContent>
                            <DialogHeader>
                                <DialogTitle>
                                    Create New Counter Proposal
                                </DialogTitle>
                            </DialogHeader>

                            <div>
                                <div className="flex flex-col gap-3">
                                    <p>What service or product do you offer?</p>
                                    <Label className="ml-1">Title</Label>
                                    <Input
                                        placeholder="Title"
                                        onChange={(e) =>
                                            setTitle(e.target.value)
                                        }
                                    />
                                    <Label className="ml-1">Description</Label>
                                    <Textarea
                                        placeholder="Description"
                                        onChange={(e) =>
                                            setDescription(e.target.value)
                                        }
                                    />
                                </div>
                            </div>

                            <DialogFooter>
                                <DialogClose>
                                    {" "}
                                    <Button variant="outline">Cancel</Button>
                                </DialogClose>
                                <Button
                                    variant="default"
                                    onClick={handleCreateCounter}
                                >
                                    Create
                                </Button>
                            </DialogFooter>
                        </DialogContent>
                    </Dialog>

                    {counterProposals.map((tr, index) => (
                        <CounterPropCard
                            key={index}
                            id={tr.id}
                            user={tr.user}
                            data={tr.data}
                            hora={tr.hora}
                            offer={tr.offer}
                            description_offer={tr.description_offer}
                            status={tr.status}
                            type={tr.type}
                            id_counter_offer={tr.id_counter_offer}
                        />
                    ))}
                </div>
            )}
        </>
    );
}
