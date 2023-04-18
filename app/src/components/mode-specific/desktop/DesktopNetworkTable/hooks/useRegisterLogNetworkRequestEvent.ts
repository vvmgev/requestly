import { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useFeatureIsOn } from "@growthbook/growthbook-react";
import { desktopTrafficTableActions } from "store/features/desktop-traffic-table/slice";
import { makeOriginalLog } from "capture-console-logs";
import { getAllLogs } from "store/features/desktop-traffic-table/selectors";
import { DesktopNetworkLog } from "../types";

export const useRegisterLogNetworkRequestEvent = (): {
  newLogs: DesktopNetworkLog[];
} => {
  const dispatch = useDispatch();
  const newLogs = useSelector(getAllLogs);
  const [consoleLogsShown, setConsoleLogsShown] = useState([]);
  const isTablePeristenceEnabled = useFeatureIsOn("traffic_table_perisitence");

  const saveLogInRedux = useCallback(
    (log: DesktopNetworkLog) => {
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

  const printLogsToConsole = useCallback(
    (log: DesktopNetworkLog) => {
      if (log.consoleLogs && !consoleLogsShown.includes(log.id)) {
        //@ts-ignore
        log.consoleLogs.forEach((consoleLog) => [makeOriginalLog(consoleLog)]);
        setConsoleLogsShown((prev) => [...prev, log.id]);
      }
    },
    [consoleLogsShown]
  );

  useEffect(() => {
    //@ts-ignore
    window?.RQ?.DESKTOP.SERVICES.IPC.registerEvent("log-network-request-v2", (payload) => {
      console.log("network-log-event", payload);
      saveLogInRedux(payload);
    });

    return () => {
      //@ts-ignore
      if (window?.RQ && window.RQ?.DESKTOP) {
        //@ts-ignore
        window?.RQ.DESKTOP.SERVICES.IPC.unregisterEvent("log-network-request-v2");
      }
    };
  }, [saveLogInRedux, printLogsToConsole, isTablePeristenceEnabled]);

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
