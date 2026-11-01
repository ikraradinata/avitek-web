"use client";

import { useTranslations } from "next-intl";
import { useState } from "react";

const MORE_ROWS_ID = "agenda-more";

export function AgendaToggle({
  firstRows,
  moreRows,
}: Readonly<{
  firstRows: React.ReactNode;
  moreRows: React.ReactNode;
}>) {
  const t = useTranslations("agenda");
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="border-t border-mist">
        {firstRows}
        <div id={MORE_ROWS_ID} hidden={!open}>
          {moreRows}
        </div>
      </div>
      <button
        type="button"
        aria-expanded={open}
        aria-controls={MORE_ROWS_ID}
        onClick={() => setOpen(!open)}
        className="mt-4 cursor-pointer py-2 font-bold text-navy underline decoration-orange decoration-2 underline-offset-[5px]"
      >
        {t(open ? "hideAll" : "showAll")}
      </button>
    </>
  );
}
