import { Wrapper } from "../../index.styled";
import Loader from "../../../../components/Loader";

interface SkeletonProps {
    height: number | null;
}

const Skeleton = ({ height }: SkeletonProps) => {
    return (
        <Wrapper height={height}>
            <Loader />
        </Wrapper>
    )
}

export default Skeleton;