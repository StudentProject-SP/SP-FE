import { cn, parse } from "@/shared/utils";
import { TEXT } from "@/widgets/home/model";

export default function OpinionUnit({
  reversed,
  index,
}: {
  reversed: boolean;
  index: number;
}) {
  if (reversed) {
    return (
      <div className="flex h-fit w-full gap-x-2">
        <div className="h-38 flex w-full justify-end">
          <OpinionBox reversed={reversed}>
            <div>{parse(TEXT.OPINION[index - 1])}</div>
          </OpinionBox>
        </div>
        <Icon index={index} />
      </div>
    );
  }
  return (
    <div className="flex h-fit w-full gap-x-2">
      <Icon index={index} />
      <div className="h-38 flex w-full justify-start">
        <OpinionBox>
          <div>{parse(TEXT.OPINION[index - 1])}</div>
        </OpinionBox>
      </div>
    </div>
  );
}

function Icon({ index }: { index: number }) {
  return (
    <div
      className="size-38 flex-shrink-0 rounded-[50%] bg-cover bg-center"
      style={{ backgroundImage: `url(/images/people-${index}.png)` }}
    />
  );
}

function OpinionBox({
  children,
  reversed = false,
}: {
  children: React.ReactNode;
  reversed?: boolean;
}) {
  return (
    <div
      className={cn(
        reversed ? "talkboxLeft" : "talkboxRight",
        "border-border boxShadow px-18 flex items-center justify-center border-[1px] p-4",
      )}
    >
      {children}
    </div>
  );
}
