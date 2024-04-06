import CounterPropCard from "@/components/mine/counter-prop-card";
import ProposalCard from "@/components/mine/proposal-card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import { Home } from "lucide-react";
import CounterPropCardEdit from "@/components/mine/counter-prop-card-edit";


// EDITADO POR JOTAALVIM

export default function Page() {
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
                <h1 className="text-2xl font-medium	my-2"> Proposal Edit</h1>
            </div>

            <Separator orientation="horizontal" />

            <div className="flex flex-col items-center justify-between w-full">
                <ProposalCard />
                {[1, 2, 3, 4, 5].map((_, index) => (
                    <CounterPropCardEdit key={index} />
                ))}
            </div>
        </>
    );
}
