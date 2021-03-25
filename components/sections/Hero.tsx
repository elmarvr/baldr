import "twin.macro";
import Section, { SectionContent } from "@/ui/Section";
import Button from "@/ui/Button";
import { getMediaUrl } from "@/lib/api";

export type HeroProps = {
  omslagFoto: {
    url: string;
  };
  omslagTekst: string;
};

const Hero = ({ omslagFoto, omslagTekst }: HeroProps) => {
  const backgroundUrl = getMediaUrl(omslagFoto);

  return (
    <Section
      tw="bg-center bg-cover bg-red-900 bg-opacity-60"
      css={{
        backgroundBlendMode: "multiply",
        height: "700px",
        backgroundImage: `url(${backgroundUrl})`,
      }}
    >
      <SectionContent tw="justify-center">
        <div tw="text-white flex flex-col items-center">
          <h1 tw="text-7xl font-display tracking-wide mb-4 uppercase text-center">
            Dispuut Baldr
          </h1>
          <p tw="text-center text-xl mb-16 max-w-lg">{omslagTekst}</p>
          <div tw="flex flex-col space-y-6 sm:(flex-row space-x-8 space-y-0)">
            <Button>Borrelen?</Button>
            <Button variant="secondary">Leden</Button>
          </div>
        </div>
      </SectionContent>
    </Section>
  );
};

export default Hero;
