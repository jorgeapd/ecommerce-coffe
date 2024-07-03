import { Skeleton } from "@/components/ui/skeleton";

const SkeletonProduct = () => {
    return ( 
        <div className="grid sm:grid-cols-3 sm:py-16">
            <Skeleton className="h-[200px] w-[350px] rounded-xl"/>
            <div>
            <Skeleton className="h-4 w-[250px] "/>
            <Skeleton className="h-4 w-[200px] "/>
            <Skeleton className="h-4 w-[200px] "/>
            <Skeleton className="h-4 w-[200px] "/>
            </div>
        </div>
     );
}
 
export default SkeletonProduct;