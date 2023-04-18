import { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { desktopTrafficTableActions } from "store/features/desktop-traffic-table/slice";
import { getAllLogs } from "store/features/desktop-traffic-table/selectors";
import { DesktopNetworkLog, DesktopNetworkLogEvent } from "../types";

export const useRegisterLogNetworkRequestEvent = (): {
  newLogs: DesktopNetworkLog[];
} => {
  const dispatch = useDispatch();
  const newLogs = useSelector(getAllLogs);

  const saveLogInRedux = useCallback(
    (log: DesktopNetworkLogEvent) => {
      if (log) {
        //@ts-ignore
        if (log.response && log.response.body) {
          dispatch(desktopTrafficTableActions.logResponseBodyAdd(log));
          //@ts-ignore
          log.response.body = null; // Setting this to null so that it doesn't get saved in logs state
        }

        dispatch(desktopTrafficTableActions.logUpsert(log));
      }
    },
    [dispatch]
  );

  useEffect(() => {
    //@ts-ignore
    window?.RQ?.DESKTOP.SERVICES.IPC.registerEvent("log-network-request-v2", (payload) => {
      saveLogInRedux(payload);
    });

    return () => {
      //@ts-ignore
      if (window?.RQ && window.RQ?.DESKTOP) {
        //@ts-ignore
        window?.RQ.DESKTOP.SERVICES.IPC.unregisterEvent("log-network-request-v2");
      }
    };
  }, [saveLogInRedux]);

  useEffect(() => {
    //@ts-ignore
    if (window.RQ && window.RQ.DESKTOP) {
      //@ts-ignore
      window.RQ.DESKTOP.SERVICES.IPC.invokeEventInBG("enable-request-logger");
    }

    return () => {
      //@ts-ignore
      if (window.RQ && window.RQ.DESKTOP) {
        //@ts-ignore
        window.RQ.DESKTOP.SERVICES.IPC.invokeEventInBG("disable-request-logger");
      }
    };
  }, []);

  return { newLogs };
};
