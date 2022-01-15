import { useEffect } from "react";

export default function useActionWidget(ready: boolean) {
    useEffect(() => {
        if (ready) {
            if (typeof window !== 'undefined') {
                document.body.style.overflowY = "auto";
            }
        }
    }, [ready]);
}