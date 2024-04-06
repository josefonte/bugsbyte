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
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

import {
    Collapsible,
    CollapsibleContent,
    CollapsibleTrigger,
} from "@/components/ui/collapsible";

export default function Home() {
    const [typeOffer, setTypeOffer] = React.useState("");

    return (
        <>
            <div className="flex flex-row items-center justify-between w-[800px] self-center mb-2 align-baseline">
                <h1 className="text-2xl font-medium	my-2">Feed</h1>
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
                                            <Label className="ml-1">
                                                Title
                                            </Label>
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
                </div>
            </div>

            <Separator orientation="horizontal" />

            <div className="flex flex-col items-center justify-between w-full">
                {[1, 2, 3, 4, 5].map((_, index) => (
                    <Link href={`/proposals/:${index}`}>
                        <FeedCard key={index} />
                    </Link>
                ))}
            </div>
        </>
    );
}
