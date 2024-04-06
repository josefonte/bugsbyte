import FeedCard from "@/components/mine/feed-card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Home } from "lucide-react";
import Link from "next/link";
export default function Page() {
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
                {[1, 2, 3, 4, 5].map((_, index) => (
                    <Link href={`/my-proposals/:${index}`}>
                        <FeedCard key={index} />
                    </Link>
                ))}
            </div>
        </>
    );
}
