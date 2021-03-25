import Section, {
  SectionContent,
  SectionTitle,
  SectionText,
} from "@/ui/Section";

export type OverOnsProps = {
  overOns: string;
};

const OverOns = ({ overOns }: OverOnsProps) => {
  return (
    <Section>
      <SectionTitle>Over ons</SectionTitle>
      <SectionContent>
        <SectionText>{overOns}</SectionText>
      </SectionContent>
    </Section>
  );
};

export default OverOns;
