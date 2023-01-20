import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { resolveSideEffect, useSelector } from "../store";
import cn from "classnames";

export function AdBox() {
  const dispatch = useDispatch();
  const hideAds = useSelector((s) => s.settings.hideAds);
  const sideEffect = useSelector((s) => s.ui.sideEffects[0] ?? null);

  useEffect(() => {
    if (!hideAds && sideEffect && sideEffect.type === "load-ads") {
      try {
        // @ts-ignore
        (adsbygoogle = window.adsbygoogle || []).push({});
      } catch {}
      dispatch(resolveSideEffect(sideEffect.id));
    }
  }, [dispatch, hideAds, sideEffect]);

  return(
    <div className={cn("ad-box-wrapper", hideAds && "hidden")}>
       <div className="ad-box hidden">
         <ins
           className="adsbygoogle"
           style={{
             display: "inline-block",
             width: "min(100vw, 600px)",
             height: "0",
           }}
           data-ad-client=""
           data-ad-slot=""
         />
       </div>
     </div>
  );
}
