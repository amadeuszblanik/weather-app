import React, {useCallback, useRef} from "react";
import {NextPage} from "next";
import {Main} from "../src/app/layout";
import {useRefCurrent} from "../src/app/hook";

const Index: NextPage = () => {
  const ref = useRef<HTMLInputElement | null>(null);

  const handleSubmit = useCallback((event: React.MouseEvent) => {
    event.preventDefault();

    const current = useRefCurrent<HTMLInputElement>(ref);

    if (typeof location !== "object") {
      throw new Error("Location is not valid object");
    }

    if (!current) {
      return;
    }

    location.href = `city/${current.value}`;

  }, [ref])

  return (
    <Main>
      <form>
        <input ref={ref}/>
        <button onClick={handleSubmit}>
          Go
        </button>
      </form>
    </Main>
  );
};

export default Index;
