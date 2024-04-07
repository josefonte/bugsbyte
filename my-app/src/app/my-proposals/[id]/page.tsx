"use client";

import CounterPropCard from "@/components/mine/counter-prop-card";
import ProposalCard from "@/components/mine/proposal-card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import { Home } from "lucide-react";
import CounterPropCardEdit from "@/components/mine/counter-prop-card-edit";
import React, { use } from "react";
import { Troca } from "@/app/my-proposals/page";
import { useParams } from "next/navigation";
import FeedCard from "@/components/mine/feed-card";

import { CounterPropCardProps } from "@/components/mine/counter-prop-card-edit";

export default function Page() {
    const [offer, setOffer] = React.useState<Troca | undefined>(undefined);

    const [counterProposals, setCounterProposals] = React.useState<
        CounterPropCardProps[]
    >([]);
    const [loading, setLoading] = React.useState(true);
    const { id } = useParams();

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
                <h1 className="text-2xl font-medium	my-2"> Proposal Aproval</h1>
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
                    {counterProposals.map((tr, index) => (
                        <CounterPropCardEdit
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
