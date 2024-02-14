import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

export function AccordionDemo() {
  return (
    <Accordion type="single" collapsible className="w-full p-8 ">
      <AccordionItem value="item-1">
        <AccordionTrigger>
          <p className="text-[15px] md:text-[24px] text-[#445159]">
            01. What is matchmaking?
          </p>
        </AccordionTrigger>
        <AccordionContent>
          Meeting two busy individuals with same ideas by a team of
          professionals. Usually the purpose of this meet up is a marriage. The
          site’ supports to find your soulmate.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>
          <p className="text-[15px] md:text-[24px] text-[#445159]">
            02. How will I be matched?
          </p>
        </AccordionTrigger>
        <AccordionContent>
          Our professional team will select matches for you based on the initial
          details you combined with. After every date you can send us the
          feedback. Your feedback is really important us to find you more
          matches.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>
          <p className="text-[15px] md:text-[24px] text-[#445159]">
            03. How to register on the site?
          </p>
        </AccordionTrigger>
        <AccordionContent>
          Register matrimony profile and fill the card by providing necessary
          details.
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="item-4">
        <AccordionTrigger>
          <p className="text-[15px] md:text-[24px] text-[#445159]">
            04. How can I trust the site?
          </p>
        </AccordionTrigger>
        <AccordionContent>
          As a responsible team we prioritize your safety first. You have the
          access to control who can see your details.
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="item-5">
        <AccordionTrigger>
          <p className="text-[15px] md:text-[24px] text-left text-[#445159]">
            05. What is the site membership including?
          </p>
        </AccordionTrigger>
        <AccordionContent>
          Our memberships include guaranteed matches, personalized attention
          from your matchmaking team, and a selection of other signature
          services. We will be with you every step of the way, learning about
          what you want and need in a relationship, using this information to
          find your most like-minded matches, incorporating your feedback, and
          helping you evaluate your dates. Please call us the contact no. to
          determine what membership package is right for you.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}

export default AccordionDemo;
