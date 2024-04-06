"use client";
import FeedCard from "@/components/mine/feed-card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Home } from "lucide-react";
import Link from "next/link";
import React from "react";

const user = "José Fonte";

export type Troca = {
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

export default function Page() {
    const [trocas, setTrocas] = React.useState<Troca[]>([]);
    const [contraPropostas, setContraPropostas] = React.useState<
        {
            id: string;
            num: number;
        }[]
    >([]);

    React.useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(
                `http://localhost:7777/trocas?user=${user}`,
                {
                    method: "GET",
                }
            );
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
        };
        fetchData();
    }, []);

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
            <div className="flex flex-row justify-between w-[800px] self-center">
                {" "}
                <Link href="/">
                    <Button variant="default">
                        {" "}
                        <Home size={14} className="mr-1" /> Home{" "}
                    </Button>
                </Link>
                <h1 className="text-2xl font-medium	my-2">My Proposals</h1>
            </div>

            <Separator orientation="horizontal" />
            <div className="flex flex-col items-center justify-between w-full">
                {trocas.map((tr, index) => (
                    <Link href={`/my-proposals/${tr.id}`}>
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
