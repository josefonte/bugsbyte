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
                <h1 className="text-2xl font-medium	my-2"> Proposal Page</h1>
            </div>

            <Separator orientation="horizontal" />
            <div className="flex flex-col items-center justify-between w-full">
                <ProposalCard />
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
                                <p>
                                    What service or product are you looking for?
                                </p>
                                <Label className="ml-1">Title</Label>
                                <Input placeholder="Title" />
                                <Label className="ml-1">Description</Label>
                                <Textarea placeholder="Description" />
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
                                        <Label className="ml-1">Title</Label>
                                        <Input placeholder="Title" />
                                        <Label className="ml-1">
                                            Description
                                        </Label>
                                        <Textarea placeholder="Description" />
                                    </div>
                                </div>
                            </CollapsibleContent>
                        </Collapsible>
                        <DialogFooter>
                            <DialogClose>
                                {" "}
                                <Button variant="outline">Cancel</Button>
                            </DialogClose>
                            <Button variant="default">Create</Button>
                        </DialogFooter>
                    </DialogContent>
                </Dialog>

                {[1, 2, 3, 4, 5].map((_, index) => (
                    <CounterPropCard key={index} />
                ))}
            </div>
        </>
    );
}
