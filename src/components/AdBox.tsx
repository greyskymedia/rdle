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

  return ( 
  );
}
