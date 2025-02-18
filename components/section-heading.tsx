interface SectionHeadingProps {
    name: string;
}

const SectionHeading = ({ name }: SectionHeadingProps) => {
    return (
        <h2 className="text-3xl font-medium capitalize mb-8">
            {name}
        </h2>
    )
}

export default SectionHeading;