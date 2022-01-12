import { useEffect } from "react";

export default function useActionWidget(ready: boolean) {
    useEffect(() => {
        if (ready) {
            document.body.style.overflowY = "auto";
        }
    }, [ready]);
}